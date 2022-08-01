/// <reference types="node" />
import Long from 'long';
import { PropertyFinder } from './PAUtil';
import { PLNode } from './PLNode';
import { PLSubNode } from './PLSubNode';
import { Property } from './Property';
import { RootProvider } from './RootProvider';
export declare abstract class PSTObject {
    protected _rootProvider: RootProvider;
    protected _node: PLNode;
    protected _subNode: PLSubNode;
    protected _propertyFinder: PropertyFinder;
    /**
     * Creates an instance of PSTObject, the root class of most PST Items.
     * @memberof PSTObject
     */
    constructor(rootProvider: RootProvider, node: PLNode, subNode: PLSubNode, propertyFinder: PropertyFinder);
    /**
     * Get the node type for the descriptor id.
     * @param {number} [descriptorIdentifier]
     * @returns {number}
     * @memberof PSTObject
     */
    protected getNodeType(descriptorIdentifier?: number): number;
    /**
     * @protected
     * @param { number } identifier
     * @param { number } [defaultValue]
     * @returns { number }
     * @memberof PSTObject
     */
    protected getIntItem(identifier: number, defaultValue?: number): number;
    /**
     * Get a boolean.
     * @protected
     * @param {number} identifier
     * @param {boolean} [defaultValue]
     * @returns {boolean}
     * @memberof PSTObject
     */
    protected getBooleanItem(identifier: number, defaultValue?: boolean): boolean;
    /**
     * Get a double.
     * @protected
     * @param {number} identifier
     * @param {number} [defaultValue]
     * @returns {number}
     * @memberof PSTObject
     */
    protected getDoubleItem(identifier: number, defaultValue?: number): number;
    /**
     * Get a long.
     * @protected
     * @param {number} identifier
     * @param {long} [defaultValue]
     * @returns {long}
     * @memberof PSTObject
     */
    protected getLongItem(identifier: number, defaultValue?: Long): Long;
    /**
     * Get a string.
     * @protected
     * @param {number} identifier
     * @param {number} [stringType]
     * @param {string} [codepage]
     * @returns {string}
     * @memberof PSTObject
     */
    protected getStringItem(identifier: number, stringType?: number, codepage?: string): string;
    /**
     * Get a date.
     * @param {number} identifier
     * @returns {Date}
     * @memberof PSTObject
     */
    protected getDateItem(identifier: number): Date | null;
    /**
     * Get a blob.
     * @protected
     * @param {number} identifier
     * @returns {Buffer}
     * @memberof PSTObject
     */
    protected getBinaryItem(identifier: number): Buffer | null;
    /**
     * Get the display name of this object.
     * https://msdn.microsoft.com/en-us/library/office/cc842383.aspx
     * @readonly
     * @type {string}
     * @memberof PSTObject
     */
    get displayName(): string;
    /**
     * Try to get specified property from PropertyContext.
     *
     * @param key `0x3001` is `PR_DISPLAY_NAME` for example
     * @returns The found one will be returned. Otherwise `undefined` is returned.
     */
    getProperty(key: number): Property | undefined;
    /**
     * JSON the object.
     * @returns {string}
     * @memberof PSTObject
     */
    toJSON(): any;
}
