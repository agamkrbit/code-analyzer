import { IParser } from './parser';
/**
 * this is the folder parser
 */
export class FolderParser implements IParser {
    private _path: string;
    private _childParsers: IParser[];

    constructor(path: string) {
        this._path = path;
        this._childParsers = []
    }

    addChild(parser: IParser) {
        this._childParsers.push(parser);
    }

    get children(): IParser[] {
        return this._childParsers;
    }

    get path(): string {
        return this._path;
    }

    get noOfEmptyLines(): number {
        return this._childParsers.reduce((acc, parser) => acc + parser.noOfEmptyLines, 0);
    }

    get noOfCommentedLines(): number {
        return this._childParsers.reduce((acc, parser) => acc + parser.noOfCommentedLines, 0);
    }

    get noOfLines(): number {
        return this._childParsers.reduce((acc, parser) => acc + parser.noOfLines, 0);
    }

    get noOfCodeLines(): number {
        return this._childParsers.reduce((acc, parser) => acc + parser.noOfCodeLines, 0);
    }

}