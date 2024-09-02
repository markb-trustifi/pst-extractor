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
exports.getPropertyContext = void 0;
const BTHeap_1 = require("./BTHeap");
const bTypePC = 0xBC;
function copy(array) {
    return array
        .map(it => Object.assign({}, it));
}
function getPropertyContext(heap, resolver) {
    return __awaiter(this, void 0, void 0, function* () {
        if (heap.bClientSig !== bTypePC) {
            throw new Error("bClientSig must be bTypePC");
        }
        const reader = heap.getReader();
        function getRecords() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const index_data = yield (0, BTHeap_1.getBTHeapReaderFrom)(reader, heap.userRootHnid);
                    return yield index_data.list();
                }
                catch (ex) {
                    throw new Error(`getRecords failure of hnid ${heap.userRootHnid} of ${heap} --> ${ex}`);
                }
            });
        }
        const rawProperties = (yield getRecords())
            .map(record => {
            const keyView = new DataView(record.key);
            const dataView = new DataView(record.data);
            return {
                key: keyView.getUint16(0, true),
                type: dataView.getUint16(0, true),
                value: record.data.slice(2),
            };
        });
        return {
            listRaw() {
                return __awaiter(this, void 0, void 0, function* () {
                    return copy(rawProperties);
                });
            },
            list() {
                return __awaiter(this, void 0, void 0, function* () {
                    const props = [];
                    for (let it of rawProperties) {
                        try {
                            props.push({
                                key: it.key,
                                type: it.type,
                                value: yield resolver.resolveValueOf(it.key, it.type, it.value, reader),
                            });
                        }
                        catch (ex) {
                            console.error(`getPropertyContext.list() resolving property`
                                + ` key=0x${it.key.toString(16).padStart(4, '0')}`
                                + ` type=0x${it.type.toString(16).padStart(4, '0')}`
                                + ` of ${heap} failure`
                                + ` --> ${ex}`);
                        }
                    }
                    return props;
                });
            },
        };
    });
}
exports.getPropertyContext = getPropertyContext;
