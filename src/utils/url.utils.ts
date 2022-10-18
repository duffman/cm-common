/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-14 10:56
 */
import path         from "path";
import { StrUtils } from "./str.utils";

export class UrlUtils {

	public static ensureLeadingSlash(searchPath: string) {
		if (StrUtils.isEmpty(searchPath)) {
			return;
		}

		let pathSep = path.sep;
		if (searchPath.startsWith(pathSep) == false) {
			searchPath = pathSep + searchPath;
		}
		return searchPath;
	}

	/**
	 * Cross platform method that verifies that the given path ends
	 * with a path delimiter, NOTE that this method does no effort
	 * in verifying that your path string is correct.
	 * @param searchPath
	 * @returns {string}
	 */
	public static ensureTrailingSlash(searchPath: string) {
		if (StrUtils.isEmpty(searchPath)) {
			return;
		}

		const pathSep = path.sep;
		if (!searchPath.endsWith(pathSep)) {
			searchPath = searchPath + pathSep;
		}
		return searchPath;
	}


	/**
	 * Remove all trailing slashes
	 * @param {string} value
	 * @returns {string}
	 */
	public static stripTrailingSlashes(value: string): string {
		return value.replace(/\/+$/, '');
	}

	/**
	 * Remove all leading slashes
	 * @param {string} value
	 * @returns {string}
	 */
	public static stripLeadingSlashes(value: string): string {
		return value.replace(/^\/+/g, '');
	}

	public static stripTrailingAndLeadingSlashes(value: string): string {
		value = UrlUtils.stripLeadingSlashes(value);
		return UrlUtils.stripTrailingSlashes(value);
	}
}
