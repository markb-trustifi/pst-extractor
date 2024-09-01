/**
 * PST adapter utilities
 */
import { NodeMap } from "./NodeMap.class";
import { PLNode } from "./PLNode";
import { Property } from "./Property";
import { PropertyValueResolver } from "./PropertyValueResolver";
export interface PropertyFinder {
    findByKey(key: number): Property | undefined;
}
/**
 * Process name to ID map.
 *
 * @param nameToIdMapDescriptorNode nodeId 97
 */
export declare function processNameToIDMap(nameToIdMapDescriptorNode: PLNode, resolver: PropertyValueResolver): Promise<NodeMap>;
export declare function createPropertyFinder(props: Property[]): PropertyFinder;
