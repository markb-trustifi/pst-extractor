/**
 * PST lower level misc utilities
 */

/**
 * 
 * @internal
 */
export function* splitPer(array: ArrayBuffer, per: number): Generator<ArrayBuffer> {
  for (let offset = 0; offset < array.byteLength; offset += per) {
    yield array.slice(
      offset,
      offset + per
    );
  }
}
