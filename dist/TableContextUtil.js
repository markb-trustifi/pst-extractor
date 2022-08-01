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
        const header_data = yield reader.getHeapBuffers(heap.userRootHnid);
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
        const schema = Array.from((0, PLMisc_1.splitPer)(index_data, 8))
            .map(it => {
            const view = new DataView(it);
            return {
                ref_type: view.getUint16(0, true),
                type: view.getUint16(2, true),
                ind2_off: view.getUint16(4, true),
                size: view.getUint8(6),
            };
        });
        if (num_list !== schema.length) {
            throw new Error("schema length not matched");
        }
        if (seven_c !== 0x7c) {
            throw new Error("seven_c is not satisfied");
        }
        const min_size = schema.reduce((accum, it) => accum + it.size, 0);
        const header_data2 = yield reader.getHeapBuffers(b_five_offset);
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
            ? yield reader.getHeapBuffers(rows_offset)
            : [];
        //const data2 = await reader.getHeapBuffers(offset2);
        const rows_per_page = (rows_pages.length !== 0)
            ? rows_pages[0].byteLength / rec_size
            : 0;
        function get_record(record_index) {
            const page_index = (record_index / rows_per_page) | 0;
            const heap_index = (record_index % rows_per_page) | 0;
            const record = rows_pages[page_index].slice(rec_size * (heap_index + 0), rec_size * (heap_index + 1));
            if (record.byteLength !== rec_size) {
                throw new Error(`get_record(${record_index}) (${rows_pages.map(it => it.byteLength).join(",")}) ${record.byteLength} < ${rec_size} EOS`);
            }
            return record;
        }
        const count = rows_pages.reduce((accum, it) => (accum + it.byteLength / rec_size) | 0, 0);
        function listRaw(record) {
            return __awaiter(this, void 0, void 0, function* () {
                const rowData = get_record(record);
                const list = [];
                for (let column of schema) {
                    list.push({
                        key: column.type,
                        type: column.ref_type,
                        value: rowData.slice(column.ind2_off, column.ind2_off + column.size),
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
                            value: yield resolver.resolveValueOf(rawProp.key, rawProp.type, rawProp.value, reader)
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
