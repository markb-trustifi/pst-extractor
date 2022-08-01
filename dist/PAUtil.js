"use strict";
/**
 * PST adapter utilities
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPropertyFinder = exports.processNameToIDMap = void 0;
const msftUuidStringify_1 = require("./msftUuidStringify");
const NodeMap_class_1 = require("./NodeMap.class");
const PHUtil_1 = require("./PHUtil");
const PropertyContextUtil_1 = require("./PropertyContextUtil");
const PSTUtil_class_1 = require("./PSTUtil.class");
const guidMap = new Map([
    ['00020329-0000-0000-C000-000000000046', 0],
    ['00062008-0000-0000-C000-000000000046', 1],
    ['00062004-0000-0000-C000-000000000046', 2],
    ['00020386-0000-0000-C000-000000000046', 3],
    ['00062002-0000-0000-C000-000000000046', 4],
    ['6ED8DA90-450B-101B-98DA-00AA003F1305', 5],
    ['0006200A-0000-0000-C000-000000000046', 6],
    ['41F28F13-83F4-4114-A584-EEDB5A6B0BFF', 7],
    ['0006200E-0000-0000-C000-000000000046', 8],
    ['00062041-0000-0000-C000-000000000046', 9],
    ['00062003-0000-0000-C000-000000000046', 10],
    ['4442858E-A9E3-4E80-B900-317A210CC15B', 11],
    ['00020328-0000-0000-C000-000000000046', 12],
    ['71035549-0739-4DCB-9163-00F0580DBBDF', 13],
    ['00062040-0000-0000-C000-000000000046', 14],
]);
/**
 * Process name to ID map.
 *
 * @param nameToIdMapDescriptorNode nodeId 97
 */
function processNameToIDMap(nameToIdMapDescriptorNode, resolver) {
    return __awaiter(this, void 0, void 0, function* () {
        const subNode = nameToIdMapDescriptorNode.getSubNode();
        const bcTable = (yield (yield (0, PropertyContextUtil_1.getPropertyContext)(yield (0, PHUtil_1.getHeapFrom)(subNode), resolver))
            .list());
        function getTableItem(key) {
            return __awaiter(this, void 0, void 0, function* () {
                const found = bcTable.find(it => it.key === key);
                if (found === undefined) {
                    throw new Error(`processNameToIDMap key:${key} is null`);
                }
                const { value } = found;
                if (value instanceof ArrayBuffer) {
                    return value;
                }
                return undefined;
            });
        }
        // process the map
        // Get the guids
        const guidEntry = yield getTableItem(2);
        if (!guidEntry) {
            throw new Error('PSTFile::processNameToIDMap guidEntry is null');
        }
        const guids = new Uint8Array(guidEntry);
        const nGuids = Math.trunc(guids.byteLength / 16);
        const guidIndexes = [];
        let offset = 0;
        for (let i = 0; i < nGuids; ++i) {
            const strUID = (0, msftUuidStringify_1.msftUuidStringify)(guids, offset).toUpperCase();
            const guid = guidMap.get(strUID);
            if (guid) {
                guidIndexes[i] = guid;
            }
            else {
                guidIndexes[i] = -1; // We don't know this guid
            }
            // console.log('PSTFile:: processNameToIdMap idx: ' + i + ', ' + strUID + ', ' + guidIndexes[i]);
            offset += 16;
        }
        // if we have a reference to an internal descriptor
        const mapEntries = yield getTableItem(3);
        if (!mapEntries) {
            throw new Error('PSTFile::processNameToIDMap mapEntries is null');
        }
        const nameToIdByte = new Uint8Array(mapEntries);
        const nameToIdByteView = new DataView(mapEntries);
        const stringMapEntries = yield getTableItem(4);
        if (!stringMapEntries) {
            throw new Error('PSTFile::processNameToIDMap stringMapEntries is null');
        }
        const stringNameToIdByte = new Uint8Array(stringMapEntries);
        const stringNameToIdByteView = new DataView(stringMapEntries);
        const stringNameToIdByteBuffer = Buffer.from(stringMapEntries);
        const nodeMap = new NodeMap_class_1.NodeMap();
        (yield Promise.resolve().then(() => __importStar(require("fs")))).writeFileSync("C:/A/A1", nameToIdByte);
        (yield Promise.resolve().then(() => __importStar(require("fs")))).writeFileSync("C:/A/A2", stringNameToIdByte);
        (yield Promise.resolve().then(() => __importStar(require("fs")))).writeFileSync("C:/A/A3", guids);
        // process the entries
        for (let x = 0; x + 8 < nameToIdByte.length; x += 8) {
            const key = nameToIdByteView.getUint32(x, true);
            let guid = nameToIdByteView.getUint16(x + 4, true);
            let propId = nameToIdByteView.getUint16(x + 6, true);
            if (key == 0x55555555) {
                break;
            }
            const PS_PUBLIC_STRINGS = 0;
            const PS_MAPI = 12;
            if ((guid & 0x0001) == 0) {
                // identifier is numeric
                propId += 0x8000;
                guid >>= 1;
                let guidIndex;
                if (guid == 1) {
                    guidIndex = PS_MAPI;
                }
                else if (guid == 2) {
                    guidIndex = PS_PUBLIC_STRINGS;
                }
                else {
                    guidIndex = guidIndexes[guid - 3];
                }
                nodeMap.setId(key, propId, guidIndex);
            }
            else {
                // identifier is a string
                // key is byte offset into the String stream in which the string name of the property is stored.
                const len = stringNameToIdByteView.getUint32(key, true);
                const keyByteValue = Buffer.alloc(len);
                PSTUtil_class_1.PSTUtil.arraycopy(stringNameToIdByteBuffer, key + 4, keyByteValue, 0, keyByteValue.length);
                propId += 0x8000;
                nodeMap.setId(keyByteValue.toString('utf16le').replace(/\0/g, ''), propId);
            }
        }
        return nodeMap;
    });
}
exports.processNameToIDMap = processNameToIDMap;
function createPropertyFinder(props) {
    return {
        findByKey(key) {
            return props.find(it => it.key === key);
        },
    };
}
exports.createPropertyFinder = createPropertyFinder;
