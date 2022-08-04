import { PHNodeHeapReader } from "./PHNodeHeapReader";

export async function getBTHeapReaderFrom(
  heap: PHNodeHeapReader,
  hnid: number
): Promise<BTHeapReader> {
  const header = await heap.getHeapBuffers(hnid);
  if (header.length !== 1) {
    throw new Error(`header.length ${header.length} must be single`);
  }
  const headerView = new DataView(header[0]);
  const bTypeBTH = 0xB5;
  if (headerView.getUint8(0) !== bTypeBTH) {
    throw new Error(`signature must be bTypeBTH`);
  }
  const cbKey = headerView.getUint8(1);
  const cbEnt = headerView.getUint8(2);
  const bIdxLevels = headerView.getUint8(3);
  const hidRoot = headerView.getUint32(4, true);

  if (bIdxLevels != 0) {
    throw new Error("bIdxLevels must be 0 for current implementation");
  }

  const list: BTHeapEntry[] = [];
  if (hidRoot !== 0) {
    const recordSize = cbKey + cbEnt;
    const records = (await heap.getHeapBuffers(hidRoot));
    if (records.length !== 1) {
      throw new Error(`records.length ${records.length} must be single`);
    }
    const record = records[0];
    const numRecords = Math.floor(record.byteLength / recordSize);
    for (let x = 0; x < numRecords; x++) {
      const top = recordSize * x;
      list.push({
        key: record.slice(top, top + cbKey),
        data: record.slice(top + cbKey),
      });
    }
  }

  return {
    async list() {
      return list;
    },
  } as BTHeapReader;
}

export interface BTHeapReader {
  list(): Promise<BTHeapEntry[]>;
}

export interface BTHeapEntry {
  /**
   * 2, 4, 8, or 16
   */
  key: ArrayBuffer;

  /**
   * 1 ~ 32
   */
  data: ArrayBuffer;
}
