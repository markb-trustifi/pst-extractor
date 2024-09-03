"use strict";
var AddressBookType;
(function (AddressBookType) {
    /*
    The type of object that an address book entry ID represents.
  
    MUST be one of these or it is invalid.,
    */
    AddressBookType[AddressBookType["LOCAL_MAIL_USER"] = 0] = "LOCAL_MAIL_USER";
    AddressBookType[AddressBookType["DISTRIBUTION_LIST"] = 1] = "DISTRIBUTION_LIST";
    AddressBookType[AddressBookType["BULLETIN_BOARD_OR_PUBLIC_FOLDER"] = 2] = "BULLETIN_BOARD_OR_PUBLIC_FOLDER";
    AddressBookType[AddressBookType["AUTOMATED_MAILBOX"] = 3] = "AUTOMATED_MAILBOX";
    AddressBookType[AddressBookType["ORGANIZATIONAL_MAILBOX"] = 4] = "ORGANIZATIONAL_MAILBOX";
    AddressBookType[AddressBookType["PRIVATE_DISTRIBUTION_LIST"] = 5] = "PRIVATE_DISTRIBUTION_LIST";
    AddressBookType[AddressBookType["REMOTE_MAIL_USER"] = 6] = "REMOTE_MAIL_USER";
    AddressBookType[AddressBookType["CONTAINER"] = 256] = "CONTAINER";
    AddressBookType[AddressBookType["TEMPLATE"] = 257] = "TEMPLATE";
    AddressBookType[AddressBookType["ONE_OFF_USER"] = 258] = "ONE_OFF_USER";
    AddressBookType[AddressBookType["SEARCH"] = 512] = "SEARCH";
})(AddressBookType || (AddressBookType = {}));
var ADVF;
(function (ADVF) {
    ADVF[ADVF["ADVF_NODATA"] = 1] = "ADVF_NODATA";
    ADVF[ADVF["ADVF_PRIMEFIRST"] = 2] = "ADVF_PRIMEFIRST";
    ADVF[ADVF["ADVF_ONLYONCE"] = 4] = "ADVF_ONLYONCE";
    ADVF[ADVF["ADVF_DATAONSTOP"] = 64] = "ADVF_DATAONSTOP";
    ADVF[ADVF["ADVFCACHE_NOHANDLER"] = 8] = "ADVFCACHE_NOHANDLER";
    ADVF[ADVF["ADVFCACHE_FORVEBUILTIN"] = 16] = "ADVFCACHE_FORVEBUILTIN";
    ADVF[ADVF["ADVFCACHE_ONSAVE"] = 32] = "ADVFCACHE_ONSAVE";
})(ADVF || (ADVF = {}));
var AppointmentAuxilaryFlag;
(function (AppointmentAuxilaryFlag) {
    /*
    Describes the auxilary state of the object.
  
    * COPIED: The Calendar object was copied from another Calendar folder.,
    * FORCE_MEETING_RESPONSE: The client of server can require that a Meeting,
      Response object be sent to the organizer when a response is chosen.,
    * FORWARDED: The object was forwarded by the organizer or another recipient.,
    * REPAIR_UPDATE_MESSAGE: The meeting request is a Repair Update Message sent,
      from a server-side calendar repair system.,
    */
    AppointmentAuxilaryFlag[AppointmentAuxilaryFlag["COPIED"] = 1] = "COPIED";
    AppointmentAuxilaryFlag[AppointmentAuxilaryFlag["FORCE_MEETING_RESPONSE"] = 2] = "FORCE_MEETING_RESPONSE";
    AppointmentAuxilaryFlag[AppointmentAuxilaryFlag["FORWARDED"] = 4] = "FORWARDED";
    AppointmentAuxilaryFlag[AppointmentAuxilaryFlag["REPAIR_UPDATE_MESSAGE"] = 32] = "REPAIR_UPDATE_MESSAGE";
})(AppointmentAuxilaryFlag || (AppointmentAuxilaryFlag = {}));
var AppointmentColor;
(function (AppointmentColor) {
    AppointmentColor[AppointmentColor["NONE"] = 0] = "NONE";
    AppointmentColor[AppointmentColor["RED"] = 1] = "RED";
    AppointmentColor[AppointmentColor["BLUE"] = 2] = "BLUE";
    AppointmentColor[AppointmentColor["GREEN"] = 3] = "GREEN";
    AppointmentColor[AppointmentColor["GREY"] = 4] = "GREY";
    AppointmentColor[AppointmentColor["ORANGE"] = 5] = "ORANGE";
    AppointmentColor[AppointmentColor["CYAN"] = 6] = "CYAN";
    AppointmentColor[AppointmentColor["OLIVE"] = 7] = "OLIVE";
    AppointmentColor[AppointmentColor["PURPLE"] = 8] = "PURPLE";
    AppointmentColor[AppointmentColor["TEAL"] = 9] = "TEAL";
    AppointmentColor[AppointmentColor["YELLOW"] = 10] = "YELLOW";
})(AppointmentColor || (AppointmentColor = {}));
var AppointmentStateFlag;
(function (AppointmentStateFlag) {
    /*
    The appointment start of the object.
  
    * MEETING: The object is a Meeting object or meeting-related object.,
    * RECEIVED: The represented object was received from someone else.,
    * CANCELED: The Meeting object that is represented has been canceled.,
    */
    AppointmentStateFlag[AppointmentStateFlag["MEETING"] = 1] = "MEETING";
    AppointmentStateFlag[AppointmentStateFlag["RECEIVED"] = 2] = "RECEIVED";
    AppointmentStateFlag[AppointmentStateFlag["CANCELED"] = 4] = "CANCELED";
})(AppointmentStateFlag || (AppointmentStateFlag = {}));
var AttachmentPermissionType;
(function (AttachmentPermissionType) {
    /*
    The permission type data associated with a web reference attachment.,
    */
    AttachmentPermissionType[AttachmentPermissionType["NONE"] = 0] = "NONE";
    AttachmentPermissionType[AttachmentPermissionType["VIEW"] = 1] = "VIEW";
    AttachmentPermissionType[AttachmentPermissionType["EDIT"] = 2] = "EDIT";
})(AttachmentPermissionType || (AttachmentPermissionType = {}));
var AttachmentType;
(function (AttachmentType) {
    /*
    The type represented by the attachment.
  
    * DATA: An attachment stored as plain bytes in the MSG file.,
    * MSG: A normally embedded MSG file.,
    * WEB: An attachment referencing a resource on the web.,
    * SIGNED: An attachment of a signed message that is *not* an MSG file.,
    * SIGNED_EMBEDDED: An MSG file embedded in a signed message.,
    * BROKEN: An attachment with a critical issue.,
    * UNSUPPORTED: An attachment that does not match any supported types.,
    * UNKNOWN: The attachment type could not be determined.,
    */
    AttachmentType[AttachmentType["DATA"] = 0] = "DATA";
    AttachmentType[AttachmentType["MSG"] = 1] = "MSG";
    AttachmentType[AttachmentType["WEB"] = 2] = "WEB";
    AttachmentType[AttachmentType["SIGNED"] = 3] = "SIGNED";
    AttachmentType[AttachmentType["BROKEN"] = 4] = "BROKEN";
    AttachmentType[AttachmentType["UNSUPPORTED"] = 5] = "UNSUPPORTED";
    AttachmentType[AttachmentType["SIGNED_EMBEDDED"] = 6] = "SIGNED_EMBEDDED";
    AttachmentType[AttachmentType["CUSTOM"] = 7] = "CUSTOM";
    AttachmentType[AttachmentType["UNKNOWN"] = 4294967295] = "UNKNOWN";
})(AttachmentType || (AttachmentType = {}));
var BCImageAlignment;
(function (BCImageAlignment) {
    BCImageAlignment[BCImageAlignment["STRETCH"] = 0] = "STRETCH";
    BCImageAlignment[BCImageAlignment["TOP_LEFT"] = 1] = "TOP_LEFT";
    BCImageAlignment[BCImageAlignment["TOP_CENTER"] = 2] = "TOP_CENTER";
    BCImageAlignment[BCImageAlignment["TOP_RIGHT"] = 3] = "TOP_RIGHT";
    BCImageAlignment[BCImageAlignment["MIDDLE_LEFT"] = 4] = "MIDDLE_LEFT";
    BCImageAlignment[BCImageAlignment["MIDDLE_CENTER"] = 5] = "MIDDLE_CENTER";
    BCImageAlignment[BCImageAlignment["MIDDLE_RIGHT"] = 6] = "MIDDLE_RIGHT";
    BCImageAlignment[BCImageAlignment["BOTTOM_LEFT"] = 7] = "BOTTOM_LEFT";
    BCImageAlignment[BCImageAlignment["BOTTOM_CENTER"] = 8] = "BOTTOM_CENTER";
    BCImageAlignment[BCImageAlignment["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
})(BCImageAlignment || (BCImageAlignment = {}));
var BCImageSource;
(function (BCImageSource) {
    BCImageSource[BCImageSource["CONTACT_PHOTO"] = 0] = "CONTACT_PHOTO";
    BCImageSource[BCImageSource["CARD_PHOTO"] = 1] = "CARD_PHOTO";
})(BCImageSource || (BCImageSource = {}));
var BCLabelFormat;
(function (BCLabelFormat) {
    /*
    The format for a label of a business card.
  
    If the bit for ``RIGHT_TO_LEFT`` is not set, the is left to,
    right.
  
    ALIGN_LEFT and ALIGN_RIGHT are mutually exclusive.,
    */
    // Define normal values.,
    BCLabelFormat[BCLabelFormat["NO_LABEL"] = 0] = "NO_LABEL";
    BCLabelFormat[BCLabelFormat["ALIGN_RIGHT"] = 1] = "ALIGN_RIGHT";
    BCLabelFormat[BCLabelFormat["ALIGN_LEFT"] = 2] = "ALIGN_LEFT";
    BCLabelFormat[BCLabelFormat["RIGHT_TO_LEFT"] = 4] = "RIGHT_TO_LEFT";
})(BCLabelFormat || (BCLabelFormat = {}));
var BCTemplateID;
(function (BCTemplateID) {
    /*
    The template ID for a business card.
  
    * IM_ALIGN_LEFT: The image area will be left aligned, stretching the full,
      height of the card vertically; text fields will appear to the right of,
      the image area.,
    * IM_ALIGN_RIGHT: The image area will be right aligned, stretching the full,
      height of the card vertically; text fields will appear to the left of,
      the image area.,
    * IM_ALIGN_TOP: The image area will be aligned to the top, stretching the,
      full width of the card horizontally; text fields will appear under the,
      image area.,
    * IM_ALIGN_BOTTOM: The image area will be aligned to the bottom, stretching,
      the full width of the card horizontally; text fields will appear above,
      the image area.,
    * NO_IMAGE: No image area is included in the card, only text fields are,
      included.,
    * BACKGROUND: The image area will be used as a background for the card,
      stretching the full height and width of the card. Text fields are,
      displayed on top of the image area.,
    */
    BCTemplateID[BCTemplateID["IM_ALIGN_LEFT"] = 0] = "IM_ALIGN_LEFT";
    BCTemplateID[BCTemplateID["IM_ALIGN_RIGHT"] = 1] = "IM_ALIGN_RIGHT";
    BCTemplateID[BCTemplateID["IM_ALIGN_TOP"] = 2] = "IM_ALIGN_TOP";
    BCTemplateID[BCTemplateID["IM_ALIGN_BOTTOM"] = 3] = "IM_ALIGN_BOTTOM";
    BCTemplateID[BCTemplateID["NO_IMAGE"] = 4] = "NO_IMAGE";
    BCTemplateID[BCTemplateID["BACKGROUND"] = 5] = "BACKGROUND";
})(BCTemplateID || (BCTemplateID = {}));
var BCTextFormat;
(function (BCTextFormat) {
    /*
    The alignment and formatting for the text field.
  
    If none of the bits are set, the text field is displayed as a single line,
    left-aligned.
  
    RIGHT and CENTER are mutually exclusive.,
    */
    BCTextFormat[BCTextFormat["DEFAULT"] = 0] = "DEFAULT";
    BCTextFormat[BCTextFormat["MULTILINE"] = 1] = "MULTILINE";
    BCTextFormat[BCTextFormat["BOLD"] = 2] = "BOLD";
    BCTextFormat[BCTextFormat["ITALIC"] = 4] = "ITALIC";
    BCTextFormat[BCTextFormat["UNDERLINE"] = 8] = "UNDERLINE";
    BCTextFormat[BCTextFormat["RIGHT"] = 16] = "RIGHT";
    BCTextFormat[BCTextFormat["CENTER"] = 32] = "CENTER";
})(BCTextFormat || (BCTextFormat = {}));
var BodyTypes;
(function (BodyTypes) {
    /*
    Enum representing the types of bodies found in a message.
  
    This does not include bodies generated from other sources, and so is a good,
    detection method for generated bodies (if you check a body and it is not,
    null, but it is not listed in the enum, then it was generated from another,
    body).
  
    This is an IntFlag enum, so to check if a body was found use the in operator,
    with the body you are checking. For example:
  
    .. code-block:: python
  
        >>> rtfFound: bool = BodyTypes.RTF in msg.detectedBodies,
    */
    BodyTypes[BodyTypes["NONE"] = 0] = "NONE";
    BodyTypes[BodyTypes["PLAIN"] = 1] = "PLAIN";
    BodyTypes[BodyTypes["RTF"] = 2] = "RTF";
    BodyTypes[BodyTypes["HTML"] = 4] = "HTML";
    BodyTypes[BodyTypes["ALL"] = 7] = "ALL";
})(BodyTypes || (BodyTypes = {}));
var BusyStatus;
(function (BusyStatus) {
    /*
    The availability of a use for the event described by the object.
  
    * OL_FREE: The user is available.,
    * OL_TENTATIVE: The user has a tentative event scheduled.,
    * OL_BUSY: The user is busy.,
    * OL_OUT_OF_OFFICE: The user is Out of Office.,
    * OL_WORKING_ELSEWHERE: The user is working from a location other than the,
      office.,
    */
    BusyStatus[BusyStatus["OL_FREE"] = 0] = "OL_FREE";
    BusyStatus[BusyStatus["OL_TENTATIVE"] = 1] = "OL_TENTATIVE";
    BusyStatus[BusyStatus["OL_BUSY"] = 2] = "OL_BUSY";
    BusyStatus[BusyStatus["OL_OUT_OF_OFFICE"] = 3] = "OL_OUT_OF_OFFICE";
    BusyStatus[BusyStatus["OL_WORKING_ELSEWHERE"] = 4] = "OL_WORKING_ELSEWHERE";
})(BusyStatus || (BusyStatus = {}));
var ClientIntentFlag;
(function (ClientIntentFlag) {
    /*
    An action a user has taken on a Meeting object.
  
    * MANAGER: The user is the owner of the Meeting object's Calendar folder. If,
      set, DELEGATE SHOULD NOT be set.,
    * DELEGATE: The user is a delegate acting on a Meeting object in a,
      delegator's Calendar folder. If set, MANAGER SHOULD NOT be set.,
    * DELETED_WITH_NO_RESPONSE: The user deleted the Meeting object with no,
      response sent to the organizer.,
    * DELETED_EXCEPTION_WITH_NO_RESPONSE: The user deleted an exception to a,
      recurring series with no response sent to the organizer.,
    * RESPONDED_TENTATIVE: The user tentatively accepted the meeting request.,
    * RESPONSED_ACCEPT: The user accepted the meeting request.,
    * RESPONDED_DECLINE: The user declined the meeting request.,
    * MODIFIED_START_TIME: The user modified the start time.,
    * MODIFIED_END_TIME: The user modified the end time.,
    * MODIFIED_LOCATION: The user changed the location of the meeting.,
    * RESPONDED_EXCEPTION_DECLINE: The user declined an exception to a recurring,
      series.,
    * CANCELED: The user canceled a meeting request.,
    * EXCEPTION_CANCELED: The user canceled an exception to a recurring series.,
    */
    ClientIntentFlag[ClientIntentFlag["MANAGER"] = 1] = "MANAGER";
    ClientIntentFlag[ClientIntentFlag["DELEGATE"] = 2] = "DELEGATE";
    ClientIntentFlag[ClientIntentFlag["DELETED_WITH_NO_RESPONSE"] = 4] = "DELETED_WITH_NO_RESPONSE";
    ClientIntentFlag[ClientIntentFlag["DELETED_EXCEPTION_WITH_NO_RESPONSE"] = 8] = "DELETED_EXCEPTION_WITH_NO_RESPONSE";
    ClientIntentFlag[ClientIntentFlag["RESPONDED_TENTATIVE"] = 16] = "RESPONDED_TENTATIVE";
    ClientIntentFlag[ClientIntentFlag["RESPONSED_ACCEPT"] = 32] = "RESPONSED_ACCEPT";
    ClientIntentFlag[ClientIntentFlag["RESPONDED_DECLINE"] = 64] = "RESPONDED_DECLINE";
    ClientIntentFlag[ClientIntentFlag["MODIFIED_START_TIME"] = 128] = "MODIFIED_START_TIME";
    ClientIntentFlag[ClientIntentFlag["MODIFIED_END_TIME"] = 256] = "MODIFIED_END_TIME";
    ClientIntentFlag[ClientIntentFlag["MODIFIED_LOCATION"] = 512] = "MODIFIED_LOCATION";
    ClientIntentFlag[ClientIntentFlag["RESPONDED_EXCEPTION_DECLINE"] = 1024] = "RESPONDED_EXCEPTION_DECLINE";
    ClientIntentFlag[ClientIntentFlag["CANCELED"] = 2048] = "CANCELED";
    ClientIntentFlag[ClientIntentFlag["EXCEPTION_CANCELED"] = 4096] = "EXCEPTION_CANCELED";
})(ClientIntentFlag || (ClientIntentFlag = {}));
var ClipboardFormat;
(function (ClipboardFormat) {
    /*
    The standard clipboard formats, as specified in [MS-OLEDS].,
    */
    ClipboardFormat[ClipboardFormat["CF_BITMAP"] = 2] = "CF_BITMAP";
    ClipboardFormat[ClipboardFormat["CF_METAFILEPICT"] = 3] = "CF_METAFILEPICT";
    ClipboardFormat[ClipboardFormat["CF_DIB"] = 8] = "CF_DIB";
    ClipboardFormat[ClipboardFormat["CF_ENHMETAFILE"] = 14] = "CF_ENHMETAFILE";
})(ClipboardFormat || (ClipboardFormat = {}));
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLACK"] = 1] = "BLACK";
})(Color || (Color = {}));
var ContactAddressIndex;
(function (ContactAddressIndex) {
    ContactAddressIndex[ContactAddressIndex["EMAIL_1"] = 0] = "EMAIL_1";
    ContactAddressIndex[ContactAddressIndex["EMAIL_2"] = 1] = "EMAIL_2";
    ContactAddressIndex[ContactAddressIndex["EMAIL_3"] = 2] = "EMAIL_3";
    ContactAddressIndex[ContactAddressIndex["FAX_1"] = 3] = "FAX_1";
    ContactAddressIndex[ContactAddressIndex["FAX_2"] = 4] = "FAX_2";
    ContactAddressIndex[ContactAddressIndex["FAX_3"] = 5] = "FAX_3";
})(ContactAddressIndex || (ContactAddressIndex = {}));
var ContactLinkState;
(function (ContactLinkState) {
    /*
    Values for PidLidContactLinkGlobalAddressListLinkState.
  
    * DUPLICATE_NOT_LINKED: The duplicate contact is not linked to the GAL,
      contact or the GAL contact is not downloaded.,
    * DUPLICATE_LINKED: The duplicate contact is linked to the GAL contact.,
    * DUPLICATE_CANNOT_LINK: The duplicate contact cannot be automatically,
      linked to the GAL contact.,
    */
    ContactLinkState[ContactLinkState["DUPLICATE_NOT_LINKED"] = 0] = "DUPLICATE_NOT_LINKED";
    ContactLinkState[ContactLinkState["DUPLICATE_LINKED"] = 1] = "DUPLICATE_LINKED";
    ContactLinkState[ContactLinkState["DUPLICATE_CANNOT_LINK"] = 2] = "DUPLICATE_CANNOT_LINK";
})(ContactLinkState || (ContactLinkState = {}));
var DeencapType;
(function (DeencapType) {
    /*
    Enum to specify to custom deencapsulation functions the type of data being,
    requested.,
    */
    DeencapType[DeencapType["PLAIN"] = 0] = "PLAIN";
    DeencapType[DeencapType["HTML"] = 1] = "HTML";
})(DeencapType || (DeencapType = {}));
var DevModeFields;
(function (DevModeFields) {
    DevModeFields[DevModeFields["DM_NUP"] = 2] = "DM_NUP";
    DevModeFields[DevModeFields["DM_SCALE"] = 8] = "DM_SCALE";
    DevModeFields[DevModeFields["DM_PAPERWIDTH"] = 16] = "DM_PAPERWIDTH";
    DevModeFields[DevModeFields["DM_PAPERLENGTH"] = 32] = "DM_PAPERLENGTH";
    DevModeFields[DevModeFields["DM_PAPERSIZE"] = 64] = "DM_PAPERSIZE";
    DevModeFields[DevModeFields["DM_ORIENTATION"] = 128] = "DM_ORIENTATION";
    DevModeFields[DevModeFields["DM_COLLATE"] = 256] = "DM_COLLATE";
    DevModeFields[DevModeFields["DM_TTOPTION"] = 512] = "DM_TTOPTION";
    DevModeFields[DevModeFields["DM_YRESOLUTION"] = 1024] = "DM_YRESOLUTION";
    DevModeFields[DevModeFields["DM_DUPLEX"] = 2048] = "DM_DUPLEX";
    DevModeFields[DevModeFields["DM_COLOR"] = 4096] = "DM_COLOR";
    DevModeFields[DevModeFields["DM_PRINTQUALITY"] = 8192] = "DM_PRINTQUALITY";
    DevModeFields[DevModeFields["DM_DEFAULTSOURCE"] = 16384] = "DM_DEFAULTSOURCE";
    DevModeFields[DevModeFields["DM_COPIES"] = 32768] = "DM_COPIES";
    DevModeFields[DevModeFields["DM_ICMMETHOD"] = 65536] = "DM_ICMMETHOD";
    DevModeFields[DevModeFields["DM_FORMNAME"] = 8388608] = "DM_FORMNAME";
    DevModeFields[DevModeFields["DM_DITHERTYPE"] = 536870912] = "DM_DITHERTYPE";
    DevModeFields[DevModeFields["DM_MEDIATYPE"] = 1073741824] = "DM_MEDIATYPE";
    DevModeFields[DevModeFields["DM_ICMINTENT"] = 2147483648] = "DM_ICMINTENT";
})(DevModeFields || (DevModeFields = {}));
var DirectoryEntryType;
(function (DirectoryEntryType) {
    DirectoryEntryType[DirectoryEntryType["UNALLOCATED"] = 0] = "UNALLOCATED";
    DirectoryEntryType[DirectoryEntryType["UNKNOWN"] = 0] = "UNKNOWN";
    DirectoryEntryType[DirectoryEntryType["STORAGE"] = 1] = "STORAGE";
    DirectoryEntryType[DirectoryEntryType["STREAM"] = 2] = "STREAM";
    DirectoryEntryType[DirectoryEntryType["ROOT_STORAGE"] = 5] = "ROOT_STORAGE";
})(DirectoryEntryType || (DirectoryEntryType = {}));
var DisplayType;
(function (DisplayType) {
    DisplayType[DisplayType["MAILUSER"] = 0] = "MAILUSER";
    DisplayType[DisplayType["DISTLIST"] = 1] = "DISTLIST";
    DisplayType[DisplayType["FORUM"] = 2] = "FORUM";
    DisplayType[DisplayType["AGENT"] = 3] = "AGENT";
    DisplayType[DisplayType["ORGANIZATION"] = 4] = "ORGANIZATION";
    DisplayType[DisplayType["PRIVATE_DISTLIST"] = 5] = "PRIVATE_DISTLIST";
    DisplayType[DisplayType["REMOTE_MAILUSER"] = 6] = "REMOTE_MAILUSER";
    DisplayType[DisplayType["CONTAINER"] = 256] = "CONTAINER";
    DisplayType[DisplayType["TEMPLATE"] = 257] = "TEMPLATE";
    DisplayType[DisplayType["ADDRESS_TEMPLATE"] = 258] = "ADDRESS_TEMPLATE";
    DisplayType[DisplayType["SEARCH"] = 512] = "SEARCH";
})(DisplayType || (DisplayType = {}));
var DMPaperSize;
(function (DMPaperSize) {
    /*
    The size of the output media for printers.
  
    Value *SHOULD* be one of these, however it MAY be a device-specific value,
    that is greater than or equal to 0x0100.,
    */
    DMPaperSize[DMPaperSize["DMPAPER_LETTER"] = 1] = "DMPAPER_LETTER";
    DMPaperSize[DMPaperSize["DMPAPER_LETTERSMALL"] = 2] = "DMPAPER_LETTERSMALL";
    DMPaperSize[DMPaperSize["DMPAPER_TABLOID"] = 3] = "DMPAPER_TABLOID";
    DMPaperSize[DMPaperSize["DMPAPER_LEDGER"] = 4] = "DMPAPER_LEDGER";
    DMPaperSize[DMPaperSize["DMPAPER_LEGAL"] = 5] = "DMPAPER_LEGAL";
    DMPaperSize[DMPaperSize["DMPAPER_STATEMENT"] = 6] = "DMPAPER_STATEMENT";
    DMPaperSize[DMPaperSize["DMPAPER_EXECUTIVE"] = 7] = "DMPAPER_EXECUTIVE";
    DMPaperSize[DMPaperSize["DMPAPER_A3"] = 8] = "DMPAPER_A3";
    DMPaperSize[DMPaperSize["DMPAPER_A4"] = 9] = "DMPAPER_A4";
    DMPaperSize[DMPaperSize["DMPAPER_A4SMALL"] = 10] = "DMPAPER_A4SMALL";
    DMPaperSize[DMPaperSize["DMPAPER_A5"] = 11] = "DMPAPER_A5";
    DMPaperSize[DMPaperSize["DMPAPER_B4"] = 12] = "DMPAPER_B4";
    DMPaperSize[DMPaperSize["DMPAPER_B5"] = 13] = "DMPAPER_B5";
    DMPaperSize[DMPaperSize["DMPAPER_FOLIO"] = 14] = "DMPAPER_FOLIO";
    DMPaperSize[DMPaperSize["DMPAPER_QUARTO"] = 15] = "DMPAPER_QUARTO";
    DMPaperSize[DMPaperSize["DMPAPER_10X14"] = 16] = "DMPAPER_10X14";
    DMPaperSize[DMPaperSize["DMPAPER_11X17"] = 17] = "DMPAPER_11X17";
    DMPaperSize[DMPaperSize["DMPAPER_NOTE"] = 18] = "DMPAPER_NOTE";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_9"] = 19] = "DMPAPER_ENV_9";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_10"] = 20] = "DMPAPER_ENV_10";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_11"] = 21] = "DMPAPER_ENV_11";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_12"] = 22] = "DMPAPER_ENV_12";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_14"] = 23] = "DMPAPER_ENV_14";
    DMPaperSize[DMPaperSize["DMPAPER_CSHEET"] = 24] = "DMPAPER_CSHEET";
    DMPaperSize[DMPaperSize["DMPAPER_DSHEET"] = 25] = "DMPAPER_DSHEET";
    DMPaperSize[DMPaperSize["DMPAPER_ESHEET"] = 26] = "DMPAPER_ESHEET";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_DL"] = 27] = "DMPAPER_ENV_DL";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_C5"] = 28] = "DMPAPER_ENV_C5";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_C3"] = 29] = "DMPAPER_ENV_C3";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_C4"] = 30] = "DMPAPER_ENV_C4";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_C6"] = 31] = "DMPAPER_ENV_C6";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_C65"] = 32] = "DMPAPER_ENV_C65";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_B4"] = 33] = "DMPAPER_ENV_B4";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_B5"] = 34] = "DMPAPER_ENV_B5";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_B6"] = 35] = "DMPAPER_ENV_B6";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_ITALY"] = 36] = "DMPAPER_ENV_ITALY";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_MONARCH"] = 37] = "DMPAPER_ENV_MONARCH";
    DMPaperSize[DMPaperSize["DMPAPER_ENV_PERSONAL"] = 38] = "DMPAPER_ENV_PERSONAL";
    DMPaperSize[DMPaperSize["DMPAPER_FANFOLD_US"] = 39] = "DMPAPER_FANFOLD_US";
    DMPaperSize[DMPaperSize["DMPAPER_FANFOLD_STD_GERMAN"] = 40] = "DMPAPER_FANFOLD_STD_GERMAN";
    DMPaperSize[DMPaperSize["DMPAPER_FANFOLD_LGL_GERMAN"] = 41] = "DMPAPER_FANFOLD_LGL_GERMAN";
    DMPaperSize[DMPaperSize["DMPAPER_DBL_JAPANESE_POSTCARD"] = 69] = "DMPAPER_DBL_JAPANESE_POSTCARD";
    DMPaperSize[DMPaperSize["DMPAPER_A6"] = 70] = "DMPAPER_A6";
    DMPaperSize[DMPaperSize["DMPAPER_JENV_KAKU2"] = 71] = "DMPAPER_JENV_KAKU2";
    DMPaperSize[DMPaperSize["DMPAPER_JENV_KAKU3"] = 72] = "DMPAPER_JENV_KAKU3";
    DMPaperSize[DMPaperSize["DMPAPER_JENV_CHOU3"] = 73] = "DMPAPER_JENV_CHOU3";
    DMPaperSize[DMPaperSize["DMPAPER_JENV_CHOU4"] = 74] = "DMPAPER_JENV_CHOU4";
    DMPaperSize[DMPaperSize["DMPAPER_LETTER_ROTATED"] = 75] = "DMPAPER_LETTER_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_A3_ROTATED"] = 76] = "DMPAPER_A3_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_A4_ROTATED"] = 77] = "DMPAPER_A4_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_A5_ROTATED"] = 78] = "DMPAPER_A5_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_B4_JIS_ROTATED"] = 79] = "DMPAPER_B4_JIS_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_B5_JIS_ROTATED"] = 80] = "DMPAPER_B5_JIS_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_JAPANESE_POSTCARD_ROTATED"] = 81] = "DMPAPER_JAPANESE_POSTCARD_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_DBL_JAPANESE_POSTCARD_ROTATED"] = 82] = "DMPAPER_DBL_JAPANESE_POSTCARD_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_A6_ROTATED"] = 83] = "DMPAPER_A6_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_JENV_KAKU2_ROTATED"] = 84] = "DMPAPER_JENV_KAKU2_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_JENV_KAKU3_ROTATED"] = 85] = "DMPAPER_JENV_KAKU3_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_JENV_CHOU3_ROTATED"] = 86] = "DMPAPER_JENV_CHOU3_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_JENV_CHOU4_ROTATED"] = 87] = "DMPAPER_JENV_CHOU4_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_B6_JIS"] = 88] = "DMPAPER_B6_JIS";
    DMPaperSize[DMPaperSize["DMPAPER_B6_JIS_ROTATED"] = 89] = "DMPAPER_B6_JIS_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_12X11"] = 90] = "DMPAPER_12X11";
    DMPaperSize[DMPaperSize["DMPAPER_JENV_YOU4"] = 91] = "DMPAPER_JENV_YOU4";
    DMPaperSize[DMPaperSize["DMPAPER_JENV_YOU4_ROTATED"] = 92] = "DMPAPER_JENV_YOU4_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_P16K"] = 93] = "DMPAPER_P16K";
    DMPaperSize[DMPaperSize["DMPAPER_P32K"] = 94] = "DMPAPER_P32K";
    DMPaperSize[DMPaperSize["DMPAPER_P32KBIG"] = 95] = "DMPAPER_P32KBIG";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_1"] = 96] = "DMPAPER_PENV_1";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_2"] = 97] = "DMPAPER_PENV_2";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_3"] = 98] = "DMPAPER_PENV_3";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_4"] = 99] = "DMPAPER_PENV_4";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_5"] = 100] = "DMPAPER_PENV_5";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_6"] = 101] = "DMPAPER_PENV_6";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_7"] = 102] = "DMPAPER_PENV_7";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_8"] = 103] = "DMPAPER_PENV_8";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_9"] = 104] = "DMPAPER_PENV_9";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_10"] = 105] = "DMPAPER_PENV_10";
    DMPaperSize[DMPaperSize["DMPAPER_P16K_ROTATED"] = 106] = "DMPAPER_P16K_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_P32K_ROTATED"] = 107] = "DMPAPER_P32K_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_P32KBIG_ROTATED"] = 108] = "DMPAPER_P32KBIG_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_1_ROTATED"] = 109] = "DMPAPER_PENV_1_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_2_ROTATED"] = 110] = "DMPAPER_PENV_2_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_3_ROTATED"] = 111] = "DMPAPER_PENV_3_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_4_ROTATED"] = 112] = "DMPAPER_PENV_4_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_5_ROTATED"] = 113] = "DMPAPER_PENV_5_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_6_ROTATED"] = 114] = "DMPAPER_PENV_6_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_7_ROTATED"] = 115] = "DMPAPER_PENV_7_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_8_ROTATED"] = 116] = "DMPAPER_PENV_8_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_9_ROTATED"] = 117] = "DMPAPER_PENV_9_ROTATED";
    DMPaperSize[DMPaperSize["DMPAPER_PENV_10_ROTATED"] = 118] = "DMPAPER_PENV_10_ROTATED";
    // TODO
})(DMPaperSize || (DMPaperSize = {}));
var DVAspect;
(function (DVAspect) {
    /*
    Part of the extra data for Outlook signatures.

    Different sources seem to disagree on the meanings, so I'm sticking to the,
    meanings in the official Microsoft documentation of the DVASPECT,
    enumeration.,
    */
    DVAspect[DVAspect["CONTENT"] = 1] = "CONTENT";
    DVAspect[DVAspect["THUMBNAIL"] = 2] = "THUMBNAIL";
    DVAspect[DVAspect["ICON"] = 4] = "ICON";
    DVAspect[DVAspect["DOCPRINT"] = 8] = "DOCPRINT";
})(DVAspect || (DVAspect = {}));
var ElectronicAddressProperties;
(function (ElectronicAddressProperties) {
    ElectronicAddressProperties[ElectronicAddressProperties["EMAIL_1"] = 0] = "EMAIL_1";
    ElectronicAddressProperties[ElectronicAddressProperties["EMAIL_2"] = 1] = "EMAIL_2";
    ElectronicAddressProperties[ElectronicAddressProperties["EMAIL_3"] = 2] = "EMAIL_3";
    ElectronicAddressProperties[ElectronicAddressProperties["BUSINESS_FAX"] = 3] = "BUSINESS_FAX";
    ElectronicAddressProperties[ElectronicAddressProperties["HOME_FAX"] = 4] = "HOME_FAX";
    ElectronicAddressProperties[ElectronicAddressProperties["PRIMARY_FAX"] = 5] = "PRIMARY_FAX";
})(ElectronicAddressProperties || (ElectronicAddressProperties = {}));
var EntryIDType;
(function (EntryIDType) {
    /*
    Converts a UID to the type of Entry ID structure.,
    */
    // This is the same as the one used for permanent IDs, and the strucutre is,
    // near identical too. Anything that needs a PermanentEntryID will need to,
    // specifically ask for it instead of autogenerating it.,
    EntryIDType["ADDRESS_BOOK_RECIPIENT"] = "\u00DC\u00A7@\u00C8\u00C0B\u0010\u001A\u00B4\u00B9\b\0+/\u00E1\u0082";
    // Contact address or personal distribution list recipient.,
    EntryIDType["CA_OR_PDL_RECIPIENT"] = "\u00FEB\u00AA\n\u0018\u00C7\u001A\u0010\u00E8\u0085\ve\u001C$\0\0";
    // This is also used for the Store Object EntryID structure.,
    EntryIDType["NNTP_NEWSGROUP_FOLDER"] = "8\u00A1\u00BB\u0010\u0005\u00E5\u0010\u001A\u00A1\u00BB\b\0+*V\u00C2";
    EntryIDType["ONE_OFF_RECIPIENT"] = "\u0081+\u001F\u00A4\u00BE\u00A3\u0010\u0019\u009Dn\0\u00DD\u0001\u000FT\u0002";
    EntryIDType["PUBLIC_MESSAGE_STORE"] = "\u001ADs\u0090\u00AAf\u0011\u00CD\u009B\u00C8\0\u00AA\0/\u00C4Z";
    // [MS-OXOCNTC] WrappedEntryId Structure.,
    EntryIDType["WRAPPED"] = "\u00C0\u0091\u00AD\u00D3Q\u009D\u00CF\u0011\u00A4\u00A9\0\u00AA\0G\u00FA\u00A4";
})(EntryIDType || (EntryIDType = {}));
var EntryIDTypeHex;
(function (EntryIDTypeHex) {
    /*
    Converts a UID to the type of Entry ID structure.
  
    Uses a hex string instead of bytes for the value.,
    */
    EntryIDTypeHex["ADDRESS_BOOK_RECIPIENT"] = "DCA740C8C042101AB4B908002B2FE182";
    // Contact address or personal distribution list recipient.,
    EntryIDTypeHex["CA_OR_PDL_RECIPIENT"] = "FE42AA0A18C71A10E8850B651C240000";
    EntryIDTypeHex["NNTP_NEWSGROUP_FOLDER"] = "38A1BB1005E5101AA1BB08002B2A56C2";
    EntryIDTypeHex["ONE_OFF_RECIPIENT"] = "812B1FA4BEA310199D6E00DD010F5402";
    EntryIDTypeHex["PUBLIC_MESSAGE_STORE"] = "1A447390AA6611CD9BC800AA002FC45A";
    // [MS-OXOCNTC] WrappedEntryId Structure.,
    EntryIDTypeHex["WRAPPED"] = "C091ADD3519DCF11A4A900AA0047FAA4";
})(EntryIDTypeHex || (EntryIDTypeHex = {}));
var ErrorBehavior;
(function (ErrorBehavior) {
    /*
    The behavior to follow when handling an error in an MSG file and it's,
    attachments.
  
    Specifying an option indicates the behavior for the situation is to log a,
    message, if anything, instead of raising an exception. This is an int flag,
    enum, so the options you want will be ORed with each other.
  
    * THROW: Throw the exception regardless of type.,
    * ATTACH_NOT_IMPLEMENTED: Silence the exception for NotImplementedError.,
    * ATTACH_BROKEN: Silence the exception for broken attachments.,
    * CUSTOM_ATTACH_TOLERANT: Makes custom attachments more tolerant for ,
      data that is validated but not used.,
    * ATTACH_SUPPRESS_ALL: Silence the exception for NotImplementedError, for,
      broken attachments, and for custom attachment issues.,
    * RTFDE_MALFORMED: Silences errors about malformed RTF data.,
    * RTFDE_UNKNOWN_ERROR: Silences errors from RTFDE that are not normal.,
    * RTFDE: Silences all errors from RTFDE.,
    * STANDARDS_VIOLATION: Silences StandardViolationError where acceptable.,
    * OLE_DEFECT_INCORRECT: Silences defects of type DEFECT_INCORRECT that are,
      enabled by default. This can lead to strange bugs.,
    * NAMED_NAME_STREAM: Silences errors caused by invalid indexes into the,
      name stream for named properties. Any properties with an invalid name will,
      simply be dropped.,
    * SUPPRESS_ALL: Silences all of the above.,
    */
    ErrorBehavior[ErrorBehavior["THROW"] = 0] = "THROW";
    // Attachments.,
    ErrorBehavior[ErrorBehavior["ATTACH_NOT_IMPLEMENTED"] = 1] = "ATTACH_NOT_IMPLEMENTED";
    ErrorBehavior[ErrorBehavior["ATTACH_BROKEN"] = 2] = "ATTACH_BROKEN";
    ErrorBehavior[ErrorBehavior["CUSTOM_ATTACH_TOLERANT"] = 4] = "CUSTOM_ATTACH_TOLERANT";
    ErrorBehavior[ErrorBehavior["ATTACH_SUPPRESS_ALL"] = 7] = "ATTACH_SUPPRESS_ALL";
    // RTFDE.,
    ErrorBehavior[ErrorBehavior["RTFDE_MALFORMED"] = 8] = "RTFDE_MALFORMED";
    ErrorBehavior[ErrorBehavior["RTFDE_UNKNOWN_ERROR"] = 16] = "RTFDE_UNKNOWN_ERROR";
    ErrorBehavior[ErrorBehavior["RTFDE"] = 24] = "RTFDE";
    // General.,
    ErrorBehavior[ErrorBehavior["STANDARDS_VIOLATION"] = 32] = "STANDARDS_VIOLATION";
    ErrorBehavior[ErrorBehavior["OLE_DEFECT_INCORRECT"] = 64] = "OLE_DEFECT_INCORRECT";
    // Named Properties.,
    ErrorBehavior[ErrorBehavior["NAMED_NAME_STREAM"] = 128] = "NAMED_NAME_STREAM";
    ErrorBehavior[ErrorBehavior["SUPPRESS_ALL"] = 4095] = "SUPPRESS_ALL";
})(ErrorBehavior || (ErrorBehavior = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SUCCESS"] = 0] = "SUCCESS";
    ErrorCode[ErrorCode["GENERAL_FAILURE"] = 2147500037] = "GENERAL_FAILURE";
    ErrorCode[ErrorCode["OUT_OF_MEMORY"] = 2147942414] = "OUT_OF_MEMORY";
    ErrorCode[ErrorCode["INVALID_PARAMETER"] = 2147942487] = "INVALID_PARAMETER";
    ErrorCode[ErrorCode["NO_INTERFACE"] = 2147500034] = "NO_INTERFACE";
    ErrorCode[ErrorCode["ACCESS_DENIED"] = 2147942405] = "ACCESS_DENIED";
    ErrorCode[ErrorCode["STORAGE_INVALID_FUNCTION"] = 2147680257] = "STORAGE_INVALID_FUNCTION";
    ErrorCode[ErrorCode["STORAGE_ACCESS_DENIED"] = 2147680261] = "STORAGE_ACCESS_DENIED";
    ErrorCode[ErrorCode["STORAGE_INSUFFICIENT_MEMORY"] = 2147680264] = "STORAGE_INSUFFICIENT_MEMORY";
    ErrorCode[ErrorCode["STORAGE_INVALID_POINTER"] = 2147680265] = "STORAGE_INVALID_POINTER";
    ErrorCode[ErrorCode["STORAGE_READ_FAULT"] = 2147680286] = "STORAGE_READ_FAULT";
    ErrorCode[ErrorCode["STORAGE_LOCK_VIOLATION"] = 2147680289] = "STORAGE_LOCK_VIOLATION";
    ErrorCode[ErrorCode["STORAGE_INVALID_PARAMETER"] = 2147680343] = "STORAGE_INVALID_PARAMETER";
    ErrorCode[ErrorCode["STREAM_SIZE_ERROR"] = 2147680368] = "STREAM_SIZE_ERROR";
    ErrorCode[ErrorCode["STORAGE_INVALID_FLAG"] = 2147680511] = "STORAGE_INVALID_FLAG";
    ErrorCode[ErrorCode["STORAGE_CANNOT_SAVE"] = 2147680515] = "STORAGE_CANNOT_SAVE";
    ErrorCode[ErrorCode["NOT_SUPPORTED"] = 2147746050] = "NOT_SUPPORTED";
    ErrorCode[ErrorCode["INVALID_CHARACTER_WIDTH"] = 2147746051] = "INVALID_CHARACTER_WIDTH";
    ErrorCode[ErrorCode["STRING_TOO_LONG"] = 2147746053] = "STRING_TOO_LONG";
    ErrorCode[ErrorCode["INVALID_FLAG"] = 2147746054] = "INVALID_FLAG";
    ErrorCode[ErrorCode["INVALID_ENTRY_ID"] = 2147746055] = "INVALID_ENTRY_ID";
    ErrorCode[ErrorCode["INVALID_OBJECT"] = 2147746056] = "INVALID_OBJECT";
    ErrorCode[ErrorCode["OBJECT_CHANGED"] = 2147746057] = "OBJECT_CHANGED";
    ErrorCode[ErrorCode["OBJECT_DELETED"] = 2147746058] = "OBJECT_DELETED";
    ErrorCode[ErrorCode["SERVER_BUSY"] = 2147746059] = "SERVER_BUSY";
    ErrorCode[ErrorCode["OUT_OF_DISK"] = 2147746061] = "OUT_OF_DISK";
    ErrorCode[ErrorCode["OUT_OF_RESOURCES"] = 2147746062] = "OUT_OF_RESOURCES";
    ErrorCode[ErrorCode["NOT_FOUND"] = 2147746063] = "NOT_FOUND";
    ErrorCode[ErrorCode["VERSION_MISMATCH"] = 2147746064] = "VERSION_MISMATCH";
    ErrorCode[ErrorCode["LOGON_FAILED"] = 2147746065] = "LOGON_FAILED";
    ErrorCode[ErrorCode["TOO_MANY_SESSIONS"] = 2147746066] = "TOO_MANY_SESSIONS";
    ErrorCode[ErrorCode["USER_CANCELED"] = 2147746067] = "USER_CANCELED";
    ErrorCode[ErrorCode["ABORT_FAILED"] = 2147746068] = "ABORT_FAILED";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 2147746069] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["DISK_ERROR"] = 2147746070] = "DISK_ERROR";
    ErrorCode[ErrorCode["TOO_COMPLEX"] = 2147746071] = "TOO_COMPLEX";
    ErrorCode[ErrorCode["INVALID_COLUMN"] = 2147746072] = "INVALID_COLUMN";
    ErrorCode[ErrorCode["COMPUTED_VALUE"] = 2147746074] = "COMPUTED_VALUE";
    ErrorCode[ErrorCode["CORRUPT_DATA"] = 2147746075] = "CORRUPT_DATA";
    ErrorCode[ErrorCode["INVALID_CODEPAGE"] = 2147746078] = "INVALID_CODEPAGE";
    ErrorCode[ErrorCode["INVALID_LOCALE"] = 2147746079] = "INVALID_LOCALE";
    ErrorCode[ErrorCode["TIME_SKEW"] = 2147746083] = "TIME_SKEW";
    ErrorCode[ErrorCode["END_OF_SESSION"] = 2147746304] = "END_OF_SESSION";
    ErrorCode[ErrorCode["UNKNOWN_ENTRY_ID"] = 2147746305] = "UNKNOWN_ENTRY_ID";
    ErrorCode[ErrorCode["NOT_COMPLETED"] = 2147746816] = "NOT_COMPLETED";
    ErrorCode[ErrorCode["TIMEOUT"] = 2147746817] = "TIMEOUT";
    ErrorCode[ErrorCode["EMPTY_TABLE"] = 2147746818] = "EMPTY_TABLE";
    ErrorCode[ErrorCode["TABLE_TOO_BIG"] = 2147746819] = "TABLE_TOO_BIG";
    ErrorCode[ErrorCode["INVALID_BOOKMARK"] = 2147746821] = "INVALID_BOOKMARK";
    ErrorCode[ErrorCode["ERROR_WAIT"] = 2147747072] = "ERROR_WAIT";
    ErrorCode[ErrorCode["ERROR_CANCEL"] = 2147747073] = "ERROR_CANCEL";
    ErrorCode[ErrorCode["NO_SUPPRESS"] = 2147747330] = "NO_SUPPRESS";
    ErrorCode[ErrorCode["COLLIDING_NAMES"] = 2147747332] = "COLLIDING_NAMES";
    ErrorCode[ErrorCode["NOT_INITIALIZED"] = 2147747333] = "NOT_INITIALIZED";
    ErrorCode[ErrorCode["NO_RECIPIENTS"] = 2147747335] = "NO_RECIPIENTS";
    ErrorCode[ErrorCode["ALREADY_SENT"] = 2147747336] = "ALREADY_SENT";
    ErrorCode[ErrorCode["HAS_FOLDERS"] = 2147747337] = "HAS_FOLDERS";
    ErrorCode[ErrorCode["HAS_MESSAGES"] = 2147747338] = "HAS_MESSAGES";
    ErrorCode[ErrorCode["FOLDER_CYCLE"] = 2147747339] = "FOLDER_CYCLE";
    ErrorCode[ErrorCode["TOO_MANY_LOCKS"] = 2147747341] = "TOO_MANY_LOCKS";
    ErrorCode[ErrorCode["AMBIGUOUS_RECIPIENT"] = 2147747584] = "AMBIGUOUS_RECIPIENT";
    ErrorCode[ErrorCode["SYNC_OBJECT_DELETED"] = 2147747840] = "SYNC_OBJECT_DELETED";
    ErrorCode[ErrorCode["IGNORE_FAILURE"] = 2147747841] = "IGNORE_FAILURE";
    ErrorCode[ErrorCode["SYNC_CONFLICT"] = 2147747842] = "SYNC_CONFLICT";
    ErrorCode[ErrorCode["NO_PARENT_FOLDER"] = 2147747843] = "NO_PARENT_FOLDER";
    ErrorCode[ErrorCode["CYCLE_DETECTED"] = 2147747844] = "CYCLE_DETECTED";
    ErrorCode[ErrorCode["NOT_SYNCHRONIZED"] = 2147747845] = "NOT_SYNCHRONIZED";
    ErrorCode[ErrorCode["NAMED_PROPERTY_QUOTA"] = 2147748096] = "NAMED_PROPERTY_QUOTA";
    ErrorCode[ErrorCode["NOT_IMPLEMENTED"] = 2147749887] = "NOT_IMPLEMENTED";
})(ErrorCode || (ErrorCode = {}));
var ErrorCodeType;
(function (ErrorCodeType) {
    /*
    Enum representing values for PtypErrorCode.
  
    See "Additional Error Codes" in [MS-OXCDATA].,
    */
    ErrorCodeType[ErrorCodeType["SUCCESS"] = 0] = "SUCCESS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR"] = 1002] = "ISAM_ERROR";
    ErrorCodeType[ErrorCodeType["UNKNOWN_USER"] = 1003] = "UNKNOWN_USER";
    ErrorCodeType[ErrorCodeType["EXITING"] = 1005] = "EXITING";
    ErrorCodeType[ErrorCodeType["BAD_CONFIGURATION"] = 1006] = "BAD_CONFIGURATION";
    ErrorCodeType[ErrorCodeType["UNKNOWN_CODE_PAGE"] = 1007] = "UNKNOWN_CODE_PAGE";
    ErrorCodeType[ErrorCodeType["SERVER_MEMORY"] = 1008] = "SERVER_MEMORY";
    ErrorCodeType[ErrorCodeType["LOGIN_PERMISSION"] = 1010] = "LOGIN_PERMISSION";
    ErrorCodeType[ErrorCodeType["DATABASE_ROLLED_BACK"] = 1011] = "DATABASE_ROLLED_BACK";
    ErrorCodeType[ErrorCodeType["DATABASE_COPIED_ERROR"] = 1012] = "DATABASE_COPIED_ERROR";
    ErrorCodeType[ErrorCodeType["AUDIT_NOT_ALLOWED"] = 1013] = "AUDIT_NOT_ALLOWED";
    ErrorCodeType[ErrorCodeType["ZOMBIE_USER"] = 1014] = "ZOMBIE_USER";
    ErrorCodeType[ErrorCodeType["UNCONVERTABLE_ACL"] = 1015] = "UNCONVERTABLE_ACL";
    ErrorCodeType[ErrorCodeType["NO_FREE_JET_SESSIONS"] = 1100] = "NO_FREE_JET_SESSIONS";
    ErrorCodeType[ErrorCodeType["DIFFERENT_JET_SESSION"] = 1101] = "DIFFERENT_JET_SESSION";
    ErrorCodeType[ErrorCodeType["FILE_REMOVE"] = 1103] = "FILE_REMOVE";
    ErrorCodeType[ErrorCodeType["PARAMETER_OVERFLOW"] = 1104] = "PARAMETER_OVERFLOW";
    ErrorCodeType[ErrorCodeType["BAD_VERSION"] = 1105] = "BAD_VERSION";
    ErrorCodeType[ErrorCodeType["TOO_MANY_COLUMNS"] = 1106] = "TOO_MANY_COLUMNS";
    ErrorCodeType[ErrorCodeType["HAVE_MORE"] = 1107] = "HAVE_MORE";
    ErrorCodeType[ErrorCodeType["DATABASE_ERROR"] = 1108] = "DATABASE_ERROR";
    ErrorCodeType[ErrorCodeType["INDEX_NAME_TOO_BIG"] = 1109] = "INDEX_NAME_TOO_BIG";
    ErrorCodeType[ErrorCodeType["UNSUPPORTED_PROPERTY"] = 1110] = "UNSUPPORTED_PROPERTY";
    ErrorCodeType[ErrorCodeType["MESSAGE_NOT_SAVED"] = 1111] = "MESSAGE_NOT_SAVED";
    ErrorCodeType[ErrorCodeType["UNPUBLISHED_NOTIFICATION"] = 1113] = "UNPUBLISHED_NOTIFICATION";
    ErrorCodeType[ErrorCodeType["DIFFERENT_ROOT"] = 1115] = "DIFFERENT_ROOT";
    ErrorCodeType[ErrorCodeType["BAD_FOLDER_NAME"] = 1116] = "BAD_FOLDER_NAME";
    ErrorCodeType[ErrorCodeType["ATTACHMENT_OPEN"] = 1117] = "ATTACHMENT_OPEN";
    ErrorCodeType[ErrorCodeType["INVALID_COLLAPSE_STATE"] = 1118] = "INVALID_COLLAPSE_STATE";
    ErrorCodeType[ErrorCodeType["SKIP_MY_CHILDREN"] = 1119] = "SKIP_MY_CHILDREN";
    ErrorCodeType[ErrorCodeType["SEARCH_FOLDER"] = 1120] = "SEARCH_FOLDER";
    ErrorCodeType[ErrorCodeType["NOT_SEARCH_FOLDER"] = 1121] = "NOT_SEARCH_FOLDER";
    ErrorCodeType[ErrorCodeType["FOLDER_SET_RECEIVE"] = 1122] = "FOLDER_SET_RECEIVE";
    ErrorCodeType[ErrorCodeType["NO_RECEIVE_FOLDER"] = 1123] = "NO_RECEIVE_FOLDER";
    ErrorCodeType[ErrorCodeType["DELETE_SUBMITTED_MESSAGE"] = 1125] = "DELETE_SUBMITTED_MESSAGE";
    ErrorCodeType[ErrorCodeType["INVALID_RECIPIENTS"] = 1127] = "INVALID_RECIPIENTS";
    ErrorCodeType[ErrorCodeType["NO_REPLICA_HERE"] = 1128] = "NO_REPLICA_HERE";
    ErrorCodeType[ErrorCodeType["NO_REPLICA_AVAILABLE"] = 1129] = "NO_REPLICA_AVAILABLE";
    ErrorCodeType[ErrorCodeType["PUBLIC_DATABASE"] = 1130] = "PUBLIC_DATABASE";
    ErrorCodeType[ErrorCodeType["NOT_PUBLIC_DATABASE"] = 1131] = "NOT_PUBLIC_DATABASE";
    ErrorCodeType[ErrorCodeType["RECORD_NOT_FOUND"] = 1132] = "RECORD_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["REPLICATION_CONFLICT"] = 1133] = "REPLICATION_CONFLICT";
    ErrorCodeType[ErrorCodeType["FX_BUFFER_OVERRUN"] = 1136] = "FX_BUFFER_OVERRUN";
    ErrorCodeType[ErrorCodeType["FX_BUFFER_EMPTY"] = 1137] = "FX_BUFFER_EMPTY";
    ErrorCodeType[ErrorCodeType["FX_PARTIAL_VALUE"] = 1138] = "FX_PARTIAL_VALUE";
    ErrorCodeType[ErrorCodeType["FX_NO_ROOM"] = 1139] = "FX_NO_ROOM";
    ErrorCodeType[ErrorCodeType["TIME_EXPIRED"] = 1140] = "TIME_EXPIRED";
    ErrorCodeType[ErrorCodeType["DESTINATION_ERROR"] = 1141] = "DESTINATION_ERROR";
    ErrorCodeType[ErrorCodeType["DATABASE_NOT_INITIALIZED"] = 1142] = "DATABASE_NOT_INITIALIZED";
    ErrorCodeType[ErrorCodeType["WRONG_SERVER"] = 1144] = "WRONG_SERVER";
    ErrorCodeType[ErrorCodeType["BUFFER_TOO_SMALL"] = 1149] = "BUFFER_TOO_SMALL";
    ErrorCodeType[ErrorCodeType["ATTACHMENT_RESOLUTION_REQUIRED"] = 1150] = "ATTACHMENT_RESOLUTION_REQUIRED";
    ErrorCodeType[ErrorCodeType["SERVER_PAUSED"] = 1151] = "SERVER_PAUSED";
    ErrorCodeType[ErrorCodeType["SERVER_BUSY"] = 1152] = "SERVER_BUSY";
    ErrorCodeType[ErrorCodeType["NO_SUCH_LOGON"] = 1153] = "NO_SUCH_LOGON";
    ErrorCodeType[ErrorCodeType["LOAD_LIBRARY_FAILED"] = 1154] = "LOAD_LIBRARY_FAILED";
    ErrorCodeType[ErrorCodeType["ALREADY_CONFIGURED"] = 1155] = "ALREADY_CONFIGURED";
    ErrorCodeType[ErrorCodeType["NOT_CONFIGURED"] = 1156] = "NOT_CONFIGURED";
    ErrorCodeType[ErrorCodeType["DATA_LOSS"] = 1157] = "DATA_LOSS";
    ErrorCodeType[ErrorCodeType["MAXIMUM_SEND_THREAD_EXCEEDED"] = 1160] = "MAXIMUM_SEND_THREAD_EXCEEDED";
    ErrorCodeType[ErrorCodeType["FX_ERROR_MARKER"] = 1161] = "FX_ERROR_MARKER";
    ErrorCodeType[ErrorCodeType["NO_FREE_JTABS"] = 1162] = "NO_FREE_JTABS";
    ErrorCodeType[ErrorCodeType["NOT_PRIVATE_DATABASE"] = 1163] = "NOT_PRIVATE_DATABASE";
    ErrorCodeType[ErrorCodeType["ISINTEG_MDB"] = 1164] = "ISINTEG_MDB";
    ErrorCodeType[ErrorCodeType["RECOVERY_MISMATCH"] = 1165] = "RECOVERY_MISMATCH";
    ErrorCodeType[ErrorCodeType["TABLE_MAY_NOT_BE_DELETED"] = 1166] = "TABLE_MAY_NOT_BE_DELETED";
    ErrorCodeType[ErrorCodeType["SEARCH_FOLDER_SCOPE_VIOLATION"] = 1168] = "SEARCH_FOLDER_SCOPE_VIOLATION";
    ErrorCodeType[ErrorCodeType["RPC_REGISTER_IF"] = 1201] = "RPC_REGISTER_IF";
    ErrorCodeType[ErrorCodeType["RPC_LISTEN"] = 1202] = "RPC_LISTEN";
    ErrorCodeType[ErrorCodeType["RPC_FORMAT"] = 1206] = "RPC_FORMAT";
    ErrorCodeType[ErrorCodeType["NO_COPY_TO"] = 1207] = "NO_COPY_TO";
    ErrorCodeType[ErrorCodeType["NULL_OBJECT"] = 1209] = "NULL_OBJECT";
    ErrorCodeType[ErrorCodeType["RPC_AUTHENTICATION"] = 1212] = "RPC_AUTHENTICATION";
    ErrorCodeType[ErrorCodeType["RPC_BAD_AUTHENTICATION_LEVEL"] = 1213] = "RPC_BAD_AUTHENTICATION_LEVEL";
    ErrorCodeType[ErrorCodeType["NULL_COMMENT_RESTRICTION"] = 1214] = "NULL_COMMENT_RESTRICTION";
    ErrorCodeType[ErrorCodeType["RULES_LOAD_ERROR"] = 1228] = "RULES_LOAD_ERROR";
    ErrorCodeType[ErrorCodeType["RULES_DELIVER_ERR"] = 1229] = "RULES_DELIVER_ERR";
    ErrorCodeType[ErrorCodeType["RULES_PARSING_ERR"] = 1230] = "RULES_PARSING_ERR";
    ErrorCodeType[ErrorCodeType["RULES_CREATE_DAE"] = 1231] = "RULES_CREATE_DAE";
    ErrorCodeType[ErrorCodeType["RULES_CREATE_DAM"] = 1232] = "RULES_CREATE_DAM";
    ErrorCodeType[ErrorCodeType["RULES_NO_MOVE_COPY_FOLDER"] = 1233] = "RULES_NO_MOVE_COPY_FOLDER";
    ErrorCodeType[ErrorCodeType["RULES_NO_FOLDER_RIGHTS"] = 1234] = "RULES_NO_FOLDER_RIGHTS";
    ErrorCodeType[ErrorCodeType["MESSAGE_TOO_BIG"] = 1236] = "MESSAGE_TOO_BIG";
    ErrorCodeType[ErrorCodeType["FORM_NOT_VALID"] = 1237] = "FORM_NOT_VALID";
    ErrorCodeType[ErrorCodeType["NOT_AUTHORIZED"] = 1238] = "NOT_AUTHORIZED";
    ErrorCodeType[ErrorCodeType["DELETE_MESSAGE"] = 1239] = "DELETE_MESSAGE";
    ErrorCodeType[ErrorCodeType["BOUNCE_MESSAGE"] = 1240] = "BOUNCE_MESSAGE";
    ErrorCodeType[ErrorCodeType["QUOTA_EXCEEDED"] = 1241] = "QUOTA_EXCEEDED";
    ErrorCodeType[ErrorCodeType["MAX_SUBMISSION_EXCEEDED"] = 1242] = "MAX_SUBMISSION_EXCEEDED";
    ErrorCodeType[ErrorCodeType["MAX_ATTACHMENT_EXCEEDED"] = 1243] = "MAX_ATTACHMENT_EXCEEDED";
    ErrorCodeType[ErrorCodeType["SEND_AS_DENIED"] = 1244] = "SEND_AS_DENIED";
    ErrorCodeType[ErrorCodeType["SHUTOFF_QUOTA_EXCEEDED"] = 1245] = "SHUTOFF_QUOTA_EXCEEDED";
    ErrorCodeType[ErrorCodeType["TOO_MANY_OPEN_OBJECTS"] = 1246] = "TOO_MANY_OPEN_OBJECTS";
    ErrorCodeType[ErrorCodeType["CLIENT_VERSION_BLOCKED"] = 1247] = "CLIENT_VERSION_BLOCKED";
    ErrorCodeType[ErrorCodeType["RPC_HTTP_DISALLOWED"] = 1248] = "RPC_HTTP_DISALLOWED";
    ErrorCodeType[ErrorCodeType["CACHED_MODE_REQUIRED"] = 1249] = "CACHED_MODE_REQUIRED";
    ErrorCodeType[ErrorCodeType["FOLDER_NOT_CLEANED_UP"] = 1251] = "FOLDER_NOT_CLEANED_UP";
    ErrorCodeType[ErrorCodeType["FORMAT_ERROR"] = 1261] = "FORMAT_ERROR";
    ErrorCodeType[ErrorCodeType["NOT_EXPANDED"] = 1271] = "NOT_EXPANDED";
    ErrorCodeType[ErrorCodeType["NOT_COLLAPSED"] = 1272] = "NOT_COLLAPSED";
    ErrorCodeType[ErrorCodeType["NO_EXPAND_LEAF_ROW"] = 1273] = "NO_EXPAND_LEAF_ROW";
    ErrorCodeType[ErrorCodeType["UNREGISTERED_NAME_PROP"] = 1274] = "UNREGISTERED_NAME_PROP";
    ErrorCodeType[ErrorCodeType["FOLDER_DISABLED"] = 1275] = "FOLDER_DISABLED";
    ErrorCodeType[ErrorCodeType["DOMAIN_ERROR"] = 1276] = "DOMAIN_ERROR";
    ErrorCodeType[ErrorCodeType["NO_CREATE_RIGHT"] = 1279] = "NO_CREATE_RIGHT";
    ErrorCodeType[ErrorCodeType["PUBLIC_ROOT"] = 1280] = "PUBLIC_ROOT";
    ErrorCodeType[ErrorCodeType["NO_READ_RIGHT"] = 1281] = "NO_READ_RIGHT";
    ErrorCodeType[ErrorCodeType["NO_CREATE_SUBFOLDER_RIGHT"] = 1282] = "NO_CREATE_SUBFOLDER_RIGHT";
    ErrorCodeType[ErrorCodeType["MESSAGE_CYCLE"] = 1284] = "MESSAGE_CYCLE";
    ErrorCodeType[ErrorCodeType["NULL_DESTINATION_OBJECT"] = 1283] = "NULL_DESTINATION_OBJECT";
    ErrorCodeType[ErrorCodeType["TOO_MANY_RECIPS"] = 1285] = "TOO_MANY_RECIPS";
    ErrorCodeType[ErrorCodeType["VIRUS_SCAN_IN_PROGRESS"] = 1290] = "VIRUS_SCAN_IN_PROGRESS";
    ErrorCodeType[ErrorCodeType["VIRUS_DETECTED"] = 1291] = "VIRUS_DETECTED";
    ErrorCodeType[ErrorCodeType["MAILBOX_IN_TRANSIT"] = 1292] = "MAILBOX_IN_TRANSIT";
    ErrorCodeType[ErrorCodeType["BACKUP_IN_PROGRESS"] = 1293] = "BACKUP_IN_PROGRESS";
    ErrorCodeType[ErrorCodeType["VIRUS_MESSAGE_DELETED"] = 1294] = "VIRUS_MESSAGE_DELETED";
    ErrorCodeType[ErrorCodeType["INVALID_BACKUP_SEQUENCE"] = 1295] = "INVALID_BACKUP_SEQUENCE";
    ErrorCodeType[ErrorCodeType["INVALID_BACKUP_TYPE"] = 1296] = "INVALID_BACKUP_TYPE";
    ErrorCodeType[ErrorCodeType["TOO_MANY_BACKUPS"] = 1297] = "TOO_MANY_BACKUPS";
    ErrorCodeType[ErrorCodeType["RESTORE_IN_PROGRESS"] = 1298] = "RESTORE_IN_PROGRESS";
    ErrorCodeType[ErrorCodeType["DUPLICATE_OBJECT"] = 1401] = "DUPLICATE_OBJECT";
    ErrorCodeType[ErrorCodeType["OBJECT_NOT_FOUND"] = 1402] = "OBJECT_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["FIXUP_REPLY_RULE"] = 1403] = "FIXUP_REPLY_RULE";
    ErrorCodeType[ErrorCodeType["TEMPLATE_NOT_FOUND"] = 1404] = "TEMPLATE_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["RULE_EXECUTION"] = 1405] = "RULE_EXECUTION";
    ErrorCodeType[ErrorCodeType["DS_NO_SUCH_OBJECT"] = 1406] = "DS_NO_SUCH_OBJECT";
    ErrorCodeType[ErrorCodeType["ALREADY_TOMBSTONED"] = 1407] = "ALREADY_TOMBSTONED";
    ErrorCodeType[ErrorCodeType["READ_ONLY_TRANSACTION"] = 1430] = "READ_ONLY_TRANSACTION";
    ErrorCodeType[ErrorCodeType["PAUSED"] = 1550] = "PAUSED";
    ErrorCodeType[ErrorCodeType["NOT_PAUSED"] = 1551] = "NOT_PAUSED";
    ErrorCodeType[ErrorCodeType["WRONG_MAILBOX"] = 1608] = "WRONG_MAILBOX";
    ErrorCodeType[ErrorCodeType["CHANGE_PASSWORD"] = 1612] = "CHANGE_PASSWORD";
    ErrorCodeType[ErrorCodeType["PASSWORD_EXPIRED"] = 1613] = "PASSWORD_EXPIRED";
    ErrorCodeType[ErrorCodeType["INVALID_WORKSTATION"] = 1614] = "INVALID_WORKSTATION";
    ErrorCodeType[ErrorCodeType["INVALID_LOGON_HOURS"] = 1615] = "INVALID_LOGON_HOURS";
    ErrorCodeType[ErrorCodeType["ACCOUNT_DISABLED"] = 1616] = "ACCOUNT_DISABLED";
    ErrorCodeType[ErrorCodeType["RULE_VERSION"] = 1700] = "RULE_VERSION";
    ErrorCodeType[ErrorCodeType["RULE_FORMAT"] = 1701] = "RULE_FORMAT";
    ErrorCodeType[ErrorCodeType["RULE_SEND_AS_DENIED"] = 1702] = "RULE_SEND_AS_DENIED";
    ErrorCodeType[ErrorCodeType["NO_SERVER_SUPPORT"] = 1721] = "NO_SERVER_SUPPORT";
    ErrorCodeType[ErrorCodeType["LOCK_TIMED_OUT"] = 1722] = "LOCK_TIMED_OUT";
    ErrorCodeType[ErrorCodeType["OBJECT_LOCKED"] = 1723] = "OBJECT_LOCKED";
    ErrorCodeType[ErrorCodeType["INVALID_LOCK_NAMESPACE"] = 1725] = "INVALID_LOCK_NAMESPACE";
    ErrorCodeType[ErrorCodeType["MESSAGE_DELETED"] = 2006] = "MESSAGE_DELETED";
    ErrorCodeType[ErrorCodeType["PROTOCOL_DISABLED"] = 2008] = "PROTOCOL_DISABLED";
    ErrorCodeType[ErrorCodeType["CLEARTEXT_LOGON_DISABLED"] = 2009] = "CLEARTEXT_LOGON_DISABLED";
    ErrorCodeType[ErrorCodeType["REJECTED"] = 2030] = "REJECTED";
    ErrorCodeType[ErrorCodeType["AMBIGUOUS_ALIAS"] = 2202] = "AMBIGUOUS_ALIAS";
    ErrorCodeType[ErrorCodeType["UNKNOWN_MAILBOX"] = 2203] = "UNKNOWN_MAILBOX";
    ErrorCodeType[ErrorCodeType["EXPRESSION_RESERVED"] = 2300] = "EXPRESSION_RESERVED";
    ErrorCodeType[ErrorCodeType["EXPRESSION_PARSE_DEPTH"] = 2301] = "EXPRESSION_PARSE_DEPTH";
    ErrorCodeType[ErrorCodeType["EXPRESSION_ARGUMENT_TYPE"] = 2302] = "EXPRESSION_ARGUMENT_TYPE";
    ErrorCodeType[ErrorCodeType["EXPRESSION_SYNTAX"] = 2303] = "EXPRESSION_SYNTAX";
    ErrorCodeType[ErrorCodeType["EXPRESSION_BAD_STRING_TOKEN"] = 2304] = "EXPRESSION_BAD_STRING_TOKEN";
    ErrorCodeType[ErrorCodeType["EXPRESSION_BAD_COL_TOKEN"] = 2305] = "EXPRESSION_BAD_COL_TOKEN";
    ErrorCodeType[ErrorCodeType["EXPRESSION_TYPE_MISMATCH"] = 2306] = "EXPRESSION_TYPE_MISMATCH";
    ErrorCodeType[ErrorCodeType["EXPRESSION_OPERATOR_NOT_SUPPORTED"] = 2307] = "EXPRESSION_OPERATOR_NOT_SUPPORTED";
    ErrorCodeType[ErrorCodeType["EXPRESSION_DIVIDE_BY_ZERO"] = 2308] = "EXPRESSION_DIVIDE_BY_ZERO";
    ErrorCodeType[ErrorCodeType["EXPRESSION_UNARY_ARGUMENT"] = 2309] = "EXPRESSION_UNARY_ARGUMENT";
    ErrorCodeType[ErrorCodeType["NOT_LOCKED"] = 2400] = "NOT_LOCKED";
    ErrorCodeType[ErrorCodeType["CLIENT_EVENT"] = 2401] = "CLIENT_EVENT";
    ErrorCodeType[ErrorCodeType["CORRUPT_EVENT"] = 2405] = "CORRUPT_EVENT";
    ErrorCodeType[ErrorCodeType["CORRUPT_WATERMARK"] = 2406] = "CORRUPT_WATERMARK";
    ErrorCodeType[ErrorCodeType["EVENT_ERROR"] = 2407] = "EVENT_ERROR";
    ErrorCodeType[ErrorCodeType["WATERMARK_ERROR"] = 2408] = "WATERMARK_ERROR";
    ErrorCodeType[ErrorCodeType["NON_CANONICAL_ACL"] = 2409] = "NON_CANONICAL_ACL";
    ErrorCodeType[ErrorCodeType["MAILBOX_DISABLED"] = 2412] = "MAILBOX_DISABLED";
    ErrorCodeType[ErrorCodeType["RULES_FOLDER_OVER_QUOTA"] = 2413] = "RULES_FOLDER_OVER_QUOTA";
    ErrorCodeType[ErrorCodeType["ADDRESS_BOOK_UNAVAILABLE"] = 2414] = "ADDRESS_BOOK_UNAVAILABLE";
    ErrorCodeType[ErrorCodeType["ADDRESS_BOOK_ERROR"] = 2415] = "ADDRESS_BOOK_ERROR";
    ErrorCodeType[ErrorCodeType["ADDRESS_BOOK_OBJECT_NOT_FOUND"] = 2417] = "ADDRESS_BOOK_OBJECT_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["ADDRESS_BOOK_PROPERTY_ERROR"] = 2418] = "ADDRESS_BOOK_PROPERTY_ERROR";
    ErrorCodeType[ErrorCodeType["NOT_ENCRYPTED"] = 2416] = "NOT_ENCRYPTED";
    ErrorCodeType[ErrorCodeType["RPC_SERVER_TOO_BUSY"] = 2419] = "RPC_SERVER_TOO_BUSY";
    ErrorCodeType[ErrorCodeType["RPC_OUT_OF_MEMORY"] = 2420] = "RPC_OUT_OF_MEMORY";
    ErrorCodeType[ErrorCodeType["RPC_SERVER_OUT_OF_MEMORY"] = 2421] = "RPC_SERVER_OUT_OF_MEMORY";
    ErrorCodeType[ErrorCodeType["RPC_OUT_OF_RESOURCES"] = 2422] = "RPC_OUT_OF_RESOURCES";
    ErrorCodeType[ErrorCodeType["RPC_SERVER_UNAVAILABLE"] = 2423] = "RPC_SERVER_UNAVAILABLE";
    ErrorCodeType[ErrorCodeType["SECURE_SUBMIT_ERROR"] = 2426] = "SECURE_SUBMIT_ERROR";
    ErrorCodeType[ErrorCodeType["EVENTS_DELETED"] = 2428] = "EVENTS_DELETED";
    ErrorCodeType[ErrorCodeType["SUBSYSTEM_STOPPING"] = 2429] = "SUBSYSTEM_STOPPING";
    ErrorCodeType[ErrorCodeType["ATTENDANT_UNAVAILABLE"] = 2430] = "ATTENDANT_UNAVAILABLE";
    ErrorCodeType[ErrorCodeType["CI_STOPPING"] = 2600] = "CI_STOPPING";
    ErrorCodeType[ErrorCodeType["FX_INVALID_STATE"] = 2601] = "FX_INVALID_STATE";
    ErrorCodeType[ErrorCodeType["FX_UNEXPECTED_MARKER"] = 2602] = "FX_UNEXPECTED_MARKER";
    ErrorCodeType[ErrorCodeType["DUPLICATE_DELIVERY"] = 2603] = "DUPLICATE_DELIVERY";
    ErrorCodeType[ErrorCodeType["CONDITION_VIOLATION"] = 2604] = "CONDITION_VIOLATION";
    ErrorCodeType[ErrorCodeType["MAXIMUM_CONNECTION_POOLS_EXCEEDED"] = 2605] = "MAXIMUM_CONNECTION_POOLS_EXCEEDED";
    ErrorCodeType[ErrorCodeType["INVALID_RPC_HANDLE"] = 2606] = "INVALID_RPC_HANDLE";
    ErrorCodeType[ErrorCodeType["EVENT_NOT_FOUND"] = 2607] = "EVENT_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["PROPERTY_NOT_PROMOTED"] = 2608] = "PROPERTY_NOT_PROMOTED";
    ErrorCodeType[ErrorCodeType["LOW_FREE_SPACE_FOR_DATABASE"] = 2609] = "LOW_FREE_SPACE_FOR_DATABASE";
    ErrorCodeType[ErrorCodeType["LOW_FREE_SPACE_FOR_LOGS"] = 2610] = "LOW_FREE_SPACE_FOR_LOGS";
    ErrorCodeType[ErrorCodeType["MAILBOX_IS_QUARANTINED"] = 2611] = "MAILBOX_IS_QUARANTINED";
    ErrorCodeType[ErrorCodeType["DATABASE_MOUNT_IN_PROGRESS"] = 2612] = "DATABASE_MOUNT_IN_PROGRESS";
    ErrorCodeType[ErrorCodeType["DATABASE_DISMOUNT_IN_PROGRESS"] = 2613] = "DATABASE_DISMOUNT_IN_PROGRESS";
    ErrorCodeType[ErrorCodeType["CONNECTIONS_OVER_BUDGET"] = 2614] = "CONNECTIONS_OVER_BUDGET";
    ErrorCodeType[ErrorCodeType["NOT_FOUND_IN_CONTAINER"] = 2615] = "NOT_FOUND_IN_CONTAINER";
    ErrorCodeType[ErrorCodeType["CANNOT_REMOVE"] = 2616] = "CANNOT_REMOVE";
    ErrorCodeType[ErrorCodeType["INVALID_CONNECTION_POOL"] = 2617] = "INVALID_CONNECTION_POOL";
    ErrorCodeType[ErrorCodeType["VIRUS_SCAN_GENERAL_FAILURE"] = 2618] = "VIRUS_SCAN_GENERAL_FAILURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RFS_FAILURE"] = 4294967196] = "ISAM_ERROR_RFS_FAILURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RFS_NOT_ARMED"] = 4294967195] = "ISAM_ERROR_RFS_NOT_ARMED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FILE_CLOSE"] = 4294967194] = "ISAM_ERROR_FILE_CLOSE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_THREADS"] = 4294967193] = "ISAM_ERROR_OUT_OF_THREADS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_IO"] = 4294967191] = "ISAM_ERROR_TOO_MANY_IO";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TASK_DROPPED"] = 4294967190] = "ISAM_ERROR_TASK_DROPPED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INTERNAL_ERROR"] = 4294967189] = "ISAM_ERROR_INTERNAL_ERROR";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_BUFFER_DEPENDENCIES_CORRUPTED"] = 4294967041] = "ISAM_ERROR_DATABASE_BUFFER_DEPENDENCIES_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_PREVIOUS_VERSION"] = 4294966974] = "ISAM_ERROR_PREVIOUS_VERSION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_PAGE_BOUNDARY"] = 4294966973] = "ISAM_ERROR_PAGE_BOUNDARY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_KEY_BOUNDARY"] = 4294966972] = "ISAM_ERROR_KEY_BOUNDARY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_PAGE_LINK"] = 4294966969] = "ISAM_ERROR_BAD_PAGE_LINK";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_BOOKMARK"] = 4294966968] = "ISAM_ERROR_BAD_BOOKMARK";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_NT_SYSTEM_CALL_FAILED"] = 4294966962] = "ISAM_ERROR_NT_SYSTEM_CALL_FAILED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_PARENT_PAGE_LINK"] = 4294966958] = "ISAM_ERROR_BAD_PARENT_PAGE_LINK";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SP_AVAIL_EXT_CACHE_OUT_OF_SYNC"] = 4294966956] = "ISAM_ERROR_SP_AVAIL_EXT_CACHE_OUT_OF_SYNC";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SP_AVAIL_EXT_CORRUPTED"] = 4294966955] = "ISAM_ERROR_SP_AVAIL_EXT_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SP_AVAIL_EXT_CACHE_OUT_OF_MEMORY"] = 4294966954] = "ISAM_ERROR_SP_AVAIL_EXT_CACHE_OUT_OF_MEMORY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SP_OWN_EXT_CORRUPTED"] = 4294966953] = "ISAM_ERROR_SP_OWN_EXT_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DB_TIME_CORRUPTED"] = 4294966952] = "ISAM_ERROR_DB_TIME_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_KEY_TRUNCATED"] = 4294966950] = "ISAM_ERROR_KEY_TRUNCATED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_KEY_TOO_BIG"] = 4294966888] = "ISAM_ERROR_KEY_TOO_BIG";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_LOGGED_OPERATION"] = 4294966796] = "ISAM_ERROR_INVALID_LOGGED_OPERATION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_FILE_CORRUPT"] = 4294966795] = "ISAM_ERROR_LOG_FILE_CORRUPT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_NO_BACKUP_DIRECTORY"] = 4294966793] = "ISAM_ERROR_NO_BACKUP_DIRECTORY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BACKUP_DIRECTORY_NOT_EMPTY"] = 4294966792] = "ISAM_ERROR_BACKUP_DIRECTORY_NOT_EMPTY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BACKUP_IN_PROGRESS"] = 4294966791] = "ISAM_ERROR_BACKUP_IN_PROGRESS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RESTORE_IN_PROGRESS"] = 4294966790] = "ISAM_ERROR_RESTORE_IN_PROGRESS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MISSING_PREVIOUS_LOG_FILE"] = 4294966787] = "ISAM_ERROR_MISSING_PREVIOUS_LOG_FILE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_WRITE_FAIL"] = 4294966786] = "ISAM_ERROR_LOG_WRITE_FAIL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_DISABLED_DUE_TO_RECOVERY_FAILURE"] = 4294966785] = "ISAM_ERROR_LOG_DISABLED_DUE_TO_RECOVERY_FAILURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CANNOT_LOG_DURING_RECOVERY_REDO"] = 4294966784] = "ISAM_ERROR_CANNOT_LOG_DURING_RECOVERY_REDO";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_GENERATION_MISMATCH"] = 4294966783] = "ISAM_ERROR_LOG_GENERATION_MISMATCH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_LOG_VERSION"] = 4294966782] = "ISAM_ERROR_BAD_LOG_VERSION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_LOG_SEQUENCE"] = 4294966781] = "ISAM_ERROR_INVALID_LOG_SEQUENCE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOGGING_DISABLED"] = 4294966780] = "ISAM_ERROR_LOGGING_DISABLED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_BUFFER_TOO_SMALL"] = 4294966779] = "ISAM_ERROR_LOG_BUFFER_TOO_SMALL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_SEQUENCE_END"] = 4294966777] = "ISAM_ERROR_LOG_SEQUENCE_END";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_NO_BACKUP"] = 4294966776] = "ISAM_ERROR_NO_BACKUP";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_BACKUP_SEQUENCE"] = 4294966775] = "ISAM_ERROR_INVALID_BACKUP_SEQUENCE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BACKUP_NOT_ALLOWED_YET"] = 4294966773] = "ISAM_ERROR_BACKUP_NOT_ALLOWED_YET";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DELETE_BACKUP_FILE_FAIL"] = 4294966772] = "ISAM_ERROR_DELETE_BACKUP_FILE_FAIL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MAKE_BACKUP_DIRECTORY_FAIL"] = 4294966771] = "ISAM_ERROR_MAKE_BACKUP_DIRECTORY_FAIL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_BACKUP"] = 4294966770] = "ISAM_ERROR_INVALID_BACKUP";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RECOVERED_WITH_ERRORS"] = 4294966769] = "ISAM_ERROR_RECOVERED_WITH_ERRORS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MISSING_LOG_FILE"] = 4294966768] = "ISAM_ERROR_MISSING_LOG_FILE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_DISK_FULL"] = 4294966767] = "ISAM_ERROR_LOG_DISK_FULL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_LOG_SIGNATURE"] = 4294966766] = "ISAM_ERROR_BAD_LOG_SIGNATURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_DB_SIGNATURE"] = 4294966765] = "ISAM_ERROR_BAD_DB_SIGNATURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_CHECKPOINT_SIGNATURE"] = 4294966764] = "ISAM_ERROR_BAD_CHECKPOINT_SIGNATURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CHECKPOINT_CORRUPT"] = 4294966763] = "ISAM_ERROR_CHECKPOINT_CORRUPT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MISSING_PATCH_PAGE"] = 4294966762] = "ISAM_ERROR_MISSING_PATCH_PAGE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_PATCH_PAGE"] = 4294966761] = "ISAM_ERROR_BAD_PATCH_PAGE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_REDO_ABRUPT_ENDED"] = 4294966760] = "ISAM_ERROR_REDO_ABRUPT_ENDED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_SLV_SIGNATURE"] = 4294966759] = "ISAM_ERROR_BAD_SLV_SIGNATURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_PATCH_FILE_MISSING"] = 4294966758] = "ISAM_ERROR_PATCH_FILE_MISSING";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_LOG_SET_MISMATCH"] = 4294966757] = "ISAM_ERROR_DATABASE_LOG_SET_MISMATCH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_STREAMING_FILE_MISMATCH"] = 4294966756] = "ISAM_ERROR_DATABASE_STREAMING_FILE_MISMATCH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_FILE_SIZE_MISMATCH"] = 4294966755] = "ISAM_ERROR_LOG_FILE_SIZE_MISMATCH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CHECKPOINT_FILE_NOT_FOUND"] = 4294966754] = "ISAM_ERROR_CHECKPOINT_FILE_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_REQUIRED_LOG_FILES_MISSING"] = 4294966753] = "ISAM_ERROR_REQUIRED_LOG_FILES_MISSING";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SOFT_RECOVERY_ON_BACKUP_DATABASE"] = 4294966752] = "ISAM_ERROR_SOFT_RECOVERY_ON_BACKUP_DATABASE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_FILE_SIZE_MISMATCH_DATABASES_CONSISTENT"] = 4294966751] = "ISAM_ERROR_LOG_FILE_SIZE_MISMATCH_DATABASES_CONSISTENT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_SECTOR_SIZE_MISMATCH"] = 4294966750] = "ISAM_ERROR_LOG_SECTOR_SIZE_MISMATCH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_SECTOR_SIZE_MISMATCH_DATABASES_CONSISTENT"] = 4294966749] = "ISAM_ERROR_LOG_SECTOR_SIZE_MISMATCH_DATABASES_CONSISTENT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_SEQUENCE_END_DATABASES_CONSISTENT"] = 4294966748] = "ISAM_ERROR_LOG_SEQUENCE_END_DATABASES_CONSISTENT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_STREAMING_DATA_NOT_LOGGED"] = 4294966747] = "ISAM_ERROR_STREAMING_DATA_NOT_LOGGED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_DIRTY_SHUTDOWN"] = 4294966746] = "ISAM_ERROR_DATABASE_DIRTY_SHUTDOWN";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CONSISTENT_TIME_MISMATCH"] = 4294966745] = "ISAM_ERROR_CONSISTENT_TIME_MISMATCH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_PATCH_FILE_MISMATCH"] = 4294966744] = "ISAM_ERROR_DATABASE_PATCH_FILE_MISMATCH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_ENDING_RESTORE_LOG_TOO_LOW"] = 4294966743] = "ISAM_ERROR_ENDING_RESTORE_LOG_TOO_LOW";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_STARTING_RESTORE_LOG_TOO_HIGH"] = 4294966742] = "ISAM_ERROR_STARTING_RESTORE_LOG_TOO_HIGH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_GIVEN_LOG_FILE_HAS_BAD_SIGNATURE"] = 4294966741] = "ISAM_ERROR_GIVEN_LOG_FILE_HAS_BAD_SIGNATURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_GIVEN_LOG_FILE_IS_NOT_CONTIGUOUS"] = 4294966740] = "ISAM_ERROR_GIVEN_LOG_FILE_IS_NOT_CONTIGUOUS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MISSING_RESTORE_LOG_FILES"] = 4294966739] = "ISAM_ERROR_MISSING_RESTORE_LOG_FILES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MISSING_FULL_BACKUP"] = 4294966736] = "ISAM_ERROR_MISSING_FULL_BACKUP";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_BACKUP_DATABASE_SIZE"] = 4294966735] = "ISAM_ERROR_BAD_BACKUP_DATABASE_SIZE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_ALREADY_UPGRADED"] = 4294966734] = "ISAM_ERROR_DATABASE_ALREADY_UPGRADED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_INCOMPLETE_UPGRADE"] = 4294966733] = "ISAM_ERROR_DATABASE_INCOMPLETE_UPGRADE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MISSING_CURRENT_LOG_FILES"] = 4294966731] = "ISAM_ERROR_MISSING_CURRENT_LOG_FILES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DB_TIME_TOO_OLD"] = 4294966730] = "ISAM_ERROR_DB_TIME_TOO_OLD";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DB_TIME_TOO_NEW"] = 4294966729] = "ISAM_ERROR_DB_TIME_TOO_NEW";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MISSING_FILE_TO_BACKUP"] = 4294966727] = "ISAM_ERROR_MISSING_FILE_TO_BACKUP";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_TORN_WRITE_DURING_HARD_RESTORE"] = 4294966726] = "ISAM_ERROR_LOG_TORN_WRITE_DURING_HARD_RESTORE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_TORN_WRITE_DURING_HARD_RECOVERY"] = 4294966725] = "ISAM_ERROR_LOG_TORN_WRITE_DURING_HARD_RECOVERY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_CORRUPT_DURING_HARD_RESTORE"] = 4294966723] = "ISAM_ERROR_LOG_CORRUPT_DURING_HARD_RESTORE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_CORRUPT_DURING_HARD_RECOVERY"] = 4294966722] = "ISAM_ERROR_LOG_CORRUPT_DURING_HARD_RECOVERY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MUST_DISABLE_LOGGING_FOR_DB_UPGRADE"] = 4294966721] = "ISAM_ERROR_MUST_DISABLE_LOGGING_FOR_DB_UPGRADE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_RESTORE_TARGET_INSTANCE"] = 4294966719] = "ISAM_ERROR_BAD_RESTORE_TARGET_INSTANCE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RECOVERED_WITHOUT_UNDO"] = 4294966717] = "ISAM_ERROR_RECOVERED_WITHOUT_UNDO";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASES_NOT_FROM_SAME_SNAPSHOT"] = 4294966716] = "ISAM_ERROR_DATABASES_NOT_FROM_SAME_SNAPSHOT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SOFT_RECOVERY_ON_SNAPSHOT"] = 4294966715] = "ISAM_ERROR_SOFT_RECOVERY_ON_SNAPSHOT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COMMITTED_LOG_FILES_MISSING"] = 4294966714] = "ISAM_ERROR_COMMITTED_LOG_FILES_MISSING";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COMMITTED_LOG_FILES_CORRUPT"] = 4294966710] = "ISAM_ERROR_COMMITTED_LOG_FILES_CORRUPT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_UNICODE_TRANSLATION_BUFFER_TOO_SMALL"] = 4294966695] = "ISAM_ERROR_UNICODE_TRANSLATION_BUFFER_TOO_SMALL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_UNICODE_TRANSLATION_FAIL"] = 4294966694] = "ISAM_ERROR_UNICODE_TRANSLATION_FAIL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_UNICODE_NORMALIZATION_NOT_SUPPORTED"] = 4294966693] = "ISAM_ERROR_UNICODE_NORMALIZATION_NOT_SUPPORTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_EXISTING_LOG_FILE_HAS_BAD_SIGNATURE"] = 4294966686] = "ISAM_ERROR_EXISTING_LOG_FILE_HAS_BAD_SIGNATURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_EXISTING_LOG_FILE_IS_NOT_CONTIGUOUS"] = 4294966685] = "ISAM_ERROR_EXISTING_LOG_FILE_IS_NOT_CONTIGUOUS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_READ_VERIFY_FAILURE"] = 4294966684] = "ISAM_ERROR_LOG_READ_VERIFY_FAILURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SLV_READ_VERIFY_FAILURE"] = 4294966683] = "ISAM_ERROR_SLV_READ_VERIFY_FAILURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CHECKPOINT_DEPTH_TOO_DEEP"] = 4294966682] = "ISAM_ERROR_CHECKPOINT_DEPTH_TOO_DEEP";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RESTORE_OF_NON_BACKUP_DATABASE"] = 4294966681] = "ISAM_ERROR_RESTORE_OF_NON_BACKUP_DATABASE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_GRBIT"] = 4294966396] = "ISAM_ERROR_INVALID_GRBIT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TERM_IN_PROGRESS"] = 4294966296] = "ISAM_ERROR_TERM_IN_PROGRESS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FEATURE_NOT_AVAILABLE"] = 4294966295] = "ISAM_ERROR_FEATURE_NOT_AVAILABLE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_NAME"] = 4294966294] = "ISAM_ERROR_INVALID_NAME";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_PARAMETER"] = 4294966293] = "ISAM_ERROR_INVALID_PARAMETER";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_FILE_READ_ONLY"] = 4294966288] = "ISAM_ERROR_DATABASE_FILE_READ_ONLY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_DATABASE_ID"] = 4294966286] = "ISAM_ERROR_INVALID_DATABASE_ID";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_MEMORY"] = 4294966285] = "ISAM_ERROR_OUT_OF_MEMORY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_DATABASE_SPACE"] = 4294966284] = "ISAM_ERROR_OUT_OF_DATABASE_SPACE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_CURSORS"] = 4294966283] = "ISAM_ERROR_OUT_OF_CURSORS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_BUFFERS"] = 4294966282] = "ISAM_ERROR_OUT_OF_BUFFERS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_INDEXES"] = 4294966281] = "ISAM_ERROR_TOO_MANY_INDEXES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_KEYS"] = 4294966280] = "ISAM_ERROR_TOO_MANY_KEYS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RECORD_DELETED"] = 4294966279] = "ISAM_ERROR_RECORD_DELETED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_READ_VERIFY_FAILURE"] = 4294966278] = "ISAM_ERROR_READ_VERIFY_FAILURE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_PAGE_NOT_INITIALIZED"] = 4294966277] = "ISAM_ERROR_PAGE_NOT_INITIALIZED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_FILE_HANDLES"] = 4294966276] = "ISAM_ERROR_OUT_OF_FILE_HANDLES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DISK_IO"] = 4294966274] = "ISAM_ERROR_DISK_IO";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_PATH"] = 4294966273] = "ISAM_ERROR_INVALID_PATH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_SYSTEM_PATH"] = 4294966272] = "ISAM_ERROR_INVALID_SYSTEM_PATH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_LOG_DIRECTORY"] = 4294966271] = "ISAM_ERROR_INVALID_LOG_DIRECTORY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RECORD_TOO_BIG"] = 4294966270] = "ISAM_ERROR_RECORD_TOO_BIG";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_OPEN_DATABASES"] = 4294966269] = "ISAM_ERROR_TOO_MANY_OPEN_DATABASES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_DATABASE"] = 4294966268] = "ISAM_ERROR_INVALID_DATABASE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_NOT_INITIALIZED"] = 4294966267] = "ISAM_ERROR_NOT_INITIALIZED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_ALREADY_INITIALIZED"] = 4294966266] = "ISAM_ERROR_ALREADY_INITIALIZED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INIT_IN_PROGRESS"] = 4294966265] = "ISAM_ERROR_INIT_IN_PROGRESS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FILE_ACCESS_DENIED"] = 4294966264] = "ISAM_ERROR_FILE_ACCESS_DENIED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BUFFER_TOO_SMALL"] = 4294966258] = "ISAM_ERROR_BUFFER_TOO_SMALL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_COLUMNS"] = 4294966256] = "ISAM_ERROR_TOO_MANY_COLUMNS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CONTAINER_NOT_EMPTY"] = 4294966253] = "ISAM_ERROR_CONTAINER_NOT_EMPTY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_FILENAME"] = 4294966252] = "ISAM_ERROR_INVALID_FILENAME";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_BOOKMARK"] = 4294966251] = "ISAM_ERROR_INVALID_BOOKMARK";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_IN_USE"] = 4294966250] = "ISAM_ERROR_COLUMN_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_BUFFER_SIZE"] = 4294966249] = "ISAM_ERROR_INVALID_BUFFER_SIZE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_NOT_UPDATABLE"] = 4294966248] = "ISAM_ERROR_COLUMN_NOT_UPDATABLE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_IN_USE"] = 4294966245] = "ISAM_ERROR_INDEX_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LINK_NOT_SUPPORTED"] = 4294966244] = "ISAM_ERROR_LINK_NOT_SUPPORTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_NULL_KEY_DISALLOWED"] = 4294966243] = "ISAM_ERROR_NULL_KEY_DISALLOWED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_NOT_IN_TRANSACTION"] = 4294966242] = "ISAM_ERROR_NOT_IN_TRANSACTION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_ACTIVE_USERS"] = 4294966237] = "ISAM_ERROR_TOO_MANY_ACTIVE_USERS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_COUNTRY"] = 4294966235] = "ISAM_ERROR_INVALID_COUNTRY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_LANGUAGE_ID"] = 4294966234] = "ISAM_ERROR_INVALID_LANGUAGE_ID";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_CODE_PAGE"] = 4294966233] = "ISAM_ERROR_INVALID_CODE_PAGE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_LC_MAP_STRING_FLAGS"] = 4294966232] = "ISAM_ERROR_INVALID_LC_MAP_STRING_FLAGS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_VERSION_STORE_ENTRY_TOO_BIG"] = 4294966231] = "ISAM_ERROR_VERSION_STORE_ENTRY_TOO_BIG";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_VERSION_STORE_OUT_OF_MEMORY_AND_CLEANUP_TIMED_OUT"] = 4294966230] = "ISAM_ERROR_VERSION_STORE_OUT_OF_MEMORY_AND_CLEANUP_TIMED_OUT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_VERSION_STORE_OUT_OF_MEMORY"] = 4294966227] = "ISAM_ERROR_VERSION_STORE_OUT_OF_MEMORY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CANNOT_INDEX"] = 4294966225] = "ISAM_ERROR_CANNOT_INDEX";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RECORD_NOT_DELETED"] = 4294966224] = "ISAM_ERROR_RECORD_NOT_DELETED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_MEMPOOL_ENTRIES"] = 4294966223] = "ISAM_ERROR_TOO_MANY_MEMPOOL_ENTRIES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_OBJECT_I_DS"] = 4294966222] = "ISAM_ERROR_OUT_OF_OBJECT_I_DS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_LONG_VALUE_I_DS"] = 4294966221] = "ISAM_ERROR_OUT_OF_LONG_VALUE_I_DS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_AUTOINCREMENT_VALUES"] = 4294966220] = "ISAM_ERROR_OUT_OF_AUTOINCREMENT_VALUES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_DBTIME_VALUES"] = 4294966219] = "ISAM_ERROR_OUT_OF_DBTIME_VALUES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_SEQUENTIAL_INDEX_VALUES"] = 4294966218] = "ISAM_ERROR_OUT_OF_SEQUENTIAL_INDEX_VALUES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RUNNING_IN_ONE_INSTANCE_MODE"] = 4294966216] = "ISAM_ERROR_RUNNING_IN_ONE_INSTANCE_MODE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RUNNING_IN_MULTI_INSTANCE_MODE"] = 4294966215] = "ISAM_ERROR_RUNNING_IN_MULTI_INSTANCE_MODE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SYSTEM_PARAMS_ALREADY_SET"] = 4294966214] = "ISAM_ERROR_SYSTEM_PARAMS_ALREADY_SET";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SYSTEM_PATH_IN_USE"] = 4294966213] = "ISAM_ERROR_SYSTEM_PATH_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_FILE_PATH_IN_USE"] = 4294966212] = "ISAM_ERROR_LOG_FILE_PATH_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TEMP_PATH_IN_USE"] = 4294966211] = "ISAM_ERROR_TEMP_PATH_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INSTANCE_NAME_IN_USE"] = 4294966210] = "ISAM_ERROR_INSTANCE_NAME_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INSTANCE_UNAVAILABLE"] = 4294966206] = "ISAM_ERROR_INSTANCE_UNAVAILABLE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_UNAVAILABLE"] = 4294966205] = "ISAM_ERROR_DATABASE_UNAVAILABLE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INSTANCE_UNAVAILABLE_DUE_TO_FATAL_LOG_DISK_FULL"] = 4294966204] = "ISAM_ERROR_INSTANCE_UNAVAILABLE_DUE_TO_FATAL_LOG_DISK_FULL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OUT_OF_SESSIONS"] = 4294966195] = "ISAM_ERROR_OUT_OF_SESSIONS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_WRITE_CONFLICT"] = 4294966194] = "ISAM_ERROR_WRITE_CONFLICT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TRANS_TOO_DEEP"] = 4294966193] = "ISAM_ERROR_TRANS_TOO_DEEP";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_SESID"] = 4294966192] = "ISAM_ERROR_INVALID_SESID";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_WRITE_CONFLICT_PRIMARY_INDEX"] = 4294966191] = "ISAM_ERROR_WRITE_CONFLICT_PRIMARY_INDEX";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_IN_TRANSACTION"] = 4294966188] = "ISAM_ERROR_IN_TRANSACTION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_ROLLBACK_REQUIRED"] = 4294966187] = "ISAM_ERROR_ROLLBACK_REQUIRED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TRANS_READ_ONLY"] = 4294966186] = "ISAM_ERROR_TRANS_READ_ONLY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SESSION_WRITE_CONFLICT"] = 4294966185] = "ISAM_ERROR_SESSION_WRITE_CONFLICT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RECORD_TOO_BIG_FOR_BACKWARD_COMPATIBILITY"] = 4294966184] = "ISAM_ERROR_RECORD_TOO_BIG_FOR_BACKWARD_COMPATIBILITY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CANNOT_MATERIALIZE_FORWARD_ONLY_SORT"] = 4294966183] = "ISAM_ERROR_CANNOT_MATERIALIZE_FORWARD_ONLY_SORT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SESID_TABLE_ID_MISMATCH"] = 4294966182] = "ISAM_ERROR_SESID_TABLE_ID_MISMATCH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_INSTANCE"] = 4294966181] = "ISAM_ERROR_INVALID_INSTANCE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_DUPLICATE"] = 4294966095] = "ISAM_ERROR_DATABASE_DUPLICATE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_IN_USE"] = 4294966094] = "ISAM_ERROR_DATABASE_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_NOT_FOUND"] = 4294966093] = "ISAM_ERROR_DATABASE_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_INVALID_NAME"] = 4294966092] = "ISAM_ERROR_DATABASE_INVALID_NAME";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_INVALID_PAGES"] = 4294966091] = "ISAM_ERROR_DATABASE_INVALID_PAGES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_CORRUPTED"] = 4294966090] = "ISAM_ERROR_DATABASE_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_LOCKED"] = 4294966089] = "ISAM_ERROR_DATABASE_LOCKED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CANNOT_DISABLE_VERSIONING"] = 4294966088] = "ISAM_ERROR_CANNOT_DISABLE_VERSIONING";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_DATABASE_VERSION"] = 4294966087] = "ISAM_ERROR_INVALID_DATABASE_VERSION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE200_FORMAT"] = 4294966086] = "ISAM_ERROR_DATABASE200_FORMAT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE400_FORMAT"] = 4294966085] = "ISAM_ERROR_DATABASE400_FORMAT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE500_FORMAT"] = 4294966084] = "ISAM_ERROR_DATABASE500_FORMAT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_PAGE_SIZE_MISMATCH"] = 4294966083] = "ISAM_ERROR_PAGE_SIZE_MISMATCH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_INSTANCES"] = 4294966082] = "ISAM_ERROR_TOO_MANY_INSTANCES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_SHARING_VIOLATION"] = 4294966081] = "ISAM_ERROR_DATABASE_SHARING_VIOLATION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_ATTACHED_DATABASE_MISMATCH"] = 4294966080] = "ISAM_ERROR_ATTACHED_DATABASE_MISMATCH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_INVALID_PATH"] = 4294966079] = "ISAM_ERROR_DATABASE_INVALID_PATH";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_ID_IN_USE"] = 4294966078] = "ISAM_ERROR_DATABASE_ID_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FORCE_DETACH_NOT_ALLOWED"] = 4294966077] = "ISAM_ERROR_FORCE_DETACH_NOT_ALLOWED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CATALOG_CORRUPTED"] = 4294966076] = "ISAM_ERROR_CATALOG_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_PARTIALLY_ATTACHED_DB"] = 4294966075] = "ISAM_ERROR_PARTIALLY_ATTACHED_DB";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_SIGN_IN_USE"] = 4294966074] = "ISAM_ERROR_DATABASE_SIGN_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATABASE_CORRUPTED_NO_REPAIR"] = 4294966072] = "ISAM_ERROR_DATABASE_CORRUPTED_NO_REPAIR";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_CREATE_DB_VERSION"] = 4294966071] = "ISAM_ERROR_INVALID_CREATE_DB_VERSION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TABLE_LOCKED"] = 4294965994] = "ISAM_ERROR_TABLE_LOCKED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TABLE_DUPLICATE"] = 4294965993] = "ISAM_ERROR_TABLE_DUPLICATE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TABLE_IN_USE"] = 4294965992] = "ISAM_ERROR_TABLE_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OBJECT_NOT_FOUND"] = 4294965991] = "ISAM_ERROR_OBJECT_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DENSITY_INVALID"] = 4294965989] = "ISAM_ERROR_DENSITY_INVALID";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TABLE_NOT_EMPTY"] = 4294965988] = "ISAM_ERROR_TABLE_NOT_EMPTY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_TABLE_ID"] = 4294965986] = "ISAM_ERROR_INVALID_TABLE_ID";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_OPEN_TABLES"] = 4294965985] = "ISAM_ERROR_TOO_MANY_OPEN_TABLES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_ILLEGAL_OPERATION"] = 4294965984] = "ISAM_ERROR_ILLEGAL_OPERATION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_OPEN_TABLES_AND_CLEANUP_TIMED_OUT"] = 4294965983] = "ISAM_ERROR_TOO_MANY_OPEN_TABLES_AND_CLEANUP_TIMED_OUT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OBJECT_DUPLICATE"] = 4294965982] = "ISAM_ERROR_OBJECT_DUPLICATE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_OBJECT"] = 4294965980] = "ISAM_ERROR_INVALID_OBJECT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CANNOT_DELETE_TEMP_TABLE"] = 4294965979] = "ISAM_ERROR_CANNOT_DELETE_TEMP_TABLE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CANNOT_DELETE_SYSTEM_TABLE"] = 4294965978] = "ISAM_ERROR_CANNOT_DELETE_SYSTEM_TABLE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CANNOT_DELETE_TEMPLATE_TABLE"] = 4294965977] = "ISAM_ERROR_CANNOT_DELETE_TEMPLATE_TABLE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_EXCLUSIVE_TABLE_LOCK_REQUIRED"] = 4294965974] = "ISAM_ERROR_EXCLUSIVE_TABLE_LOCK_REQUIRED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FIXED_DDL"] = 4294965973] = "ISAM_ERROR_FIXED_DDL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FIXED_INHERITED_DDL"] = 4294965972] = "ISAM_ERROR_FIXED_INHERITED_DDL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CANNOT_NEST_DDL"] = 4294965971] = "ISAM_ERROR_CANNOT_NEST_DDL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DDL_NOT_INHERITABLE"] = 4294965970] = "ISAM_ERROR_DDL_NOT_INHERITABLE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_SETTINGS"] = 4294965968] = "ISAM_ERROR_INVALID_SETTINGS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CLIENT_REQUEST_TO_STOP_JET_SERVICE"] = 4294965967] = "ISAM_ERROR_CLIENT_REQUEST_TO_STOP_JET_SERVICE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CANNOT_ADD_FIXED_VAR_COLUMN_TO_DERIVED_TABLE"] = 4294965966] = "ISAM_ERROR_CANNOT_ADD_FIXED_VAR_COLUMN_TO_DERIVED_TABLE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_CANT_BUILD"] = 4294965895] = "ISAM_ERROR_INDEX_CANT_BUILD";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_HAS_PRIMARY"] = 4294965894] = "ISAM_ERROR_INDEX_HAS_PRIMARY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_DUPLICATE"] = 4294965893] = "ISAM_ERROR_INDEX_DUPLICATE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_NOT_FOUND"] = 4294965892] = "ISAM_ERROR_INDEX_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_MUST_STAY"] = 4294965891] = "ISAM_ERROR_INDEX_MUST_STAY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_INVALID_DEF"] = 4294965890] = "ISAM_ERROR_INDEX_INVALID_DEF";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_CREATE_INDEX"] = 4294965887] = "ISAM_ERROR_INVALID_CREATE_INDEX";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_OPEN_INDEXES"] = 4294965886] = "ISAM_ERROR_TOO_MANY_OPEN_INDEXES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MULTI_VALUED_INDEX_VIOLATION"] = 4294965885] = "ISAM_ERROR_MULTI_VALUED_INDEX_VIOLATION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_BUILD_CORRUPTED"] = 4294965884] = "ISAM_ERROR_INDEX_BUILD_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_PRIMARY_INDEX_CORRUPTED"] = 4294965883] = "ISAM_ERROR_PRIMARY_INDEX_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SECONDARY_INDEX_CORRUPTED"] = 4294965882] = "ISAM_ERROR_SECONDARY_INDEX_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_INDEX_ID"] = 4294965880] = "ISAM_ERROR_INVALID_INDEX_ID";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_TUPLES_SECONDARY_INDEX_ONLY"] = 4294965866] = "ISAM_ERROR_INDEX_TUPLES_SECONDARY_INDEX_ONLY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_TUPLES_TOO_MANY_COLUMNS"] = 4294965865] = "ISAM_ERROR_INDEX_TUPLES_TOO_MANY_COLUMNS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_TUPLES_NON_UNIQUE_ONLY"] = 4294965864] = "ISAM_ERROR_INDEX_TUPLES_NON_UNIQUE_ONLY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_TUPLES_TEXT_BINARY_COLUMNS_ONLY"] = 4294965863] = "ISAM_ERROR_INDEX_TUPLES_TEXT_BINARY_COLUMNS_ONLY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_TUPLES_VAR_SEG_MAC_NOT_ALLOWED"] = 4294965862] = "ISAM_ERROR_INDEX_TUPLES_VAR_SEG_MAC_NOT_ALLOWED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_TUPLES_INVALID_LIMITS"] = 4294965861] = "ISAM_ERROR_INDEX_TUPLES_INVALID_LIMITS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_TUPLES_CANNOT_RETRIEVE_FROM_INDEX"] = 4294965860] = "ISAM_ERROR_INDEX_TUPLES_CANNOT_RETRIEVE_FROM_INDEX";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INDEX_TUPLES_KEY_TOO_SMALL"] = 4294965859] = "ISAM_ERROR_INDEX_TUPLES_KEY_TOO_SMALL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_LONG"] = 4294965795] = "ISAM_ERROR_COLUMN_LONG";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_NO_CHUNK"] = 4294965794] = "ISAM_ERROR_COLUMN_NO_CHUNK";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_DOES_NOT_FIT"] = 4294965793] = "ISAM_ERROR_COLUMN_DOES_NOT_FIT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_NULL_INVALID"] = 4294965792] = "ISAM_ERROR_NULL_INVALID";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_INDEXED"] = 4294965791] = "ISAM_ERROR_COLUMN_INDEXED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_TOO_BIG"] = 4294965790] = "ISAM_ERROR_COLUMN_TOO_BIG";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_NOT_FOUND"] = 4294965789] = "ISAM_ERROR_COLUMN_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_DUPLICATE"] = 4294965788] = "ISAM_ERROR_COLUMN_DUPLICATE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MULTI_VALUED_COLUMN_MUST_BE_TAGGED"] = 4294965787] = "ISAM_ERROR_MULTI_VALUED_COLUMN_MUST_BE_TAGGED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_REDUNDANT"] = 4294965786] = "ISAM_ERROR_COLUMN_REDUNDANT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_COLUMN_TYPE"] = 4294965785] = "ISAM_ERROR_INVALID_COLUMN_TYPE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TAGGED_NOT_NULL"] = 4294965782] = "ISAM_ERROR_TAGGED_NOT_NULL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_NO_CURRENT_INDEX"] = 4294965781] = "ISAM_ERROR_NO_CURRENT_INDEX";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_KEY_IS_MADE"] = 4294965780] = "ISAM_ERROR_KEY_IS_MADE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_COLUMN_ID"] = 4294965779] = "ISAM_ERROR_BAD_COLUMN_ID";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_BAD_ITAG_SEQUENCE"] = 4294965778] = "ISAM_ERROR_BAD_ITAG_SEQUENCE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_COLUMN_IN_RELATIONSHIP"] = 4294965777] = "ISAM_ERROR_COLUMN_IN_RELATIONSHIP";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CANNOT_BE_TAGGED"] = 4294965775] = "ISAM_ERROR_CANNOT_BE_TAGGED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DEFAULT_VALUE_TOO_BIG"] = 4294965772] = "ISAM_ERROR_DEFAULT_VALUE_TOO_BIG";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MULTI_VALUED_DUPLICATE"] = 4294965771] = "ISAM_ERROR_MULTI_VALUED_DUPLICATE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LV_CORRUPTED"] = 4294965770] = "ISAM_ERROR_LV_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_MULTI_VALUED_DUPLICATE_AFTER_TRUNCATION"] = 4294965768] = "ISAM_ERROR_MULTI_VALUED_DUPLICATE_AFTER_TRUNCATION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DERIVED_COLUMN_CORRUPTION"] = 4294965767] = "ISAM_ERROR_DERIVED_COLUMN_CORRUPTION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_PLACEHOLDER_COLUMN"] = 4294965766] = "ISAM_ERROR_INVALID_PLACEHOLDER_COLUMN";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RECORD_NOT_FOUND"] = 4294965695] = "ISAM_ERROR_RECORD_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RECORD_NO_COPY"] = 4294965694] = "ISAM_ERROR_RECORD_NO_COPY";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_NO_CURRENT_RECORD"] = 4294965693] = "ISAM_ERROR_NO_CURRENT_RECORD";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RECORD_PRIMARY_CHANGED"] = 4294965692] = "ISAM_ERROR_RECORD_PRIMARY_CHANGED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_KEY_DUPLICATE"] = 4294965691] = "ISAM_ERROR_KEY_DUPLICATE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_ALREADY_PREPARED"] = 4294965689] = "ISAM_ERROR_ALREADY_PREPARED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_KEY_NOT_MADE"] = 4294965688] = "ISAM_ERROR_KEY_NOT_MADE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_UPDATE_NOT_PREPARED"] = 4294965687] = "ISAM_ERROR_UPDATE_NOT_PREPARED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DATA_HAS_CHANGED"] = 4294965685] = "ISAM_ERROR_DATA_HAS_CHANGED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LANGUAGE_NOT_SUPPORTED"] = 4294965677] = "ISAM_ERROR_LANGUAGE_NOT_SUPPORTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_SORTS"] = 4294965595] = "ISAM_ERROR_TOO_MANY_SORTS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_ON_SORT"] = 4294965594] = "ISAM_ERROR_INVALID_ON_SORT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TEMP_FILE_OPEN_ERROR"] = 4294965493] = "ISAM_ERROR_TEMP_FILE_OPEN_ERROR";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_ATTACHED_DATABASES"] = 4294965491] = "ISAM_ERROR_TOO_MANY_ATTACHED_DATABASES";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_DISK_FULL"] = 4294965488] = "ISAM_ERROR_DISK_FULL";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_PERMISSION_DENIED"] = 4294965487] = "ISAM_ERROR_PERMISSION_DENIED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FILE_NOT_FOUND"] = 4294965485] = "ISAM_ERROR_FILE_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FILE_INVALID_TYPE"] = 4294965484] = "ISAM_ERROR_FILE_INVALID_TYPE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_AFTER_INITIALIZATION"] = 4294965446] = "ISAM_ERROR_AFTER_INITIALIZATION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LOG_CORRUPTED"] = 4294965444] = "ISAM_ERROR_LOG_CORRUPTED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_INVALID_OPERATION"] = 4294965390] = "ISAM_ERROR_INVALID_OPERATION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_ACCESS_DENIED"] = 4294965389] = "ISAM_ERROR_ACCESS_DENIED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_TOO_MANY_SPLITS"] = 4294965387] = "ISAM_ERROR_TOO_MANY_SPLITS";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SESSION_SHARING_VIOLATION"] = 4294965386] = "ISAM_ERROR_SESSION_SHARING_VIOLATION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_ENTRY_POINT_NOT_FOUND"] = 4294965385] = "ISAM_ERROR_ENTRY_POINT_NOT_FOUND";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SESSION_CONTEXT_ALREADY_SET"] = 4294965384] = "ISAM_ERROR_SESSION_CONTEXT_ALREADY_SET";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SESSION_CONTEXT_NOT_SET_BY_THIS_THREAD"] = 4294965383] = "ISAM_ERROR_SESSION_CONTEXT_NOT_SET_BY_THIS_THREAD";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_SESSION_IN_USE"] = 4294965382] = "ISAM_ERROR_SESSION_IN_USE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_RECORD_FORMAT_CONVERSION_FAILED"] = 4294965381] = "ISAM_ERROR_RECORD_FORMAT_CONVERSION_FAILED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_ONE_DATABASE_PER_SESSION"] = 4294965380] = "ISAM_ERROR_ONE_DATABASE_PER_SESSION";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_ROLLBACK_ERROR"] = 4294965379] = "ISAM_ERROR_ROLLBACK_ERROR";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CALLBACK_FAILED"] = 4294965195] = "ISAM_ERROR_CALLBACK_FAILED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_CALLBACK_NOT_RESOLVED"] = 4294965194] = "ISAM_ERROR_CALLBACK_NOT_RESOLVED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OS_SNAPSHOT_INVALID_SEQUENCE"] = 4294964895] = "ISAM_ERROR_OS_SNAPSHOT_INVALID_SEQUENCE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OS_SNAPSHOT_TIME_OUT"] = 4294964894] = "ISAM_ERROR_OS_SNAPSHOT_TIME_OUT";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OS_SNAPSHOT_NOT_ALLOWED"] = 4294964893] = "ISAM_ERROR_OS_SNAPSHOT_NOT_ALLOWED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_OS_SNAPSHOT_INVALID_SNAP_ID"] = 4294964892] = "ISAM_ERROR_OS_SNAPSHOT_INVALID_SNAP_ID";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LS_CALLBACK_NOT_SPECIFIED"] = 4294964296] = "ISAM_ERROR_LS_CALLBACK_NOT_SPECIFIED";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LS_ALREADY_SET"] = 4294964295] = "ISAM_ERROR_LS_ALREADY_SET";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_LS_NOT_SET"] = 4294964294] = "ISAM_ERROR_LS_NOT_SET";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FILE_IO_SPARSE"] = 4294963296] = "ISAM_ERROR_FILE_IO_SPARSE";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FILE_IO_BEYOND_EOF"] = 4294963295] = "ISAM_ERROR_FILE_IO_BEYOND_EOF";
    ErrorCodeType[ErrorCodeType["ISAM_ERROR_FILE_COMPRESSED"] = 4294963291] = "ISAM_ERROR_FILE_COMPRESSED";
})(ErrorCodeType || (ErrorCodeType = {}));
var Gender;
(function (Gender) {
    // Seems rather binary, which is less than ideal. We are directly using the,
    // terms used by the documentation.,
    Gender[Gender["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["MALE"] = 2] = "MALE";
})(Gender || (Gender = {}));
var IconIndex;
(function (IconIndex) {
    IconIndex[IconIndex["UNSPECIFIED"] = 4294967295] = "UNSPECIFIED";
    IconIndex[IconIndex["SINGLE_INSTANCE_APPOINTMENT"] = 1024] = "SINGLE_INSTANCE_APPOINTMENT";
    IconIndex[IconIndex["RECURRING_APPOINTMENT"] = 1025] = "RECURRING_APPOINTMENT";
    IconIndex[IconIndex["SINGLE_INSTANCE_MEETING"] = 1026] = "SINGLE_INSTANCE_MEETING";
    IconIndex[IconIndex["RECURRING_MEETING"] = 1027] = "RECURRING_MEETING";
    IconIndex[IconIndex["MEETING_REQUEST_UPDATE"] = 1028] = "MEETING_REQUEST_UPDATE";
    IconIndex[IconIndex["ACCEPT_MEETING_REQUEST"] = 1029] = "ACCEPT_MEETING_REQUEST";
    IconIndex[IconIndex["DECLINE_MEETING_REQUEST"] = 1030] = "DECLINE_MEETING_REQUEST";
    IconIndex[IconIndex["TENTATIVELY_ACCEPT_MEETING_REQUEST"] = 1031] = "TENTATIVELY_ACCEPT_MEETING_REQUEST";
    IconIndex[IconIndex["MEETING_CANCELLATION"] = 1032] = "MEETING_CANCELLATION";
    IconIndex[IconIndex["MEETING_UPDATE_INFORMATIONAL"] = 1033] = "MEETING_UPDATE_INFORMATIONAL";
    IconIndex[IconIndex["FORWARD_NOTIFICATION"] = 1035] = "FORWARD_NOTIFICATION";
})(IconIndex || (IconIndex = {}));
var Importance;
(function (Importance) {
    Importance[Importance["LOW"] = 0] = "LOW";
    Importance[Importance["MEDIUM"] = 1] = "MEDIUM";
    Importance[Importance["HIGH"] = 2] = "HIGH";
})(Importance || (Importance = {}));
var InsecureFeatures;
(function (InsecureFeatures) {
    /*
    Insecure options that can be enabled for an MSG file.
  
    Using ALL is not recommended unless you check this list before updating to,
    a new version of the module, as new features may have been added. It is,
    also not recommended to use these on files you do not trust.
  
    The following features are avilable:
  
    * NONE: No insecure features are allowed (default).,
    * PIL_IMAGE_PARSING: Various operations requiring PIL or Pillow that will,
      read image data from parts of the MSG file. These operations are usually,
      constructing new images or are converting from one format to another.,
      This may expose you to security issues from those libraries.,
    * ALL: All of the previously listed features will be enabled for the MSG,
      file.,
    */
    InsecureFeatures[InsecureFeatures["NONE"] = 0] = "NONE";
    InsecureFeatures[InsecureFeatures["PIL_IMAGE_PARSING"] = 1] = "PIL_IMAGE_PARSING";
    InsecureFeatures[InsecureFeatures["ALL"] = 15] = "ALL";
})(InsecureFeatures || (InsecureFeatures = {}));
var LogFlags;
(function (LogFlags) {
    LogFlags[LogFlags["NO_JOURNAL_ASSOCIATED_ATT"] = 0] = "NO_JOURNAL_ASSOCIATED_ATT";
    LogFlags[LogFlags["HAS_JOUNRAL_ASSOCIATED_ATT"] = 1073741824] = "HAS_JOUNRAL_ASSOCIATED_ATT";
})(LogFlags || (LogFlags = {}));
var MacintoshEncoding;
(function (MacintoshEncoding) {
    /*
    The encoding to use for Macintosh-specific data attachments.,
    */
    MacintoshEncoding[MacintoshEncoding["BIN_HEX"] = 0] = "BIN_HEX";
    MacintoshEncoding[MacintoshEncoding["UUENCODE"] = 1] = "UUENCODE";
    MacintoshEncoding[MacintoshEncoding["APPLE_SINGLE"] = 2] = "APPLE_SINGLE";
    MacintoshEncoding[MacintoshEncoding["APPLE_DOUBLE"] = 3] = "APPLE_DOUBLE";
})(MacintoshEncoding || (MacintoshEncoding = {}));
var MeetingObjectChange;
(function (MeetingObjectChange) {
    /*
    Indicates a property that has changed on a meeting object.
  
    * START: The start has changed.,
    * END: The end has changed.,
    * RECUR: The recurrence pattern has changed.,
    * LOCATION: The location has changed.,
    * SUBJECT: The subject has changed.,
    * REQUIRED_ATTENDEE: One or more required attendees were added.,
    * OPTIONAL_ATTENDEE: One or more optional attendees were added.,
    * BODY: The body was modified.,
    * RESPONSE: The responseRequested or replyRequested property has changed.,
    * ALLOW_PROPOSE: The appointmentNotAllowPropose property has changed.,
    */
    MeetingObjectChange[MeetingObjectChange["START"] = 1] = "START";
    MeetingObjectChange[MeetingObjectChange["END"] = 2] = "END";
    MeetingObjectChange[MeetingObjectChange["RECUR"] = 4] = "RECUR";
    MeetingObjectChange[MeetingObjectChange["LOCATION"] = 8] = "LOCATION";
    MeetingObjectChange[MeetingObjectChange["SUBJECT"] = 16] = "SUBJECT";
    MeetingObjectChange[MeetingObjectChange["REQUIRED_ATTENDEE"] = 32] = "REQUIRED_ATTENDEE";
    MeetingObjectChange[MeetingObjectChange["OPTIONAL_ATTENDEE"] = 64] = "OPTIONAL_ATTENDEE";
    MeetingObjectChange[MeetingObjectChange["BODY"] = 128] = "BODY";
    MeetingObjectChange[MeetingObjectChange["RESPONSE"] = 512] = "RESPONSE";
    MeetingObjectChange[MeetingObjectChange["ALLOW_PROPOSE"] = 1024] = "ALLOW_PROPOSE";
    MeetingObjectChange[MeetingObjectChange["DEPRECATED"] = 2048] = "DEPRECATED";
})(MeetingObjectChange || (MeetingObjectChange = {}));
var MeetingRecipientType;
(function (MeetingRecipientType) {
    MeetingRecipientType[MeetingRecipientType["ORGANIZER"] = 1] = "ORGANIZER";
    MeetingRecipientType[MeetingRecipientType["SENDABLE_REQUIRED_ATTENDEE"] = 1] = "SENDABLE_REQUIRED_ATTENDEE";
    MeetingRecipientType[MeetingRecipientType["SENDABLE_OPTIONAL_ATTENDEE"] = 2] = "SENDABLE_OPTIONAL_ATTENDEE";
    MeetingRecipientType[MeetingRecipientType["SENDABLE_RESOURCE_OBJECT"] = 3] = "SENDABLE_RESOURCE_OBJECT";
})(MeetingRecipientType || (MeetingRecipientType = {}));
var MeetingType;
(function (MeetingType) {
    /*
    The type of Meeting Request object of Meeting Update object.
  
    * EMPTY: Unspecified.,
    * REQUEST: The meeting request is the initial request.,
    * FULL: Attendees were added, the meeting was cancelled and the organizer is,
      uncancelling it, and or the start, end, or recurrance property was,
      changed.,
    * INFO: An informational update was made to the meeting and it is not one of,
      the conditions for FULL.,
    * OUT_OF_DATE: A newer Meeting Request object or MeetingUpdate object was,
      received after this one.,
    * DELEGATOR_COPY: Set on the delegator's copy when a delegate will handle,
      meeting-related objects.,
    */
    MeetingType[MeetingType["EMPTY"] = 0] = "EMPTY";
    MeetingType[MeetingType["REQUEST"] = 1] = "REQUEST";
    MeetingType[MeetingType["FULL"] = 65536] = "FULL";
    MeetingType[MeetingType["INFO"] = 131072] = "INFO";
    MeetingType[MeetingType["OUT_OF_DATE"] = 524288] = "OUT_OF_DATE";
    MeetingType[MeetingType["DELEGATOR_COPY"] = 1048576] = "DELEGATOR_COPY";
})(MeetingType || (MeetingType = {}));
var MessageFormat;
(function (MessageFormat) {
    MessageFormat[MessageFormat["TNEF"] = 0] = "TNEF";
    MessageFormat[MessageFormat["MIME"] = 1] = "MIME";
})(MessageFormat || (MessageFormat = {}));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["PRIVATE_FOLDER"] = 1] = "PRIVATE_FOLDER";
    MessageType[MessageType["PUBLIC_FOLDER"] = 3] = "PUBLIC_FOLDER";
    MessageType[MessageType["MAPPED_PUBLIC_FOLDER"] = 5] = "MAPPED_PUBLIC_FOLDER";
    MessageType[MessageType["PRIVATE_MESSAGE"] = 7] = "PRIVATE_MESSAGE";
    MessageType[MessageType["PUBLIC_MESSAGE"] = 9] = "PUBLIC_MESSAGE";
    MessageType[MessageType["MAPPED_PUBLIC_MESSAGE"] = 11] = "MAPPED_PUBLIC_MESSAGE";
    MessageType[MessageType["PUBLIC_NEWSGROUP_FOLDER"] = 12] = "PUBLIC_NEWSGROUP_FOLDER";
})(MessageType || (MessageType = {}));
var NamedPropertyType;
(function (NamedPropertyType) {
    NamedPropertyType[NamedPropertyType["NUMERICAL_NAMED"] = 0] = "NUMERICAL_NAMED";
    NamedPropertyType[NamedPropertyType["STRING_NAMED"] = 1] = "STRING_NAMED";
})(NamedPropertyType || (NamedPropertyType = {}));
var NoteColor;
(function (NoteColor) {
    NoteColor[NoteColor["BLUE"] = 0] = "BLUE";
    NoteColor[NoteColor["GREEN"] = 1] = "GREEN";
    NoteColor[NoteColor["PINK"] = 2] = "PINK";
    NoteColor[NoteColor["YELLOW"] = 3] = "YELLOW";
    NoteColor[NoteColor["WHITE"] = 4] = "WHITE";
})(NoteColor || (NoteColor = {}));
var ODTCf;
(function (ODTCf) {
    /*
    Values for the ``cf`` field of the ODT structure.,
    */
    ODTCf[ODTCf["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ODTCf[ODTCf["RICH_TEXT_FORMAT"] = 1] = "RICH_TEXT_FORMAT";
    ODTCf[ODTCf["TEXT_FORMAT"] = 2] = "TEXT_FORMAT";
    ODTCf[ODTCf["METAFILE"] = 3] = "METAFILE";
    ODTCf[ODTCf["BITMAP"] = 4] = "BITMAP";
    ODTCf[ODTCf["DEVICE_INDEPENDENT_BITMAP"] = 5] = "DEVICE_INDEPENDENT_BITMAP";
    ODTCf[ODTCf["HTML_FORMAT"] = 10] = "HTML_FORMAT";
    ODTCf[ODTCf["UNICODE_TEXT_FORMAT"] = 20] = "UNICODE_TEXT_FORMAT";
})(ODTCf || (ODTCf = {}));
var ODTPersist1;
(function (ODTPersist1) {
    /*
    Flag values for ODTPersist1, in the order they would appear when unpacking a,
    little endian unsigned short.,
    */
    ODTPersist1[ODTPersist1["NONE"] = 0] = "NONE";
    ODTPersist1[ODTPersist1["RESERVED_1"] = 1] = "RESERVED_1";
    ODTPersist1[ODTPersist1["F_DEF_HANDLER"] = 2] = "F_DEF_HANDLER";
    ODTPersist1[ODTPersist1["RESERVED_2"] = 4] = "RESERVED_2";
    ODTPersist1[ODTPersist1["RESERVED_3"] = 8] = "RESERVED_3";
    ODTPersist1[ODTPersist1["F_LINK"] = 16] = "F_LINK";
    ODTPersist1[ODTPersist1["RESERVED_4"] = 32] = "RESERVED_4";
    ODTPersist1[ODTPersist1["F_ICON"] = 64] = "F_ICON";
    ODTPersist1[ODTPersist1["F_IS_OLE1"] = 128] = "F_IS_OLE1";
    ODTPersist1[ODTPersist1["F_MANUAL"] = 256] = "F_MANUAL";
    ODTPersist1[ODTPersist1["F_RECOMPOSE_ON_RESIZE"] = 512] = "F_RECOMPOSE_ON_RESIZE";
    ODTPersist1[ODTPersist1["RESERVED_5"] = 1024] = "RESERVED_5";
    ODTPersist1[ODTPersist1["RESERVED_6"] = 2048] = "RESERVED_6";
    ODTPersist1[ODTPersist1["F_OCX"] = 4096] = "F_OCX";
    ODTPersist1[ODTPersist1["F_STREAM"] = 8192] = "F_STREAM";
    ODTPersist1[ODTPersist1["RESERVED_7"] = 16384] = "RESERVED_7";
    ODTPersist1[ODTPersist1["F_VIEW_OBJECT"] = 32768] = "F_VIEW_OBJECT";
})(ODTPersist1 || (ODTPersist1 = {}));
var ODTPersist2;
(function (ODTPersist2) {
    /*
    Flag values for ODTPersist2, in the order they would appear when unpacking a,
    little endian unsigned short.,
    */
    ODTPersist2[ODTPersist2["NONE"] = 0] = "NONE";
    ODTPersist2[ODTPersist2["F_EMF"] = 1] = "F_EMF";
    ODTPersist2[ODTPersist2["RESERVED_1"] = 2] = "RESERVED_1";
    ODTPersist2[ODTPersist2["F_QUERIED_EMF"] = 4] = "F_QUERIED_EMF";
    ODTPersist2[ODTPersist2["F_STORED_AS_EMF"] = 8] = "F_STORED_AS_EMF";
    ODTPersist2[ODTPersist2["RESERVED_2"] = 16] = "RESERVED_2";
    ODTPersist2[ODTPersist2["RESERVED_3"] = 32] = "RESERVED_3";
    ODTPersist2[ODTPersist2["RESERVED_4"] = 64] = "RESERVED_4";
    ODTPersist2[ODTPersist2["RESERVED_5"] = 128] = "RESERVED_5";
    ODTPersist2[ODTPersist2["RESERVED_6"] = 256] = "RESERVED_6";
    ODTPersist2[ODTPersist2["RESERVED_7"] = 512] = "RESERVED_7";
    ODTPersist2[ODTPersist2["RESERVED_8"] = 1024] = "RESERVED_8";
    ODTPersist2[ODTPersist2["RESERVED_9"] = 2048] = "RESERVED_9";
    ODTPersist2[ODTPersist2["RESERVED_10"] = 4096] = "RESERVED_10";
    ODTPersist2[ODTPersist2["RESERVED_11"] = 8192] = "RESERVED_11";
    ODTPersist2[ODTPersist2["RESERVED_12"] = 16384] = "RESERVED_12";
    ODTPersist2[ODTPersist2["RESERVED_13"] = 32768] = "RESERVED_13";
})(ODTPersist2 || (ODTPersist2 = {}));
var OORBodyFormat;
(function (OORBodyFormat) {
    /*
    The body format for One Off Recipients.,
    */
    OORBodyFormat[OORBodyFormat["TEXT_ONLY"] = 3] = "TEXT_ONLY";
    OORBodyFormat[OORBodyFormat["HTML_ONLY"] = 7] = "HTML_ONLY";
    OORBodyFormat[OORBodyFormat["TEXT_AND_HTML"] = 11] = "TEXT_AND_HTML";
    // This one isn't actually listed in the documentation, but I've seen it and,
    // this is my best guess for what a format of 0 is meant to mean. This will,
    // also prevent the code from failing on a 0 format.,
    OORBodyFormat[OORBodyFormat["UNSPECIFIED"] = 0] = "UNSPECIFIED";
})(OORBodyFormat || (OORBodyFormat = {}));
var PostalAddressID;
(function (PostalAddressID) {
    PostalAddressID[PostalAddressID["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    PostalAddressID[PostalAddressID["HOME"] = 1] = "HOME";
    PostalAddressID[PostalAddressID["WORK"] = 2] = "WORK";
    PostalAddressID[PostalAddressID["OTHER"] = 3] = "OTHER";
})(PostalAddressID || (PostalAddressID = {}));
var Priority;
(function (Priority) {
    Priority[Priority["URGENT"] = 1] = "URGENT";
    Priority[Priority["NORMAL"] = 0] = "NORMAL";
    Priority[Priority["NOT_URGENT"] = 4294967295] = "NOT_URGENT";
})(Priority || (Priority = {}));
var PropertiesType;
(function (PropertiesType) {
    /*
    The type of the properties instance.,
    */
    PropertiesType[PropertiesType["MESSAGE"] = 0] = "MESSAGE";
    PropertiesType[PropertiesType["MESSAGE_EMBED"] = 1] = "MESSAGE_EMBED";
    PropertiesType[PropertiesType["ATTACHMENT"] = 2] = "ATTACHMENT";
    PropertiesType[PropertiesType["RECIPIENT"] = 3] = "RECIPIENT";
})(PropertiesType || (PropertiesType = {}));
var PropertyFlags;
(function (PropertyFlags) {
    PropertyFlags[PropertyFlags["MANDATORY"] = 1] = "MANDATORY";
    PropertyFlags[PropertyFlags["READABLE"] = 2] = "READABLE";
    PropertyFlags[PropertyFlags["WRITABLE"] = 4] = "WRITABLE";
})(PropertyFlags || (PropertyFlags = {}));
var RecipientRowFlagType;
(function (RecipientRowFlagType) {
    RecipientRowFlagType[RecipientRowFlagType["NOTYPE"] = 0] = "NOTYPE";
    RecipientRowFlagType[RecipientRowFlagType["X500DN"] = 1] = "X500DN";
    RecipientRowFlagType[RecipientRowFlagType["MSMAIL"] = 2] = "MSMAIL";
    RecipientRowFlagType[RecipientRowFlagType["SMTP"] = 3] = "SMTP";
    RecipientRowFlagType[RecipientRowFlagType["FAX"] = 4] = "FAX";
    RecipientRowFlagType[RecipientRowFlagType["PROFESSIONALOFFICESYSTEM"] = 5] = "PROFESSIONALOFFICESYSTEM";
    RecipientRowFlagType[RecipientRowFlagType["PERSONALDESTRIBUTIONLIST1"] = 6] = "PERSONALDESTRIBUTIONLIST1";
    RecipientRowFlagType[RecipientRowFlagType["PERSONALDESTRIBUTIONLIST2"] = 7] = "PERSONALDESTRIBUTIONLIST2";
})(RecipientRowFlagType || (RecipientRowFlagType = {}));
var RecipientType;
(function (RecipientType) {
    /*
    The type of recipient.,
    */
    RecipientType[RecipientType["SENDER"] = 0] = "SENDER";
    RecipientType[RecipientType["TO"] = 1] = "TO";
    RecipientType[RecipientType["CC"] = 2] = "CC";
    RecipientType[RecipientType["BCC"] = 3] = "BCC";
})(RecipientType || (RecipientType = {}));
var RecurCalendarType;
(function (RecurCalendarType) {
    RecurCalendarType[RecurCalendarType["DEFAULT"] = 0] = "DEFAULT";
    RecurCalendarType[RecurCalendarType["CAL_GREGORIAN"] = 1] = "CAL_GREGORIAN";
    RecurCalendarType[RecurCalendarType["CAL_GREGORIAN_US"] = 2] = "CAL_GREGORIAN_US";
    RecurCalendarType[RecurCalendarType["CAL_JAPAN"] = 3] = "CAL_JAPAN";
    RecurCalendarType[RecurCalendarType["CAL_TAIWAN"] = 4] = "CAL_TAIWAN";
    RecurCalendarType[RecurCalendarType["CAL_KOREA"] = 5] = "CAL_KOREA";
    RecurCalendarType[RecurCalendarType["CAL_HIJRI"] = 6] = "CAL_HIJRI";
    RecurCalendarType[RecurCalendarType["CAL_THAI"] = 7] = "CAL_THAI";
    RecurCalendarType[RecurCalendarType["CAL_HEBREW"] = 8] = "CAL_HEBREW";
    RecurCalendarType[RecurCalendarType["CAL_GREGORIAN_ME_FRENCH"] = 9] = "CAL_GREGORIAN_ME_FRENCH";
    RecurCalendarType[RecurCalendarType["CAL_GREGORIAN_ARABIC"] = 10] = "CAL_GREGORIAN_ARABIC";
    RecurCalendarType[RecurCalendarType["CAL_GREGORIAN_XLIT_ENGLISH"] = 11] = "CAL_GREGORIAN_XLIT_ENGLISH";
    RecurCalendarType[RecurCalendarType["CAL_GREGORIAN_XLIT_FRENCH"] = 12] = "CAL_GREGORIAN_XLIT_FRENCH";
    RecurCalendarType[RecurCalendarType["CAL_LUNAR_JAPANESE"] = 14] = "CAL_LUNAR_JAPANESE";
    RecurCalendarType[RecurCalendarType["CAL_CHINESE_LUNAR"] = 15] = "CAL_CHINESE_LUNAR";
    RecurCalendarType[RecurCalendarType["CAL_SAKA"] = 16] = "CAL_SAKA";
    RecurCalendarType[RecurCalendarType["CAL_LUNAR_ETO_CHN"] = 17] = "CAL_LUNAR_ETO_CHN";
    RecurCalendarType[RecurCalendarType["CAL_LUNAR_ETO_KOR"] = 18] = "CAL_LUNAR_ETO_KOR";
    RecurCalendarType[RecurCalendarType["CAL_LUNAR_ROKUYOU"] = 19] = "CAL_LUNAR_ROKUYOU";
    RecurCalendarType[RecurCalendarType["CAL_LUNAR_KOREAN"] = 20] = "CAL_LUNAR_KOREAN";
    RecurCalendarType[RecurCalendarType["CAL_UMALQURA"] = 23] = "CAL_UMALQURA";
})(RecurCalendarType || (RecurCalendarType = {}));
var RecurDOW;
(function (RecurDOW) {
    RecurDOW[RecurDOW["SUNDAY"] = 0] = "SUNDAY";
    RecurDOW[RecurDOW["MONDAY"] = 1] = "MONDAY";
    RecurDOW[RecurDOW["TUESDAY"] = 2] = "TUESDAY";
    RecurDOW[RecurDOW["WEDNESDAY"] = 3] = "WEDNESDAY";
    RecurDOW[RecurDOW["THURSDAY"] = 4] = "THURSDAY";
    RecurDOW[RecurDOW["FRIDAY"] = 5] = "FRIDAY";
    RecurDOW[RecurDOW["SATURDAY"] = 6] = "SATURDAY";
})(RecurDOW || (RecurDOW = {}));
var RecurEndType;
(function (RecurEndType) {
    RecurEndType[RecurEndType["END_AFTER_DATE"] = 8225] = "END_AFTER_DATE";
    RecurEndType[RecurEndType["END_AFTER_N_OCCURRENCES"] = 8226] = "END_AFTER_N_OCCURRENCES";
    RecurEndType[RecurEndType["NEVER_END"] = 8227] = "NEVER_END";
})(RecurEndType || (RecurEndType = {}));
var RecurFrequency;
(function (RecurFrequency) {
    /*
    See [MS-OXOCAL] for details.,
    */
    RecurFrequency[RecurFrequency["DAILY"] = 8202] = "DAILY";
    RecurFrequency[RecurFrequency["WEEKLY"] = 8203] = "WEEKLY";
    RecurFrequency[RecurFrequency["MONTHLY"] = 8204] = "MONTHLY";
    RecurFrequency[RecurFrequency["YEARLY"] = 8205] = "YEARLY";
})(RecurFrequency || (RecurFrequency = {}));
var RecurMonthNthWeek;
(function (RecurMonthNthWeek) {
    RecurMonthNthWeek[RecurMonthNthWeek["FIRST"] = 1] = "FIRST";
    RecurMonthNthWeek[RecurMonthNthWeek["SECOND"] = 2] = "SECOND";
    RecurMonthNthWeek[RecurMonthNthWeek["THIRD"] = 3] = "THIRD";
    RecurMonthNthWeek[RecurMonthNthWeek["FOURTH"] = 4] = "FOURTH";
    RecurMonthNthWeek[RecurMonthNthWeek["LAST"] = 5] = "LAST";
})(RecurMonthNthWeek || (RecurMonthNthWeek = {}));
var RecurPatternTypeSpecificWeekday;
(function (RecurPatternTypeSpecificWeekday) {
    /*
    See [MS-OXOCAL] for details.,
    */
    RecurPatternTypeSpecificWeekday[RecurPatternTypeSpecificWeekday["SATURDAY"] = 2] = "SATURDAY";
    RecurPatternTypeSpecificWeekday[RecurPatternTypeSpecificWeekday["FRIDAY"] = 4] = "FRIDAY";
    RecurPatternTypeSpecificWeekday[RecurPatternTypeSpecificWeekday["THURSDAY"] = 8] = "THURSDAY";
    RecurPatternTypeSpecificWeekday[RecurPatternTypeSpecificWeekday["WEDNESDAY"] = 16] = "WEDNESDAY";
    RecurPatternTypeSpecificWeekday[RecurPatternTypeSpecificWeekday["TUESDAY"] = 32] = "TUESDAY";
    RecurPatternTypeSpecificWeekday[RecurPatternTypeSpecificWeekday["MONDAY"] = 64] = "MONDAY";
    RecurPatternTypeSpecificWeekday[RecurPatternTypeSpecificWeekday["SUNDAY"] = 128] = "SUNDAY";
})(RecurPatternTypeSpecificWeekday || (RecurPatternTypeSpecificWeekday = {}));
var RecurPatternType;
(function (RecurPatternType) {
    /*
    See [MS-OXOCAL] for details.,
    */
    RecurPatternType[RecurPatternType["DAY"] = 0] = "DAY";
    RecurPatternType[RecurPatternType["WEEK"] = 1] = "WEEK";
    RecurPatternType[RecurPatternType["MONTH"] = 2] = "MONTH";
    RecurPatternType[RecurPatternType["MONTH_NTH"] = 3] = "MONTH_NTH";
    RecurPatternType[RecurPatternType["MONTH_END"] = 4] = "MONTH_END";
    RecurPatternType[RecurPatternType["HJ_MONTH"] = 10] = "HJ_MONTH";
    RecurPatternType[RecurPatternType["HJ_MONTH_NTH"] = 11] = "HJ_MONTH_NTH";
    RecurPatternType[RecurPatternType["HJ_MONTH_END"] = 12] = "HJ_MONTH_END";
})(RecurPatternType || (RecurPatternType = {}));
var ResponseStatus;
(function (ResponseStatus) {
    /*
    The response status of an attendee.
  
    * NONE: No response is required for this object.,
    * ORGANIZED: This Meeting object belongs to the organizer.,
    * TENTATIVE: The attendee has tentatively accepted.,
    * ACCEPTED: The attendee has accepted.,
    * DECLINED: The attendee has declined.,
    * NOT_RESPONDED: The attendee has not yet responded.,
    */
    ResponseStatus[ResponseStatus["NONE"] = 0] = "NONE";
    ResponseStatus[ResponseStatus["ORGANIZED"] = 1] = "ORGANIZED";
    ResponseStatus[ResponseStatus["TENTATIVE"] = 2] = "TENTATIVE";
    ResponseStatus[ResponseStatus["ACCEPTED"] = 3] = "ACCEPTED";
    ResponseStatus[ResponseStatus["DECLINED"] = 4] = "DECLINED";
    ResponseStatus[ResponseStatus["NOT_RESPONDED"] = 5] = "NOT_RESPONDED";
})(ResponseStatus || (ResponseStatus = {}));
var ResponseType;
(function (ResponseType) {
    /*
    The type of response for a Meeting Response object.,
    */
    ResponseType["ACCEPT"] = "pos";
    ResponseType["DECLINE"] = "neg";
    ResponseType["TENTATIVE"] = "tent";
})(ResponseType || (ResponseType = {}));
var RetentionFlags;
(function (RetentionFlags) {
    /*
    Flags that specify the status of nature of an item's retention tag or,
    archive tag.
  
    See the section labeled "PidTagRetentionFlags" of [MS-OXCMSG] for details.,
    */
    RetentionFlags[RetentionFlags["EXPLICIT_TAG"] = 1] = "EXPLICIT_TAG";
    RetentionFlags[RetentionFlags["USER_OVERRIDE"] = 2] = "USER_OVERRIDE";
    RetentionFlags[RetentionFlags["AUTO_TAG"] = 4] = "AUTO_TAG";
    RetentionFlags[RetentionFlags["PERSONAL_TAG"] = 8] = "PERSONAL_TAG";
    RetentionFlags[RetentionFlags["EXPLICIT_ARCHIVE_TAG"] = 16] = "EXPLICIT_ARCHIVE_TAG";
    RetentionFlags[RetentionFlags["KEEP_IN_PLACE"] = 32] = "KEEP_IN_PLACE";
    RetentionFlags[RetentionFlags["SYSTEM_DATA"] = 64] = "SYSTEM_DATA";
    RetentionFlags[RetentionFlags["NEEDS_RESCAN"] = 128] = "NEEDS_RESCAN";
    RetentionFlags[RetentionFlags["PENDING_RESCAN"] = 256] = "PENDING_RESCAN";
})(RetentionFlags || (RetentionFlags = {}));
var RuleActionType;
(function (RuleActionType) {
    RuleActionType[RuleActionType["OP_MOVE"] = 1] = "OP_MOVE";
    RuleActionType[RuleActionType["OP_COPY"] = 2] = "OP_COPY";
    RuleActionType[RuleActionType["OP_REPLY"] = 3] = "OP_REPLY";
    RuleActionType[RuleActionType["OP_OOF_REPLY"] = 4] = "OP_OOF_REPLY";
    RuleActionType[RuleActionType["OP_DEFER_ACTION"] = 5] = "OP_DEFER_ACTION";
    RuleActionType[RuleActionType["OP_BOUNCE"] = 6] = "OP_BOUNCE";
    RuleActionType[RuleActionType["OP_FORWARD"] = 7] = "OP_FORWARD";
    RuleActionType[RuleActionType["OP_DELEGATE"] = 8] = "OP_DELEGATE";
    RuleActionType[RuleActionType["OP_TAG"] = 9] = "OP_TAG";
    RuleActionType[RuleActionType["OP_DELETE"] = 10] = "OP_DELETE";
    RuleActionType[RuleActionType["OP_MARK_AS_READ"] = 11] = "OP_MARK_AS_READ";
})(RuleActionType || (RuleActionType = {}));
var SaveType;
(function (SaveType) {
    /*
    Specifies the way that a function saved the data.
  
    Used to determine how the return value from a save function should be read.
  
    * CUSTOM: An unlisted save method was used, and the second value is,
      unspecified.,
    * NONE: No data was saved, and the second tuple value should be None.,
    * FILE: A single file was save, and the location is the second value.,
    * FILES: Multiple files were created, and the second value is a list of the,
      locations.,
    * FOLDER: A folder was created to store data, and the location is the second,
      value.,
    * FOLDERS: Multiple folders were created to store data, and the second value,
      is a list of the locations.,
    */
    SaveType[SaveType["CUSTOM"] = -1] = "CUSTOM";
    SaveType[SaveType["NONE"] = 0] = "NONE";
    SaveType[SaveType["FILE"] = 1] = "FILE";
    SaveType[SaveType["FILES"] = 2] = "FILES";
    SaveType[SaveType["FOLDER"] = 3] = "FOLDER";
    SaveType[SaveType["FOLDERS"] = 4] = "FOLDERS";
})(SaveType || (SaveType = {}));
var Sensitivity;
(function (Sensitivity) {
    Sensitivity[Sensitivity["NORMAL"] = 0] = "NORMAL";
    Sensitivity[Sensitivity["PERSONAL"] = 1] = "PERSONAL";
    Sensitivity[Sensitivity["PRIVATE"] = 2] = "PRIVATE";
    Sensitivity[Sensitivity["CONFIDENTIAL"] = 3] = "CONFIDENTIAL";
})(Sensitivity || (Sensitivity = {}));
var ServerProcessingAction;
(function (ServerProcessingAction) {
    /*
    Actions taken on a meeting-related object.,
    */
    ServerProcessingAction[ServerProcessingAction["DELEGATOR_WANTS_COPY"] = 2] = "DELEGATOR_WANTS_COPY";
    ServerProcessingAction[ServerProcessingAction["CREATED_ON_PRINCIPLE"] = 16] = "CREATED_ON_PRINCIPLE";
    ServerProcessingAction[ServerProcessingAction["UPDATED_CAL_ITEM"] = 128] = "UPDATED_CAL_ITEM";
    ServerProcessingAction[ServerProcessingAction["COPIED_OLD_PROPERTIES"] = 256] = "COPIED_OLD_PROPERTIES";
    ServerProcessingAction[ServerProcessingAction["SEND_AUTO_RESPONSE"] = 1024] = "SEND_AUTO_RESPONSE";
    ServerProcessingAction[ServerProcessingAction["REVIVED_EXCEPTION"] = 2048] = "REVIVED_EXCEPTION";
    ServerProcessingAction[ServerProcessingAction["PROCESSED_MEETING_FORWARD_NOTIFICATION"] = 4096] = "PROCESSED_MEETING_FORWARD_NOTIFICATION";
})(ServerProcessingAction || (ServerProcessingAction = {}));
var SideEffect;
(function (SideEffect) {
    /*
    A flag for how a Message object is handled by the client in relation to,
    certain user interface actions.
  
    * OPEN_TO_DELETE: The client opens the Message object when deleting.,
    * NO_FRAME: No UI is associated with the Message object.,
    * COERCE_TO_INDEX: The client moves the Message object to the Inbox folder,
      when moving or copying to a Folder object with the PidTagContainerClass,
      property set to "IPF.Note".,
    * OPEN_TO_COPY: The client opens the Message object when copying to another,
      folder.,
    * OPEN_TO_MOVE: The client opens the Message object when moving to another,
      folder.,
    * OPEN_FOR_CTX_MENU: The client opens the Message object when displaying,
      context-sensitive commands, such as a context menu, to the end user.,
    * CANNOT_UNDO_DELETE: The client cannot undo a delete operation. Must not be,
      set unless the OPEN_TO_DELETE flag is set.,
    * CANNOT_UNDO_COPY: The client cannot undo a copy operation. Must not be set,
      unless the OPEN_TO_COPY flag is set.,
    * CANNOT_UNDO_MOVE: The client cannot undo a move operation. Must not be set,
      unless the OPEN_TO_MOVE flag is set.,
    * HAS_SCRIPT: The Message object contains end-user script.,
    * OPEN_TO_PERM_DELETE: The client opens the Message object to permanently,
      delete it.,
    */
    SideEffect[SideEffect["OPEN_TO_DELETE"] = 1] = "OPEN_TO_DELETE";
    SideEffect[SideEffect["NO_FRAME"] = 8] = "NO_FRAME";
    SideEffect[SideEffect["COERCE_TO_INDEX"] = 16] = "COERCE_TO_INDEX";
    SideEffect[SideEffect["OPEN_TO_COPY"] = 32] = "OPEN_TO_COPY";
    SideEffect[SideEffect["OPEN_TO_MOVE"] = 64] = "OPEN_TO_MOVE";
    SideEffect[SideEffect["OPEN_FOR_CTX_MENU"] = 256] = "OPEN_FOR_CTX_MENU";
    SideEffect[SideEffect["CANNOT_UNDO_DELETE"] = 1024] = "CANNOT_UNDO_DELETE";
    SideEffect[SideEffect["CANNOT_UNDO_COPY"] = 2048] = "CANNOT_UNDO_COPY";
    SideEffect[SideEffect["CANNOT_UNDO_MOVE"] = 4096] = "CANNOT_UNDO_MOVE";
    SideEffect[SideEffect["HAS_SCRIPT"] = 8192] = "HAS_SCRIPT";
    SideEffect[SideEffect["OPEN_TO_PERM_DELETE"] = 16384] = "OPEN_TO_PERM_DELETE";
})(SideEffect || (SideEffect = {}));
var TaskAcceptance;
(function (TaskAcceptance) {
    /*
    The acceptance state of the task.,
    */
    TaskAcceptance[TaskAcceptance["NOT_ASSIGNED"] = 0] = "NOT_ASSIGNED";
    TaskAcceptance[TaskAcceptance["UNKNOWN"] = 1] = "UNKNOWN";
    TaskAcceptance[TaskAcceptance["ACCEPTED"] = 2] = "ACCEPTED";
    TaskAcceptance[TaskAcceptance["REJECTED"] = 3] = "REJECTED";
})(TaskAcceptance || (TaskAcceptance = {}));
var TaskHistory;
(function (TaskHistory) {
    /*
    The type of the last change to the Task object.,
    */
    TaskHistory[TaskHistory["NONE"] = 0] = "NONE";
    TaskHistory[TaskHistory["ACCEPTED"] = 1] = "ACCEPTED";
    TaskHistory[TaskHistory["REJECTED"] = 2] = "REJECTED";
    TaskHistory[TaskHistory["OTHER"] = 3] = "OTHER";
    TaskHistory[TaskHistory["DUE_DATE_CHANGED"] = 4] = "DUE_DATE_CHANGED";
    TaskHistory[TaskHistory["ASSIGNED"] = 5] = "ASSIGNED";
})(TaskHistory || (TaskHistory = {}));
var TaskMode;
(function (TaskMode) {
    /*
    The mode of the Task object used in task communication (PidLidTaskMode).
  
    * UNASSIGNED: The Task object is not assigned.,
    * EMBEDDED_REQUEST: The Task object is embedded in a task request.,
    * ACCEPTED: The Task object has been accepted by the task assignee.,
    * REJECTED: The Task object was rejected by the task assignee.,
    * EMBEDDED_UPDATE: The Task object is embedded in a task update.,
    * SELF_ASSIGNED: The Task object was assigned to the task assigner,
      (self-delegation).,
    */
    TaskMode[TaskMode["UNASSIGNED"] = 0] = "UNASSIGNED";
    TaskMode[TaskMode["EMBEDDED_REQUEST"] = 1] = "EMBEDDED_REQUEST";
    TaskMode[TaskMode["ACCEPTED"] = 2] = "ACCEPTED";
    TaskMode[TaskMode["REJECTED"] = 3] = "REJECTED";
    TaskMode[TaskMode["EMBEDDED_UPDATE"] = 4] = "EMBEDDED_UPDATE";
    TaskMode[TaskMode["SELF_ASSIGNED"] = 5] = "SELF_ASSIGNED";
})(TaskMode || (TaskMode = {}));
var TaskMultipleRecipients;
(function (TaskMultipleRecipients) {
    TaskMultipleRecipients[TaskMultipleRecipients["SENT"] = 1] = "SENT";
    TaskMultipleRecipients[TaskMultipleRecipients["RECEIVED"] = 2] = "RECEIVED";
})(TaskMultipleRecipients || (TaskMultipleRecipients = {}));
var TaskOwnership;
(function (TaskOwnership) {
    /*
    The role of the current user relative to the Task object.
  
    * NOT_ASSIGNED: The Task object is not assigned.,
    * ASSIGNERS_COPY: The Task object is the task assigner's copy of the Task,
      object.,
    * ASSIGNEES_COPY: The Task object is the task assignee's copy of the Task,
      object.,
    */
    TaskOwnership[TaskOwnership["NOT_ASSIGNED"] = 0] = "NOT_ASSIGNED";
    TaskOwnership[TaskOwnership["ASSIGNERS_COPY"] = 1] = "ASSIGNERS_COPY";
    TaskOwnership[TaskOwnership["ASSIGNEES_COPY"] = 2] = "ASSIGNEES_COPY";
})(TaskOwnership || (TaskOwnership = {}));
var TaskRequestType;
(function (TaskRequestType) {
    /*
    The type of task request.
  
    * REQUEST: A plain request.,
    * ACCEPT: Task has been accepted.,
    * DECLINE: Task has been declined.,
    * UPDATE: Task has been updated.,
    */
    TaskRequestType[TaskRequestType["REQUEST"] = 0] = "REQUEST";
    TaskRequestType[TaskRequestType["ACCEPT"] = 1] = "ACCEPT";
    TaskRequestType[TaskRequestType["DECLINE"] = 2] = "DECLINE";
    TaskRequestType[TaskRequestType["UPDATE"] = 3] = "UPDATE";
})(TaskRequestType || (TaskRequestType = {}));
var TaskState;
(function (TaskState) {
    /*
    TaskState.
  
    * NOT_ASSIGNED: The Task object is not assigned.,
    * ASSIGNEES_COPY_ACCEPTED: The Task object is the task assignee's copy of an,
      assigned Task object.,
    * ASSIGNERS_COPY_ACCEPTED: The Task object is the task assigner's copy of an,
      assigned Task object.,
    * ASSIGNERS_COPY_REJECTED: The Task object is the task assigner's copy of a,
      rejected Task object.,
    * EMBEDDED_REJECTION: This Task object was created to correspond to a Task,
      object that was embedded in a task rejection but could not be found,
      locally.,
    */
    TaskState[TaskState["NOT_ASSIGNED"] = 1] = "NOT_ASSIGNED";
    TaskState[TaskState["ASSIGNEES_COPY_ACCEPTED"] = 2] = "ASSIGNEES_COPY_ACCEPTED";
    TaskState[TaskState["ASSIGNERS_COPY_ACCEPTED"] = 3] = "ASSIGNERS_COPY_ACCEPTED";
    TaskState[TaskState["ASSIGNERS_COPY_REJECTED"] = 4] = "ASSIGNERS_COPY_REJECTED";
    TaskState[TaskState["EMBEDDED_REJECTION"] = 5] = "EMBEDDED_REJECTION";
})(TaskState || (TaskState = {}));
var TaskStatus;
(function (TaskStatus) {
    /*
    The status of a task object (PidLidTaskStatus).
  
    * NOT_STARTED: The user has not started the task.,
    * IN_PROGRESS: The users's work on the Task object is in progress.,
    * COMPLETE: The user's work on the Task object is complete.,
    * WAITING_ON_OTHER: The user is waiting on somebody else.,
    * DEFERRED: The user has deferred work on the Task object.,
    */
    TaskStatus[TaskStatus["NOT_STARTED"] = 0] = "NOT_STARTED";
    TaskStatus[TaskStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    TaskStatus[TaskStatus["COMPLETE"] = 2] = "COMPLETE";
    TaskStatus[TaskStatus["WAITING_ON_OTHER"] = 3] = "WAITING_ON_OTHER";
    TaskStatus[TaskStatus["DEFERRED"] = 4] = "DEFERRED";
})(TaskStatus || (TaskStatus = {}));
var TZFlag;
(function (TZFlag) {
    /*
    Flags for a TZRule object as defined in [MS-OXOCAL].
  
    * RECUR_CURRENT_TZREG: The rule is associated with a recurring series.,
    * EFFECTIVE_TZREG: The rule is the effective rule.,
    */
    TZFlag[TZFlag["RECUR_CURRENT_TZREG"] = 1] = "RECUR_CURRENT_TZREG";
    TZFlag[TZFlag["EFFECTIVE_TZREG"] = 2] = "EFFECTIVE_TZREG";
})(TZFlag || (TZFlag = {}));
var WrappedType;
(function (WrappedType) {
    WrappedType[WrappedType["MESSAGE_STORE"] = 6] = "MESSAGE_STORE";
    WrappedType[WrappedType["MAILBOX_STORE"] = 12] = "MAILBOX_STORE";
})(WrappedType || (WrappedType = {}));
module.exports = {
    AddressBookType,
    ADVF,
    AppointmentAuxilaryFlag,
    AppointmentColor,
    AppointmentStateFlag,
    AttachmentPermissionType,
    AttachmentType,
    BCImageAlignment,
    BCImageSource,
    BCLabelFormat,
    BCTemplateID,
    BCTextFormat,
    BodyTypes,
    BusyStatus,
    ClientIntentFlag,
    ClipboardFormat,
    Color,
    ContactAddressIndex,
    ContactLinkState,
    DeencapType,
    DevModeFields,
    DirectoryEntryType,
    DisplayType,
    DMPaperSize,
    DVAspect,
    ElectronicAddressProperties,
    EntryIDType,
    EntryIDTypeHex,
    ErrorBehavior,
    ErrorCode,
    ErrorCodeType,
    Gender,
    IconIndex,
    Importance,
    InsecureFeatures,
    LogFlags,
    MacintoshEncoding,
    MeetingObjectChange,
    MeetingRecipientType,
    MeetingType,
    MessageFormat,
    MessageType,
    NamedPropertyType,
    NoteColor,
    ODTCf,
    ODTPersist1,
    ODTPersist2,
    OORBodyFormat,
    PostalAddressID,
    Priority,
    PropertiesType,
    PropertyFlags,
    RecipientRowFlagType,
    RecipientType,
    RecurCalendarType,
    RecurDOW,
    RecurEndType,
    RecurFrequency,
    RecurMonthNthWeek,
    RecurPatternTypeSpecificWeekday,
    RecurPatternType,
    ResponseStatus,
    ResponseType,
    RetentionFlags,
    RuleActionType,
    SaveType,
    Sensitivity,
    ServerProcessingAction,
    SideEffect,
    TaskAcceptance,
    TaskHistory,
    TaskMode,
    TaskMultipleRecipients,
    TaskOwnership,
    TaskRequestType,
    TaskState,
    TaskStatus,
    TZFlag,
    WrappedType
};
