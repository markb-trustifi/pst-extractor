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
exports.PSTFile = void 0;
const PSTFolder_class_1 = require("./PSTFolder.class");
const PSTMessageStore_class_1 = require("./PSTMessageStore.class");
const PSTUtil_class_1 = require("./PSTUtil.class");
const NodeMap_class_1 = require("./NodeMap.class");
const PAUtil_1 = require("./PAUtil");
const PHUtil_1 = require("./PHUtil");
const PropertyContextUtil_1 = require("./PropertyContextUtil");
const PropertyValueResolverV1_1 = require("./PropertyValueResolverV1");
const iconv_lite_1 = __importDefault(require("iconv-lite"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
class PSTFile {
    /**
     * Creates an instance of PSTFile.  File is opened in constructor.
     * @internal
     * @param {string} fileName
     * @memberof PSTFile
     */
    constructor(store, nodeMap, opts) {
        PSTFile.nodeMap = nodeMap;
        this._store = store;
        this._resolver = new PropertyValueResolverV1_1.PropertyValueResolverV1((array) => __awaiter(this, void 0, void 0, function* () {
            return iconv_lite_1.default.decode(Buffer.from(array), (opts && opts.ansiEncoding) || "latin1");
        }));
    }
    /**
     * Close the file.
     * @memberof PSTFile
     */
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._store.close();
        });
    }
    /**
     * Get name to ID map item.
     * @param {number} key
     * @param {number} idx
     * @returns {number}
     * @memberof PSTFile
     */
    getNameToIdMapItem(key, idx) {
        return PSTFile.nodeMap.getId(key, idx);
    }
    /**
     * Get public string to id map item.
     * @static
     * @param {string} key
     * @returns {number}
     * @memberof PSTFile
     */
    static getPublicStringToIdMapItem(key) {
        return PSTFile.nodeMap.getId(key);
    }
    /**
     * Get property name from id.
     * @static
     * @param {number} propertyId
     * @param {boolean} bNamed
     * @returns {string}
     * @memberof PSTFile
     */
    static getPropertyName(propertyId, bNamed) {
        return PSTUtil_class_1.PSTUtil.propertyName.get(propertyId);
    }
    /**
     * Get name to id map key.
     * @static
     * @param {number} propId
     * @returns {long}
     * @memberof PSTFile
     */
    static getNameToIdMapKey(propId) {
        return PSTFile.nodeMap.getNumericName(propId);
    }
    /**
     * Get the message store of the PST file.  Note that this doesn't really
     * have much information, better to look under the root folder.
     * @returns {PSTMessageStore}
     * @memberof PSTFile
     */
    getMessageStore() {
        return __awaiter(this, void 0, void 0, function* () {
            const node = this._store.getOneNodeBy(PSTFile.MESSAGE_STORE_DESCRIPTOR_IDENTIFIER);
            if (node === undefined) {
                throw new Error("MESSAGE_STORE_DESCRIPTOR not found");
            }
            const heap = yield (0, PHUtil_1.getHeapFrom)(node.getSubNode());
            const pc = yield (0, PropertyContextUtil_1.getPropertyContext)(heap, this._resolver);
            const propertyFinder = (0, PAUtil_1.createPropertyFinder)(yield pc.list());
            return new PSTMessageStore_class_1.PSTMessageStore(this.getRootProvider(), node, node.getSubNode(), propertyFinder);
        });
    }
    getFolderOf(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const heap = yield (0, PHUtil_1.getHeapFrom)(node.getSubNode());
            const pc = yield (0, PropertyContextUtil_1.getPropertyContext)(heap, this._resolver);
            const propertyFinder = (0, PAUtil_1.createPropertyFinder)(yield pc.list());
            const output = new PSTFolder_class_1.PSTFolder(this.getRootProvider(), node, node.getSubNode(), propertyFinder);
            return output;
        });
    }
    getItemOf(node, subNode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PSTUtil_class_1.PSTUtil.createAppropriatePSTMessageObject(this.getRootProvider(), node, subNode, this._resolver);
        });
    }
    /**
     * Get the root folder for the PST file
     * @returns {PSTFolder}
     * @memberof PSTFile
     */
    getRootFolder() {
        return __awaiter(this, void 0, void 0, function* () {
            const node = this._store.getOneNodeBy(PSTFile.ROOT_FOLDER_DESCRIPTOR_IDENTIFIER);
            if (node === undefined) {
                throw new Error("ROOT_FOLDER_DESCRIPTOR not found");
            }
            return yield this.getFolderOf(node);
        });
    }
    getRootProvider() {
        return {
            resolver: this._resolver,
            getNameToIdMapItem: this.getNameToIdMapItem,
            getItemOf: this.getItemOf,
            getFolderOf: this.getFolderOf,
        };
    }
    /**
     * JSON stringify the object properties.
     * @returns {string}
     * @memberof PSTFile
     */
    toJSON() {
        return this;
    }
}
exports.PSTFile = PSTFile;
/**
 * @internal
 */
PSTFile.ENCRYPTION_TYPE_NONE = 0;
/**
 * @internal
 */
PSTFile.ENCRYPTION_TYPE_COMPRESSIBLE = 1;
PSTFile.MESSAGE_STORE_DESCRIPTOR_IDENTIFIER = 33;
PSTFile.ROOT_FOLDER_DESCRIPTOR_IDENTIFIER = 290;
/**
 * @internal
 */
PSTFile.PST_TYPE_ANSI = 14;
/**
 * @internal
 */
PSTFile.PST_TYPE_ANSI_2 = 15;
/**
 * @internal
 */
PSTFile.PST_TYPE_UNICODE = 23;
/**
 * @internal
 */
PSTFile.PST_TYPE_2013_UNICODE = 36;
/**
 * @internal
 */
PSTFile.PS_PUBLIC_STRINGS = 0;
/**
 * @internal
 */
PSTFile.PS_INTERNET_HEADERS = 3;
/**
 * @internal
 */
PSTFile.PSETID_Messaging = 7;
/**
 * @internal
 */
PSTFile.PSETID_Note = 8;
/**
 * @internal
 */
PSTFile.PSETID_PostRss = 9;
/**
 * @internal
 */
PSTFile.PSETID_Task = 10;
/**
 * @internal
 */
PSTFile.PSETID_UnifiedMessaging = 11;
/**
 * @internal
 */
PSTFile.PS_MAPI = 12;
/**
 * @internal
 */
PSTFile.PSETID_AirSync = 13;
/**
 * @internal
 */
PSTFile.PSETID_Sharing = 14;
// node tree maps
PSTFile.nodeMap = new NodeMap_class_1.NodeMap();
