/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-14 11:01
 */

export class TimeDateUtils {
	public static sleep(ms: number): Promise<any> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}
