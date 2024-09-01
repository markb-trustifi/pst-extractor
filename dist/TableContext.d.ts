import { TableRow } from "./TableRow";
export interface TableContext {
    rows(): Promise<TableRow[]>;
}
