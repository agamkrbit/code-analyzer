import { FolderParser } from "../parsers/folder-parser";
import { BLUE, GREEN, WHITE } from "./constants";
import { ITemplate } from "./template";

/**
 * this is template class for folder
 */
export class FolderTemplate implements ITemplate {
    private _parser: FolderParser;

    constructor(folderParser: FolderParser) {
        this._parser = folderParser
    }

    build(): string {
        return (
`${GREEN}folder: ${this._parser.path}
${BLUE}- no of code lines: ${WHITE}${this._parser.noOfCodeLines} 
${BLUE}- no of commented lines: ${WHITE}${this._parser.noOfCommentedLines} 
${BLUE}- no of empty lines: ${WHITE}${this._parser.noOfEmptyLines}
${BLUE}- total no of lines: ${WHITE}${this._parser.noOfLines} 
`
        );
    }
}