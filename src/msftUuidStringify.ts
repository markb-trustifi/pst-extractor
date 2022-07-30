const hex = "0123456789abcdef";

/**
 * byte to lower case hex string
 * 
 * @internal
 */
export function toHex1(value: number): string {
  return hex[(value >> 4) & 15]
    + hex[(value) & 15];
}

/**
 * Variant 2 UUIDs, historically used in Microsoft's COM/OLE libraries, 
 * use a mixed-endian format, whereby the first three components of the UUID are little-endian,
 * and the last two are big-endian. 
 * For example, `00112233-4455-6677-8899-aabbccddeeff` is encoded as the bytes 
 * `33 22 11 00 55 44 77 66 88 99 aa bb cc dd ee ff`.
 * 
 * @see https://en.wikipedia.org/wiki/Universally_unique_identifier
 * @internal
 */
export function msftUuidStringify(array: ArrayLike<number>, offset: number): string {
  return ""
    + toHex1(array[offset + 3])
    + toHex1(array[offset + 2])
    + toHex1(array[offset + 1])
    + toHex1(array[offset + 0])
    + "-"
    + toHex1(array[offset + 5])
    + toHex1(array[offset + 4])
    + "-"
    + toHex1(array[offset + 7])
    + toHex1(array[offset + 6])
    + "-"
    + toHex1(array[offset + 8])
    + toHex1(array[offset + 9])
    + "-"
    + toHex1(array[offset + 10])
    + toHex1(array[offset + 11])
    + toHex1(array[offset + 12])
    + toHex1(array[offset + 13])
    + toHex1(array[offset + 14])
    + toHex1(array[offset + 15])
    ;
}
