import { PSTContact } from '../PSTContact.class'
import { PSTFile } from '../PSTFile.class'
import { PSTFolder } from '../PSTFolder.class'
import { PSTMessage } from '../PSTMessage.class'
import { PSTTask } from '../PSTTask.class'
import { PSTAttachment } from '../PSTAttachment.class'
import assert from 'assert'
const resolve = require('path').resolve
let pstFile: PSTFile

beforeAll(() => {
  pstFile = new PSTFile(
    resolve('./src/__tests__/testdata/alpha-beta-gamma-delta.pst')
  )
})

afterAll(() => {
  pstFile.close()
})

describe('PSTAttachment tests', () => {
  it('should have a message with an triple embedded messages', () => {
    // get to IPM_SUBTREE folder
    const folder = pstFile.getRootFolder().getSubFolders()[0]

    const alphaMsg: PSTMessage = folder.getNextChild()
    expect(alphaMsg.messageClass).toEqual('IPM.Note')
    expect(alphaMsg.hasAttachments).toBeTruthy()
    expect(alphaMsg.numberOfAttachments).toEqual(2);
    const alphaAttachment1: PSTAttachment = alphaMsg.getAttachment(1)
    expect(alphaAttachment1.longFilename).toEqual('')
    expect(alphaAttachment1.size).toEqual(25634)
    expect(alphaAttachment1.modificationTime).toEqual(null)
    expect(alphaAttachment1.filename).toEqual("")
    expect(alphaAttachment1.attachMethod).toEqual(5)
    expect(alphaAttachment1.attachNum).toEqual(0)
    expect(alphaAttachment1.renderingPosition).toEqual(4294967295)
    expect(alphaAttachment1.mimeSequence).toEqual(0)
    expect(alphaAttachment1.pathname).toEqual('')
    expect(alphaAttachment1.longPathname).toEqual('')
    expect(alphaAttachment1.mimeTag).toEqual('')
    expect(alphaAttachment1.contentId).toEqual('')
    expect(alphaAttachment1.isAttachmentInvisibleInHtml).toEqual(false)
    expect(alphaAttachment1.isAttachmentInvisibleInRTF).toEqual(false)
    expect(alphaAttachment1.filesize).toEqual(8)
    expect(alphaAttachment1.fileInputStream).not.toEqual(null);
    
    // The valid embeddedPSTMessage should be returned even if we request more than once.
    [1, 2, 3].forEach(
      () => {
        const betaMsg = alphaAttachment1.embeddedPSTMessage;
        if (!betaMsg) {
          throw new Error("betaMsg must be available");
        }
        expect(betaMsg.hasAttachments).toBeTruthy()
        expect(betaMsg.numberOfAttachments).toEqual(2)

        const betaAttachment1: PSTAttachment = betaMsg.getAttachment(1);
        [1, 2, 3].forEach(
          () => {
            const gammaMsg = betaAttachment1.embeddedPSTMessage;
            if (!gammaMsg) {
              throw new Error("gammaMsg must be available");
            }
            expect(gammaMsg.hasAttachments).toBeTruthy()
            expect(gammaMsg.numberOfAttachments).toEqual(2)

            const gammaAttachment1: PSTAttachment = gammaMsg.getAttachment(1);
            [1, 2, 3].forEach(
              () => {
                const deltaMsg = gammaAttachment1.embeddedPSTMessage;
                if (!deltaMsg) {
                  throw new Error("deltaMsg must be available");
                }
                expect(deltaMsg.hasAttachments).toBeTruthy()
                expect(deltaMsg.numberOfAttachments).toEqual(1)
              }
            );
          }
        );
      }
    );
  })
})
