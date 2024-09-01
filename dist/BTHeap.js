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
exports.getBTHeapReaderFrom = void 0;
function getBTHeapReaderFrom(heap, hnid) {
    return __awaiter(this, void 0, void 0, function* () {
        const header = yield heap.getHeapBuffers(hnid);
        if (header.length !== 1) {
            throw new Error(`btree heap buffer must be single`);
        }
        const headerView = new DataView(header[0]);
        const bTypeBTH = 0xB5;
        if (headerView.getUint8(0) !== bTypeBTH) {
            throw new Error(`signature must be bTypeBTH`);
        }
        const cbKey = headerView.getUint8(1);
        const cbEnt = headerView.getUint8(2);
        const bIdxLevels = headerView.getUint8(3);
        const hidRoot = headerView.getUint32(4, true);
        const list = [];
        function recursive(hid, level) {
            return __awaiter(this, void 0, void 0, function* () {
                if (hid !== 0) {
                    if (level === 0) {
                        const recordSize = cbKey + cbEnt;
                        const records = (yield heap.getHeapBuffers(hid));
                        if (records.length !== 1) {
                            throw new Error(`btree heap record must be single`);
                        }
                        const record = records[0];
                        const numRecords = Math.floor(record.byteLength / recordSize);
                        for (let x = 0; x < numRecords; x++) {
                            const top = recordSize * x;
                            list.push({
                                key: record.slice(top, top + cbKey),
                                data: record.slice(top + cbKey, top + recordSize),
                            });
                        }
                    }
                    else {
                        const recordSize = cbKey + 4;
                        const records = (yield heap.getHeapBuffers(hid));
                        if (records.length !== 1) {
                            throw new Error(`btree intermediate record must be single`);
                        }
                        const record = records[0];
                        const recordView = new DataView(record);
                        const numRecords = Math.floor(record.byteLength / recordSize);
                        for (let x = 0; x < numRecords; x++) {
                            const top = recordSize * x;
                            const hidInner = recordView.getUint32(top + cbKey, true);
                            yield recursive(hidInner, level - 1);
                        }
                    }
                }
            });
        }
        yield recursive(hidRoot, bIdxLevels);
        return {
            list() {
                return __awaiter(this, void 0, void 0, function* () {
                    return list;
                });
            },
        };
    });
}
exports.getBTHeapReaderFrom = getBTHeapReaderFrom;
