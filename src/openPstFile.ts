import { PSTFile } from './PSTFile.class'
import fs from 'fs'
import { openLowPst } from './PLUtil'
import { PropertyValueResolver } from './PropertyValueResolver'
import { PropertyValueResolverV1 } from './PropertyValueResolverV1';
import iconv from 'iconv-lite';
import { processNameToIDMap } from './PAUtil';
import { PSTOpts } from './PSTOpts';

export async function openPstFile(
  path: string,
  opts?: PSTOpts
): Promise<PSTFile> {
  const file = await fs.promises.open(path, "r");

  async function readFile(
    buffer: ArrayBuffer, offset: number, length: number, position: number
  ): Promise<number> {
    const view = new Uint8Array(buffer);
    const { bytesRead } = await file.read(view, offset, length, position);
    return bytesRead;
  }

  const lowPst = await openLowPst(
    {
      readFile,
      close: async (): Promise<void> => {
        await file.close();
      },
    }
  );

  const resolver = new PropertyValueResolverV1(
    async (array) => iconv.decode(
      Buffer.from(array),
      (opts && opts.ansiEncoding) || "latin1"
    )
  );

  const nodeMap = await processNameToIDMap(
    await lowPst.getOneNodeByOrError(97),
    resolver
  );

  return new PSTFile(lowPst, nodeMap, opts);
}
