import { PHNodeHeapReader } from "./PHNodeHeapReader";
import { PropertyValueResolver } from "./PropertyValueResolver";
export declare class PropertyValueResolverV1 implements PropertyValueResolver {
    private convertAnsiString;
    constructor(convertAnsiString: (array: ArrayBuffer) => Promise<string>);
    resolveValueOf(key: number, type: number, value: ArrayBuffer, heap: PHNodeHeapReader): Promise<any>;
}
