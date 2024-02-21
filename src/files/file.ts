import { readFileSync } from 'fs';
import * as pathHelper from 'path';

/**
 * custom file class
 */
export class File {
    private _path: string;
    private _basename: string;
    private _extension: string;

    constructor(path: string) {
        this._path = path;
        this._basename = pathHelper.basename(path);
        this._extension = pathHelper.extname(path).substring(1).toLocaleLowerCase();
    }

    get path(): string {
        return this._path;
    }

    get basename(): string {
        return this._basename;
    }

    get extension(): string {
        return this._extension;
    }

    get fileStr(): string {
        return readFileSync(this._path, 'utf-8');
    }
}