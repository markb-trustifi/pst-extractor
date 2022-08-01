/// <reference types="node" />
import Long from 'long';
import { PSTMessage } from './PSTMessage.class';
import { PLNode } from './PLNode';
import { PropertyValueResolver } from './PropertyValueResolver';
import { PLSubNode } from './PLSubNode';
import { RootProvider } from './RootProvider';
/**
 * Utility functions for PST components
 * @export
 * @class PSTUtil
 */
export declare class PSTUtil {
    static compEnc: number[];
    static codePages: Map<number, string>;
    static propertyName: Map<number, string>;
    static NID_TYPE_HID: number;
    static NID_TYPE_INTERNAL: number;
    static NID_TYPE_NORMAL_FOLDER: number;
    static NID_TYPE_SEARCH_FOLDER: number;
    static NID_TYPE_NORMAL_MESSAGE: number;
    static NID_TYPE_ATTACHMENT: number;
    static NID_TYPE_SEARCH_UPDATE_QUEUE: number;
    static NID_TYPE_SEARCH_CRITERIA_OBJECT: number;
    static NID_TYPE_ASSOC_MESSAGE: number;
    static NID_TYPE_CONTENTS_TABLE_INDEX: number;
    static NID_TYPE_RECEIVE_FOLDER_TABLE: number;
    static NID_TYPE_OUTGOING_QUEUE_TABLE: number;
    static NID_TYPE_HIERARCHY_TABLE: number;
    static NID_TYPE_CONTENTS_TABLE: number;
    static NID_TYPE_ASSOC_CONTENTS_TABLE: number;
    static NID_TYPE_SEARCH_CONTENTS_TABLE: number;
    static NID_TYPE_ATTACHMENT_TABLE: number;
    static NID_TYPE_RECIPIENT_TABLE: number;
    static NID_TYPE_SEARCH_TABLE_INDEX: number;
    static NID_TYPE_LTP: number;
    /**
     * Convert little endian bytes to long
     * @static
     * @param {Buffer} data
     * @param {number} [start]
     * @param {number} [end]
     * @returns {long}
     * @memberof PSTUtil
     */
    static convertLittleEndianBytesToLong(data: Buffer, start?: number, end?: number): Long;
    /**
     * Convert big endian bytes to long
     * @static
     * @param {Buffer} data
     * @param {number} [start]
     * @param {number} [end]
     * @returns {long}
     * @memberof PSTUtil
     */
    static convertBigEndianBytesToLong(data: Buffer, start?: number, end?: number): Long;
    /**
     * Handle strings using codepages.
     * @static
     * @param {number} propertyId
     * @returns
     * @memberof PSTUtil
     */
    static getInternetCodePageCharset(propertyId: number): string | undefined;
    /**
     * Create JS string from buffer.
     * @static
     * @param {Buffer} data
     * @param {number} stringType
     * @param {string} codepage
     * @returns
     * @memberof PSTUtil
     */
    static createJavascriptString(data: Buffer, stringType: number, codepage?: string): string;
    /**
     * Copy from one array to another
     * @static
     * @param {Buffer} src
     * @param {number} srcPos
     * @param {Buffer} dest
     * @param {number} destPos
     * @param {number} length
     * @memberof PSTUtil
     */
    static arraycopy(src: Buffer, srcPos: number, dest: Buffer, destPos: number, length: number): void;
    /**
     * Determine if character is alphanumeric
     *
     * @static
     * @memberof PSTUtil
     */
    static isAlphaNumeric: (ch: string) => boolean;
    /**
     * Decode a lump of data that has been encrypted with the compressible encryption
     * @static
     * @param {Buffer} data
     * @returns {Buffer}
     * @memberof PSTUtil
     */
    static decode(data: Buffer): Buffer;
    /**
     * Decode a lump of data that has been encrypted with the compressible encryption
     * @static
     * @param {Buffer} data
     * @returns {Buffer}
     * @memberof PSTUtil
     */
    static decodeArray(data: Uint8Array): Uint8Array;
    /**
     * Creates object based on message class
     * https://msdn.microsoft.com/en-us/vba/outlook-vba/articles/item-types-and-message-classes
     * @static
     * @param {PSTFile} rootProvider
     * @param {DescriptorIndexNode} folderIndexNode
     * @param {PSTTableBC} table
     * @param {Map<number, PSTDescriptorItem>} localDescriptorItems
     * @returns {PSTMessage}
     * @memberof PSTUtil
     */
    static createAppropriatePSTMessageObject(rootProvider: RootProvider, node: PLNode, subNode: PLSubNode, resolver: PropertyValueResolver): Promise<PSTMessage>;
    /**
     * Converts a Windows FILETIME into a {@link Date}. The Windows FILETIME structure holds a date and time associated with a
     * file. The structure identifies a 64-bit integer specifying the number of 100-nanosecond intervals which have passed since
     * January 1, 1601. This 64-bit value is split into the two double words stored in the structure.
     *
     * @static
     * @param {long} hi
     * @param {long} low
     * @returns {Date}
     * @memberof PSTUtil
     */
    static filetimeToDate(hi: Long, low: Long): Date;
}
