/**
 * PST lower level node
 */

import { PLSubNode } from "./PLSubNode";

export interface PLNode {
  nodeId: number;
  getParent(): PLNode | undefined;
  getChildren(): PLNode[];
  getSubNode(): PLSubNode;

  getSiblingNode(nidType: number): PLNode | undefined;
}
