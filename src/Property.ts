
export interface Property {
  /**
   * Key of property.
   * 
   * e.g. `0x3001` is `PR_DISPLAY_NAME`
   */
  key: number;

  /**
   * Type of property.
   * 
   * e.g. `0x001f` is `PT_UNICODE`
   */
  type: number;

  /**
   * Value of property.
   * 
   * The value conversion depends on implementation.
   * Check the source code of {@link PropertyValueResolverV1} for detail.
   * 
   * - `PT_SHORT` will be casted to `number`
   * - `PT_FLOAT` will be casted to `number`
   * - `PT_LONG` will be casted to `number`
   * - `PT_OBJECT` will be casted to {@link PropertyTypeObject}
   * - `PT_LONGLONG` will be casted to `Long`
   * - `PT_DOUBLE` will be casted to `number`
   * - `PT_BOOLEAN` will be casted to `boolean`
   * - `PT_STRING8` will be casted to `string`
   * - `PT_UNICODE` will be casted to `string`
   * - `PT_SYSTIME` will be casted to `Date`
   * - `PT_CLSID` will be casted to `ArrayBuffer`
   * - `0x0102` will be casted to `ArrayBuffer`
   * - `PT_MV_UNICODE` will be casted to `string[]`
   * - `PT_MV_BINARY` will be casted to `ArrayBuffer[]`
   * - `PT_MV_LONG` will be casted to `number[]`
   * - `PT_MV_CLSID` will be casted to `ArrayBuffer[]`
   */
  value: any;
}
