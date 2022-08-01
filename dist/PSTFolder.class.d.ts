import { PSTFile } from './PSTFile.class';
import { PSTObject } from './PSTObject.class';
import { PLNode } from './PLNode';
import { PropertyFinder } from './PAUtil';
import { PSTMessage } from './PSTMessage.class';
import { PLSubNode } from './PLSubNode';
/**
 * Represents a folder in the PST File.  Allows you to access child folders or items.
 * Items are accessed through a sort of cursor arrangement.  This allows for
 * incremental reading of a folder which may have _lots_ of emails.
 * @export
 * @class PSTFolder
 * @extends {PSTObject}
 */
export declare class PSTFolder extends PSTObject {
    private _subFoldersProvider;
    private _emailsProvider;
    /**
     * Creates an instance of PSTFolder.
     * Represents a folder in the PST File.  Allows you to access child folders or items.
     * Items are accessed through a sort of cursor arrangement.  This allows for
     * incremental reading of a folder which may have _lots_ of emails.
     * @param {PSTFile} pstFile
     * @param {DescriptorIndexNode} descriptorIndexNode
     * @param {Map<number, PSTDescriptorItem>} [localDescriptorItems]
     * @memberof PSTFolder
     */
    constructor(pstFile: PSTFile, node: PLNode, subNode: PLSubNode, propertyFinder: PropertyFinder);
    private getEmailsProvider;
    private getSubFoldersProvider;
    /**
     * Get folders in one fell swoop, since there's not usually thousands of them.
     * @returns {PSTFolder[]}
     * @memberof PSTFolder
     */
    getSubFolders(): Promise<PSTFolder[]>;
    getSubFolder(index: number): Promise<PSTFolder>;
    /**
     * The number of child folders in this folder
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    getSubFolderCount(): Promise<number>;
    /**
     * Number of emails in this folder
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    getEmailCount(): Promise<number>;
    getEmail(index: number): Promise<PSTMessage>;
    getEmails(): Promise<PSTMessage[]>;
    /**
     * Contains a constant that indicates the folder type.
     * https://msdn.microsoft.com/en-us/library/office/cc815373.aspx
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    get folderType(): number;
    /**
     * Contains the number of messages in a folder, as computed by the message store.
     * For a number calculated by the library use getEmailCount
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    get contentCount(): number;
    /**
     * Contains the number of unread messages in a folder, as computed by the message store.
     * https://msdn.microsoft.com/en-us/library/office/cc841964.aspx
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    get unreadCount(): number;
    /**
     * Contains TRUE if a folder contains subfolders.
     * once again, read from the PST, use getSubFolderCount if you want to know
     * @readonly
     * @type {boolean}
     * @memberof PSTFolder
     */
    get hasSubfolders(): boolean;
    /**
     * Contains a text string describing the type of a folder. Although this property is
     * generally ignored, versions of Microsoft® Exchange Server prior to Exchange Server
     * 2003 Mailbox Manager expect this property to be present.
     * https://msdn.microsoft.com/en-us/library/office/cc839839.aspx
     * @readonly
     * @type {string}
     * @memberof PSTFolder
     */
    get containerClass(): string;
    /**
     * Contains a bitmask of flags describing capabilities of an address book container.
     * https://msdn.microsoft.com/en-us/library/office/cc839610.aspx
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    get containerFlags(): number;
    /**
     * JSON stringify the object properties.
     * @returns {string}
     * @memberof PSTFolder
     */
    toJSON(): any;
}
