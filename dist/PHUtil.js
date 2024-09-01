"use strict";
/**
 * PST higher level utilities
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeapFrom = void 0;
function getHeapFrom(node) {
    return __awaiter(this, void 0, void 0, function* () {
        const data_array = yield node.getData();
        const data_chunks = new Map();
        let bClientSig = 0;
        let userRootHnid = 0;
        for (let x = 0; x < data_array.length; x++) {
            if (x === 0) {
                ({ bClientSig, userRoot: userRootHnid } = load_root_header(data_chunks, data_array[x]));
            }
            else {
                load_page_header(data_chunks, data_array[x], x, node.is4K);
            }
        }
        return {
            bClientSig,
            userRootHnid,
            toString() {
                return `${node}`;
            },
            getReader() {
                return {
                    getHeapBuffers(hnid) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (hnid === 0) {
                                return [];
                            }
                            else if (hnid & 0x1f) {
                                // this is NID (node)
                                const childNode = yield node.getChildBy(hnid);
                                if (childNode === undefined) {
                                    throw new Error(`childNode=0x${hnid.toString(16)} of ${node} not found`);
                                }
                                const data_array = yield childNode.getData();
                                return data_array;
                            }
                            else {
                                // this is HID (heap)
                                const data = data_chunks.get(hnid);
                                if (data === undefined) {
                                    throw new Error(`heap=0x${hnid.toString(16)} of ${node} not found`);
                                }
                                return [data];
                            }
                        });
                    },
                    toString() {
                        return `reader of ${node}`;
                    },
                };
            },
        };
    });
}
exports.getHeapFrom = getHeapFrom;
/**
 * Parse HNHDR
 *
 * @see https://docs.microsoft.com/en-us/openspecs/office_file_formats/ms-pst/8e4ae05c-3c24-4103-b7e5-ffef6f244834
 */
function load_root_header(data_chunks, data) {
    const view = new DataView(data);
    const page_map = view.getUint16(0, true);
    const sig = view.getUint8(2);
    const bClientSig = view.getUint8(3);
    const userRoot = view.getUint32(4, true);
    if (sig !== 0xec) {
        throw new Error("invalid HNHDR signature found");
    }
    // read HNPAGEMAP
    const offsets_count = view.getUint16(page_map, true) + 1;
    for (let x = 0; x < offsets_count - 1; x++) {
        const from = view.getUint16(page_map + 4 + 2 * (x), true);
        const to = view.getUint16(page_map + 4 + 2 * (x + 1), true);
        data_chunks.set(0x20 * (1 + x), data.slice(from, to));
    }
    return { bClientSig, userRoot };
}
function load_page_header(data_chunks, data, page_index, is4K) {
    const view = new DataView(data);
    const page_map = view.getUint16(0, true);
    const offsets_count = view.getUint16(page_map, true) + 1;
    for (let x = 0; x < offsets_count - 1; x++) {
        const from = view.getUint16(page_map + 4 + 2 * (x), true);
        const to = view.getUint16(page_map + 4 + 2 * (x + 1), true);
        data_chunks.set(0x20 * (1 + x) + (is4K ? 65536 * 8 : 65536) * page_index, data.slice(from, to));
    }
}
