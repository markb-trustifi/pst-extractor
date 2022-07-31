import { copyFile } from "fs";
import { PHNodeHeap } from "./PHNodeHeap";
import { splitPer } from "./PLMisc";
import { Property } from "./Property";
import { PropertyValueResolver } from "./PropertyValueResolver";
import { RawProperty } from "./RawProperty";
import { TableContext } from "./TableContext";
import { TableRow } from "./TableRow";

const bTypeTC = 0x7c;

function copy<T>(rows: T[]): T[] {
  return rows.map(
    it => Object.assign({}, it)
  )
}

interface Column {
  ref_type: number;
  type: number;
  ind2_off: number;
  size: number;
}

export async function getTableContext(
  heap: PHNodeHeap,
  resolver: PropertyValueResolver
): Promise<TableContext> {
  if (heap.bClientSig != bTypeTC) {
    throw new Error("expected type bTypeTC");
  }

  const reader = heap.getReader();

  const header_data = await reader.getHeapBuffers(heap.userRootHnid);
  if (header_data.length !== 1) {
    throw new Error("must be single");
  }
  const headerView = new DataView(header_data[0]);

  const seven_c = headerView.getUint8(0);
  const num_list = headerView.getUint8(1);
  const rec_size = headerView.getUint16(8, true);
  const b_five_offset = headerView.getUint32(10, true);
  const rows_offset = headerView.getUint32(14, true);

  var index_data = header_data[0].slice(22);

  const schema: Column[] = Array.from(splitPer(index_data, 8))
    .map(
      it => {
        const view = new DataView(it);
        return {
          ref_type: view.getUint16(0, true),
          type: view.getUint16(2, true),
          ind2_off: view.getUint16(4, true),
          size: view.getUint8(6),
        } as Column;
      }
    );

  if (num_list !== schema.length) {
    throw new Error("schema length not matched");
  }
  if (seven_c !== 0x7c) {
    throw new Error("seven_c is not satisfied");
  }

  const min_size = schema.reduce((accum, it) => accum + it.size, 0);

  const header_data2 = await reader.getHeapBuffers(b_five_offset);
  if (header_data2.length !== 1) {
    throw new Error("must be single");
  }

  const header2View = new DataView(header_data2[0]);

  const signature = header2View.getUint32(0, true);
  const offset2 = header2View.getUint32(4, true);

  if (signature != 0x000404b5 && signature != 0x000204b5) {
    throw new Error("unhandled block signature");
  }

  const rows_pages = (rows_offset !== 0)
    ? await reader.getHeapBuffers(rows_offset)
    : [];

  //const data2 = await reader.getHeapBuffers(offset2);

  const rows_per_page = rows_pages[0].byteLength / rec_size;

  function get_record(record_index: number): ArrayBuffer {
    const page_index = (record_index / rows_per_page) | 0;
    const heap_index = (record_index % rows_per_page) | 0;

    const record = rows_pages[page_index].slice(
      rec_size * (heap_index + 0),
      rec_size * (heap_index + 1)
    );
    if (record.byteLength !== rec_size) {
      throw new Error(`get_record(${record_index}) (${rows_pages.map(it => it.byteLength).join(",")}) ${record.byteLength} < ${rec_size} EOS`);
    }
    return record;
  }

  const count = rows_pages.reduce((accum, it) => (accum + it.byteLength / rec_size) | 0, 0);

  async function listRaw(record: number): Promise<RawProperty[]> {
    const rowData = get_record(record);
    const list: RawProperty[] = [];
    for (let column of schema) {
      list.push({
        key: column.type,
        type: column.ref_type,
        value: rowData.slice(column.ind2_off, column.ind2_off + column.size),
      });
    }
    return list;
  }

  async function list(record: number): Promise<Property[]> {
    const rawProps = await listRaw(record);
    const list: Property[] = [];
    for (let rawProp of rawProps) {
      try {
        list.push({
          key: rawProp.key,
          type: rawProp.type,
          value: await resolver.resolveValueOf(
            rawProp.key,
            rawProp.type,
            rawProp.value,
            reader
          )
        });
      }
      catch (ex) {
        throw new Error(`getTableContext.list(rowIndex=${record}) resolving property`
          + ` key=0x${rawProp.key.toString(16).padStart(4, '0')}`
          + ` type=0x${rawProp.type.toString(16).padStart(4, '0')}`
          + ` of ${heap} failure`
          + ` --> ${ex}`
        );
      }
    }
    return list;
  }

  const rows: TableRow[] = [];
  for (let x = 0; x < count; x++) {
    rows.push({
      async listRaw(): Promise<RawProperty[]> {
        return await listRaw(x);
      },
      async list(): Promise<Property[]> {
        return await list(x);
      },
    });
  }

  return {
    async rows(): Promise<TableRow[]> {
      return copy(rows);
    },
  } as TableContext;
}
