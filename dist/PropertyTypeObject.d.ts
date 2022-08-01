/**
 * @internal
 * @see [[MS-PST]: PtypObject Properties | Microsoft Docs](https://docs.microsoft.com/en-us/openspecs/office_file_formats/ms-pst/49457d57-820e-453d-bbc0-1d192a999814)
 */
export declare class PropertyTypeObject {
    private _subNodeId;
    private _size;
    constructor(subNodeId: number, size: number);
    get subNodeId(): number;
    get size(): number;
}
