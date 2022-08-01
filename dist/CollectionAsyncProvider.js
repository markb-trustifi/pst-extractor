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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionAsyncProvider = void 0;
const KeyedDelay_1 = require("./KeyedDelay");
/**
 * @internal
 */
class CollectionAsyncProvider {
    constructor(count, itemProvider) {
        this._cache = new KeyedDelay_1.KeyedDelay();
        this._count = count;
        this._itemProvider = itemProvider;
    }
    get count() {
        return this._count;
    }
    get(index) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._cache.getOrCreate(index.toString(), () => __awaiter(this, void 0, void 0, function* () { return yield this._itemProvider(index); }));
        });
    }
    /**
     * get all of the children
     */
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const array = [];
            for (let x = 0; x < this._count; x++) {
                array.push(yield this.get(x));
            }
            return array;
        });
    }
}
exports.CollectionAsyncProvider = CollectionAsyncProvider;
