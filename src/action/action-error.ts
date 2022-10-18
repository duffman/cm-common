/**
 * Copyright (c) 2021 Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

export class ActionError<T = any> extends Error implements Error {
	public name: string;
	public stack?: string;
	public error: Error | any = null;

	constructor(public message: string, public errorCode?: number, public data?: T) {
		super();
	}

	public setError(e: Error): void {
		this.error = e;
	}

	public toString(): string {
		let entry = `${this.message}\t\t${this.errorCode.toString()}`;

		if (this.data) {
			entry = entry.concat(entry, `\t\t${JSON.stringify(this.data)}`);
		}

		if (this.error) {
			entry = entry.concat(entry, `\t\t${JSON.stringify(this.error)}`);
		}

		return entry;
	}

	public static New(message: string, errorCode: number = -1, data: any = null): ActionError {
		return new ActionError(message, errorCode, data);
	}
}
