"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openPstFile = void 0;
const PSTFile_class_1 = require("./PSTFile.class");
const fs_1 = __importDefault(require("fs"));
const PLUtil_1 = require("./PLUtil");
const PropertyValueResolverV1_1 = require("./PropertyValueResolverV1");
const iconv_lite_1 = __importDefault(require("iconv-lite"));
const PAUtil_1 = require("./PAUtil");
function openPstFile(path, opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield fs_1.default.promises.open(path, "r");
        function readFile(buffer, offset, length, position) {
            return __awaiter(this, void 0, void 0, function* () {
                const view = new Uint8Array(buffer);
                const { bytesRead } = yield file.read(view, offset, length, position);
                return bytesRead;
            });
        }
        const lowPst = yield (0, PLUtil_1.openLowPst)({
            readFile,
            close: () => __awaiter(this, void 0, void 0, function* () {
                yield file.close();
            }),
        });
        const resolver = new PropertyValueResolverV1_1.PropertyValueResolverV1((array) => __awaiter(this, void 0, void 0, function* () {
            return iconv_lite_1.default.decode(Buffer.from(array), (opts && opts.ansiEncoding) || "latin1");
        }));
        const nodeMap = yield (0, PAUtil_1.processNameToIDMap)(yield lowPst.getOneNodeByOrError(97), resolver);
        return new PSTFile_class_1.PSTFile(lowPst, nodeMap, opts);
    });
}
exports.openPstFile = openPstFile;
