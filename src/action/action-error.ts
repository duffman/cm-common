/**
 * Copyright (c) 2021 Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { ActionErrorType } from "../types/action-error.type";
import { IActionError }    from "../types/action-error.type";

export class ActionError<T = any> extends Error implements Error, IActionError {
	public name: string;
	public stack?: string;
	public error: Error | any = null;
	public errorType?: ActionErrorType;

	constructor(public message: string = ActionErrorType.Unknown, public errorCode?: number, public data?: T) {
		super();
	}

	public static internalError(): ActionError {
		return new ActionError().setType(ActionErrorType.InternalError);
	}

	public setType(errorType: ActionErrorType): ActionError {
		this.errorType = errorType;
		return this;
	}

	public throw(): void {
		throw this;
	}

	public toJsonStr(): string {
		return JSON.stringify(
			{
				errorType: this.errorType,
				message  : this.message,
				code     : this.errorCode,
				error    : this.error
			}
		)
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
