/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-18 22:40
 */

export class MiscUtils {
	public static updateLine(text: string): void {
		// @ts-ignore
		process.stdout.clearLine();
		// @ts-ignore
		process.stdout.cursorTo(0);
		process.stdout.write(text+ '\r');
	}
}
