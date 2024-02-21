import { ExtensionEnum } from "../extension.enum";
import { CommonFileTemplate } from "./common-file-template";
import { BaseFileParser } from "../parsers/base-file-parser";

/**
 * this is a factory class to return file template based on the parser
 */
export class FileTemplateFactory {
    static create(parser: BaseFileParser) {
        switch(parser.file.extension) {
            case ExtensionEnum.JS:
                return new CommonFileTemplate(parser);
            default:
                throw new Error(`Currently extension ${parser.file.extension} is not supported!`)
        }
    }
}