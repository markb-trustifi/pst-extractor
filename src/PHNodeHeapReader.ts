/**
 * PST high level node heap reader
 */

export interface PHNodeHeapReader {
  getHeapBuffers(hnid: number): Promise<ArrayBuffer[]>;
}
