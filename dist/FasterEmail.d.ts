import { PSTMessage } from "./PSTMessage.class";
export interface FasterEmail {
    displayName: string;
    messageClass: string;
    messageId: string;
    getMessage: () => Promise<PSTMessage>;
}
