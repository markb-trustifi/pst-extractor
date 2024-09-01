"use strict";
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
exports.getTableContext = void 0;
const PLMisc_1 = require("./PLMisc");
const bTypeTC = 0x7c;
function copy(rows) {
    return rows.map(it => Object.assign({}, it));
}
function getTableContext(heap, resolver) {
    return __awaiter(this, void 0, void 0, function* () {
        if (heap.bClientSig != bTypeTC) {
            throw new Error("expected type bTypeTC");
        }
        const reader = heap.getReader();
        const headerData = yield reader.getHeapBuffers(heap.userRootHnid);
        if (headerData.length !== 1) {
            throw new Error("table context header buffer must be single");
        }
        const headerView = new DataView(headerData[0]);
        const tcSig = headerView.getUint8(0);
        const numCols = headerView.getUint8(1);
        const cebOffset = headerView.getUint16(6, true);
        const numRowBytes = headerView.getUint16(8, true);
        const hidRowIndex = headerView.getUint32(10, true);
        const hnidRows = headerView.getUint32(14, true);
        var tColDesc = headerData[0].slice(22);
        const schema = Array.from((0, PLMisc_1.splitPer)(tColDesc, 8))
            .map(it => {
            const view = new DataView(it);
            return {
                type: view.getUint16(0, true),
                key: view.getUint16(2, true),
                ibData: view.getUint16(4, true),
                cbData: view.getUint8(6),
                iBit: view.getUint8(7),
            };
        });
        if (numCols !== schema.length) {
            throw new Error("schema length not matched");
        }
        if (tcSig !== 0x7c) {
            throw new Error("tcSig is not 0x7c");
        }
        //const min_size = schema.reduce((accum, it) => accum + it.cbData, 0);
        //const rowIndex = getBTHeapReaderFrom(reader, hidRowIndex);
        const rows_pages = (hnidRows !== 0)
            ? yield reader.getHeapBuffers(hnidRows)
            : [];
        //const data2 = await reader.getHeapBuffers(offset2);
        const rows_per_page = (rows_pages.length !== 0)
            ? Math.floor(rows_pages[0].byteLength / numRowBytes)
            : 0;
        function get_record(record_index) {
            const page_index = (record_index / rows_per_page) | 0;
            const heap_index = (record_index % rows_per_page) | 0;
            const buffer = rows_pages[page_index].slice(numRowBytes * (heap_index + 0), numRowBytes * (heap_index + 1));
            if (buffer.byteLength !== numRowBytes) {
                throw new Error(`get_record(${record_index}) is reaching EOF while reading record. The heap is ${reader}`);
            }
            const ceb = [];
            {
                const rgCEB = new Uint8Array(buffer.slice(cebOffset));
                for (let x = 0; x < numCols; x++) {
                    ceb.push((rgCEB[(x / 8) | 0] & (1 << (7 - (x % 8)))) != 0);
                }
            }
            return {
                buffer,
                ceb,
            };
        }
        const count = rows_pages.reduce((accum, it) => (accum + it.byteLength / numRowBytes) | 0, 0);
        function listRaw(index) {
            return __awaiter(this, void 0, void 0, function* () {
                const record = get_record(index);
                const list = [];
                for (let column of schema) {
                    list.push({
                        key: column.key,
                        type: column.type,
                        value: record.ceb[column.iBit]
                            ? record.buffer.slice(column.ibData, column.ibData + column.cbData)
                            : new ArrayBuffer(0),
                    });
                }
                return list;
            });
        }
        function list(record) {
            return __awaiter(this, void 0, void 0, function* () {
                const rawProps = yield listRaw(record);
                const list = [];
                for (let rawProp of rawProps) {
                    try {
                        list.push({
                            key: rawProp.key,
                            type: rawProp.type,
                            value: (rawProp.value.byteLength !== 0)
                                ? yield resolver.resolveValueOf(rawProp.key, rawProp.type, rawProp.value, reader)
                                : undefined
                        });
                    }
                    catch (ex) {
                        throw new Error(`getTableContext.list(rowIndex=${record}) resolving property`
                            + ` key=0x${rawProp.key.toString(16).padStart(4, '0')}`
                            + ` type=0x${rawProp.type.toString(16).padStart(4, '0')}`
                            + ` of ${heap} failure`
                            + ` --> ${ex}`);
                    }
                }
                return list;
            });
        }
        const rows = [];
        for (let x = 0; x < count; x++) {
            rows.push({
                listRaw() {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield listRaw(x);
                    });
                },
                list() {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield list(x);
                    });
                },
            });
        }
        return {
            rows() {
                return __awaiter(this, void 0, void 0, function* () {
                    return copy(rows);
                });
            },
        };
    });
}
exports.getTableContext = getTableContext;
