/**
 * PST lower level node reader
 */

export interface PLSubNode {
  nodeId: number;
  getChildBy(childNodeId: number): Promise<PLSubNode | undefined>;
  getData(): Promise<ArrayBuffer[]>;
}
