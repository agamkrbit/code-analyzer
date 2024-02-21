import { ExtensionEnum } from "../extension.enum";
import { JSParser } from "./js-parser";
import { File } from "../file-helper";
import { BaseFileParser } from "./base-file-parser";

/**
 * this is factory class to create file parser base on the file
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
