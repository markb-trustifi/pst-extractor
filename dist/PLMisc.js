"use strict";
/**
 * PST lower level misc utilities
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitPer = void 0;
/**
 *
 * @internal
 */
function* splitPer(array, per) {
    for (let offset = 0; offset < array.byteLength; offset += per) {
        yield array.slice(offset, offset + per);
    }
}
exports.splitPer = splitPer;
