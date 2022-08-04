
export interface RawProperty {
  key: number;
  type: number;

  /**
   * 0 bytes if absent
   */
  value: ArrayBuffer;
}
