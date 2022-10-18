/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-14 08:22
 */

import { FileFindUp } from "./file-find-up";

export class FileUtils {
	public static findFileUpwards(filename: string,startPath: string = __dirname,): string
	{
		let result = startPath;
		const res = FileFindUp.findFile(startPath, filename);

		if (res.fileFound) {
			result = res.path;
		}

		return result;
	}
}
