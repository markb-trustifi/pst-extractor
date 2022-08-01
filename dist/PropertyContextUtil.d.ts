import { PHNodeHeap } from "./PHNodeHeap";
import { PropertyContext } from "./PropertyContext";
import { PropertyValueResolver } from "./PropertyValueResolver";
export declare function getPropertyContext(heap: PHNodeHeap, resolver: PropertyValueResolver): Promise<PropertyContext>;
