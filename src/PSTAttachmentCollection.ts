import { KeyedDelay } from "./KeyedDelay";
import { PSTAttachment } from "./PSTAttachment.class";

export class PSTAttachmentCollection {
  private _cache: KeyedDelay<PSTAttachment>;
  private _count: number;
  private _itemProvider: (index: number) => Promise<PSTAttachment>;

  constructor(
    count: number,
    itemProvider: (index: number) => Promise<PSTAttachment>
  ) {
    this._cache = new KeyedDelay();
    this._count = count;
    this._itemProvider = itemProvider;
  }

  public get numberOfAttachments(): number {
    return this._count;
  }

  public async attachment(index: number): Promise<PSTAttachment> {
    return await this._cache.getOrCreate(
      index.toString(),
      async () => await this._itemProvider(index)
    );
  }

  public async attachments(): Promise<PSTAttachment[]> {
    const array: PSTAttachment[] = [];
    for (let x = 0; x < this._count; x++) {
      array.push(await this.attachment(x));
    }
    return array;
  }
}
