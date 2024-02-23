import { BaseFileParser } from "./base-file-parser";

/**
 * this is concrete implementation of the JS file parser
 */
export class JSParser extends BaseFileParser {
    getSingleLineCommentIdentifiers(): string[] {
        return ['//']
    }

    getMultiLineCommentIdentifiers(): string[][] {
        return [['/*' , '*/']]
    }

}