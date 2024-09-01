/**
 * PST lower level utilities
 */
import Long from "long";
import { PLStore } from "./PLStore";
export declare type ReadFile = (buffer: ArrayBuffer, offset: number, length: number, position: number) => Promise<number>;
export declare type Close = () => Promise<void>;
/**
 * Defines a callback based async file operation API.
 */
export interface ReadFileApi {
    /**
     * Defines read API like `fs.promises.readFile`.
     */
    readFile: ReadFile;
    /**
     * Defines close API like `fs.promises.close`.
     */
    close: Close;
}
/**
 * @internal
 */
export declare function readNumber64(view: DataView, offset: number): number;
/**
 * @internal
 */
export declare function readLong(view: DataView, offset: number): Long;
export declare function openLowPst(api: ReadFileApi): Promise<PLStore>;
