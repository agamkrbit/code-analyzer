import { File } from '../file-helper'
import { BaseFileParser } from './base-file-parser';
import { FileParserFactory } from './file-parser-factory';
import { JS_TEST_FILE_PATH } from '../test-helper';

describe('FileParserFactory', () => {
    describe('test for JS', () => {
        let file;
        let parser: BaseFileParser

        beforeEach(async () => {
            file = new File(JS_TEST_FILE_PATH)
            parser = FileParserFactory.create(file);
        })

        it('file should have values', () => {
            expect(file.basename).toBeDefined();
            expect(file.extension).toBeDefined();
            expect(file.path).toBeDefined();
            expect(file.fileStr).toBeDefined();
        })

        it('should return correct value', () => {
            expect(parser.noOfCommentedLines).toEqual(1);
            expect(parser.noOfEmptyLines).toEqual(4);
            expect(parser.noOfLines).toEqual(9);
            expect(parser.noOfCodeLines).toEqual(4);
        })
    })
})