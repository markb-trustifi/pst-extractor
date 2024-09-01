export declare class SingleAsyncProvider<T> {
    private _value;
    private _ready;
    getOrCreate(provider: () => Promise<T>): Promise<T>;
}
