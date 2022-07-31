/**
 * PST lower level node
 */

import { PLNodeReader } from "./PLNodeReader";

export interface PLNode {
  nodeId: number;
  getParent(): PLNode | undefined;
  getChildren(): PLNode[];
  getNodeReader(): PLNodeReader;

  getSiblingNode(nidType: number): PLNode | undefined;
}
