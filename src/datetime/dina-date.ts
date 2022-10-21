/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-13 07:55
 */

function padTo2Digits(num: number) {
	return num.toString().padStart(2, '0');
}

export class DinaDate extends Date {
	private dateObj: Date;

	constructor() {
		super();
		this.dateObj = new Date();
	}

	public toFormatted(date?: DinaDate): string {
		return (
			[
				date.getFullYear(),
				padTo2Digits(date.getMonth() + 1),
				padTo2Digits(date.getDate()),
			].join('-') +
			' ' +
			[
				padTo2Digits(date.getHours()),
				padTo2Digits(date.getMinutes()),
				padTo2Digits(date.getSeconds()),
			].join(':')
		);
	}

	public static now(): number {
		return Date.now();
	}
}
