import { KeyedDelay } from "./KeyedDelay";
import { PSTMessage } from "./PSTMessage.class";

export class PSTItemCollection {
  private _cache: KeyedDelay<PSTMessage>;
  private _count: number;
  private _itemProvider: (index: number) => Promise<PSTMessage>;

  constructor(
    count: number,
    itemProvider: (index: number) => Promise<PSTMessage>
  ) {
    this._cache = new KeyedDelay();
    this._count = count;
    this._itemProvider = itemProvider;
  }

  public get itemCount(): number {
    return this._count;
  }

  public async item(index: number): Promise<PSTMessage> {
    return await this._cache.getOrCreate(
      index.toString(),
      async () => await this._itemProvider(index)
    );
  }

  /**
   * get all of the children
   */
  public async items(): Promise<PSTMessage[]> {
    const array: PSTMessage[] = [];
    for (let x = 0; x < this._count; x++) {
      array.push(await this.item(x));
    }
    return array;
  }
}