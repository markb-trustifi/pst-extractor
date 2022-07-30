import { KeyedDelay } from "./KeyedDelay";
import { PSTFolder } from "./PSTFolder.class";

export class PSTFolderCollection {
  private _cache: KeyedDelay<PSTFolder>;
  private _count: number;
  private _folderProvider: (index: number) => Promise<PSTFolder>;

  constructor(
    count: number,
    folderProvider: (index: number) => Promise<PSTFolder>
  ) {
    this._cache = new KeyedDelay();
    this._count = count;
    this._folderProvider = folderProvider;
  }

  public get subFolderCount(): number {
    return this._count;
  }

  public async subFolder(index: number): Promise<PSTFolder> {
    return await this._cache.getOrCreate(
      index.toString(),
      async () => await this._folderProvider(index)
    );
  }

  public async subFolders(): Promise<PSTFolder[]> {
    const array: PSTFolder[] = [];
    for (let x = 0; x < this._count; x++) {
      array.push(await this.subFolder(x));
    }
    return array;
  }
}
