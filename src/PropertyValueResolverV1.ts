import Long from "long";
import { PHNodeHeapReader } from "./PHNodeHeapReader";
import { readLong } from "./PLUtil";
import { PropertyValueResolver } from "./PropertyValueResolver";
import { PSTUtil } from "./PSTUtil.class";

interface PrimitiveTypeConverterArg {
  view: DataView;
  heap: PHNodeHeapReader;
  getBytes: (numBytes: number) => Promise<ArrayBuffer | undefined>;
  resolveHeap: (heap: number) => Promise<ArrayBuffer | undefined>;
  convertAnsiString: (array: ArrayBuffer) => Promise<string>;
}

type PrimitiveTypeConverter = (
  arg: PrimitiveTypeConverterArg
) => Promise<any>;

type PrimitiveTypeConverters = { [key: number]: PrimitiveTypeConverter };

const primitiveTypeConverters: PrimitiveTypeConverters = {};

const PT_BOOLEAN = 0xB;
const PT_DOUBLE = 0x5;
const PT_LONG = 0x3;
const PT_OBJECT = 0xD;
const PT_LONGLONG = 0x14;
const PT_STRING8 = 0x1E;
const PT_UNICODE = 0x1F;
const PT_SYSTIME = 0x40;
const PT_CLSID = 0x48;

primitiveTypeConverters[PT_LONG] = async (arg) => {
  return arg.view.getInt32(0, true);
};
primitiveTypeConverters[PT_OBJECT] = async (arg) => {
  const heap = arg.view.getUint32(0, true);
  const bytes = await arg.resolveHeap(heap);
  return bytes;
};
primitiveTypeConverters[PT_LONGLONG] = async (arg) => {
  const bytes = await arg.getBytes(8);
  if (bytes !== undefined) {
    const view = new DataView(bytes);
    return readLong(view, 0);
  }
  else {
    return undefined;
  }
};
primitiveTypeConverters[PT_DOUBLE] = async (arg) => {
  const bytes = await arg.getBytes(8);
  return (bytes !== undefined)
    ? new DataView(bytes).getFloat64(0, true)
    : undefined;
};
primitiveTypeConverters[PT_BOOLEAN] = async (arg) => {
  return arg.view.getUint8(0) !== 0;
};
primitiveTypeConverters[PT_STRING8] = async (arg) => {
  const heap = arg.view.getUint32(0, true);
  const bytes = await arg.resolveHeap(heap);
  return (bytes !== undefined)
    ? await arg.convertAnsiString(bytes)
    : undefined;
};
primitiveTypeConverters[PT_UNICODE] = async (arg) => {
  const heap = arg.view.getUint32(0, true);
  const bytes = await arg.resolveHeap(heap);
  return (bytes !== undefined)
    ? Buffer.from(bytes).toString('utf16le')
    : undefined;
};
primitiveTypeConverters[PT_SYSTIME] = async (arg) => {
  const bytes = await arg.getBytes(8);
  if (bytes !== undefined) {
    const view = new DataView(bytes);
    return PSTUtil.filetimeToDate(
      new Long(view.getUint32(4, true)),
      new Long(view.getUint32(0, true))
    );
  }
  else {
    return undefined;
  }
};
primitiveTypeConverters[PT_CLSID] = async (arg) => {
  const heap = arg.view.getUint32(0, true);
  const bytes = await arg.resolveHeap(heap);
  return bytes;
};
primitiveTypeConverters[0x0102] = async (arg) => {
  const heap = arg.view.getUint32(0, true);
  const bytes = await arg.resolveHeap(heap);
  return bytes;
};

function mixIntoOne(array: ArrayBuffer[]): ArrayBuffer {
  if (array.length === 0) {
    return new ArrayBuffer(0);
  }
  else if (array.length === 1) {
    return array[0];
  }
  else {
    const numBytes = array.reduce((prev, it) => prev + it.byteLength, 0);
    const one = new ArrayBuffer(numBytes);
    const dest = new Uint8Array(one);
    array.reduce(
      (nextPos, source) => {
        dest.set(new Uint8Array(source), nextPos);
        return nextPos + source.byteLength;
      },
      0
    );
    return one;
  }
}

export class PropertyValueResolverV1 implements PropertyValueResolver {
  private convertAnsiString: (array: ArrayBuffer) => Promise<string>;

  constructor(
    convertAnsiString: (array: ArrayBuffer) => Promise<string>
  ) {
    this.convertAnsiString = convertAnsiString;
  }

  async resolveValueOf(
    key: number,
    type: number,
    value: ArrayBuffer,
    heap: PHNodeHeapReader
  ): Promise<any> {
    const converter = primitiveTypeConverters[type];
    if (converter === undefined) {
      throw new Error(`property type ${type} is unknown`);
    }

    const view = new DataView(value);

    async function resolveHeap(hnid: number): Promise<ArrayBuffer | undefined> {
      return mixIntoOne(await heap.getHeapBuffers(hnid));
    }

    return await converter(
      {
        view: view,
        heap: heap,
        async getBytes(numBytes: number): Promise<ArrayBuffer | undefined> {
          const { byteLength } = value;
          if (byteLength === 4 && byteLength < numBytes) {
            const hnid = view.getUint32(0, true);
            return await resolveHeap(hnid);
          }
          else if (byteLength !== 4 && numBytes <= byteLength) {
            return value.slice(0, numBytes);
          }
          else {
            throw new Error("dont know how to provide buffer");
          }
        },
        resolveHeap: resolveHeap,
        convertAnsiString: this.convertAnsiString,
      }
    );
  }
}
