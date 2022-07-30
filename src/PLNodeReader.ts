/**
 * PST lower level node reader
 */

export interface PLNodeReader {
  getMainData(): Promise<ArrayBuffer>;
  getSubDataArray(subNodeId: number): Promise<ArrayBuffer[]>;
  
  numSubDataArray(subNodeId: number): Promise<number>;
}
