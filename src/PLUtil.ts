/**
 * PST lower level utilities
 */

import Long from "long";
import { PLNode } from "./PLNode";
import { PLStore } from "./PLStore";
import { PLNodeReader } from "./PLNodeReader";
import { PSTUtil } from "./PSTUtil.class";

export type ReadFile = (buffer: ArrayBuffer, offset: number, length: number, position: number) => Promise<number>;

function surelyReader(readFile: ReadFile): ReadFile {
  return async (buffer: ArrayBuffer, offset: number, length: number, position: number): Promise<number> => {
    const bytesRead = await readFile(buffer, offset, length, position);
    if (bytesRead !== length) {
      throw new Error("EOS");
    }
    return length;
  };
}

interface StoreTrait {
  ReadSIBlockArray(view: DataView, offset: number): SIBlock[];
  ReadSLBlockArray(view: DataView, offset: number): SLBlock[];
  ReadNodePtrArray(view: DataView, offset: number, item_count: number): NodePtr[];
  ReadTablePtrArray(view: DataView, offset: number, item_count: number): TablePtr[];
  ReadBlockPtrArray(view: DataView, offset: number, item_count: number): BlockPtr[];
  BACKLINK_OFFSET: number;
  LEVEL_INDICATOR_OFFSET_64: number;
  ITEM_COUNT_OFFSET_64: number;
  ReadId(view: DataView, offset: number): Long;

  ENC_OFFSET: number;
  SECOND_POINTER_COUNT_64: number;
  SECOND_POINTER_64: number;
  INDEX_POINTER_COUNT_64: number;
  INDEX_POINTER_64: number;
  BlockSize: number;
}

/**
 * @internal
 */
export function readNumber64(view: DataView, offset: number): number {
  return new Long(
    view.getUint32(offset, true),
    view.getUint32(offset + 4, true),
    true
  )
    .toNumber();
}

/**
 * @internal
 */
export function readLong(view: DataView, offset: number): Long {
  return new Long(
    view.getUint32(offset, true),
    view.getUint32(offset + 4, true),
    true
  );
}

const ver0x17: StoreTrait = {
  BACKLINK_OFFSET: 0x1f8,
  LEVEL_INDICATOR_OFFSET_64: 0x1eb,
  ITEM_COUNT_OFFSET_64: 0x1e8,

  ENC_OFFSET: 0x201,
  SECOND_POINTER_COUNT_64: 0xD8,
  SECOND_POINTER_64: 0xE0,
  INDEX_POINTER_COUNT_64: 0xE8,
  INDEX_POINTER_64: 0xF0,
  BlockSize: 512,

  ReadId: readLong,

  ReadBlockPtrArray(view, offset, item_count): BlockPtr[] {
    const array: BlockPtr[] = [];
    for (let x = 0; x < item_count; x++) {
      const top = offset + 24 * x;
      const blockId = readNumber64(view, top + 0);
      array.push(
        {
          blockId,
          offset: readLong(view, top + 8),
          size: view.getUint16(top + 16, true),
          isData: (blockId & 2) === 0,
        } as BlockPtr
      );
    }
    return array;
  },

  ReadTablePtrArray(view, offset, item_count): TablePtr[] {
    const array: TablePtr[] = [];
    for (let x = 0; x < item_count; x++) {
      const top = offset + 24 * x;
      array.push(
        {
          start: readLong(view, top + 0),
          u1: readLong(view, top + 8),
          offset: readLong(view, top + 16),
        } as TablePtr
      );
    }
    return array;
  },

  ReadNodePtrArray(view: DataView, offset: number, item_count: number): NodePtr[] {
    const array: NodePtr[] = [];
    for (let x = 0; x < item_count; x++) {
      const top = offset + 32 * x;
      array.push(
        {
          nodeId: readNumber64(view, top + 0),
          blockId: readNumber64(view, top + 8),
          subBlockId: readNumber64(view, top + 16),
          parentNodeId: view.getUint32(top + 24, true),
        } as NodePtr
      );
    }
    return array;
  },

  ReadSLBlockArray(view: DataView, offset: number): SLBlock[] {
    const count = view.getUint16(offset, true);
    const array: SLBlock[] = [];
    for (let x = 0; x < count; x++) {
      const top = offset + 6 + 24 * x;
      array.push(
        {
          nodeId: readNumber64(view, top + 0),
          blockId: readNumber64(view, top + 8),
          subBlockId: readNumber64(view, top + 16),
        } as SLBlock
      );
    }
    return array;
  },

  ReadSIBlockArray(view: DataView, offset: number): SIBlock[] {
    const count = view.getUint16(offset, true);
    const array: SIBlock[] = [];
    for (let x = 0; x < count; x++) {
      const top = offset + 6 + 24 * x;
      array.push(
        {
          nodeId: readNumber64(view, top + 0),
          blockId: readNumber64(view, top + 8),
        } as SIBlock
      );
    }
    return array;
  },
};

