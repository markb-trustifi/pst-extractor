import { PHNodeHeap } from "./PHNodeHeap";
import { PropertyValueResolver } from "./PropertyValueResolver";
import { TableContext } from "./TableContext";
export declare function getTableContext(heap: PHNodeHeap, resolver: PropertyValueResolver): Promise<TableContext>;
