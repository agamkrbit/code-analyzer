import { File } from "../file-helper";
import { IParser } from "./parser";

/**
 * This is the base class for all type of file parser
 */
export abstract class BaseFileParser implements IParser {
    private _file: File;
    private _noOfEmptyLines: number;
    private _noOfCommentedLines: number;
    private _noOfLines: number;
    private _noOfCodeLines: number;

    constructor(file: File) {
        this._reset();
        this._file = file;
        this._analyze(file.fileStr);
    }

    get file(): File {
        return this._file;
    }

    get noOfEmptyLines(): number {
        return this._noOfEmptyLines;
    }

    get noOfCommentedLines(): number {
        return this._noOfCommentedLines;
    }

    get noOfLines(): number {
        return this._noOfLines;
    }

    get noOfCodeLines(): number {
        return this._noOfCodeLines;
    }

    abstract getSingleLineCommentIdentifiers(): string[];

    private _reset() {
        this._file = null;
        this._noOfCommentedLines = 0;
        this._noOfEmptyLines = 0;
        this._noOfLines = 0;
        this._noOfCodeLines = 0;
    }

    protected _analyze(str: string) {
        for (const line of str.split('\n')) {
            const trimmedLine = line.trim();
            if (!trimmedLine) {
                this._noOfEmptyLines++;
            } else if (
                this.getSingleLineCommentIdentifiers().some((identifier) => trimmedLine.startsWith(identifier))
            ) {
                this._noOfCommentedLines++;
            } else {
                this._noOfCodeLines++;
            }
            this._noOfLines++;
        }
    }

    

}