/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-14 11:01
 */

export class TimeDateUtils {
	public static sleep(ms: number): Promise<any> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	/**
	 * Convert seconds to milliseconds
	 * @param {number} val
	 * @returns {number}
	 */
	public static secToMs(val: number): number {
		return val * 1000;
	}

	/**
	 * Convert milliseconds to seconds
	 * @param {number} val
	 * @returns {number}
	 */
	public static msToSec(val: number): number {
		return Math.floor(val / 1000);
	}

	/**
	 * Convert milliseconds to minutes and seconds
	 * @param {number} val
	 * @returns {number}
	 */
	public static msToMinSec(val: number): string {
		const minutes = Math.floor(val / 60000);
		const seconds = ( ( val % 60000 ) / 1000 ).toFixed(0);
		return minutes + ":" + ( Number(seconds) < 10 ? "0" : "" ) + seconds;
	}
}
