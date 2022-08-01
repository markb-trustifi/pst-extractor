/* eslint-disable @typescript-eslint/no-explicit-any */
import Long from 'long'
import { OutlookProperties } from './OutlookProperties'
import { PropertyFinder } from './PAUtil'
import { PLNode } from './PLNode'
import { PLSubNode } from './PLSubNode'
import { PSTFile } from './PSTFile.class'

export abstract class PSTObject {
  protected pstFile: PSTFile
  protected _node: PLNode
  protected _subNode: PLSubNode
  protected _propertyFinder: PropertyFinder

  /**
   * Creates an instance of PSTObject, the root class of most PST Items.
   * @memberof PSTObject
   */
  constructor(
    pstFile: PSTFile,
    node: PLNode,
    subNode: PLSubNode,
    propertyFinder: PropertyFinder
  ) {
    if (!propertyFinder) {
      console.trace("propertyFinder not defined");
    }
    this.pstFile = pstFile
    this._node = node;
    this._subNode = subNode;
    this._propertyFinder = propertyFinder;
  }

  /**
   * Get the node type for the descriptor id.
   * @param {number} [descriptorIdentifier]
   * @returns {number}
   * @memberof PSTObject
   */
  public getNodeType(descriptorIdentifier?: number): number {
    if (descriptorIdentifier) {
      return descriptorIdentifier & 0x1f
    } else if (this._node.nodeId) {
      return this._node.nodeId & 0x1f
    } else {
      return -1
    }
  }

  /**
   * @protected
   * @param { number } identifier
   * @param { number } [defaultValue]
   * @returns { number }
   * @memberof PSTObject
   */
  protected getIntItem(identifier: number, defaultValue?: number): number {
    if (!defaultValue) {
      defaultValue = 0
    }
    const property = this._propertyFinder.findByKey(identifier);
    if (property !== undefined) {
      const { value } = property;
      if (typeof value === 'number') {
        return value;
      }
    }
    return defaultValue
  }

  /**
   * Get a boolean.
   * @protected
   * @param {number} identifier
   * @param {boolean} [defaultValue]
   * @returns {boolean}
   * @memberof PSTObject
   */
  protected getBooleanItem(
    identifier: number,
    defaultValue?: boolean
  ): boolean {
    if (defaultValue === undefined) {
      defaultValue = false
    }
    const property = this._propertyFinder.findByKey(identifier);
    if (property !== undefined) {
      const { value } = property;
      if (typeof value === 'boolean') {
        return value;
      }
    }
    return defaultValue
  }

  /**
   * Get a double.
   * @protected
   * @param {number} identifier
   * @param {number} [defaultValue]
   * @returns {number}
   * @memberof PSTObject
   */
  protected getDoubleItem(identifier: number, defaultValue?: number): number {
    if (defaultValue === undefined) {
      defaultValue = 0
    }
    const property = this._propertyFinder.findByKey(identifier);
    if (property !== undefined) {
      const { value } = property;
      if (typeof value === 'number') {
        return value;
      }
    }
    return defaultValue
  }

  /**
   * Get a long.
   * @protected
   * @param {number} identifier
   * @param {long} [defaultValue]
   * @returns {long}
   * @memberof PSTObject
   */
  protected getLongItem(identifier: number, defaultValue?: Long): Long {
    if (defaultValue === undefined) {
      defaultValue = Long.ZERO
    }
    const property = this._propertyFinder.findByKey(identifier);
    if (property !== undefined) {
      const { value } = property;
      if (value instanceof Long) {
        return value;
      }
    }
    return defaultValue
  }

  /**
   * Get a string.
   * @protected
   * @param {number} identifier
   * @param {number} [stringType]
   * @param {string} [codepage]
   * @returns {string}
   * @memberof PSTObject
   */
  protected getStringItem(
    identifier: number,
    stringType?: number,
    codepage?: string
  ): string {
    const property = this._propertyFinder.findByKey(identifier);
    if (property !== undefined) {
      const { value } = property;
      if (typeof value === 'string') {
        return value;
      }
    }
    return ''
  }

  /**
   * Get a date.
   * @param {number} identifier
   * @returns {Date}
   * @memberof PSTObject
   */
  public getDateItem(identifier: number): Date | null {
    const property = this._propertyFinder.findByKey(identifier);
    if (property !== undefined) {
      const { value } = property;
      if (value instanceof Date) {
        return value;
      }
    }
    return null
  }

  /**
   * Get a blob.
   * @protected
   * @param {number} identifier
   * @returns {Buffer}
   * @memberof PSTObject
   */
  protected getBinaryItem(identifier: number): Buffer | null {
    const property = this._propertyFinder.findByKey(identifier);
    if (property !== undefined) {
      const { value } = property;
      if (value instanceof ArrayBuffer) {
        return Buffer.from(value);
      }
    }
    return null
  }

  /**
   * Get the display name of this object.
   * https://msdn.microsoft.com/en-us/library/office/cc842383.aspx
   * @readonly
   * @type {string}
   * @memberof PSTObject
   */
  public get displayName(): string {
    return this.getStringItem(OutlookProperties.PR_DISPLAY_NAME)
  }

  /**
   * JSON the object.
   * @returns {string}
   * @memberof PSTObject
   */
  public toJSON(): any {
    return this
  }
}
