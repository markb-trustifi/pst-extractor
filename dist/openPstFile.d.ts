import { PSTFile } from './PSTFile.class';
import { ReadFileApi } from './PLUtil';
import { PSTOpts } from './PSTOpts';
/**
 * Open pst/ost file from os file path.
 *
 * @param path os file path.
 * @param opts options
 * @returns
 */
export declare function openPstFile(path: string, opts?: PSTOpts): Promise<PSTFile>;
/**
 * Open pst/ost file using user defined callback.
 *
 * @param api reader callback
 * @param opts options
 * @returns
 */
export declare function openPst(api: ReadFileApi, opts?: PSTOpts): Promise<PSTFile>;
