/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-14 11:03
 */

export class JsonUtils {

}

export class JSonCast {
	public static toObject<T>(json: string): T {
		return JSON.parse(json);
	}

	public static toJson<T>(value: T): string {
		return JSON.stringify(value);
	}
}
