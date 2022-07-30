import { KeyedDelay } from "./KeyedDelay";
import { PSTRecipient } from "./PSTRecipient.class";

export class PSTRecipientCollection {
  private _cache: KeyedDelay<PSTRecipient>;
  private _count: number;
  private _itemProvider: (index: number) => Promise<PSTRecipient>;

  constructor(
    count: number,
    itemProvider: (index: number) => Promise<PSTRecipient>
  ) {
    this._cache = new KeyedDelay();
    this._count = count;
    this._itemProvider = itemProvider;
  }

  public get numberOfRecipients(): number {
    return this._count;
  }

  public async recipient(index: number): Promise<PSTRecipient> {
    return await this._cache.getOrCreate(
      index.toString(),
      async () => await this._itemProvider(index)
    );
  }

  /**
   * get all of the children
   */
  public async recipients(): Promise<PSTRecipient[]> {
    const array: PSTRecipient[] = [];
    for (let x = 0; x < this._count; x++) {
      array.push(await this.recipient(x));
    }
    return array;
  }
}
