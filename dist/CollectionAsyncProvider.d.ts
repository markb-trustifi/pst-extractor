/**
 * @internal
 */
export declare class CollectionAsyncProvider<T> {
    private _cache;
    private _count;
    private _itemProvider;
    constructor(count: number, itemProvider: (index: number) => Promise<T>);
    get count(): number;
    get(index: number): Promise<T>;
    /**
     * get all of the children
     */
    all(): Promise<T[]>;
}
