/**
 * @internal
 */
export declare class KeyedDelay<T> {
    private _map;
    constructor();
    getOrCreate(key: string, provider: () => Promise<T>): Promise<T>;
}
