import { readdirSync, statSync } from "fs";
import { parseFilePath } from "../file-helper";
import { BaseFileParser } from "./base-file-parser";
import { FileParserFactory } from "./file-parser-factory";
import { FolderParser } from "./folder-parser";
import path from "path";
import { RED } from "../reports/constants";

/**
 * this function return the file parser as per the file extension
 */
export function parseFile(path: string): BaseFileParser {
	try {
		const file = parseFilePath(path);
		const parser = FileParserFactory.create(file);
		return parser;
	} catch (err) {
		console.log(`${RED}${err.message}`)
	}
}

/**
 * this function return the folder parser
 */
export function parseFolder(dirPath: string): FolderParser {
	const fileList = readdirSync(dirPath);
	const parser = new FolderParser(dirPath);
	for (const file of fileList) {
		const name = path.join(dirPath, file);
		if (statSync(name).isDirectory()) {
			const folderParser = parseFolder(name);
			if (folderParser) {
				parser.addChild(folderParser);
			}
		} else {
			const filerParser = parseFile(name);
			if (filerParser) {
				parser.addChild(filerParser);
			}
		}
	}
	return parser;
}