/**
 * PST lower level node reader
 */

export interface PLSubNode {
  nodeId: number;
  is4K: boolean;
  getChildBy(childNodeId: number): Promise<PLSubNode | undefined>;
  getData(): Promise<ArrayBuffer[]>;
}
