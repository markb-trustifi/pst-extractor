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
exports.PSTAttachment = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const OutlookProperties_1 = require("./OutlookProperties");
const PropertyTypeObject_1 = require("./PropertyTypeObject");
const PSTObject_class_1 = require("./PSTObject.class");
// Class containing attachment information.
class PSTAttachment extends PSTObject_class_1.PSTObject {
    /**
     * Creates an instance of PSTAttachment.
     * @internal
     * @param {PSTFile} rootProvider
     * @param {Map<number, PSTDescriptorItem>} localDescriptorItems
     * @memberof PSTAttachment
     */
    constructor(rootProvider, node, subNode, propertyFinder) {
        super(rootProvider, node, subNode, propertyFinder);
    }
    /**
     * The PR_ATTACH_SIZE property contains the sum, in bytes, of the sizes of all properties on an attachment.
     * https://msdn.microsoft.com/en-us/library/gg156074(v=winembedded.70).aspx
     * @readonly
     * @type {number}
     * @memberof PSTAttachment
     */
    get size() {
        return this.getIntItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_SIZE);
    }
    /**
     * Contains the creation date and time of a message.
     * https://msdn.microsoft.com/en-us/library/office/cc765677.aspx
     * @readonly
     * @type {Date}
     * @memberof PSTAttachment
     */
    get creationTime() {
        return this.getDateItem(OutlookProperties_1.OutlookProperties.PR_CREATION_TIME);
    }
    /**
     * Contains the date and time when the object or subobject was last modified.
     * https://msdn.microsoft.com/en-us/library/office/cc815689.aspx
     * @readonly
     * @type {Date}
     * @memberof PSTAttachment
     */
    get modificationTime() {
        return this.getDateItem(OutlookProperties_1.OutlookProperties.PR_LAST_MODIFICATION_TIME);
    }
    /**
     * Get an embedded message.
     * @readonly
     * @type {PSTMessage}
     * @memberof PSTAttachment
     */
    getEmbeddedPSTMessage() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const attachMethod = (_a = this._propertyFinder.findByKey(0x3705)) === null || _a === void 0 ? void 0 : _a.value;
            try {
                if (true
                    && typeof attachMethod === 'number'
                    && attachMethod == PSTAttachment.ATTACHMENT_METHOD_EMBEDDED) {
                    const attachDataBinary = (_b = this._propertyFinder.findByKey(0x3701)) === null || _b === void 0 ? void 0 : _b.value;
                    if (false) { }
                    else if (attachDataBinary instanceof ArrayBuffer) {
                        // PT_BINARY
                        attachDataBinary;
                        throw new Error("how to operate attachDataBinary?");
                    }
                    else if (attachDataBinary instanceof PropertyTypeObject_1.PropertyTypeObject) {
                        const { subNodeId } = attachDataBinary;
                        const subNode = yield this._subNode.getChildBy(subNodeId);
                        if (subNode === undefined) {
                            throw new Error(`childNodeId=0x${subNodeId.toString(16)}`
                                + ` of ${this._subNode} not found`);
                        }
                        return yield this._rootProvider.getItemOf(this._node, subNode);
                    }
                }
            }
            catch (err) {
                console.error('PSTAttachment::embeddedPSTMessage createAppropriatePSTMessageObject failed\n' +
                    err);
                throw err;
            }
            return null;
        });
    }
    /**
     * Get attachment content as binary data
     */
    get fileData() {
        const attachmentDataObject = this._propertyFinder.findByKey(OutlookProperties_1.OutlookProperties.PR_ATTACH_DATA_BIN);
        if (attachmentDataObject !== undefined) {
            const { value } = attachmentDataObject;
            if (value instanceof ArrayBuffer) {
                return value;
            }
        }
        return undefined;
    }
    /**
     * Size of the attachment file itself.
     * https://msdn.microsoft.com/en-us/library/gg154634(v=winembedded.70).aspx
     * @readonly
     * @type {number}
     * @memberof PSTAttachment
     */
    get filesize() {
        const attachmentDataObject = this._propertyFinder.findByKey(OutlookProperties_1.OutlookProperties.PR_ATTACH_DATA_BIN);
        if (attachmentDataObject !== undefined) {
            const { value } = attachmentDataObject;
            if (value instanceof ArrayBuffer) {
                return value.byteLength;
            }
            else if (value instanceof PropertyTypeObject_1.PropertyTypeObject) {
                return value.size;
            }
        }
        return 0;
    }
    /**
     * Contains an attachment's base file name and extension, excluding path.
     * https://msdn.microsoft.com/en-us/library/office/cc842517.aspx
     * @readonly
     * @type {string}
     * @memberof PSTAttachment
     */
    get filename() {
        return this.getStringItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_FILENAME);
    }
    /**
     * Contains a MAPI-defined constant representing the way the contents of an attachment can be accessed.
     * https://msdn.microsoft.com/en-us/library/office/cc815439.aspx
     * @readonly
     * @type {number}
     * @memberof PSTAttachment
     */
    get attachMethod() {
        return this.getIntItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_METHOD);
    }
    /**
     * Contains a number that uniquely identifies the attachment within its parent message.
     * https://msdn.microsoft.com/en-us/library/office/cc841969.aspx
     * @readonly
     * @type {number}
     * @memberof PSTAttachment
     */
    get attachNum() {
        return this.getIntItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_NUM);
    }
    /**
     * Contains an attachment's long filename and extension, excluding path.
     * https://msdn.microsoft.com/en-us/library/office/cc842157.aspx
     * @readonly
     * @type {string}
     * @memberof PSTAttachment
     */
    get longFilename() {
        return this.getStringItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_LONG_FILENAME);
    }
    /**
     * Contains an attachment's fully-qualified path and filename.
     * https://msdn.microsoft.com/en-us/library/office/cc839889.aspx
     * @readonly
     * @type {string}
     * @memberof PSTAttachment
     */
    get pathname() {
        return this.getStringItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_PATHNAME);
    }
    /**
     * Contains an offset, in characters, to use in rendering an attachment within the main message text.
     * https://msdn.microsoft.com/en-us/library/office/cc842381.aspx
     * @readonly
     * @type {number}
     * @memberof PSTAttachment
     */
    get renderingPosition() {
        return this.getIntItem(OutlookProperties_1.OutlookProperties.PR_RENDERING_POSITION);
    }
    /**
     * Contains an attachment's fully-qualified long path and filename.
     * https://msdn.microsoft.com/en-us/library/office/cc815443.aspx
     * @readonly
     * @type {string}
     * @memberof PSTAttachment
     */
    get longPathname() {
        return this.getStringItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_LONG_PATHNAME);
    }
    /**
     * Contains formatting information about a Multipurpose Internet Mail Extensions (MIME) attachment.
     * https://msdn.microsoft.com/en-us/library/office/cc842516.aspx
     * @readonly
     * @type {string}
     * @memberof PSTAttachment
     */
    get mimeTag() {
        return this.getStringItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_MIME_TAG);
    }
    /**
     * Contains the MIME sequence number of a MIME message attachment.
     * https://msdn.microsoft.com/en-us/library/office/cc963256.aspx
     * @readonly
     * @type {number}
     * @memberof PSTAttachment
     */
    get mimeSequence() {
        return this.getIntItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_MIME_SEQUENCE);
    }
    /**
     * Contains the content identification header of a Multipurpose Internet Mail Extensions (MIME) message attachment.
     * https://msdn.microsoft.com/en-us/library/office/cc765868.aspx
     * @readonly
     * @type {string}
     * @memberof PSTAttachment
     */
    get contentId() {
        return this.getStringItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_CONTENT_ID);
    }
    /**
     * Indicates that this attachment is not available to HTML rendering applications and should be ignored in Multipurpose Internet Mail Extensions (MIME) processing.
     * https://msdn.microsoft.com/en-us/library/office/cc765876.aspx
     * @readonly
     * @type {boolean}
     * @memberof PSTAttachment
     */
    get isAttachmentInvisibleInHtml() {
        const actionFlag = this.getIntItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_FLAGS);
        return (actionFlag & 0x1) > 0;
    }
    /**
     * Indicates that this attachment is not available to applications rendering in Rich Text Format (RTF) and should be ignored by MAPI.
     * https://msdn.microsoft.com/en-us/library/office/cc765876.aspx
     * @readonly
     * @type {boolean}
     * @memberof PSTAttachment
     */
    get isAttachmentInvisibleInRTF() {
        const actionFlag = this.getIntItem(OutlookProperties_1.OutlookProperties.PR_ATTACH_FLAGS);
        return (actionFlag & 0x2) > 0;
    }
    /**
     * JSON stringify the object properties.
     * @returns {string}
     * @memberof PSTAttachment
     */
    toJSON() {
        const clone = Object.assign({
            size: this.size,
            creationTime: this.creationTime,
            modificationTime: this.modificationTime,
            filename: this.filename,
            attachMethod: this.attachMethod,
            attachNum: this.attachNum,
            longFilename: this.longFilename,
            pathname: this.pathname,
            renderingPosition: this.renderingPosition,
            longPathname: this.longPathname,
            mimeTag: this.mimeTag,
            mimeSequence: this.mimeSequence,
            contentId: this.contentId,
            isAttachmentInvisibleInHtml: this.isAttachmentInvisibleInHtml,
            isAttachmentInvisibleInRTF: this.isAttachmentInvisibleInRTF,
        }, this);
        return clone;
    }
}
exports.PSTAttachment = PSTAttachment;
PSTAttachment.ATTACHMENT_METHOD_NONE = 0;
PSTAttachment.ATTACHMENT_METHOD_BY_VALUE = 1;
PSTAttachment.ATTACHMENT_METHOD_BY_REFERENCE = 2;
PSTAttachment.ATTACHMENT_METHOD_BY_REFERENCE_RESOLVE = 3;
PSTAttachment.ATTACHMENT_METHOD_BY_REFERENCE_ONLY = 4;
PSTAttachment.ATTACHMENT_METHOD_EMBEDDED = 5;
PSTAttachment.ATTACHMENT_METHOD_OLE = 6;
