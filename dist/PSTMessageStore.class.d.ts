import { PropertyFinder } from './PAUtil';
import { PLNode } from './PLNode';
import { PLSubNode } from './PLSubNode';
import { PSTObject } from './PSTObject.class';
import { RootProvider } from './RootProvider';
export declare class PSTMessageStore extends PSTObject {
    /**
     * Creates an instance of PSTMessageStore.
     * Not much use other than to get the "name" of the PST file.
     * @internal
     * @param {PSTFile} rootProvider
     * @param {DescriptorIndexNode} descriptorIndexNode
     * @memberof PSTMessageStore
     */
    constructor(rootProvider: RootProvider, node: PLNode, subNode: PLSubNode, propertyFinder: PropertyFinder);
}
