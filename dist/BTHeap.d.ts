import { PHNodeHeapReader } from "./PHNodeHeapReader";
export declare function getBTHeapReaderFrom(heap: PHNodeHeapReader, hnid: number): Promise<BTHeapReader>;
export interface BTHeapReader {
    list(): Promise<BTHeapEntry[]>;
}
export interface BTHeapEntry {
    /**
     * 2, 4, 8, or 16
     */
    key: ArrayBuffer;
    /**
     * 1 ~ 32
     */
    data: ArrayBuffer;
}
