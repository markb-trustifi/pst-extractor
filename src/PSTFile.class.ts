import Long from 'long'
import { PSTFolder } from './PSTFolder.class'
import { PSTMessageStore } from './PSTMessageStore.class'
import { PSTUtil } from './PSTUtil.class'
import { NodeMap } from './NodeMap.class'
import { PSTOpts } from './PSTOpts'
import { createPropertyFinder, PropertyFinder } from './PAUtil'
import { PLStore } from './PLStore'
import { getHeapFrom } from './PHUtil'
import { getPropertyContext } from './PropertyContextUtil'
import { PropertyValueResolverV1 } from './PropertyValueResolverV1'
import iconv from 'iconv-lite'
import { PLNode } from './PLNode'
import { PSTMessage } from './PSTMessage.class'
import { PropertyValueResolver } from './PropertyValueResolver'
import { PLSubNode } from './PLSubNode'
// eslint-disable-next-line @typescript-eslint/no-var-requires

export class PSTFile {
  public static ENCRYPTION_TYPE_NONE = 0
  public static ENCRYPTION_TYPE_COMPRESSIBLE = 1
  public static MESSAGE_STORE_DESCRIPTOR_IDENTIFIER = 33
  public static ROOT_FOLDER_DESCRIPTOR_IDENTIFIER = 290
  public static PST_TYPE_ANSI = 14
  public static PST_TYPE_ANSI_2 = 15
  public static PST_TYPE_UNICODE = 23
  public static PST_TYPE_2013_UNICODE = 36
  public static PS_PUBLIC_STRINGS = 0
  public static PS_INTERNET_HEADERS = 3
  public static PSETID_Messaging = 7
  public static PSETID_Note = 8
  public static PSETID_PostRss = 9
  public static PSETID_Task = 10
  public static PSETID_UnifiedMessaging = 11
  public static PS_MAPI = 12
  public static PSETID_AirSync = 13
  public static PSETID_Sharing = 14

  private guidMap: Map<string, number> = new Map([
    ['00020329-0000-0000-C000-000000000046', 0],
    ['00062008-0000-0000-C000-000000000046', 1],
    ['00062004-0000-0000-C000-000000000046', 2],
    ['00020386-0000-0000-C000-000000000046', 3],
    ['00062002-0000-0000-C000-000000000046', 4],
    ['6ED8DA90-450B-101B-98DA-00AA003F1305', 5],
    ['0006200A-0000-0000-C000-000000000046', 6],
    ['41F28F13-83F4-4114-A584-EEDB5A6B0BFF', 7],
    ['0006200E-0000-0000-C000-000000000046', 8],
    ['00062041-0000-0000-C000-000000000046', 9],
    ['00062003-0000-0000-C000-000000000046', 10],
    ['4442858E-A9E3-4E80-B900-317A210CC15B', 11],
    ['00020328-0000-0000-C000-000000000046', 12],
    ['71035549-0739-4DCB-9163-00F0580DBBDF', 13],
    ['00062040-0000-0000-C000-000000000046', 14],
  ])

  private _store: PLStore;
  private _resolver: PropertyValueResolver;

  /**
   * @internal
   */
  get resolver(): PropertyValueResolver {
    return this._resolver;
  }

  private _ansiEncoding?: string
  get ansiEncoding(): string | undefined {
    return this._ansiEncoding;
  }

  // node tree maps
  private static nodeMap: NodeMap = new NodeMap();

  /**
   * Creates an instance of PSTFile.  File is opened in constructor.
   * @param {string} fileName
   * @memberof PSTFile
   */
  public constructor(
    store: PLStore,
    nodeMap: NodeMap,
    opts?: PSTOpts
  ) {
    PSTFile.nodeMap = nodeMap;
    this._store = store;
    this._resolver = new PropertyValueResolverV1(
      async (array) => iconv.decode(
        Buffer.from(array),
        (opts && opts.ansiEncoding) || "latin1"
      )
    );
  }

  /**
   * Close the file.
   * @memberof PSTFile
   */
  public async close(): Promise<void> {
    await this._store.close();
  }

  /**
   * Get name to ID map item.
   * @param {number} key
   * @param {number} idx
   * @returns {number}
   * @memberof PSTFile
   */
  public getNameToIdMapItem(key: number, idx: number): number {
    return PSTFile.nodeMap.getId(key, idx)
  }

  /**
   * Get public string to id map item.
   * @static
   * @param {string} key
   * @returns {number}
   * @memberof PSTFile
   */
  public static getPublicStringToIdMapItem(key: string): number {
    return PSTFile.nodeMap.getId(key)
  }

  /**
   * Get property name from id.
   * @static
   * @param {number} propertyId
   * @param {boolean} bNamed
   * @returns {string}
   * @memberof PSTFile
   */
  public static getPropertyName(
    propertyId: number,
    bNamed: boolean
  ): string | undefined {
    return PSTUtil.propertyName.get(propertyId)
  }

  /**
   * Get name to id map key.
   * @static
   * @param {number} propId
   * @returns {long}
   * @memberof PSTFile
   */
  public static getNameToIdMapKey(propId: number): Long | undefined {
    return PSTFile.nodeMap.getNumericName(propId)
  }

  /**
   * Get the message store of the PST file.  Note that this doesn't really
   * have much information, better to look under the root folder.
   * @returns {PSTMessageStore}
   * @memberof PSTFile
   */
  public async getMessageStore(): Promise<PSTMessageStore> {
    const node = this._store.getOneNodeBy(
      PSTFile.MESSAGE_STORE_DESCRIPTOR_IDENTIFIER
    );
    if (node === undefined) {
      throw new Error("MESSAGE_STORE_DESCRIPTOR not found");
    }
    const heap = await getHeapFrom(node.getSubNode());
    const pc = await getPropertyContext(
      heap,
      this._resolver
    );
    const propertyFinder = createPropertyFinder(await pc.list());

    return new PSTMessageStore(this, node, node.getSubNode(), propertyFinder);
  }

  /**
   * 
   * @internal
   */
  async getFolderOf(node: PLNode): Promise<PSTFolder> {
    const heap = await getHeapFrom(node.getSubNode());
    const pc = await getPropertyContext(
      heap,
      this._resolver
    );
    const propertyFinder = createPropertyFinder(await pc.list());

    const output: PSTFolder = new PSTFolder(
      this,
      node,
      node.getSubNode(),
      propertyFinder
    );
    return output
  }

  /**
   * 
   * @internal
   */
  async getItemOf(node: PLNode, subNode: PLSubNode): Promise<PSTMessage> {
    return await PSTUtil.createAppropriatePSTMessageObject(
      this,
      node,
      subNode,
      this._resolver
    );
  }

  /**
   * Get the root folder for the PST file
   * @returns {PSTFolder}
   * @memberof PSTFile
   */
  public async getRootFolder(): Promise<PSTFolder> {
    const node = this._store.getOneNodeBy(
      PSTFile.ROOT_FOLDER_DESCRIPTOR_IDENTIFIER
    );
    if (node === undefined) {
      throw new Error("ROOT_FOLDER_DESCRIPTOR not found");
    }
    return await this.getFolderOf(node);
  }

  /**
   * JSON stringify the object properties.
   * @returns {string}
   * @memberof PSTFile
   */
  public toJSON(): any {
    return this
  }
}
