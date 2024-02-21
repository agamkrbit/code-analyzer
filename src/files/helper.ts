import { existsSync, statSync } from 'fs';
import { File } from './file';

export function parseFilePath(path: string ): File {
    return new File(path);
}

export function isPathExists(path: string): boolean {
    return existsSync(path);
}

export function isFileExists(path: string): boolean {
    if (!isPathExists(path)) {
        return false;
    }
    return !statSync(path).isDirectory();
}