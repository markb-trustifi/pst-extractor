import { Property } from "./Property";
import { RawProperty } from "./RawProperty";

export interface PropertyContext {
  listRaw(): Promise<RawProperty[]>;
  list(): Promise<Property[]>;
}
