import { File } from "../files/file";
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
    private _noOfMultiLineComment: number;

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

    get noOfMultiLineComment(): number {
        return this._noOfMultiLineComment;
    }

    abstract getSingleLineCommentIdentifiers(): string[];
    abstract getMultiLineCommentIdentifiers(): string[][];

    private _reset() {
        this._file = null;
        this._noOfCommentedLines = 0;
        this._noOfEmptyLines = 0;
        this._noOfLines = 0;
        this._noOfCodeLines = 0;
        this._noOfMultiLineComment = 0;
    }

    protected _analyze(str: string) {
        const lines = str.split('\n');
        let multiLineCommentIdx = -1
        for (let idx = 0; idx < lines.length; idx++) {
            const trimmedLine = lines[idx].trim();
            if (multiLineCommentIdx === -1) {
                const matchedMultiline = this.getMultiLineCommentIdentifiers().findIndex(([start]) => trimmedLine.startsWith(start));
                if (matchedMultiline >= 0) {
                    multiLineCommentIdx = matchedMultiline;
                } else if (!trimmedLine) {
                    this._noOfEmptyLines++;
                } else if (
                    this.getSingleLineCommentIdentifiers().some((identifier) => trimmedLine.startsWith(identifier))
                ) {
                    this._noOfCommentedLines++;
                } else {
                    this._noOfCodeLines++;
                }
            } 
            
            if (multiLineCommentIdx >= 0) {
                const matchedMultiline = this.getMultiLineCommentIdentifiers().findIndex(([, end]) => trimmedLine.endsWith(end));
                if (matchedMultiline >= 0 && matchedMultiline === multiLineCommentIdx) {
                    this._noOfMultiLineComment++;
                    multiLineCommentIdx = -1;
                }
            }

            this._noOfLines++;
        }
    }

    

}