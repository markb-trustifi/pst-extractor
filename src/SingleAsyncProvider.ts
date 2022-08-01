
export class SingleAsyncProvider<T> {
  private _value: T | undefined;
  private _ready: boolean = false;

  async getOrCreate(provider: () => Promise<T>): Promise<T> {
    if (!this._ready) {
      this._value = await provider();
      this._ready = true;
    }
    if (this._value === undefined) {
      throw new Error("value is undefined");
    }
    return this._value;
  }
}