interface SIBlock {
  nodeId: number;
  blockId: number;
}

interface SLBlock {
  nodeId: number;
  blockId: number;
  subBlockId: number;
}

interface NodePtr {
  nodeId: number;
  blockId: number;
  subBlockId: number;
  parentNodeId: number;
}

interface TablePtr {
  start: Long;
  u1: Long;
  offset: Long;
}

interface BlockPtr {
  blockId: number;
  offset: Long;
  size: number;

  isData: boolean;
}

export async function openLowPst(readFile: ReadFile): Promise<PLStore> {
  const surelyRead = surelyReader(readFile);

  const buffer = new ArrayBuffer(1024);
  const view = new DataView(buffer, 0, 1024);
  await surelyRead(buffer, 0, 1024, 0);

  const key = '!BDN'
  if (false
    || view.getUint8(0) !== key.charCodeAt(0)
    || view.getUint8(1) !== key.charCodeAt(1)
    || view.getUint8(2) !== key.charCodeAt(2)
    || view.getUint8(3) !== key.charCodeAt(3)
  ) {
    throw new Error(
      'PSTFile::open Invalid file header (expected: "!BDN"): ' + buffer.slice(0, 4)
    )
  }

  const version = view.getUint8(10);
  let trait: StoreTrait;
  if (version === 0x17) {
    trait = ver0x17;
  }
  else {
    throw new Error(
      'PSTFile::open Unrecognised PST File version: ' + version
    )
  }

  const encryptionType = view.getUint8(trait.ENC_OFFSET);

  if (encryptionType === 0x02) {
    throw new Error('PSTFile::open PST is encrypted')
  }

  async function pst_read_block_size(
    buffer: ArrayBuffer, offset: number, position: Long, size: number, decrypt: boolean
  ): Promise<void> {
    await surelyRead(buffer, offset, size, position.toNumber());

    if (decrypt) {
      PSTUtil.decodeArray(new Uint8Array(buffer, offset, size));
    }
  }

  async function readBlock(block: BlockPtr, buffer: ArrayBuffer, offset: number, decrypt: boolean): Promise<void> {
    await pst_read_block_size(
      buffer,
      offset,
      block.offset,
      block.size,
      block.isData && decrypt
    );
  }

  const blockMap = new Map<number, BlockPtr>;
  const nodeMap = new Map<number, NodePtr>;

  async function load_block_tree(offset: Long, linku1: Long, start_val: Long): Promise<void> {
    const buf = new ArrayBuffer(trait.BlockSize);
    const view = new DataView(buf);
    await pst_read_block_size(buf, 0, offset, buf.byteLength, false);

    const item_count = view.getUint8(trait.ITEM_COUNT_OFFSET_64);
    const level = view.getUint8(trait.LEVEL_INDICATOR_OFFSET_64);

    const thisId = trait.ReadId(view, trait.BACKLINK_OFFSET);
    if (thisId.neq(linku1)) {
      throw new Error("blah 1");
    }

    if (level === 0) {
      const array = trait.ReadBlockPtrArray(view, 0, item_count);
      for (let x = 0; x < item_count; x++) {
        if (x === 0 && start_val.neq(0) && start_val.neq(array[x].blockId)) {
          throw new Error("blah 3");
        }
        if (array[x].blockId === 0) {
          throw new Error("OHNO");
        }
        blockMap.set(
          array[x].blockId & ~1,
          array[x]
        );
      }
    }
    else {
      const array = trait.ReadTablePtrArray(view, 0, item_count);
      for (let x = 0; x < item_count; x++) {
        if (x === 0 && start_val.neq(0) && start_val.neq(array[x].start)) {
          throw new Error("blah 3");
        }
        if (array[x].start.eq(0)) {
          throw new Error("OHNO");
        }
        await load_block_tree(
          array[x].offset,
          array[x].u1,
          array[x].start
        );
      }
    }
  }

  const block_btree_count = trait.ReadId(view, trait.INDEX_POINTER_COUNT_64);
  const block_btree = trait.ReadId(view, trait.INDEX_POINTER_64);

  await load_block_tree(block_btree, block_btree_count, Long.ZERO);

  async function load_node_tree(offset: Long, linku1: Long, start_val: number, prev_level: number): Promise<void> {
    const buf = new ArrayBuffer(trait.BlockSize);
    const view = new DataView(buf);

    await pst_read_block_size(buf, 0, offset, buf.byteLength, false);

    const item_count = view.getUint8(trait.ITEM_COUNT_OFFSET_64);
    const level = view.getUint8(trait.LEVEL_INDICATOR_OFFSET_64);

    if (prev_level !== Infinity) {
      if (level !== prev_level - 1) {
        throw new Error("ohno");
      }
    }

    const thisId = trait.ReadId(view, trait.BACKLINK_OFFSET);
    if (thisId.neq(linku1)) {
      throw new Error("blah1");
    }

    if (level === 0) {
      const array = trait.ReadNodePtrArray(view, 0, item_count);
      for (let x = 0; x < item_count; x++) {
        if (x === 0 && start_val !== (0) && start_val !== (array[x].nodeId)) {
          throw new Error("blah 3");
        }
        if (array[x].nodeId === 0) {
          break;
        }
        nodeMap.set(
          array[x].nodeId,
          array[x]
        );
      }
    }
    else {
      const array = trait.ReadTablePtrArray(view, 0, item_count);
      for (let x = 0; x < item_count; x++) {
        if (x === 0 && start_val !== (0) && array[x].start.neq(start_val)) {
          throw new Error("blah 3");
        }
        if (array[x].start.isZero()) {
          throw new Error("OHNO");
        }
        await load_node_tree(
          array[x].offset,
          array[x].u1,
          array[x].start.toNumber(),
          level
        );
      }
    }
  }

  const node_btree_count = trait.ReadId(view, trait.SECOND_POINTER_COUNT_64);
  const node_btree = trait.ReadId(view, trait.SECOND_POINTER_64);

  await load_node_tree(node_btree, node_btree_count, 0x21, Infinity);

  async function load_main_block_to(
    blockId: number,
    consumer: (block: BlockPtr) => Promise<void>
  ): Promise<void> {
    if (blockId === 0) {
      return;
    }
    const block = blockMap.get(blockId);
    if (block === undefined) {
      throw new Error("block not found");
    }
    if (block.isData) {
      await consumer(block);
    }
    else {
      // throw?
    }
  }

  async function load_sub_block_to(
    blockId: number,
    testSubNodeId: (subNodeId: number) => boolean,
    consumer: (nodeId: number, block: BlockPtr) => Promise<void>
  ): Promise<void> {
    if (blockId === 0) {
      return;
    }

    const block = blockMap.get(blockId);
    if (block === undefined) {
      throw new Error("block not found");
    }

    const buf = new ArrayBuffer(block.size);
    const view = new DataView(buf);

    await readBlock(block, buf, 0, true);

    if (view.getUint8(0) !== 2) {
      throw new Error("btype != 2");
    }

    const level = view.getUint8(1);

    if (level === 0) {
      const array = trait.ReadSLBlockArray(view, 2);
      for (let x = 0; x < array.length; x++) {
        const sl_node_id = array[x].nodeId & 0xffffffff;
        if (testSubNodeId(sl_node_id)) {
          await load_main_block_to(
            array[x].blockId,
            async (block) => await consumer(sl_node_id, block)
          );
        }

        await load_sub_block_to(
          array[x].subBlockId,
          testSubNodeId,
          consumer
        );
      }
    }
    else {
      const array = trait.ReadSIBlockArray(view, 2);
      for (let x = 0; x < array.length; x++) {
        const si_node_id = array[x].nodeId & 0xffffffff;
        if (testSubNodeId(si_node_id)) {
          const block = blockMap.get(array[x].blockId);
          if (block === undefined) {
            throw new Error("block not found");
          }
          if (!block.isData) {
            throw new Error("must be data");
          }
          await consumer(si_node_id, block);
        }
      }
    }
  }

  //const nodeMap = processNameToIDMap();

  function getOneNodeBy(nodeId: number): PLNode | undefined {
    if (nodeId === 0) {
      return undefined;
    }

    const ptr = nodeMap.get(nodeId);
    if (ptr === undefined) {
      throw new Error("node not found");
    }

    const { blockId, subBlockId } = ptr;

    async function getMainData(): Promise<ArrayBuffer> {
      const array: ArrayBuffer[] = [];

      await load_main_block_to(
        blockId,
        async (block): Promise<void> => {
          const buf = new ArrayBuffer(block.size);
          await readBlock(block, buf, 0, true);
          array.push(buf);
        }
      );

      if (array.length === 0) {
        return new ArrayBuffer(0);
      }
      else {
        return array[0];
      }
    }

    async function getSubDataArray(subNodeId: number): Promise<ArrayBuffer[]> {
      const array: ArrayBuffer[] = [];
      await load_sub_block_to(
        subBlockId,
        it => it === subNodeId,
        async (nodeId: number, block: BlockPtr): Promise<void> => {
          const buf = new ArrayBuffer(block.size);
          await readBlock(block, buf, 0, true);
          array.push(buf);
        }
      );
      return array;
    }

    return {
      nodeId: (ptr.nodeId),
      getParent: () => getOneNodeBy((ptr.parentNodeId)),
      getChildren: () => Array.from(nodeMap.values())
        .filter(it => it.parentNodeId === ptr.nodeId)
        .map(it => getOneNodeBy((it.nodeId)))
        .filter(it => it !== undefined),
      getNodeReader: () => ({
        getMainData,
        getSubDataArray,
      } as PLNodeReader),
    } as PLNode;
  };

  return {
    getOneNodeBy,
  } as PLStore;
}
