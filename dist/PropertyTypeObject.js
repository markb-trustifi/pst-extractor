"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyTypeObject = void 0;
/**
 * The value representation of `PT_OBJECT` type
 *
 * @see [[MS-PST]: PtypObject Properties | Microsoft Docs](https://docs.microsoft.com/en-us/openspecs/office_file_formats/ms-pst/49457d57-820e-453d-bbc0-1d192a999814)
 */
class PropertyTypeObject {
    constructor(subNodeId, size) {
        this._subNodeId = subNodeId;
        this._size = size;
    }
    get subNodeId() {
        return this._subNodeId;
    }
    get size() {
        return this._size;
    }
}
exports.PropertyTypeObject = PropertyTypeObject;
