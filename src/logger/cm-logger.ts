/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-13 06:06
 */
import { VarUtils } from "../utils";
import { ObjUtils } from "../utils";

const colors = require("ansi-colors");

export class CmLogger {
	/**
	 * Format object
	 * @param obj
	 * @param {boolean} printObj
	 * @returns {string | void}
	 */
	public static info(label: string, ...dataArr: any[]): void {
		CmLogger.print(colors.yellow, label, dataArr);
	}


	private static print(color: (string) => string, label: string, dataArr: any[]): void {
		let outputArr = new Array<string | object>();

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

		let tmpArr = [label];
		for (const out of outputArr) {
			if (VarUtils.isStr(out)) {
				tmpArr.push(out as string)
			}
			else {
				if (tmpArr.length) {
					console.log(color(tmpArr.join(" ")));
					tmpArr.length = 0;
				}
				console.log(color(( out as any ).pretty))
			}
		}

		if (tmpArr.length) {
			console.log(color(tmpArr[0]));
		}
	}
}
