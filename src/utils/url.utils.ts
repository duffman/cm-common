/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-14 10:56
 */

export class UrlUtils {
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
