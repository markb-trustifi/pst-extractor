"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LZFu = void 0;
const PSTUtil_class_1 = require("./PSTUtil.class");
// An implementation of the LZFu algorithm to decompress RTF content
class LZFu {
    /**
     * Decompress the buffer of RTF content using LZ
     * @static
     * @param {Buffer} data
     * @returns {string}
     * @memberof LZFu
     */
    static decode(data) {
        // const compressedSize: number = PSTUtil.convertLittleEndianBytesToLong(
        //   data,
        //   0,
        //   4
        // ).toNumber()
        const uncompressedSize = PSTUtil_class_1.PSTUtil.convertLittleEndianBytesToLong(data, 4, 8).toNumber();
        const compressionSig = PSTUtil_class_1.PSTUtil.convertLittleEndianBytesToLong(data, 8, 12).toNumber();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const compressedCRC = PSTUtil_class_1.PSTUtil.convertLittleEndianBytesToLong(data, 12, 16).toNumber();
        if (compressionSig == 0x75465a4c) {
            // we are compressed...
            const output = Buffer.alloc(uncompressedSize);
            let outputPosition = 0;
            const lzBuffer = Buffer.alloc(4096);
            // preload our buffer.
            try {
                const bytes = Buffer.from(LZFu.LZFU_HEADER); //getBytes("US-ASCII");
                PSTUtil_class_1.PSTUtil.arraycopy(bytes, 0, lzBuffer, 0, LZFu.LZFU_HEADER.length);
            }
            catch (err) {
                console.error('LZFu::decode cant preload buffer\n' + err);
                throw err;
            }
            let bufferPosition = LZFu.LZFU_HEADER.length;
            let currentDataPosition = 16;
            // next byte is the flags,
            while (currentDataPosition < data.length - 2 &&
                outputPosition < output.length) {
                let flags = data[currentDataPosition++] & 0xff;
                for (let x = 0; x < 8 && outputPosition < output.length; x++) {
                    const isRef = (flags & 1) == 1;
                    flags >>= 1;
                    if (isRef) {
                        // get the starting point for the buffer and the length to read
                        const refOffsetOrig = data[currentDataPosition++] & 0xff;
                        const refSizeOrig = data[currentDataPosition++] & 0xff;
                        const refOffset = (refOffsetOrig << 4) | (refSizeOrig >>> 4);
                        const refSize = (refSizeOrig & 0xf) + 2;
                        try {
                            // copy the data from the buffer
                            let index = refOffset;
                            for (let y = 0; y < refSize && outputPosition < output.length; y++) {
                                output[outputPosition++] = lzBuffer[index];
                                lzBuffer[bufferPosition] = lzBuffer[index];
                                bufferPosition++;
                                bufferPosition %= 4096;
                                ++index;
                                index %= 4096;
                            }
                        }
                        catch (err) {
                            console.error('LZFu::decode copy the data from the buffer\n' + err);
                            throw err;
                        }
                    }
                    else {
                        // copy the byte over
                        lzBuffer[bufferPosition] = data[currentDataPosition];
                        bufferPosition++;
                        bufferPosition %= 4096;
                        output[outputPosition++] = data[currentDataPosition++];
                    }
                }
            }
            if (outputPosition != uncompressedSize) {
                throw new Error('LZFu::constructor decode Error decompressing RTF');
            }
            return new String(output).trim();
        }
        else if (compressionSig == 0x414c454d) {
            // we are not compressed!
            // just return the rest of the contents as a string
            const output = Buffer.alloc(data.length - 16);
            PSTUtil_class_1.PSTUtil.arraycopy(data, 16, output, 0, data.length - 16);
            return new String(output).trim();
        }
        return '';
    }
}
exports.LZFu = LZFu;
LZFu.LZFU_HEADER = '{\\rtf1\\ansi\\mac\\deff0\\deftab720{\\fonttbl;}{\\f0\\fnil \\froman \\fswiss \\fmodern \\fscript \\fdecor MS Sans SerifSymbolArialTimes New RomanCourier{\\colortbl\\red0\\green0\\blue0\n\r\\par \\pard\\plain\\f0\\fs20\\b\\i\\u\\tab\\tx';
