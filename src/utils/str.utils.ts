/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-18 22:57
 */
import { CmObjType } from "../types/types";

export class StrUtils {
	/**
	 * Checks for unset input string
	 * @param input
	 * @returns {boolean}
	 */
	public static isEmpty(input: any): boolean {
		return !input || (StrUtils.isStr(input) && !(input as string).trim().length);
	}

	public static isStr(value: any): boolean {
		return (typeof value === CmObjType.string);
	}
}
