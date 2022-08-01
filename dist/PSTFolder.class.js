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
exports.PSTFolder = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const OutlookProperties_1 = require("./OutlookProperties");
const PSTObject_class_1 = require("./PSTObject.class");
const PSTUtil_class_1 = require("./PSTUtil.class");
const PAUtil_1 = require("./PAUtil");
const TableContextUtil_1 = require("./TableContextUtil");
const PHUtil_1 = require("./PHUtil");
const CollectionAsyncProvider_1 = require("./CollectionAsyncProvider");
const SingleAsyncProvider_1 = require("./SingleAsyncProvider");
/**
 * Represents a folder in the PST File.  Allows you to access child folders or items.
 * Items are accessed through a sort of cursor arrangement.  This allows for
 * incremental reading of a folder which may have _lots_ of emails.
 * @export
 * @class PSTFolder
 * @extends {PSTObject}
 */
class PSTFolder extends PSTObject_class_1.PSTObject {
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
    constructor(pstFile, node, subNode, propertyFinder) {
        super(pstFile, node, subNode, propertyFinder);
        this._subFoldersProvider = new SingleAsyncProvider_1.SingleAsyncProvider();
        this._emailsProvider = new SingleAsyncProvider_1.SingleAsyncProvider();
    }
    getEmailsProvider() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._emailsProvider.getOrCreate(() => __awaiter(this, void 0, void 0, function* () {
                const targets = [];
                if (this.getNodeType() === PSTUtil_class_1.PSTUtil.NID_TYPE_SEARCH_FOLDER) {
                    // some folder types don't have children:
                }
                else {
                    // trying to read emailsTable PSTTable7C
                    const contentsTableNode = this._node.getSiblingNode(PSTUtil_class_1.PSTUtil.NID_TYPE_CONTENTS_TABLE);
                    if (contentsTableNode !== undefined) {
                        const contentsTableNodeReader = contentsTableNode.getSubNode();
                        const heap = yield (0, PHUtil_1.getHeapFrom)(contentsTableNodeReader);
                        const tc = yield (0, TableContextUtil_1.getTableContext)(heap, this.pstFile.resolver);
                        const rows = yield tc.rows();
                        const orderOfNodeId = [];
                        for (let row of rows) {
                            const props = (0, PAUtil_1.createPropertyFinder)(yield row.list());
                            const prop = props.findByKey(0x67f2);
                            if (prop !== undefined && typeof prop.value === 'number') {
                                orderOfNodeId.push(prop.value);
                            }
                        }
                        const childNodeIdMap = new Map(this._node.getChildren()
                            .map(node => [node.nodeId, node]));
                        for (let nodeId of orderOfNodeId) {
                            const found = childNodeIdMap.get(nodeId);
                            if (found !== undefined) {
                                targets.push(found);
                            }
                        }
                    }
                    else {
                        //console.log("fallback");
                        // fallback to children as listed in the descriptor b-tree
                        for (let node of this._node.getChildren()) {
                            if (this.getNodeType(node.nodeId) === PSTUtil_class_1.PSTUtil.NID_TYPE_NORMAL_MESSAGE) {
                                targets.push(node);
                            }
                        }
                    }
                }
                return new CollectionAsyncProvider_1.CollectionAsyncProvider(targets.length, (index) => __awaiter(this, void 0, void 0, function* () {
                    if (!(index in targets)) {
                        throw new RangeError(`email index ${index} out of range. maximum index is ${targets.length - 1}.`);
                    }
                    return yield this.pstFile.getItemOf(targets[index], targets[index].getSubNode());
                }));
            }));
        });
    }
    getSubFoldersProvider() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._subFoldersProvider.getOrCreate(() => __awaiter(this, void 0, void 0, function* () {
                try {
                    const targets = [];
                    for (let node of this._node.getChildren()) {
                        const nodeType = this.getNodeType(node.nodeId);
                        if (false
                            || nodeType === PSTUtil_class_1.PSTUtil.NID_TYPE_NORMAL_FOLDER) {
                            targets.push(node);
                        }
                    }
                    return new CollectionAsyncProvider_1.CollectionAsyncProvider(targets.length, (index) => __awaiter(this, void 0, void 0, function* () {
                        if (!(index in targets)) {
                            throw new RangeError(`folder index ${index} out of range. maximum index is ${targets.length - 1}.`);
                        }
                        return yield this.pstFile.getFolderOf(targets[index]);
                    }));
                }
                catch (err) {
                    console.error("PSTFolder::getSubFolders Can't get child folders for folder " +
                        this.displayName +
                        '\n' +
                        err);
                    throw err;
                }
            }));
        });
    }
    /**
     * Get folders in one fell swoop, since there's not usually thousands of them.
     * @returns {PSTFolder[]}
     * @memberof PSTFolder
     */
    getSubFolders() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.getSubFoldersProvider()).all();
        });
    }
    getSubFolder(index) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.getSubFoldersProvider()).get(index);
        });
    }
    /**
     * The number of child folders in this folder
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    getSubFolderCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getSubFoldersProvider()).count;
        });
    }
    /**
     * Number of emails in this folder
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    getEmailCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getEmailsProvider()).count;
        });
    }
    getEmail(index) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (yield this.getEmailsProvider()).get(index));
        });
    }
    getEmails() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (yield this.getEmailsProvider()).all());
        });
    }
    /**
     * Contains a constant that indicates the folder type.
     * https://msdn.microsoft.com/en-us/library/office/cc815373.aspx
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    get folderType() {
        return this.getIntItem(OutlookProperties_1.OutlookProperties.PR_FOLDER_TYPE);
    }
    /**
     * Contains the number of messages in a folder, as computed by the message store.
     * For a number calculated by the library use getEmailCount
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    get contentCount() {
        return this.getIntItem(OutlookProperties_1.OutlookProperties.PR_CONTENT_COUNT);
    }
    /**
     * Contains the number of unread messages in a folder, as computed by the message store.
     * https://msdn.microsoft.com/en-us/library/office/cc841964.aspx
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    get unreadCount() {
        return this.getIntItem(OutlookProperties_1.OutlookProperties.PR_CONTENT_UNREAD);
    }
    /**
     * Contains TRUE if a folder contains subfolders.
     * once again, read from the PST, use getSubFolderCount if you want to know
     * @readonly
     * @type {boolean}
     * @memberof PSTFolder
     */
    get hasSubfolders() {
        return false
            || this.getBooleanItem(OutlookProperties_1.OutlookProperties.PR_SUBFOLDERS)
            || this.getIntItem(OutlookProperties_1.OutlookProperties.PR_SUBFOLDERS) != 0;
    }
    /**
     * Contains a text string describing the type of a folder. Although this property is
     * generally ignored, versions of Microsoft® Exchange Server prior to Exchange Server
     * 2003 Mailbox Manager expect this property to be present.
     * https://msdn.microsoft.com/en-us/library/office/cc839839.aspx
     * @readonly
     * @type {string}
     * @memberof PSTFolder
     */
    get containerClass() {
        return this.getStringItem(OutlookProperties_1.OutlookProperties.PR_CONTAINER_CLASS);
    }
    /**
     * Contains a bitmask of flags describing capabilities of an address book container.
     * https://msdn.microsoft.com/en-us/library/office/cc839610.aspx
     * @readonly
     * @type {number}
     * @memberof PSTFolder
     */
    get containerFlags() {
        return this.getIntItem(OutlookProperties_1.OutlookProperties.PR_CONTAINER_FLAGS);
    }
    /**
     * JSON stringify the object properties.
     * @returns {string}
     * @memberof PSTFolder
     */
    toJSON() {
        const clone = Object.assign({
            folderType: this.folderType,
            contentCount: this.contentCount,
            unreadCount: this.unreadCount,
            hasSubfolders: this.hasSubfolders,
            containerClass: this.containerClass,
            containerFlags: this.containerFlags,
        }, this);
        return clone;
    }
}
exports.PSTFolder = PSTFolder;
