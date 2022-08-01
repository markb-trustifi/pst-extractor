import { PSTFile } from './PSTFile.class';
import { PSTOpts } from './PSTOpts';
export declare function openPstFile(path: string, opts?: PSTOpts): Promise<PSTFile>;
