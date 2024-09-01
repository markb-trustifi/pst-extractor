import { PropertyFinder } from './PAUtil';
import { PLNode } from './PLNode';
import { PLSubNode } from './PLSubNode';
import { PSTObject } from './PSTObject.class';
import { RootProvider } from './RootProvider';
export declare class PSTRecipient extends PSTObject {
    /**
     * Creates an instance of PSTRecipient.
     * @internal
     * @param {Map<number, PSTTableItem>} recipientDetails
     * @memberof PSTRecipient
     */
    constructor(rootProvider: RootProvider, node: PLNode, subNode: PLSubNode, propertyFinder: PropertyFinder);
    /**
     * Contains the recipient type for a message recipient.
     * https://msdn.microsoft.com/en-us/library/office/cc839620.aspx
     * @readonly
     * @type {number}
     * @memberof PSTMessage
     */
    get recipientType(): number;
    /**
     * Contains the messaging user's e-mail address type, such as SMTP.
     * https://msdn.microsoft.com/en-us/library/office/cc815548.aspx
     * @readonly
     * @type {string}
     * @memberof PSTMessage
     */
    get addrType(): string;
    /**
     * Contains the messaging user's e-mail address.
     * https://msdn.microsoft.com/en-us/library/office/cc842372.aspx
     * @readonly
     * @type {string}
     * @memberof PSTMessage
     */
    get emailAddress(): string;
    /**
     * Specifies a bit field that describes the recipient status.
     * https://msdn.microsoft.com/en-us/library/office/cc815629.aspx
     * @readonly
     * @type {number}
     * @memberof PSTRecipient
     */
    get recipientFlags(): number;
    /**
     * Specifies the location of the current recipient in the recipient table.
     * https://msdn.microsoft.com/en-us/library/ee201359(v=exchg.80).aspx
     * @readonly
     * @type {number}
     * @memberof PSTRecipient
     */
    get recipientOrder(): number;
    /**
     * Contains the SMTP address for the address book object.
     * https://msdn.microsoft.com/en-us/library/office/cc842421.aspx
     * @readonly
     * @type {string}
     * @memberof PSTRecipient
     */
    get smtpAddress(): string;
    /**
     * JSON stringify the object properties.
     * @returns {string}
     * @memberof PSTRecipient
     */
    toJSON(): any;
}
