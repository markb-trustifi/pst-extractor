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
const bTypePC = 0xBC;
function copy(array) {
    return array
        .map(it => Object.assign({}, it));
}
function getPropertyContext(heap, resolver) {
    return __awaiter(this, void 0, void 0, function* () {
        if (heap.bClientSig !== bTypePC) {
            throw new Error("must be bTypePC");
        }
        const reader = heap.getReader();
        const header_data_array = yield reader.getHeapBuffers(heap.userRootHnid);
        if (header_data_array.length !== 1) {
            throw new Error("must be single");
        }
        const header_data = header_data_array[0];
        if (header_data.byteLength < 8) {
            throw new Error("invalid header");
        }
        const headerView = new DataView(header_data);
        const bType = headerView.getUint8(0);
        const cbKey = headerView.getUint8(1);
        const cbEnt = headerView.getUint8(2);
        const bIdxLevels = headerView.getUint8(3);
        if (bType != 0xb5) {
            throw new Error("bType must be 0xb5");
        }
        if (cbKey != 2) {
            throw new Error("cbKey must be 2");
        }
        if (cbEnt != 6) {
            throw new Error("cbEnt must be 6");
        }
        if (bIdxLevels != 0) {
            throw new Error("bIdxLevels must be 0");
        }
        const next = headerView.getUint32(4, true);
        const index_data_array = yield reader.getHeapBuffers(next);
        if (index_data_array.length !== 1) {
            throw new Error("must be single");
        }
        const index_data = index_data_array[0];
        const indexView = new DataView(index_data);
        const rawProperties = [];
        const cx = index_data.byteLength / 8;
        for (let x = 0; x < cx; x++) {
            const top = 8 * x;
            rawProperties.push({
                key: indexView.getUint16(top + 0, true),
                type: indexView.getUint16(top + 2, true),
                value: index_data.slice(top + 4, top + 4 + 4),
            });
        }
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
                            throw new Error(`getPropertyContext.list() resolving property`
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
