import { Property } from "./Property";
import { RawProperty } from "./RawProperty";
export interface TableRow {
    listRaw(): Promise<RawProperty[]>;
    list(): Promise<Property[]>;
}
