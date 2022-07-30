import { openLowPst } from '../PLUtil';
import { getHeapFromMain, getHeapFromSub } from '../PHUtil';
import { getPropertyContext } from '../PropertyContextUtil';
import { PropertyValueResolverV1 } from '../PropertyValueResolverV1';
import { decode } from 'iconv-lite';
import fs from 'fs';
const resolve = require('path').resolve;

// cls & yarn test:unit --testMatch "**/PLUtil.spec.ts" --coverage false

const filePath = resolve('./src/__tests__/testdata/alpha-beta-gamma-delta.pst');

describe('PLUtil/PHUtil tests', () => {
  it('openLowPst and so on', async () => {
    const file = await fs.promises.open(filePath, "r");
    try {

      async function readFile(
        buffer: ArrayBuffer, offset: number, length: number, position: number
      ): Promise<number> {
        const view = new Uint8Array(buffer);
        const { bytesRead } = await file.read(view, offset, length, position);
        return bytesRead;
      }

      const lowPst = await openLowPst(readFile);
      const rootNode = await lowPst.getOneNodeBy(290);

      const heap = await getHeapFromMain(rootNode.getNodeReader());
      const pcBufs = await heap.getReader().getHeapBuffers(heap.userRootHnid);
      console.log({ pcBufs });

      const pc = await getPropertyContext(
        heap,
        new PropertyValueResolverV1(
          async (array) => decode(Buffer.from(array), "cp932")
        )
      );

      console.log(await pc.list());
    } finally {
      file.close();
    }
  })
})
