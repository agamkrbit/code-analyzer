import { File } from "../files/file";
import { BaseFileParser } from "../parsers/base-file-parser";
import { IParser } from "../parsers/parser";
import { ITemplate } from "./template";

/**
 * this is a base class for all the file template
 */
export abstract class BaseFileTemplate implements ITemplate {
    protected _parser: IParser;
    protected _file: File;

    constructor(parser: BaseFileParser) {
        this._file = parser.file;
        this._parser = parser;
    }

    abstract build(): string;
}