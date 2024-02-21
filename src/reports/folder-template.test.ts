import { TEST_FOLDER_PATH } from '../test-helper';
import { toEqualIgnoringWhitespace } from 'jest-extended';
import { BLUE, GREEN, WHITE } from './constants';
import { parseFolder } from '../parsers/helper';
import { FolderTemplate } from './folder-template';

expect.extend({toEqualIgnoringWhitespace})

describe('FolderTemplate', () => {
    let template: FolderTemplate;

    beforeEach(() => {
        const parser = parseFolder(TEST_FOLDER_PATH)
        template = new FolderTemplate(parser);
    })

    it('should return template', async () => {
        expect(await template.build()).toEqualIgnoringWhitespace(
`${GREEN}folder: /Users/agamkumar/practice/code-parser/test
${BLUE}- no of lines: ${WHITE}9
${BLUE}- no of code lines: ${WHITE}4
${BLUE}- no of commented lines: ${WHITE}1
${BLUE}- no of empty lines: ${WHITE}4
            `
        )
    })
})