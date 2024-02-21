/**
 * this is the interface for all kind of parser
 */
export interface  IParser  {
    get noOfEmptyLines(): number;
    get noOfCommentedLines(): number;
    get noOfLines(): number;
    get noOfCodeLines(): number;
}
