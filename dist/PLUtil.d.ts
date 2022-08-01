/**
 * PST lower level utilities
 */
import Long from "long";
import { PLStore } from "./PLStore";
export declare type ReadFile = (buffer: ArrayBuffer, offset: number, length: number, position: number) => Promise<number>;
export interface ReadFileApi {
    readFile: ReadFile;
    close: () => Promise<void>;
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
