/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-13 07:51
 */

import { CmObjType } from "../types/types";

/**
 * Use the stringifyer to compare object values
 * @param var1
 * @param var2
 * @returns {boolean}
 */
export function equal(var1: any, var2: any) {
	return JSON.stringify(var1) === JSON.stringify(var2);
}

export class VarUtils {
	public static isNumeric(value: any): boolean {
		return !isNaN(+value);
	}

	public static typeOf(obj: any, varType: CmObjType) {
		return typeof obj === varType;
	}

	public static isStr(obj: any) {
		return VarUtils.typeOf(obj, CmObjType.string);
	}

	public  static
}
