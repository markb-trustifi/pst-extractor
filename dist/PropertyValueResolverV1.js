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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyValueResolverV1 = void 0;
const long_1 = __importDefault(require("long"));
const PLUtil_1 = require("./PLUtil");
const PropertyTypeObject_1 = require("./PropertyTypeObject");
const PSTUtil_class_1 = require("./PSTUtil.class");
const typeConverters = {};
const PT_BOOLEAN = 0xB;
const PT_DOUBLE = 0x5;
const PT_LONG = 0x3;
const PT_OBJECT = 0xD;
const PT_LONGLONG = 0x14;
const PT_STRING8 = 0x1E;
const PT_UNICODE = 0x1F;
const PT_SYSTIME = 0x40;
const PT_CLSID = 0x48;
const PT_SHORT = 0x2;
const PT_FLOAT = 0x4;
const PT_MV_UNICODE = 0x101F;
const PT_MV_STRING8 = 0x101E;
const PT_MV_BINARY = 0x1102;
const PT_MV_LONG = 0x1003;
const PT_MV_CLSID = 0x1048;
const PT_MV_SHORT = 0x1002;
const PT_MVPV_BINARY = 0x2102;
typeConverters[PT_SHORT] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    return arg.view.getInt16(0, true);
});
typeConverters[PT_FLOAT] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    return arg.view.getFloat32(0, true);
});
typeConverters[PT_LONG] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    return arg.view.getInt32(0, true);
});
typeConverters[PT_OBJECT] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const bytes = yield arg.resolveHeap(heap);
    if (bytes !== undefined) {
        const view = new DataView(bytes);
        return new PropertyTypeObject_1.PropertyTypeObject(view.getUint32(0, true), view.getUint32(4, true));
    }
    return bytes;
});
typeConverters[PT_LONGLONG] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const bytes = yield arg.getBytes(8);
    if (bytes !== undefined) {
        const view = new DataView(bytes);
        return (0, PLUtil_1.readLong)(view, 0);
    }
    else {
        return undefined;
    }
});
typeConverters[PT_DOUBLE] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const bytes = yield arg.getBytes(8);
    return (bytes !== undefined)
        ? new DataView(bytes).getFloat64(0, true)
        : undefined;
});
typeConverters[PT_BOOLEAN] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    return arg.view.getUint8(0) !== 0;
});
typeConverters[PT_STRING8] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const bytes = yield arg.resolveHeap(heap);
    return (bytes !== undefined)
        ? yield arg.convertAnsiString(bytes)
        : undefined;
});
typeConverters[PT_UNICODE] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const bytes = yield arg.resolveHeap(heap);
    return (bytes !== undefined)
        ? Buffer.from(bytes).toString('utf16le').replace(/\0/g, '')
        : undefined;
    // `.replace(/\0/g, '')` is needed to eliminate a trailing null char.
});
typeConverters[PT_SYSTIME] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const bytes = yield arg.getBytes(8);
    if (bytes !== undefined) {
        const view = new DataView(bytes);
        return PSTUtil_class_1.PSTUtil.filetimeToDate(new long_1.default(view.getUint32(4, true)), new long_1.default(view.getUint32(0, true)));
    }
    else {
        return undefined;
    }
});
typeConverters[PT_CLSID] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const bytes = yield arg.resolveHeap(heap);
    return bytes;
});
typeConverters[0x0102] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const bytes = yield arg.resolveHeap(heap);
    return bytes;
});
typeConverters[PT_MV_UNICODE] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const list = [];
    if (heap !== 0) {
        const bytes = yield arg.resolveHeap(heap);
        if (bytes !== undefined) {
            const view = new DataView(bytes);
            const count = view.getUint32(0, true);
            for (let x = 0; x < count - 1; x++) {
                const from = view.getUint32(4 + 4 * (x), true);
                const to = view.getUint32(4 + 4 * (x + 1), true);
                const elementBytes = bytes.slice(from, to);
                list.push(Buffer.from(elementBytes).toString('utf16le').replace(/\0/g, ''));
            }
        }
    }
    return list;
});
typeConverters[PT_MV_BINARY] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const list = [];
    if (heap !== 0) {
        const bytes = yield arg.resolveHeap(heap);
        if (bytes !== undefined) {
            const view = new DataView(bytes);
            const count = view.getUint32(0, true);
            for (let x = 0; x < count - 1; x++) {
                const from = view.getUint32(4 + 4 * (x), true);
                const to = view.getUint32(4 + 4 * (x + 1), true);
                const elementBytes = bytes.slice(from, to);
                list.push(elementBytes);
            }
        }
    }
    return list;
});
typeConverters[PT_MV_LONG] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const list = [];
    if (heap !== 0) {
        const bytes = yield arg.resolveHeap(heap);
        if (bytes !== undefined) {
            const view = new DataView(bytes);
            const count = bytes.byteLength / 4;
            for (let x = 0; x < count; x++) {
                list.push(view.getInt32(4 * x, true));
            }
        }
    }
    return list;
});
typeConverters[PT_MV_CLSID] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const list = [];
    if (heap !== 0) {
        const bytes = yield arg.resolveHeap(heap);
        if (bytes !== undefined) {
            const count = bytes.byteLength / 16;
            for (let x = 0; x < count; x++) {
                const from = 16 * (x);
                const to = 16 * (x + 1);
                const elementBytes = bytes.slice(from, to);
                list.push(elementBytes);
            }
        }
    }
    return list;
});
typeConverters[PT_MV_SHORT] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const list = [];
    if (heap !== 0) {
        const bytes = yield arg.resolveHeap(heap);
        if (bytes !== undefined) {
            const view = new DataView(bytes);
            const count = bytes.byteLength / 2;
            for (let x = 0; x < count; x++) {
                list.push(view.getInt16(2 * x, true));
            }
        }
    }
    return list;
});
typeConverters[PT_MV_STRING8] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const heap = arg.view.getUint32(0, true);
    const list = [];
    if (heap !== 0) {
        const bytes = yield arg.resolveHeap(heap);
        if (bytes !== undefined) {
            const view = new DataView(bytes);
            const count = view.getUint32(0, true);
            for (let x = 0; x < count - 1; x++) {
                const from = view.getUint32(4 + 4 * (x), true);
                const to = view.getUint32(4 + 4 * (x + 1), true);
                const elementBytes = bytes.slice(from, to);
                list.push(yield arg.convertAnsiString(elementBytes));
            }
        }
    }
    return list;
});
typeConverters[PT_MVPV_BINARY] = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    // not sure
    const heap = arg.view.getUint32(0, true);
    const list = [];
    if (heap !== 0) {
        const bytes = yield arg.resolveHeap(heap);
        if (bytes !== undefined) {
            const view = new DataView(bytes);
            const count = view.getUint32(0, true);
            for (let x = 0; x < count - 1; x++) {
                const from = view.getUint32(4 + 4 * (x), true);
                const to = view.getUint32(4 + 4 * (x + 1), true);
                const elementBytes = bytes.slice(from, to);
                list.push(elementBytes);
            }
        }
    }
    return list;
});
function mixIntoOne(array) {
    if (array.length === 0) {
        return new ArrayBuffer(0);
    }
    else if (array.length === 1) {
        return array[0];
    }
    else {
        const numBytes = array.reduce((prev, it) => prev + it.byteLength, 0);
        const one = new ArrayBuffer(numBytes);
        const dest = new Uint8Array(one);
        array.reduce((nextPos, source) => {
            dest.set(new Uint8Array(source), nextPos);
            return nextPos + source.byteLength;
        }, 0);
        return one;
    }
}
class PropertyValueResolverV1 {
    constructor(convertAnsiString, provideTypeConverterOf, provideFallbackTypeConverterOf) {
        this.convertAnsiString = convertAnsiString;
        this.provideTypeConverterOf = type => {
            if (provideTypeConverterOf) {
                const converter = provideTypeConverterOf(type);
                if (converter) {
                    return converter;
                }
            }
            const converter = typeConverters[type];
            if (converter) {
                return converter;
            }
            if (provideFallbackTypeConverterOf) {
                const converter = provideFallbackTypeConverterOf(type);
                if (converter) {
                    return converter;
                }
            }
            return undefined;
        };
    }
    resolveValueOf(key, type, value, heap) {
        return __awaiter(this, void 0, void 0, function* () {
            const view = new DataView(value);
            function resolveHeap(hnid) {
                return __awaiter(this, void 0, void 0, function* () {
                    return mixIntoOne(yield heap.getHeapBuffers(hnid));
                });
            }
            const converter = this.provideTypeConverterOf(type);
            if (converter === undefined || converter === null) {
                throw new Error(`property type 0x${type.toString(16)} is unknown. please define a typeConverter in PropertyValueResolverV1.ts`);
            }
            return yield converter({
                view: view,
                heap: heap,
                getBytes(numBytes) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const { byteLength } = value;
                        if (byteLength === 4 && byteLength < numBytes) {
                            const hnid = view.getUint32(0, true);
                            return yield resolveHeap(hnid);
                        }
                        else if (byteLength !== 4 && numBytes <= byteLength) {
                            return value.slice(0, numBytes);
                        }
                        else {
                            throw new Error("dont know how to provide buffer");
                        }
                    });
                },
                resolveHeap: resolveHeap,
                convertAnsiString: this.convertAnsiString,
            });
        });
    }
}
exports.PropertyValueResolverV1 = PropertyValueResolverV1;
