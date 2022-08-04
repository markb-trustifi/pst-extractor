"use strict";
/**
 * PST lower level utilities
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openLowPst = exports.readLong = exports.readNumber64 = void 0;
const long_1 = __importDefault(require("long"));
const PSTUtil_class_1 = require("./PSTUtil.class");
const zlib = __importStar(require("zlib"));
function surelyReader(readFile) {
    return (buffer, offset, length, position) => __awaiter(this, void 0, void 0, function* () {
        const bytesRead = yield readFile(buffer, offset, length, position);
        if (bytesRead !== length) {
            throw new Error("EOS");
        }
        return length;
    });
}
/**
 * @internal
 */
function readNumber64(view, offset) {
    return new long_1.default(view.getUint32(offset, true), view.getUint32(offset + 4, true), true)
        .toNumber();
}
exports.readNumber64 = readNumber64;
/**
 * @internal
 */
function readLong(view, offset) {
    return new long_1.default(view.getUint32(offset, true), view.getUint32(offset + 4, true), true);
}
exports.readLong = readLong;
function passThru1(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return data;
    });
}
/**
 *
 * @internal
 */
function willUnzip1(data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (data.byteLength >= 4) {
            const view = new DataView(data);
            if (view.getUint16(0, true) === 0x9c78) {
                const arrayBuffer = yield new Promise((resolve, reject) => zlib.unzip(Buffer.from(data), (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result.buffer.slice(result.byteOffset, result.byteLength));
                    }
                }));
                return arrayBuffer;
            }
        }
        return data;
    });
}
var ptr32;
(function (ptr32) {
    function readBlockPtr(view, offset, footer) {
        const array = [];
        for (let x = 0; x < footer.itemCount; x++) {
            const top = offset + 12 * x;
            const blockId = view.getUint32(top + 0, true);
            array.push({
                blockId,
                offset: new long_1.default(view.getUint32(top + 4, true)),
                size: view.getUint16(top + 8, true),
                isData: (blockId & 2) === 0,
            });
        }
        return array;
    }
    ptr32.readBlockPtr = readBlockPtr;
    function readTablePtr(view, offset, footer) {
        const array = [];
        for (let x = 0; x < footer.itemCount; x++) {
            const top = offset + 12 * x;
            array.push({
                start: new long_1.default(view.getUint32(top + 0, true)),
                u1: new long_1.default(view.getUint32(top + 4, true)),
                offset: new long_1.default(view.getUint32(top + 8, true)),
            });
        }
        return array;
    }
    ptr32.readTablePtr = readTablePtr;
    function readNodePtr(view, offset, footer) {
        const array = [];
        for (let x = 0; x < footer.itemCount; x++) {
            const top = offset + 16 * x;
            array.push({
                nodeId: view.getUint32(top + 0, true),
                blockId: view.getUint32(top + 4, true),
                subBlockId: view.getUint32(top + 8, true),
                parentNodeId: view.getUint32(top + 12, true),
            });
        }
        return array;
    }
    ptr32.readNodePtr = readNodePtr;
    function readSLBlock(view, offset) {
        const count = view.getUint16(offset + 2, true);
        const entries = [];
        for (let x = 0; x < count; x++) {
            const top = offset + 4 + 12 * x;
            entries.push({
                nodeId: view.getUint32(top + 0, true),
                blockId: view.getUint32(top + 4, true),
                subBlockId: view.getUint32(top + 8, true),
            });
        }
        return {
            entries
        };
    }
    ptr32.readSLBlock = readSLBlock;
    function readXBlock(view, offset, itemCount) {
        const entries = [];
        for (let x = 0; x < itemCount; x++) {
            const top = offset + 8 + 4 * x;
            entries.push({
                blockId: view.getUint32(top + 0, true),
            });
        }
        return entries;
    }
    ptr32.readXBlock = readXBlock;
    function readXXBlock(view, offset, itemCount) {
        const entries = [];
        for (let x = 0; x < itemCount; x++) {
            const top = offset + 8 + 4 * x;
            entries.push({
                blockId: view.getUint32(top + 0, true),
            });
        }
        return entries;
    }
    ptr32.readXXBlock = readXXBlock;
    function readSIBlock(view, offset) {
        const count = view.getUint16(offset + 2, true);
        const entries = [];
        for (let x = 0; x < count; x++) {
            const top = offset + 4 + 12 * x;
            entries.push({
                nodeId: view.getUint32(top + 0, true),
                blockId: view.getUint32(top + 4, true),
            });
        }
        return {
            entries
        };
    }
    ptr32.readSIBlock = readSIBlock;
})(ptr32 || (ptr32 = {}));
var ptr64;
(function (ptr64) {
    function readBlockPtr(view, offset, footer) {
        const array = [];
        for (let x = 0; x < footer.itemCount; x++) {
            const top = offset + 24 * x;
            const blockId = readNumber64(view, top + 0);
            array.push({
                blockId,
                offset: readLong(view, top + 8),
                size: view.getUint16(top + 16, true),
                isData: (blockId & 2) === 0,
            });
        }
        return array;
    }
    ptr64.readBlockPtr = readBlockPtr;
    function readTablePtr(view, offset, footer) {
        const array = [];
        for (let x = 0; x < footer.itemCount; x++) {
            const top = offset + 24 * x;
            array.push({
                start: readLong(view, top + 0),
                u1: readLong(view, top + 8),
                offset: readLong(view, top + 16),
            });
        }
        return array;
    }
    ptr64.readTablePtr = readTablePtr;
    function readNodePtr(view, offset, footer) {
        const array = [];
        for (let x = 0; x < footer.itemCount; x++) {
            const top = offset + 32 * x;
            array.push({
                nodeId: readNumber64(view, top + 0),
                blockId: readNumber64(view, top + 8),
                subBlockId: readNumber64(view, top + 16),
                parentNodeId: view.getUint32(top + 24, true),
            });
        }
        return array;
    }
    ptr64.readNodePtr = readNodePtr;
    function readSLBlock(view, offset) {
        const count = view.getUint16(offset + 2, true);
        const entries = [];
        for (let x = 0; x < count; x++) {
            const top = offset + 8 + 24 * x;
            entries.push({
                nodeId: view.getUint32(top + 0, true),
                blockId: readNumber64(view, top + 8),
                subBlockId: readNumber64(view, top + 16),
            });
        }
        return {
            entries
        };
    }
    ptr64.readSLBlock = readSLBlock;
    function readXBlock(view, offset, itemCount) {
        const entries = [];
        for (let x = 0; x < itemCount; x++) {
            const top = offset + 8 + 8 * x;
            entries.push({
                blockId: readNumber64(view, top + 0),
            });
        }
        return entries;
    }
    ptr64.readXBlock = readXBlock;
    function readXXBlock(view, offset, itemCount) {
        const entries = [];
        for (let x = 0; x < itemCount; x++) {
            const top = offset + 8 + 8 * x;
            entries.push({
                blockId: readNumber64(view, top + 0),
            });
        }
        return entries;
    }
    ptr64.readXXBlock = readXXBlock;
    function readSIBlock(view, offset) {
        const count = view.getUint16(offset + 2, true);
        const entries = [];
        for (let x = 0; x < count; x++) {
            const top = offset + 8 + 24 * x;
            entries.push({
                nodeId: view.getUint32(top + 0, true),
                blockId: readNumber64(view, top + 8),
            });
        }
        return {
            entries
        };
    }
    ptr64.readSIBlock = readSIBlock;
})(ptr64 || (ptr64 = {}));
const ver0x0e = {
    BACKLINK_OFFSET: 0x1f8,
    LEVEL_INDICATOR_OFFSET: 0x1f3,
    ITEM_COUNT_OFFSET: 0x1f0,
    ENC_OFFSET: 0x1cd,
    SECOND_POINTER_COUNT: 0xB8,
    SECOND_POINTER: 0xBC,
    INDEX_POINTER_COUNT: 0xC0,
    INDEX_POINTER: 0xC4,
    BlockSize: 512,
    readId: (view, offset) => new long_1.default(view.getUint32(offset, true)),
    readBlockPtr: ptr32.readBlockPtr,
    readTablePtr: ptr32.readTablePtr,
    readNodePtr: ptr32.readNodePtr,
    readSLBlock: ptr32.readSLBlock,
    readSIBlock: ptr32.readSIBlock,
    readXBlock: ptr32.readXBlock,
    readXXBlock: ptr32.readXXBlock,
    unzipHook: passThru1,
};
const ver0x17 = {
    BACKLINK_OFFSET: 0x1f8,
    LEVEL_INDICATOR_OFFSET: 0x1eb,
    ITEM_COUNT_OFFSET: 0x1e8,
    ENC_OFFSET: 0x201,
    SECOND_POINTER_COUNT: 0xD8,
    SECOND_POINTER: 0xE0,
    INDEX_POINTER_COUNT: 0xE8,
    INDEX_POINTER: 0xF0,
    BlockSize: 512,
    readId: readLong,
    readBlockPtr: ptr64.readBlockPtr,
    readTablePtr: ptr64.readTablePtr,
    readNodePtr: ptr64.readNodePtr,
    readSLBlock: ptr64.readSLBlock,
    readSIBlock: ptr64.readSIBlock,
    readXBlock: ptr64.readXBlock,
    readXXBlock: ptr64.readXXBlock,
    unzipHook: passThru1,
};
const ver0x24 = {
    BACKLINK_OFFSET: 0xff0,
    LEVEL_INDICATOR_OFFSET: 0xfdd,
    ITEM_COUNT_OFFSET: 0xfd8,
    ENC_OFFSET: 0x201,
    SECOND_POINTER_COUNT: 0xD8,
    SECOND_POINTER: 0xE0,
    INDEX_POINTER_COUNT: 0xE8,
    INDEX_POINTER: 0xF0,
    BlockSize: 4096,
    readId: readLong,
    readBlockPtr: ptr64.readBlockPtr,
    readTablePtr: ptr64.readTablePtr,
    readNodePtr: ptr64.readNodePtr,
    readSLBlock: ptr64.readSLBlock,
    readSIBlock: ptr64.readSIBlock,
    readXBlock: ptr64.readXBlock,
    readXXBlock: ptr64.readXXBlock,
    unzipHook: willUnzip1,
};
function openLowPst(api) {
    return __awaiter(this, void 0, void 0, function* () {
        const surelyRead = surelyReader(api.readFile);
        const buffer = new ArrayBuffer(1024);
        const view = new DataView(buffer, 0, 1024);
        yield surelyRead(buffer, 0, 1024, 0);
        const key = '!BDN';
        if (false
            || view.getUint8(0) !== key.charCodeAt(0)
            || view.getUint8(1) !== key.charCodeAt(1)
            || view.getUint8(2) !== key.charCodeAt(2)
            || view.getUint8(3) !== key.charCodeAt(3)) {
            throw new Error('PSTFile::open Invalid file header (expected: "!BDN"): ' + buffer.slice(0, 4));
        }
        const version = view.getUint8(10);
        let trait;
        if (false) { }
        else if (version === 0x0e) {
            trait = ver0x0e;
        }
        else if (version === 0x17) {
            trait = ver0x17;
        }
        else if (version === 0x24) {
            trait = ver0x24;
        }
        else {
            throw new Error('PSTFile::open Unrecognised PST File version: ' + version);
        }
        const encryptionType = view.getUint8(trait.ENC_OFFSET);
        if (encryptionType === 0x02) {
            throw new Error('PSTFile::open PST is encrypted');
        }
        const unzipHook = trait.unzipHook;
        function pst_read_block_size(position, size, decrypt) {
            return __awaiter(this, void 0, void 0, function* () {
                const buffer = new ArrayBuffer(size);
                yield surelyRead(buffer, 0, size, position.toNumber());
                if (decrypt) {
                    if (false) { }
                    else if (encryptionType === 0) {
                        // plain
                    }
                    else if (encryptionType === 1) {
                        PSTUtil_class_1.PSTUtil.decodeArray(new Uint8Array(buffer, 0, size));
                    }
                    else {
                        throw new Error(`Unknown encryptionType ${encryptionType}`);
                    }
                }
                return yield unzipHook(buffer);
            });
        }
        function readBlock(block, decrypt) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield unzipHook(yield pst_read_block_size(block.offset, block.size, block.isData && decrypt));
            });
        }
        const blockMap = new Map;
        const nodeMap = new Map;
        function loadBlockTree(offset, linku1, start_val) {
            return __awaiter(this, void 0, void 0, function* () {
                const buf = yield pst_read_block_size(offset, trait.BlockSize, false);
                const view = new DataView(buf);
                const footer = {
                    itemCount: view.getUint8(trait.ITEM_COUNT_OFFSET),
                    level: view.getUint8(trait.LEVEL_INDICATOR_OFFSET),
                    thisId: trait.readId(view, trait.BACKLINK_OFFSET),
                };
                if (footer.thisId.neq(linku1)) {
                    throw new Error("blah 1");
                }
                if (footer.level === 0) {
                    const array = trait.readBlockPtr(view, 0, footer);
                    for (let x = 0; x < footer.itemCount; x++) {
                        if (x === 0 && start_val.neq(0) && start_val.neq(array[x].blockId)) {
                            throw new Error("blah 3");
                        }
                        if (array[x].blockId === 0) {
                            throw new Error("OHNO");
                        }
                        blockMap.set(array[x].blockId & ~1, array[x]);
                    }
                }
                else {
                    const array = trait.readTablePtr(view, 0, footer);
                    for (let x = 0; x < footer.itemCount; x++) {
                        if (x === 0 && start_val.neq(0) && start_val.neq(array[x].start)) {
                            throw new Error("blah 3");
                        }
                        if (array[x].start.eq(0)) {
                            throw new Error("OHNO");
                        }
                        yield loadBlockTree(array[x].offset, array[x].u1, array[x].start);
                    }
                }
            });
        }
        const block_btree_count = trait.readId(view, trait.INDEX_POINTER_COUNT);
        const block_btree = trait.readId(view, trait.INDEX_POINTER);
        yield loadBlockTree(block_btree, block_btree_count, long_1.default.ZERO);
        function loadNodeTree(offset, linku1, start_val, prevLevel) {
            return __awaiter(this, void 0, void 0, function* () {
                const buf = yield pst_read_block_size(offset, trait.BlockSize, false);
                const view = new DataView(buf);
                const footer = {
                    itemCount: view.getUint8(trait.ITEM_COUNT_OFFSET),
                    level: view.getUint8(trait.LEVEL_INDICATOR_OFFSET),
                    thisId: trait.readId(view, trait.BACKLINK_OFFSET),
                };
                if (prevLevel !== Infinity) {
                    if (footer.level !== prevLevel - 1) {
                        throw new Error("ohno");
                    }
                }
                if (footer.thisId.neq(linku1)) {
                    throw new Error("blah1");
                }
                if (footer.level === 0) {
                    const array = trait.readNodePtr(view, 0, footer);
                    for (let x = 0; x < footer.itemCount; x++) {
                        if (x === 0 && start_val !== (0) && start_val !== (array[x].nodeId)) {
                            throw new Error("blah 3");
                        }
                        if (array[x].nodeId === 0) {
                            break;
                        }
                        nodeMap.set(array[x].nodeId, array[x]);
                    }
                }
                else {
                    const array = trait.readTablePtr(view, 0, footer);
                    for (let x = 0; x < footer.itemCount; x++) {
                        if (x === 0 && start_val !== (0) && array[x].start.neq(start_val)) {
                            throw new Error("blah 3");
                        }
                        if (array[x].start.isZero()) {
                            throw new Error("OHNO");
                        }
                        yield loadNodeTree(array[x].offset, array[x].u1, array[x].start.toNumber(), footer.level);
                    }
                }
            });
        }
        const node_btree_count = trait.readId(view, trait.SECOND_POINTER_COUNT);
        const node_btree = trait.readId(view, trait.SECOND_POINTER);
        yield loadNodeTree(node_btree, node_btree_count, 0x21, Infinity);
        function loadMainBlockTo(blockId, consumer) {
            return __awaiter(this, void 0, void 0, function* () {
                if (blockId === 0) {
                    return;
                }
                const block = blockMap.get(blockId);
                if (block === undefined) {
                    throw new Error(`blockId=${blockId} not found`);
                }
                if (block.isData) {
                    yield consumer(block);
                }
                else {
                    const buf = yield readBlock(block, true);
                    const view = new DataView(buf);
                    const bType = view.getUint8(0);
                    if (bType !== 1) {
                        throw new Error("btype != 1");
                    }
                    const level = view.getUint8(1);
                    const itemCount = view.getUint16(2, true);
                    if (false) { }
                    else if (level === 1) {
                        //XBLOCK
                        const entries = trait.readXBlock(view, 0, itemCount);
                        for (let x = 0; x < entries.length; x++) {
                            yield loadMainBlockTo(entries[x].blockId, consumer);
                        }
                    }
                    else if (level === 2) {
                        //XXBLOCK
                        const entries = trait.readXXBlock(view, 0, itemCount);
                        for (let x = 0; x < entries.length; x++) {
                            yield loadMainBlockTo(entries[x].blockId, consumer);
                        }
                    }
                    else {
                        throw new Error(`Invalid level ${level}`);
                    }
                }
            });
        }
        function readSubNode(blockId, subNodeMap) {
            return __awaiter(this, void 0, void 0, function* () {
                if (blockId === 0) {
                    return;
                }
                const block = blockMap.get(blockId);
                if (block === undefined) {
                    throw new Error(`blockId ${blockId} not found`);
                }
                const buf = yield readBlock(block, true);
                const view = new DataView(buf);
                if (view.getUint8(0) !== 2) {
                    throw new Error("btype != 2");
                }
                const level = view.getUint8(1);
                if (level === 0) {
                    //SLBLOCK
                    const { entries } = trait.readSLBlock(view, 0);
                    for (let index = 0; index < entries.length; index++) {
                        subNodeMap.set(entries[index].nodeId, {
                            dataBlockId: entries[index].blockId,
                            subBlockId: entries[index].subBlockId,
                        });
                    }
                }
                else {
                    //SIBLOCK
                    const struc = trait.readSIBlock(view, 0);
                    const { entries } = struc;
                    for (let index = 0; index < entries.length; index++) {
                        yield readSubNode(entries[index].blockId, subNodeMap);
                    }
                }
            });
        }
        //const nodeMap = processNameToIDMap();
        function getOneNodeBy(nodeId) {
            if (nodeId === 0) {
                return undefined;
            }
            const ptr = nodeMap.get(nodeId);
            if (ptr === undefined) {
                return undefined;
            }
            const { blockId } = ptr;
            function getData() {
                return __awaiter(this, void 0, void 0, function* () {
                    const array = [];
                    yield loadMainBlockTo(blockId, (block) => __awaiter(this, void 0, void 0, function* () {
                        const buf = yield readBlock(block, true);
                        array.push(buf);
                    }));
                    if (array.length === 0) {
                        return new ArrayBuffer(0);
                    }
                    else {
                        return array[0];
                    }
                });
            }
            function getDataOf(blockId) {
                return __awaiter(this, void 0, void 0, function* () {
                    const array = [];
                    yield loadMainBlockTo(blockId, (block) => __awaiter(this, void 0, void 0, function* () {
                        array.push(yield readBlock(block, true));
                    }));
                    return array;
                });
            }
            function getChildOf(blockId, childNodeId, parentToString) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (blockId === 0) {
                        return undefined;
                    }
                    const block = blockMap.get(blockId);
                    if (block === undefined) {
                        throw new Error(`blockId=${blockId}`
                            + ` for childNodeId=0x${childNodeId.toString(16)}`
                            + ` of ${parentToString}`
                            + ` not found`);
                    }
                    const subNodeMap = new Map();
                    yield readSubNode(block.blockId, subNodeMap);
                    const thisToString = `childNodeId=0x${childNodeId.toString(16)}`
                        + `,nidType=0x${(childNodeId & 0x1f).toString(16)}`
                        + ` of ${parentToString}`;
                    const subNode = subNodeMap.get(childNodeId);
                    if (subNode === undefined) {
                        return undefined;
                    }
                    return {
                        nodeId: childNodeId,
                        getChildBy: (childNodeId) => __awaiter(this, void 0, void 0, function* () {
                            return yield getChildOf(subNode.subBlockId, childNodeId, thisToString);
                        }),
                        getData: () => __awaiter(this, void 0, void 0, function* () { return yield getDataOf(subNode.dataBlockId); }),
                        toString: () => thisToString,
                    };
                });
            }
            function getSubNodeOf(nodeId) {
                const node = nodeMap.get(nodeId);
                if (node === undefined) {
                    throw new Error(`nodeId=${nodeId} not found`);
                }
                const thisToString = `subNode of nodeId=${nodeId},nidType=${nodeId & 0x1f}`;
                return {
                    nodeId: nodeId,
                    getChildBy: (childNodeId) => __awaiter(this, void 0, void 0, function* () {
                        return getChildOf(node.subBlockId, childNodeId, thisToString);
                    }),
                    getData: () => __awaiter(this, void 0, void 0, function* () { return yield getDataOf(node.blockId); }),
                    toString: () => thisToString,
                };
            }
            return {
                nodeId: (ptr.nodeId),
                getParent: () => getOneNodeBy((ptr.parentNodeId)),
                getChildren: () => Array.from(nodeMap.values())
                    .filter(it => it.parentNodeId === ptr.nodeId && it.nodeId !== ptr.nodeId)
                    .map(it => getOneNodeBy(it.nodeId))
                    .filter(it => it !== undefined),
                getSubNode: () => getSubNodeOf(ptr.nodeId),
                getSiblingNode: (nidType) => getOneNodeBy((nodeId & ~0x1f) | (nidType & 0x1f)),
            };
        }
        ;
        function getOneNodeByOrError(nodeId) {
            const node = getOneNodeBy(nodeId);
            if (node === undefined) {
                throw new Error(`node ${nodeId} must be valid`);
            }
            return node;
        }
        return {
            getOneNodeBy,
            getOneNodeByOrError,
            close: () => api.close(),
        };
    });
}
exports.openLowPst = openLowPst;
