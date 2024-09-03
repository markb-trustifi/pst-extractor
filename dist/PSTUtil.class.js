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
exports.PSTUtil = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const long_1 = __importDefault(require("long"));
const PSTAppointment_class_1 = require("./PSTAppointment.class");
const PSTContact_class_1 = require("./PSTContact.class");
const PSTMessage_class_1 = require("./PSTMessage.class");
const PSTTask_class_1 = require("./PSTTask.class");
const PSTActivity_class_1 = require("./PSTActivity.class");
const iconv_lite_1 = __importDefault(require("iconv-lite"));
const PHUtil_1 = require("./PHUtil");
const PropertyContextUtil_1 = require("./PropertyContextUtil");
const PAUtil_1 = require("./PAUtil");
/**
 * Utility functions for PST components
 * @export
 * @class PSTUtil
 */
class PSTUtil {
    /**
     * Convert little endian bytes to long
     * @static
     * @param {Buffer} data
     * @param {number} [start]
     * @param {number} [end]
     * @returns {long}
     * @memberof PSTUtil
     */
    static convertLittleEndianBytesToLong(data, start, end) {
        if (!start) {
            start = 0;
        }
        if (!end) {
            end = data.length;
        }
        let offset = long_1.default.fromNumber(data[end - 1] & 0xff);
        let tmpLongValue;
        for (let x = end - 2; x >= start; x--) {
            offset = offset.shiftLeft(8);
            tmpLongValue = long_1.default.fromNumber(data[x] & 0xff);
            offset = offset.xor(tmpLongValue);
        }
        return offset;
    }
    /**
     * Convert big endian bytes to long
     * @static
     * @param {Buffer} data
     * @param {number} [start]
     * @param {number} [end]
     * @returns {long}
     * @memberof PSTUtil
     */
    static convertBigEndianBytesToLong(data, start, end) {
        if (!start) {
            start = 0;
        }
        if (!end) {
            end = data.length;
        }
        let offset = long_1.default.ZERO;
        for (let x = start; x < end; ++x) {
            offset = offset.shiftLeft(8);
            const tmpLongValue = long_1.default.fromNumber(data[x] & 0xff);
            offset = offset.xor(tmpLongValue);
        }
        return offset;
    }
    /**
     * Handle strings using codepages.
     * @static
     * @param {number} propertyId
     * @returns
     * @memberof PSTUtil
     */
    static getInternetCodePageCharset(propertyId) {
        return this.codePages.get(propertyId);
    }
    /**
     * Create JS string from buffer.
     * @static
     * @param {Buffer} data
     * @param {number} stringType
     * @param {string} codepage
     * @returns
     * @memberof PSTUtil
     */
    static createJavascriptString(data, stringType, codepage = 'utf8') {
        // TODO - codepage is not used...
        try {
            if (stringType == 0x1f) {
                // convert and trim any nulls
                return data.toString('utf16le').replace(/\0/g, '');
            }
            else {
                return iconv_lite_1.default.decode(data, codepage).toString();
            }
        }
        catch (err) {
            console.error('PSTUtil::createJavascriptString Unable to decode string\n' + err);
            throw err;
        }
        return '';
    }
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
    static arraycopy(src, srcPos, dest, destPos, length) {
        // TODO FIX THIS - TOO SLOW?
        let s = srcPos;
        let d = destPos;
        let i = 0;
        while (i++ < length) {
            dest[d++] = src[s++];
        }
    }
    /**
     * Decode a lump of data that has been encrypted with the compressible encryption
     * @static
     * @param {Buffer} data
     * @returns {Buffer}
     * @memberof PSTUtil
     */
    static decode(data) {
        let temp;
        for (let x = 0; x < data.length; x++) {
            temp = data[x] & 0xff;
            data[x] = this.compEnc[temp];
        }
        return data;
    }
    /**
     * Decode a lump of data that has been encrypted with the compressible encryption
     * @static
     * @param {Buffer} data
     * @returns {Buffer}
     * @memberof PSTUtil
     */
    static decodeArray(data) {
        let temp;
        for (let x = 0; x < data.length; x++) {
            temp = data[x] & 0xff;
            data[x] = this.compEnc[temp];
        }
        return data;
    }
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
    static createAppropriatePSTMessageObject(rootProvider, node, subNode, resolver, propertyFinderDelegation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (propertyFinderDelegation === undefined) {
                const heap = yield (0, PHUtil_1.getHeapFrom)(subNode);
                const pc = yield (0, PropertyContextUtil_1.getPropertyContext)(heap, resolver);
                const propList = yield pc.list();
                propertyFinderDelegation = (0, PAUtil_1.createPropertyFinder)(propList);
            }
            const propertyFinder = propertyFinderDelegation;
            const item = propertyFinder.findByKey(0x001a);
            let messageClass = '';
            if (item !== undefined && typeof item.value === 'string') {
                messageClass = item.value;
            }
            switch (messageClass) {
                case 'IPM.Note':
                case 'IPM.Note.SMIME.MultipartSigned':
                case 'IPM.Note.Agenda':
                    // email message
                    const msg = new PSTMessage_class_1.PSTMessage(rootProvider, node, subNode, propertyFinder);
                    // Log.debug1(msg.body);
                    // Log.debug1(msg.numberOfRecipients.toString());
                    // Log.debug1(msg.colorCategories.toString());
                    // Log.debug1(JSON.stringify(msg, null, 2));
                    return msg;
                case 'IPM.Appointment':
                case 'IPM.OLE.CLASS.{00061055-0000-0000-C000-000000000046}':
                case 'IPM.Schedule.Meeting.Canceled':
                case 'IPM.Schedule.Meeting.Resp.Pos':
                case 'IPM.Schedule.Meeting.Resp.Tent':
                case 'IPM.Schedule.Meeting.Notification.Forward':
                case 'IPM.Schedule.Meeting.Resp.Neg':
                case 'IPM.Schedule.Meeting.Request':
                    // appointment
                    // messageClass.startsWith('IPM.Schedule.Meeting')
                    const apt = new PSTAppointment_class_1.PSTAppointment(rootProvider, node, subNode, propertyFinder);
                    // Log.debug1(JSON.stringify(msg, null, 2));
                    return apt;
                case 'IPM.Contact':
                    // contact
                    const contact = new PSTContact_class_1.PSTContact(rootProvider, node, subNode, propertyFinder);
                    // Log.debug1(JSON.stringify(msg, null, 2));
                    return contact;
                case 'IPM.Task':
                    // task
                    const task = new PSTTask_class_1.PSTTask(rootProvider, node, subNode, propertyFinder);
                    // Log.debug1(JSON.stringify(msg, null, 2));
                    return task;
                case 'IPM.Activity':
                    // journal entry
                    const activity = new PSTActivity_class_1.PSTActivity(rootProvider, node, subNode, propertyFinder);
                    // Log.debug1(JSON.stringify(msg, null, 2));
                    return activity;
                case 'IPM.Post.Rss':
                    // debugger;
                    // Rss Feed
                    const rss = new PSTMessage_class_1.PSTMessage(rootProvider, node, subNode, propertyFinder);
                    // Log.debug1(JSON.stringify(msg, null, 2));
                    return rss;
                case 'IPM.DistList':
                    // debugger;
                    // Distribution list
                    const dl = new PSTMessage_class_1.PSTMessage(rootProvider, node, subNode, propertyFinder);
                    // Log.debug1(JSON.stringify(msg, null, 2));
                    return dl;
                // return new PSTDistList(theFile, folderIndexNode, table, localDescriptorItems);
                case 'IPM.Note.Rules.OofTemplate.Microsoft':
                    // debugger;
                    // Out of Office rule
                    const oof = new PSTMessage_class_1.PSTMessage(rootProvider, node, subNode, propertyFinder);
                    // Log.debug1(JSON.stringify(msg, null, 2));
                    return oof;
                case 'REPORT.IPM.Note.NDR':
                    // Receipt of non-delivery
                    const ndr = new PSTMessage_class_1.PSTMessage(rootProvider, node, subNode, propertyFinder);
                    // Log.debug1(JSON.stringify(msg, null, 2));
                    return ndr;
                case 'IPM.StickyNote':
                    // Sticky note
                    const sticky = new PSTMessage_class_1.PSTMessage(rootProvider, node, subNode, propertyFinder);
                    // Log.debug1(JSON.stringify(msg, null, 2));
                    return sticky;
                case 'REPORT.IPM.Note.IPNRN':
                    // Read receipt
                    // debugger;
                    // console.log('PSTUtil::createAppropriatePSTMessageObject REPORT.IPM.Note.IPNRN');
                    return new PSTMessage_class_1.PSTMessage(rootProvider, node, subNode, propertyFinder);
                case 'REPORT.IPM.Note.IPNNRN':
                    // Not-read notification
                    // debugger;
                    // console.log('PSTUtil::createAppropriatePSTMessageObject REPORT.IPM.Note.IPNNRN');
                    return new PSTMessage_class_1.PSTMessage(rootProvider, node, subNode, propertyFinder);
                case 'REPORT.IPM.Note.DR':
                    // Delivery receipt
                    // debugger;
                    // console.log('PSTUtil::createAppropriatePSTMessageObject REPORT.IPM.Note.DR');
                    return new PSTMessage_class_1.PSTMessage(rootProvider, node, subNode, propertyFinder);
                default:
                    console.error('PSTUtil::createAppropriatePSTMessageObject unknown message type: ' +
                        messageClass);
            }
            return new PSTMessage_class_1.PSTMessage(rootProvider, node, subNode, propertyFinder);
        });
    }
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
    static filetimeToDate(hi, low) {
        const h = hi.shiftLeft(32);
        const l = low.and(0xffffffff);
        const filetime = h.or(l);
        const msSince16010101 = filetime.divide(1000 * 10);
        const epochDiff = long_1.default.fromValue('11644473600000');
        const msSince19700101 = msSince16010101.subtract(epochDiff);
        return new Date(msSince19700101.toNumber());
    }
}
exports.PSTUtil = PSTUtil;
// substitution table for the compressible encryption type.
PSTUtil.compEnc = [
    0x47,
    0xf1,
    0xb4,
    0xe6,
    0x0b,
    0x6a,
    0x72,
    0x48,
    0x85,
    0x4e,
    0x9e,
    0xeb,
    0xe2,
    0xf8,
    0x94,
    0x53,
    0xe0,
    0xbb,
    0xa0,
    0x02,
    0xe8,
    0x5a,
    0x09,
    0xab,
    0xdb,
    0xe3,
    0xba,
    0xc6,
    0x7c,
    0xc3,
    0x10,
    0xdd,
    0x39,
    0x05,
    0x96,
    0x30,
    0xf5,
    0x37,
    0x60,
    0x82,
    0x8c,
    0xc9,
    0x13,
    0x4a,
    0x6b,
    0x1d,
    0xf3,
    0xfb,
    0x8f,
    0x26,
    0x97,
    0xca,
    0x91,
    0x17,
    0x01,
    0xc4,
    0x32,
    0x2d,
    0x6e,
    0x31,
    0x95,
    0xff,
    0xd9,
    0x23,
    0xd1,
    0x00,
    0x5e,
    0x79,
    0xdc,
    0x44,
    0x3b,
    0x1a,
    0x28,
    0xc5,
    0x61,
    0x57,
    0x20,
    0x90,
    0x3d,
    0x83,
    0xb9,
    0x43,
    0xbe,
    0x67,
    0xd2,
    0x46,
    0x42,
    0x76,
    0xc0,
    0x6d,
    0x5b,
    0x7e,
    0xb2,
    0x0f,
    0x16,
    0x29,
    0x3c,
    0xa9,
    0x03,
    0x54,
    0x0d,
    0xda,
    0x5d,
    0xdf,
    0xf6,
    0xb7,
    0xc7,
    0x62,
    0xcd,
    0x8d,
    0x06,
    0xd3,
    0x69,
    0x5c,
    0x86,
    0xd6,
    0x14,
    0xf7,
    0xa5,
    0x66,
    0x75,
    0xac,
    0xb1,
    0xe9,
    0x45,
    0x21,
    0x70,
    0x0c,
    0x87,
    0x9f,
    0x74,
    0xa4,
    0x22,
    0x4c,
    0x6f,
    0xbf,
    0x1f,
    0x56,
    0xaa,
    0x2e,
    0xb3,
    0x78,
    0x33,
    0x50,
    0xb0,
    0xa3,
    0x92,
    0xbc,
    0xcf,
    0x19,
    0x1c,
    0xa7,
    0x63,
    0xcb,
    0x1e,
    0x4d,
    0x3e,
    0x4b,
    0x1b,
    0x9b,
    0x4f,
    0xe7,
    0xf0,
    0xee,
    0xad,
    0x3a,
    0xb5,
    0x59,
    0x04,
    0xea,
    0x40,
    0x55,
    0x25,
    0x51,
    0xe5,
    0x7a,
    0x89,
    0x38,
    0x68,
    0x52,
    0x7b,
    0xfc,
    0x27,
    0xae,
    0xd7,
    0xbd,
    0xfa,
    0x07,
    0xf4,
    0xcc,
    0x8e,
    0x5f,
    0xef,
    0x35,
    0x9c,
    0x84,
    0x2b,
    0x15,
    0xd5,
    0x77,
    0x34,
    0x49,
    0xb6,
    0x12,
    0x0a,
    0x7f,
    0x71,
    0x88,
    0xfd,
    0x9d,
    0x18,
    0x41,
    0x7d,
    0x93,
    0xd8,
    0x58,
    0x2c,
    0xce,
    0xfe,
    0x24,
    0xaf,
    0xde,
    0xb8,
    0x36,
    0xc8,
    0xa1,
    0x80,
    0xa6,
    0x99,
    0x98,
    0xa8,
    0x2f,
    0x0e,
    0x81,
    0x65,
    0x73,
    0xe4,
    0xc2,
    0xa2,
    0x8a,
    0xd4,
    0xe1,
    0x11,
    0xd0,
    0x08,
    0x8b,
    0x2a,
    0xf2,
    0xed,
    0x9a,
    0x64,
    0x3f,
    0xc1,
    0x6c,
    0xf9,
    0xec,
];
PSTUtil.codePages = new Map([
    [28596, 'iso-8859-6'],
    [1256, 'windows-1256'],
    [28594, 'iso-8859-4'],
    [1257, 'windows-1257'],
    [28592, 'iso-8859-2'],
    [1250, 'windows-1250'],
    [936, 'gb2312'],
    [52936, 'hz-gb-2312'],
    [54936, 'gb18030'],
    [950, 'big5'],
    [28595, 'iso-8859-5'],
    [20866, 'koi8-r'],
    [21866, 'koi8-u'],
    [1251, 'windows-1251'],
    [28597, 'iso-8859-7'],
    [1253, 'windows-1253'],
    [38598, 'iso-8859-8-i'],
    [1255, 'windows-1255'],
    [51932, 'euc-jp'],
    [50220, 'iso-2022-jp'],
    [50221, 'csISO2022JP'],
    [932, 'iso-2022-jp'],
    [949, 'ks_c_5601-1987'],
    [51949, 'euc-kr'],
    [28593, 'iso-8859-3'],
    [28605, 'iso-8859-15'],
    [874, 'windows-874'],
    [28599, 'iso-8859-9'],
    [1254, 'windows-1254'],
    [65000, 'utf-7'],
    [65001, 'utf-8'],
    [20127, 'us-ascii'],
    [1258, 'windows-1258'],
    [28591, 'iso-8859-1'],
    [1252, 'Windows-1252'],
]);
// maps hex codes to names for properties
PSTUtil.propertyName = new Map([
    [0x0002, 'PidTagAlternateRecipientAllowed'],
    [0x0003, 'PidTagNameidStreamEntry'],
    [0x0004, 'PidTagNameidStreamString'],
    [0x0017, 'PidTagImportance'],
    [0x001a, 'PidTagMessageClass'],
    [0x0023, 'PidTagOriginatorDeliveryReportRequested'],
    [0x0026, 'PidTagPriority'],
    [0x0029, 'PidLidOldWhenStartWhole'],
    [0x002b, 'PidTagRecipientReassignmentProhibited'],
    [0x002e, 'PidTagOriginalSensitivity'],
    [0x0036, 'PidTagSensitivity'],
    [0x0037, 'PidTagSubject'],
    [0x0039, 'PidTagClientSubmitTime'],
    [0x003b, 'PidTagSentRepresentingSearchKey'],
    [0x003f, 'PidTagReceivedByEntryId'],
    [0x0040, 'PidTagReceivedByName'],
    [0x0041, 'PidTagSentRepresentingEntryId'],
    [0x0042, 'PidTagSentRepresentingName'],
    [0x0043, 'PidTagReceivedRepresentingEntryId'],
    [0x0044, 'PidTagReceivedRepresentingName'],
    [0x004d, 'PidTagOriginalAuthorName'],
    [0x0052, 'PidTagReceivedRepresentingSearchKey'],
    [0x0057, 'PidTagMessageToMe'],
    [0x0058, 'PidTagMessageCcMe'],
    [0x0060, 'PidTagStartDate'],
    [0x0061, 'PidTagEndDate'],
    [0x0062, 'PidTagOwnerAppointmentId'],
    [0x0063, 'PidTagResponseRequested'],
    [0x0064, 'PidTagSentRepresentingAddressType'],
    [0x0065, 'PidTagSentRepresentingEmailAddress'],
    [0x0070, 'PidTagConversationTopic'],
    [0x0071, 'PidTagConversationIndex'],
    [0x0075, 'PidTagReceivedByAddressType'],
    [0x0076, 'PidTagReceivedByEmailAddress'],
    [0x0077, 'PidTagReceivedRepresentingAddressType'],
    [0x0078, 'PidTagReceivedRepresentingEmailAddress'],
    [0x007d, 'PidTagTransportMessageHeaders'],
    [0x0c15, 'PidTagRecipientType'],
    [0x0c17, 'PidTagReplyRequested'],
    [0x0c19, 'PidTagSenderEntryId'],
    [0x0c1a, 'PidTagSenderName'],
    [0x0c1d, 'PidTagSenderSearchKey'],
    [0x0c1e, 'PidTagSenderAddressType'],
    [0x0c1f, 'PidTagSenderEmailAddress'],
    [0x0e01, 'PidTagDeleteAfterSubmit'],
    [0x0e02, 'PidTagDisplayBcc'],
    [0x0e03, 'PidTagDisplayCc'],
    [0x0e04, 'PidTagDisplayTo'],
    [0x0e06, 'PidTagMessageDeliveryTime'],
    [0x0e07, 'PidTagMessageFlags'],
    [0x0e08, 'PidTagMessageSize'],
    [0x0e0f, 'PidTagResponsibility'],
    [0x0e20, 'PidTagAttachSize'],
    [0x0e23, 'PidTagInternetArticleNumber'],
    [0x0e38, 'PidTagReplFlags'],
    [0x0e62, 'PidTagUrlCompNameSet'],
    [0x0e79, 'PidTagTrustSender'],
    [0x0ff9, 'PidTagRecordKey'],
    [0x0ffe, 'PidTagObjectType'],
    [0x0fff, 'PidTagEntryId'],
    [0x1000, 'PidTagBody'],
    [0x1009, 'PidTagRtfCompressed'],
    [0x1013, 'PidTagBodyHtml'],
    [0x1035, 'PidTagInternetMessageId'],
    [0x1039, 'PidTagInternetReferences'],
    [0x1042, 'PidTagInReplyToId'],
    [0x1080, 'PidTagIconIndex'],
    [0x1081, 'PidTagLastVerbExecuted'],
    [0x1082, 'PidTagLastVerbExecutionTime'],
    [0x1096, 'PidTagBlockStatus'],
    [0x10c3, 'PidTagICalendarStartTime'],
    [0x10c4, 'PidTagICalendarEndTime'],
    [0x10f2, 'Unknown_10F2'],
    [0x10f3, 'PidTagUrlCompName'],
    [0x10f4, 'PidTagAttributeHidden'],
    [0x10f5, 'PidTagAttributeSystem'],
    [0x10f6, 'PidTagAttributeReadOnly'],
    [0x3001, 'PidTagDisplayName'],
    [0x3002, 'PidTagAddressType'],
    [0x3003, 'PidTagEmailAddress'],
    [0x3007, 'PidTagCreationTime'],
    [0x3008, 'PidTagLastModificationTime'],
    [0x300b, 'PidTagSearchKey'],
    [0x3701, 'PidTagAttachDataBinary'],
    [0x3702, 'PidTagAttachEncoding'],
    [0x3703, 'PidTagAttachExtension'],
    [0x3704, 'PidTagAttachFilename'],
    [0x3705, 'PidTagAttachMethod'],
    [0x3709, 'PidTagAttachRendering'],
    [0x370b, 'PidTagRenderingPosition'],
    [0x370e, 'PidTagAttachMimeTag'],
    [0x370a, 'PidTagAttachTag'],
    [0x3712, 'PidTagAttachContentId'],
    [0x3714, 'PidTagAttachFlags'],
    [0x3900, 'PidTagDisplayType'],
    [0x39fe, 'PidTagPrimarySmtpAddress'],
    [0x39ff, 'PidTag7BitDisplayName'],
    [0x3a00, 'PidTagAccount'],
    [0x3a08, 'PidTagBusinessTelephoneNumber'],
    [0x3a20, 'PidTagTransmittableDisplayName'],
    [0x3a40, 'PidTagSendRichInfo'],
    [0x3a70, 'PidTagUserX509Certificate'],
    [0x3a71, 'PidTagSendInternetEncoding'],
    [0x3fde, 'PidTagInternetCodepage'],
    [0x3ff1, 'PidTagMessageLocaleId'],
    [0x3ffd, 'PidTagMessageCodepage'],
    [0x3ff9, 'PidTagCreatorName'],
    [0x4019, 'PidTagSenderFlags'],
    [0x401a, 'PidTagSentRepresentingFlags'],
    [0x401b, 'PidTagReceivedByFlags'],
    [0x401c, 'PidTagReceivedRepresentingFlags'],
    [0x403e, 'Unknown_403E'],
    [0x4a08, 'Unknown_4A08'],
    [0x5902, 'PidTagInternetMailOverrideFormat'],
    [0x5909, 'PidTagMessageEditorFormat'],
    [0x5fde, 'PidTagRecipientResourceState'],
    [0x5fdf, 'PidTagRecipientOrder'],
    [0x5feb, 'Unknown_5FEB'],
    [0x5fef, 'Unknown_5FEF'],
    [0x5ff2, 'Unknown_5FF2'],
    [0x5ff5, 'Unknown_5FF5'],
    [0x5ff6, 'PidTagRecipientDisplayName'],
    [0x5ff7, 'PidTagRecipientEntryId'],
    [0x5ffb, 'PidTagRecipientTrackStatusTime'],
    [0x5ffd, 'PidTagRecipientFlags'],
    [0x5fff, 'PidTagRecipientTrackStatus'],
    [0x6001, 'PidTagNickname'],
    [0x6610, 'Unknown_6610'],
    [0x6614, 'Unknown_6614'],
    [0x6617, 'Unknown_6617'],
    [0x6619, 'PidTagUserEntryId'],
    [0x6743, 'Unknown_6743'],
    [0x6744, 'Unknown_6744'],
    [0x67f2, 'PidTagLtpRowId'],
    [0x67f3, 'PidTagLtpRowVer'],
    [0x67f4, 'Unknown_67F4'],
    [0x7ffa, 'PidTagAttachmentLinkId'],
    [0x7ffb, 'PidTagExceptionStartTime'],
    [0x7ffc, 'PidTagExceptionEndTime'],
    [0x7ffd, 'PidTagAttachmentFlags'],
    [0x7ffe, 'PidTagAttachmentHidden'],
    [0x7fff, 'PidTagAttachmentContactPhoto'],
    [0x3ffa, 'PidTagLastModifiedName_W'],
    [0x3ffb, 'PidTagLastModifierEntryId'],
]);
// Heap node
PSTUtil.NID_TYPE_HID = 0x00;
// Internal node (section 2.4.1)
PSTUtil.NID_TYPE_INTERNAL = 0x01;
// Normal Folder object (PC)
PSTUtil.NID_TYPE_NORMAL_FOLDER = 0x02;
// Search Folder object (PC)
PSTUtil.NID_TYPE_SEARCH_FOLDER = 0x03;
// Normal Message object (PC)
PSTUtil.NID_TYPE_NORMAL_MESSAGE = 0x04;
// Attachment object (PC)
PSTUtil.NID_TYPE_ATTACHMENT = 0x05;
// Queue of changed objects for search Folder objects
PSTUtil.NID_TYPE_SEARCH_UPDATE_QUEUE = 0x06;
// Defines the search criteria for a search folder object
PSTUtil.NID_TYPE_SEARCH_CRITERIA_OBJECT = 0x07;
// Folder associated info (FAI) message object (PC)
PSTUtil.NID_TYPE_ASSOC_MESSAGE = 0x08;
// Internal, persisted view-related
PSTUtil.NID_TYPE_CONTENTS_TABLE_INDEX = 0x0a;
// Receive Folder object (Inbox)
PSTUtil.NID_TYPE_RECEIVE_FOLDER_TABLE = 0x0b;
// Outbound queue (Outbox)
PSTUtil.NID_TYPE_OUTGOING_QUEUE_TABLE = 0x0c;
// Hierarchy table (TC)
PSTUtil.NID_TYPE_HIERARCHY_TABLE = 0x0d;
// Contents table (TC)
PSTUtil.NID_TYPE_CONTENTS_TABLE = 0x0e;
// FAI contents table (TC)
PSTUtil.NID_TYPE_ASSOC_CONTENTS_TABLE = 0x0f;
// Contents table (TC) of a search folder object
PSTUtil.NID_TYPE_SEARCH_CONTENTS_TABLE = 0x10;
// Attachment table (TC)
PSTUtil.NID_TYPE_ATTACHMENT_TABLE = 0x11;
// Recipient table (TC)
PSTUtil.NID_TYPE_RECIPIENT_TABLE = 0x12;
// Internal, persisted view-related
PSTUtil.NID_TYPE_SEARCH_TABLE_INDEX = 0x13;
// LTP
PSTUtil.NID_TYPE_LTP = 0x1f;
/**
 * Determine if character is alphanumeric
 *
 * @static
 * @memberof PSTUtil
 */
PSTUtil.isAlphaNumeric = (ch) => {
    return ch.match(/^[a-z0-9]+$/i) !== null;
};
