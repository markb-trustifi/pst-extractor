import { PSTMessage } from "./PSTMessage.class";
export interface FasterEmail {
    displayName: string;
    messageClass: string;
    getMessage: () => Promise<PSTMessage>;
}
