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
exports.SingleAsyncProvider = void 0;
class SingleAsyncProvider {
    constructor() {
        this._ready = false;
    }
    getOrCreate(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._ready) {
                this._value = yield provider();
                this._ready = true;
            }
            if (this._value === undefined) {
                throw new Error("value is undefined");
            }
            return this._value;
        });
    }
}
exports.SingleAsyncProvider = SingleAsyncProvider;
