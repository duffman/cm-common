/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-13 06:23
 */
import { FORMAT_SPACES } from "../cm-common.const";

export class ObjUtils {
	public static isSimpleType(obj: any): boolean {
		return typeof obj in ["number", "string", "bigint", "boolean"];
	}

	public static prettyObject(obj: any): string {
		let result = "";

		result = JSON.stringify(obj, null, FORMAT_SPACES);

		return result;
	}
}
