import { BaseFileTemplate } from './base-file-template';
import { JS_TEST_FILE_PATH } from '../test-helper';
import { FileParserFactory } from '../parsers/file-parser-factory';
import { FileTemplateFactory } from './file-template-factory';
import { toEqualIgnoringWhitespace } from 'jest-extended';
import { BLUE, GREEN, WHITE } from './constants';
import { File } from '../files/file';

expect.extend({toEqualIgnoringWhitespace})

describe('FileTemplateFactory', () => {
    describe('test of JS', () => {
        let template: BaseFileTemplate;

        beforeEach(async () => {
            const file = new File(JS_TEST_FILE_PATH);
            const parser = FileParserFactory.create(file);
            template = FileTemplateFactory.create(parser);
        })

        it('should return template', async () => {
            expect(await template.build()).toEqualIgnoringWhitespace(
`${GREEN}file: /Users/agamkumar/practice/code-parser/test/test-js.js (test-js.js)
${BLUE}- no of code lines: ${WHITE}4
${BLUE}- no of commented lines: ${WHITE}1
${BLUE}- no of multi line comment: ${WHITE}2
${BLUE}- no of empty lines: ${WHITE}5
${BLUE}- total no of lines: ${WHITE}14
                `
            )
        })
    })
})