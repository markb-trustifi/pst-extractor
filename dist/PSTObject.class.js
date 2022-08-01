"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PSTObject = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const long_1 = __importDefault(require("long"));
const OutlookProperties_1 = require("./OutlookProperties");
class PSTObject {
    /**
     * Creates an instance of PSTObject, the root class of most PST Items.
     * @internal
     * @memberof PSTObject
     */
    constructor(rootProvider, node, subNode, propertyFinder) {
        if (!propertyFinder) {
            console.trace("propertyFinder not defined");
        }
        this._rootProvider = rootProvider;
        this._node = node;
        this._subNode = subNode;
        this._propertyFinder = propertyFinder;
    }
    /**
     * Get the node type for the descriptor id.
     * @param {number} [descriptorIdentifier]
     * @returns {number}
     * @memberof PSTObject
     */
    getNodeType(descriptorIdentifier) {
        if (descriptorIdentifier) {
            return descriptorIdentifier & 0x1f;
        }
        else if (this._node.nodeId) {
            return this._node.nodeId & 0x1f;
        }
        else {
            return -1;
        }
    }
    /**
     * @protected
     * @param { number } identifier
     * @param { number } [defaultValue]
     * @returns { number }
     * @memberof PSTObject
     */
    getIntItem(identifier, defaultValue) {
        if (!defaultValue) {
            defaultValue = 0;
        }
        const property = this._propertyFinder.findByKey(identifier);
        if (property !== undefined) {
            const { value } = property;
            if (typeof value === 'number') {
                return value;
            }
        }
        return defaultValue;
    }
    /**
     * Get a boolean.
     * @protected
     * @param {number} identifier
     * @param {boolean} [defaultValue]
     * @returns {boolean}
     * @memberof PSTObject
     */
    getBooleanItem(identifier, defaultValue) {
        if (defaultValue === undefined) {
            defaultValue = false;
        }
        const property = this._propertyFinder.findByKey(identifier);
        if (property !== undefined) {
            const { value } = property;
            if (typeof value === 'boolean') {
                return value;
            }
        }
        return defaultValue;
    }
    /**
     * Get a double.
     * @protected
     * @param {number} identifier
     * @param {number} [defaultValue]
     * @returns {number}
     * @memberof PSTObject
     */
    getDoubleItem(identifier, defaultValue) {
        if (defaultValue === undefined) {
            defaultValue = 0;
        }
        const property = this._propertyFinder.findByKey(identifier);
        if (property !== undefined) {
            const { value } = property;
            if (typeof value === 'number') {
                return value;
            }
        }
        return defaultValue;
    }
    /**
     * Get a long.
     * @protected
     * @param {number} identifier
     * @param {long} [defaultValue]
     * @returns {long}
     * @memberof PSTObject
     */
    getLongItem(identifier, defaultValue) {
        if (defaultValue === undefined) {
            defaultValue = long_1.default.ZERO;
        }
        const property = this._propertyFinder.findByKey(identifier);
        if (property !== undefined) {
            const { value } = property;
            if (value instanceof long_1.default) {
                return value;
            }
            else if (typeof value === 'number') {
                return new long_1.default(value);
            }
        }
        return defaultValue;
    }
    /**
     * Get a string.
     * @protected
     * @param {number} identifier
     * @param {number} [stringType]
     * @param {string} [codepage]
     * @returns {string}
     * @memberof PSTObject
     */
    getStringItem(identifier, stringType, codepage) {
        const property = this._propertyFinder.findByKey(identifier);
        if (property !== undefined) {
            const { value } = property;
            if (typeof value === 'string') {
                return value;
            }
        }
        return '';
    }
    /**
     * Get a date.
     * @param {number} identifier
     * @returns {Date}
     * @memberof PSTObject
     */
    getDateItem(identifier) {
        const property = this._propertyFinder.findByKey(identifier);
        if (property !== undefined) {
            const { value } = property;
            if (value instanceof Date) {
                return value;
            }
        }
        return null;
    }
    /**
     * Get a blob.
     * @protected
     * @param {number} identifier
     * @returns {Buffer}
     * @memberof PSTObject
     */
    getBinaryItem(identifier) {
        const property = this._propertyFinder.findByKey(identifier);
        if (property !== undefined) {
            const { value } = property;
            if (value instanceof ArrayBuffer) {
                return Buffer.from(value);
            }
        }
        return null;
    }
    /**
     * Get the display name of this object.
     * https://msdn.microsoft.com/en-us/library/office/cc842383.aspx
     * @readonly
     * @type {string}
     * @memberof PSTObject
     */
    get displayName() {
        return this.getStringItem(OutlookProperties_1.OutlookProperties.PR_DISPLAY_NAME);
    }
    /**
     * Try to get specified property from PropertyContext.
     *
     * @param key `0x3001` is `PR_DISPLAY_NAME` for example
     * @returns The found one will be returned. Otherwise `undefined` is returned.
     */
    getProperty(key) {
        return this._propertyFinder.findByKey(key);
    }
    /**
     * JSON the object.
     * @returns {string}
     * @memberof PSTObject
     */
    toJSON() {
        return this;
    }
}
exports.PSTObject = PSTObject;
