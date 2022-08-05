
/**
 * @internal
 */
export class KeyedDelay<T> {
  private _map: Map<string, T>;

  constructor() {
    this._map = new Map<string, T>();
  }

  async getOrCreate(key: string, provider: () => Promise<T>): Promise<T> {
    if (this._map.has(key)) {
      const value = this._map.get(key);
      if (value === undefined) {
        throw new Error("provider must provide a non-undefined value");
      }
      return value;
    }
    else {
      const value = await provider();
      this._map.set(key, value);
      return value;
    }
  }
}
