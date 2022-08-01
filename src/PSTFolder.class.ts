/* eslint-disable @typescript-eslint/no-explicit-any */
import Long from 'long'
import { DescriptorIndexNode } from './DescriptorIndexNode.class'
import { OutlookProperties } from './OutlookProperties'
import { PSTDescriptorItem } from './PSTDescriptorItem.class'
import { PSTFile } from './PSTFile.class'
import { PSTNodeInputStream } from './PSTNodeInputStream.class'
import { PSTTableItem } from './PSTTableItem.class'
import { PSTObject } from './PSTObject.class'
import { PSTUtil } from './PSTUtil.class'
import { PLNode } from './PLNode'
import { createPropertyFinder, PropertyFinder } from './PAUtil'
import { PSTFolderCollection } from './PSTFolderCollection'
import { PSTItemCollection } from './PSTItemCollection'
import { PSTMessage } from './PSTMessage.class'
import { getTableContext } from './TableContextUtil'
import { getHeapFrom } from './PHUtil'
import { PLSubNode } from './PLSubNode'

/**
 * Represents a folder in the PST File.  Allows you to access child folders or items.
 * Items are accessed through a sort of cursor arrangement.  This allows for
 * incremental reading of a folder which may have _lots_ of emails.
 * @export
 * @class PSTFolder
 * @extends {PSTObject}
 */
export class PSTFolder extends PSTObject {
  /**
   * Creates an instance of PSTFolder.
   * Represents a folder in the PST File.  Allows you to access child folders or items.
   * Items are accessed through a sort of cursor arrangement.  This allows for
   * incremental reading of a folder which may have _lots_ of emails.
   * @param {PSTFile} pstFile
   * @param {DescriptorIndexNode} descriptorIndexNode
   * @param {Map<number, PSTDescriptorItem>} [localDescriptorItems]
   * @memberof PSTFolder
   */
  constructor(
    pstFile: PSTFile,
    node: PLNode,
    subNode: PLSubNode,
    propertyFinder: PropertyFinder
  ) {
    super(pstFile, node, subNode, propertyFinder)
  }

  /**
   * Get folders in one fell swoop, since there's not usually thousands of them.
   */
  async folderCollection(): Promise<PSTFolderCollection> {
    try {
      const targets: PLNode[] = [];

      for (let node of this._node.getChildren()) {
        const nodeType = this.getNodeType(node.nodeId);
        if (false
          || nodeType === PSTUtil.NID_TYPE_NORMAL_FOLDER
        ) {
          targets.push(node);
        }
      }

      return new PSTFolderCollection(
        targets.length,
        async (index) => {
          if (!(index in targets)) {
            throw new RangeError(`folder index ${index} out of range`);
          }
          return await this.pstFile.getFolderOf(targets[index]);
        }
      );
    } catch (err) {
      console.error(
        "PSTFolder::getSubFolders Can't get child folders for folder " +
        this.displayName +
        '\n' +
        err
      )
      throw err
    }
  }

  async itemCollection(): Promise<PSTItemCollection> {
    const targets: PLNode[] = [];

    if (this.getNodeType() === PSTUtil.NID_TYPE_SEARCH_FOLDER) {
      // some folder types don't have children:
    }
    else {
      // trying to read emailsTable PSTTable7C
      const contentsTableNode = this._node.getSiblingNode(PSTUtil.NID_TYPE_CONTENTS_TABLE);

      if (contentsTableNode !== undefined) {
        const contentsTableNodeReader = contentsTableNode.getSubNode();
        const heap = await getHeapFrom(
          contentsTableNodeReader
        );

        const tc = await getTableContext(
          heap,
          this.pstFile.resolver
        );

        const rows = await tc.rows();

        const orderOfNodeId = [];

        for (let row of rows) {
          const props = createPropertyFinder(await row.list());
          const prop = props.findByKey(0x67f2);
          if (prop !== undefined && typeof prop.value === 'number') {
            orderOfNodeId.push(prop.value);
          }
        }

        const childNodeIdMap = new Map(
          this._node.getChildren()
            .map(node => [node.nodeId, node])
        );

        for (let nodeId of orderOfNodeId) {
          const found = childNodeIdMap.get(nodeId);
          if (found !== undefined) {
            targets.push(found);
          }
        }
      }
      else {
        //console.log("fallback");
        // fallback to children as listed in the descriptor b-tree
        for (let node of this._node.getChildren()) {
          if (this.getNodeType(node.nodeId) === PSTUtil.NID_TYPE_NORMAL_MESSAGE) {
            targets.push(node);
          }
        }
      }
    }

    return new PSTItemCollection(
      targets.length,
      async (index) => {
        if (!(index in targets)) {
          throw new RangeError(`item index ${index} out of range`);
        }
        return await this.pstFile.getItemOf(
          targets[index],
          targets[index].getSubNode()
        );
      }
    );
  }

  /**
   * Contains a constant that indicates the folder type.
   * https://msdn.microsoft.com/en-us/library/office/cc815373.aspx
   * @readonly
   * @type {number}
   * @memberof PSTFolder
   */
  public get folderType(): number {
    return this.getIntItem(OutlookProperties.PR_FOLDER_TYPE)
  }

  /**
   * Contains the number of messages in a folder, as computed by the message store.
   * For a number calculated by the library use getEmailCount
   * @readonly
   * @type {number}
   * @memberof PSTFolder
   */
  public get contentCount(): number {
    return this.getIntItem(OutlookProperties.PR_CONTENT_COUNT)
  }

  /**
   * Contains the number of unread messages in a folder, as computed by the message store.
   * https://msdn.microsoft.com/en-us/library/office/cc841964.aspx
   * @readonly
   * @type {number}
   * @memberof PSTFolder
   */
  public get unreadCount(): number {
    return this.getIntItem(OutlookProperties.PR_CONTENT_UNREAD)
  }

  /**
   * Contains TRUE if a folder contains subfolders.
   * once again, read from the PST, use getSubFolderCount if you want to know
   * @readonly
   * @type {boolean}
   * @memberof PSTFolder
   */
  public get hasSubfolders(): boolean {
    return this.getIntItem(OutlookProperties.PR_SUBFOLDERS) != 0
  }

  /**
   * Contains a text string describing the type of a folder. Although this property is
   * generally ignored, versions of Microsoft® Exchange Server prior to Exchange Server
   * 2003 Mailbox Manager expect this property to be present.
   * https://msdn.microsoft.com/en-us/library/office/cc839839.aspx
   * @readonly
   * @type {string}
   * @memberof PSTFolder
   */
  public get containerClass(): string {
    return this.getStringItem(OutlookProperties.PR_CONTAINER_CLASS)
  }

  /**
   * Contains a bitmask of flags describing capabilities of an address book container.
   * https://msdn.microsoft.com/en-us/library/office/cc839610.aspx
   * @readonly
   * @type {number}
   * @memberof PSTFolder
   */
  public get containerFlags(): number {
    return this.getIntItem(OutlookProperties.PR_CONTAINER_FLAGS)
  }

  /**
   * JSON stringify the object properties.
   * @returns {string}
   * @memberof PSTFolder
   */
  public toJSON(): any {
    const clone = Object.assign(
      {
        folderType: this.folderType,
        contentCount: this.contentCount,
        unreadCount: this.unreadCount,
        hasSubfolders: this.hasSubfolders,
        containerClass: this.containerClass,
        containerFlags: this.containerFlags,
      },
      this
    )
    return clone
  }
}
