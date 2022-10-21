/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-13 06:06
 */

import { Str }      from "../utils";
import { ObjUtils } from "../utils";

const colors = require("ansi-colors");

const logSymbols = {
	info   : colors.blue('ℹ'),
	success: colors.green('✔'),
	warning: colors.yellow('⚠'),
	error  : colors.red('✖'),
};

/**
 * Simple CLI logger
 */
export class DLog {
	/**
	 * Outputs a blue info text
	 * @param {string} label
	 * @param dataArr
	 */
	public static info(label?: string, ...dataArr: any[]): void {
		DLog.logPrettySymbol(logSymbols.info, colors.blue, label, dataArr);
	}

	public static success(label?: string, ...dataArr: any[]): void {
		DLog.logPrettySymbol(logSymbols.success, colors.green, label, dataArr);
	}

	/**
	 * Outputs a yellow warning text
	 * @param {string} label
	 * @param dataArr
	 */
	public static warn(label?: string, ...dataArr: any[]): void {
		DLog.logPrettySymbol(logSymbols.warning, colors.yellow, label, dataArr);
	}

	public static error(label?: string, ...dataArr: any[]): void {
		DLog.logPrettySymbol(logSymbols.error, colors.red, label, dataArr);
	}

	public static fatal(label?: string, ...dataArr: any[]): void {
		DLog.logPrettySymbol(logSymbols.error, colors.bgRed.bold.white, label, dataArr);
	}

	public static debug(label?: string, ...dataArr: any[]): void {
		if (!process.env.DEBUG) return;
		DLog.logPretty(colors.cyan, label, dataArr);
	}

	private static logPretty(color: (string) => string, label: string, dataArr: any[]): void {
		DLog.logPrettySymbol(null, color, label, dataArr);
	}

	private static logPrettySymbol(symbol: any, color: (string) => string, label: string, dataArr: any[]): void {
		let outputArr = new Array<string | object>();

		if (symbol) {
			outputArr.push({ symbol: symbol });
		}

		for (let data of dataArr) {
			if (ObjUtils.isSimpleType(data)) {
				outputArr.push(data as string);
			}
			else if (typeof data === "object") {
				outputArr.push(
					{ pretty: ObjUtils.prettyObject(data) }
				);
			}
			else {
				outputArr.push(JSON.stringify(data));
			}
		}

		let tmpArr = [ label ];
		for (const out of outputArr) {
			if (Str.isString(out)) {
				tmpArr.push(out as string)
			}
			else {
				if (tmpArr.length) {

					if (symbol) {
						console.log(symbol, color(tmpArr.join(" ")));
					}
					else {
						console.log(color(tmpArr.join(" ")));
					}

					tmpArr.length = 0;
				}
				console.log(color(( out as any ).pretty))
			}
		}

		if (tmpArr.length) {
			console.log(color(tmpArr[ 0 ]));
		}
	}
}
