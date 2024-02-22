import { BaseFileTemplate } from "./base-file-template";
import { BLUE, GREEN, WHITE } from "./constants";

/**
 * this is concrete class for a template
 */
export class CommonFileTemplate extends BaseFileTemplate {
    build(): string {
        return (
`${GREEN}file: ${this._file.path} (${this._file.basename})
${BLUE}- no of code lines: ${WHITE}${this._parser.noOfCodeLines} 
${BLUE}- no of commented lines: ${WHITE}${this._parser.noOfCommentedLines} 
${BLUE}- no of empty lines: ${WHITE}${this._parser.noOfEmptyLines}
${BLUE}- total no of lines: ${WHITE}${this._parser.noOfLines} 
`
        );
    }
}