import { PSTContact } from '../PSTContact.class'
import { PSTFile } from '../PSTFile.class'
import { PSTFolder } from '../PSTFolder.class'
import { PSTMessage } from '../PSTMessage.class'
import { PSTTask } from '../PSTTask.class'
import { PSTAttachment } from '../PSTAttachment.class'
import { openPstFile } from '../index'
import { PSTFolderCollection } from '../PSTFolderCollection'
const resolve = require('path').resolve
let pstFile: PSTFile
let subtreeFolder: PSTFolder

beforeAll(async () => {
  pstFile = await openPstFile(
    resolve('./src/__tests__/testdata/mtnman1965@outlook.com.ost')
  )

  // get to IPM_SUBTREE folder
  let childFolders: PSTFolderCollection = await (await pstFile.getRootFolder()).folderCollection()
  subtreeFolder = await childFolders.subFolder(1) // Root - Mailbox
  expect(subtreeFolder.displayName).toBe("Root - Mailbox");
  childFolders = await subtreeFolder.folderCollection()
  subtreeFolder = await childFolders.subFolder(4) // IPM_SUBTREE
  expect(subtreeFolder.displayName).toBe("IPM_SUBTREE");
})

afterAll(async () => {
  await pstFile.close()
})

describe('PSTAttachment tests', () => {
  it('should have a contact with an attachment', async () => {
    const childFolders = await subtreeFolder.folderCollection()
    const folder = await childFolders.subFolder(10) // Contacts
    const itemCollection = await folder.itemCollection()
    const contact: PSTContact = await itemCollection.item(0) as PSTContact
    expect(contact.messageClass).toEqual('IPM.Contact')
    expect(contact.hasAttachments).toBeTruthy()

    // first attachment is contact picture
    const attachmentCollection = await contact.attachmentCollection()
    let attachment: PSTAttachment = await attachmentCollection.attachment(0)
    expect(attachment.size).toEqual(14055)
    expect(attachment.longFilename).toEqual('ContactPicture.jpg')
    expect(attachment.creationTime).toEqual(
      new Date('2018-03-07T16:50:00.000Z')
    )

    // second attachment is never gonna give you up
    attachment = await attachmentCollection.attachment(1)
    expect(attachment.size).toEqual(8447)
    expect(attachment.longFilename).toEqual('rickroll.jpg')
    expect(attachment.creationTime).toEqual(
      new Date('2018-03-07T16:49:32.964Z')
    )
  })

  it('should have a task with an attachment', async () => {
    const childFolders = await subtreeFolder.folderCollection()
    const folder = await childFolders.subFolder(17) // Tasks
    const itemCollection = await folder.itemCollection()
    const task: PSTTask = (await itemCollection.item(0)) as PSTTask
    expect(task.messageClass).toEqual('IPM.Task')
    expect(task.hasAttachments).toBeTruthy()
    const attachment: PSTAttachment = await (await task.attachmentCollection()).attachment(0)
    expect(attachment.size).toEqual(8447)
    expect(attachment.longFilename).toEqual('rickroll.jpg')
    expect(attachment.creationTime).toEqual(
      new Date('2018-03-07T16:49:32.964Z')
    )
    expect(attachment.modificationTime).toEqual(
      new Date('2018-03-07T16:49:32.959Z')
    )
    expect(attachment.filename).toEqual('rickroll.jpg')
    expect(attachment.attachMethod).toEqual(1)
    expect(attachment.attachNum).toEqual(0)
    expect(attachment.renderingPosition).toEqual(60)
    expect(attachment.mimeSequence).toEqual(0)
    expect(attachment.pathname).toEqual('')
    expect(attachment.longPathname).toEqual('')
    expect(attachment.mimeTag).toEqual('')
    expect(attachment.contentId).toEqual('')
    expect(attachment.isAttachmentInvisibleInHtml).toEqual(false)
    expect(attachment.isAttachmentInvisibleInRTF).toEqual(false)
    expect(attachment.filesize).toEqual(4796)
    expect(attachment.embeddedPSTMessage).toEqual(null)
  })

  it('should have email with word attachment', async () => {
    const childFolders = await subtreeFolder.folderCollection()
    const folder = await childFolders.subFolder(1) // Inbox
    const itemCollection = await folder.itemCollection()
    let msg: PSTMessage = await itemCollection.item(0)
    msg = await itemCollection.item(1)
    msg = await itemCollection.item(2)

    // Email: 2110308 - word attachment
    expect(msg.hasAttachments).toBeTruthy()
    const attachment: PSTAttachment = (await (await msg.attachmentCollection()).attachment(0))
    expect(attachment.size).toEqual(54044)
    expect(attachment.longFilename).toEqual('OBA_2760.doc')
    expect(attachment.creationTime).toEqual(
      new Date('2018-03-07T16:26:20.724Z')
    )
  })

  it('should have email with excel attachment', async () => {
    const childFolders = await subtreeFolder.folderCollection()
    const folder = (await childFolders.subFolder(1)) // Inbox
    const itemCollection = folder.itemCollection()
    let msg: PSTMessage = (await (await itemCollection).item(0))
    msg = (await (await itemCollection).item(1))
    msg = (await (await itemCollection).item(2))
    msg = (await (await itemCollection).item(3))

    // Email: 2110724 - excel attachment
    expect(msg.hasAttachments).toBeTruthy()
    const attachment: PSTAttachment = (await (await msg.attachmentCollection()).attachment(0))
    expect(attachment.size).toEqual(31016)
    expect(attachment.longFilename).toEqual('RedRockA.xls')
    expect(attachment.creationTime).toEqual(
      new Date('2018-03-07T16:31:56.075Z')
    )
  })

  it('should have email with jpg attachment',async () => {
    const childFolders = (await subtreeFolder.folderCollection())
    const folder = (await childFolders.subFolder(1)) // Inbox
    const itemCollection = (await folder.itemCollection())
    let msg: PSTMessage = (await itemCollection.item(0))
    msg = (await itemCollection.item(1))
    msg = (await itemCollection.item(2))
    msg = (await itemCollection.item(3))
    msg = (await itemCollection.item(4))

    // Email: 2111140 - never gonna give you up
    expect(msg.hasAttachments).toBeTruthy()
    const attachment: PSTAttachment = (await (await msg.attachmentCollection()).attachment(0))
    expect(attachment.size).toEqual(5020)
    expect(attachment.longFilename).toEqual('rickroll.jpg')
    expect(attachment.creationTime).toEqual(
      new Date('2018-03-07T16:43:36.995Z')
    )
  })
})
