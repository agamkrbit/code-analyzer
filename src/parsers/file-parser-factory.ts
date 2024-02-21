import { ExtensionEnum } from "../extension.enum";
import { JSParser } from "./js-parser";
import { BaseFileParser } from "./base-file-parser";
import { File } from "../files/file";

/**
 * this is factory class to create file parser based on the file
 */
export class FileParserFactory {
    static create(file: File): BaseFileParser {
        let parser: BaseFileParser;
        switch(file.extension) {
            case ExtensionEnum.JS:
                parser =  new JSParser(file);
                break;
            default:
                throw new Error(`Currently extension ${file.extension} is not supported!`)
        }
        return parser;
    }
}
