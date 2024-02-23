import { Command } from "commander";
import { FileTemplateFactory } from "./reports/file-template-factory";
import { RED } from "./reports/constants";
import { FolderParser } from "./parsers/folder-parser";
import { BaseFileParser } from "./parsers/base-file-parser";
import { FolderTemplate } from "./reports/folder-template";
import { parseFile, parseFolder } from "./parsers/helper";
import { isFileExists, isPathExists } from "./files/helper";

function printAllFileReport(folderParser: FolderParser) {
	for (const child of folderParser.children) {
		if (child instanceof BaseFileParser) {
			const template = FileTemplateFactory.create(child);
			console.log(template.build());
		} else {
			printAllFileReport(child as FolderParser);
		}
	}
}

// create a program
const program = new Command();
program
	.name('analyze code')
	.description('CLI to analyze code')

// create a command 
program.command('analyze')
	.description('analyze the code in the provided path')
	.argument('<string>', 'path of the file or folder')
	.action(async (str: string) => {
		const trimmedStr = str.trim();
		const path = trimmedStr.split(' ')[0] || '';

		if (isFileExists(path)) {
			// in case of single file
			const fileParser = parseFile(path);
			if (fileParser) {
				const template = FileTemplateFactory.create(fileParser);
				console.log(template.build());
			}
		} else if (isPathExists(path)) {
			// in case of folder
			const folderParser = parseFolder(path);
			if (folderParser) {
				printAllFileReport(folderParser);
				const template = new FolderTemplate(folderParser);
				console.log(template.build());
			}
		} else {
			console.log(`${RED}Invalid Path!`)
		}
	});

program.parse();