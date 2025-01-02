import { PHNodeHeapReader } from "./PHNodeHeapReader";
import { PropertyValueResolver } from "./PropertyValueResolver";
export interface PrimitiveTypeConverterArg {
    /**
     * Access to raw property value.
     *
     * Do not modify the contents.
     */
    view: DataView;
    /**
     * Access to heap reader.
     */
    heap: PHNodeHeapReader;
    /**
     * Get bytes from either raw property value or heap.
     */
    getBytes: (numBytes: number) => Promise<ArrayBuffer | undefined>;
    /**
     * Resolve heap by hnid.
     */
    resolveHeap: (heap: number) => Promise<ArrayBuffer | undefined>;
    /**
     * Convert ansiString to unicode string.
     */
    convertAnsiString: (array: ArrayBuffer) => Promise<string>;
}
/**
 * @example
 *
 * ```ts
 * async function convertShortProperty(arg: PrimitiveTypeConverterArg): Promise<any> {
 *  return arg.view.getInt16(0, true);
 * }
 * ```
 *
 * ```ts
 * async function convertAnsiStringProperty(arg: PrimitiveTypeConverterArg): Promise<any> {
 *   const heap = arg.view.getUint32(0, true);
 *   const bytes = await arg.resolveHeap(heap);
 *   return (bytes !== undefined)
 *     ? await arg.convertAnsiString(bytes)
 *     : undefined;
 * }
 * ```
 */
export declare type PrimitiveTypeConverter = (arg: PrimitiveTypeConverterArg) => Promise<any>;
export declare class PropertyValueResolverV1 implements PropertyValueResolver {
    private convertAnsiString;
    private provideTypeConverterOf;
    constructor(convertAnsiString: (array: ArrayBuffer) => Promise<string>, provideTypeConverterOf?: (type: number) => PrimitiveTypeConverter | undefined, provideFallbackTypeConverterOf?: (type: number) => PrimitiveTypeConverter | undefined);
    resolveValueOf(key: number, type: number, value: ArrayBuffer, heap: PHNodeHeapReader): Promise<any>;
}
