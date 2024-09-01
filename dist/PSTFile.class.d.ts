import Long from 'long';
import { PSTFolder } from './PSTFolder.class';
import { PSTMessageStore } from './PSTMessageStore.class';
import { NodeMap } from './NodeMap.class';
import { PSTOpts } from './PSTOpts';
import { PLStore } from './PLStore';
export declare class PSTFile {
    /**
     * @internal
     */
    static ENCRYPTION_TYPE_NONE: number;
    /**
     * @internal
     */
    static ENCRYPTION_TYPE_COMPRESSIBLE: number;
    static MESSAGE_STORE_DESCRIPTOR_IDENTIFIER: number;
    static ROOT_FOLDER_DESCRIPTOR_IDENTIFIER: number;
    /**
     * @internal
     */
    static PST_TYPE_ANSI: number;
    /**
     * @internal
     */
    static PST_TYPE_ANSI_2: number;
    /**
     * @internal
     */
    static PST_TYPE_UNICODE: number;
    /**
     * @internal
     */
    static PST_TYPE_2013_UNICODE: number;
    /**
     * @internal
     */
    static PS_PUBLIC_STRINGS: number;
    /**
     * @internal
     */
    static PS_INTERNET_HEADERS: number;
    /**
     * @internal
     */
    static PSETID_Messaging: number;
    /**
     * @internal
     */
    static PSETID_Note: number;
    /**
     * @internal
     */
    static PSETID_PostRss: number;
    /**
     * @internal
     */
    static PSETID_Task: number;
    /**
     * @internal
     */
    static PSETID_UnifiedMessaging: number;
    /**
     * @internal
     */
    static PS_MAPI: number;
    /**
     * @internal
     */
    static PSETID_AirSync: number;
    /**
     * @internal
     */
    static PSETID_Sharing: number;
    private _store;
    private _resolver;
    private static nodeMap;
    /**
     * Creates an instance of PSTFile.  File is opened in constructor.
     * @internal
     * @param {string} fileName
     * @memberof PSTFile
     */
    constructor(store: PLStore, nodeMap: NodeMap, opts?: PSTOpts);
    /**
     * Close the file.
     * @memberof PSTFile
     */
    close(): Promise<void>;
    /**
     * Get name to ID map item.
     * @param {number} key
     * @param {number} idx
     * @returns {number}
     * @memberof PSTFile
     */
    getNameToIdMapItem(key: number, idx: number): number;
    /**
     * Get public string to id map item.
     * @static
     * @param {string} key
     * @returns {number}
     * @memberof PSTFile
     */
    static getPublicStringToIdMapItem(key: string): number;
    /**
     * Get property name from id.
     * @static
     * @param {number} propertyId
     * @param {boolean} bNamed
     * @returns {string}
     * @memberof PSTFile
     */
    static getPropertyName(propertyId: number, bNamed: boolean): string | undefined;
    /**
     * Get name to id map key.
     * @static
     * @param {number} propId
     * @returns {long}
     * @memberof PSTFile
     */
    static getNameToIdMapKey(propId: number): Long | undefined;
    /**
     * Get the message store of the PST file.  Note that this doesn't really
     * have much information, better to look under the root folder.
     * @returns {PSTMessageStore}
     * @memberof PSTFile
     */
    getMessageStore(): Promise<PSTMessageStore>;
    private getFolderOf;
    private getItemOf;
    /**
     * Get the root folder for the PST file
     * @returns {PSTFolder}
     * @memberof PSTFile
     */
    getRootFolder(): Promise<PSTFolder>;
    private getRootProvider;
    /**
     * JSON stringify the object properties.
     * @returns {string}
     * @memberof PSTFile
     */
    toJSON(): any;
}
