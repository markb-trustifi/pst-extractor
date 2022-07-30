import { PSTFile } from '../PSTFile.class'
import { PSTFolder } from '../PSTFolder.class'
import { PSTActivity } from '../PSTActivity.class'
import { openPstFile } from '../index'
import { PSTFolderCollection } from '../PSTFolderCollection'
const resolve = require('path').resolve
let pstFile: PSTFile
let folder: PSTFolder

beforeAll(async () => {
  pstFile = await openPstFile(
    resolve('./src/__tests__/testdata/mtnman1965@outlook.com.ost')
  )

  // get to Journal folder
  let childFolders: PSTFolderCollection = await (await pstFile.getRootFolder()).folderCollection()
  folder = await childFolders.subFolder(1) // Root - Mailbox
  expect(folder.displayName).toBe("Root - Mailbox");
  childFolders = await folder.folderCollection()
  folder = await childFolders.subFolder(4) // IPM_SUBTREE
  expect(folder.displayName).toBe("IPM_SUBTREE");
  childFolders = await folder.folderCollection()
  folder = await childFolders.subFolder(15) // Journal
  expect(folder.displayName).toBe("Journal");
})

afterAll(async () => {
  await pstFile?.close()
})

describe('PSTActivity tests', () => {
  it('should have a Journal folder', () => {
    expect(folder.displayName).toEqual('Journal')
  })

  it('root folder should have a journal entry', async () => {
    const collection = await folder.itemCollection();

    const activity: PSTActivity = (await collection.item(0)) as PSTActivity
    // console.log(JSON.stringify(activity, null, 2));
    expect(activity.messageClass).toEqual('IPM.Activity')
    expect(activity.subject).toEqual('called Ed')
    expect(activity.logTypeDesc).toEqual('Phone call')
    expect(activity.bodyPrefix).toContain('But no one was home')
    expect(activity.logStart).toEqual(new Date('2018-03-06T21:09:00.000Z'))
    expect(activity.logEnd).toEqual(new Date('2018-03-06T21:09:00.000Z'))
    expect(activity.importance).toEqual(1)
    expect(activity.logDuration).toEqual(0)
    expect(activity.logFlags).toEqual(0)
    expect(activity.isDocumentPrinted).toEqual(false)
    expect(activity.isDocumentSaved).toEqual(false)
    expect(activity.isDocumentRouted).toEqual(false)
    // expect(activity.isDocumentPosted).toEqual(false)
  })
})
