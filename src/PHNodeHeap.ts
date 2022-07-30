import { PHNodeHeapReader } from "./PHNodeHeapReader";

export interface PHNodeHeap {
  bClientSig: number;
  userRootHnid: number;

  getReader(): PHNodeHeapReader;
}
