import { PHNodeHeapReader } from "./PHNodeHeapReader";

export interface PropertyValueResolver {
  resolveValueOf(key: number, type: number, value: ArrayBuffer, heap: PHNodeHeapReader): Promise<any>
}
