/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-21 12:17
 */

import { ActionError }     from "..";
import { IActionError }    from "..";

export class ActionResult<T = any> {
	data?: T;
	error?: IActionError;

	constructor(
		public success: boolean,
		public message?: string
	) {
	}

	public fail(errMessage?: string): ActionResult<T> {
		this.message = errMessage;
		this.success = false;
		return this;
	}

	public setData(data: any): ActionResult<T> {
		this.data = data;
		return this;
	}

	public setError(error: IActionError): ActionResult<T> {
		this.error = error;
		return this;
	}

	public newError(message: string, code?: number, errorData?: any): ActionResult<T> {
		this.error = new ActionError(
			message,
			code,
			errorData
		);

		return this;
	}

	public setMessage(value: string): ActionResult<T> {
		this.message = value;
		return this;
	}

	public setSuccess(value: boolean = true): ActionResult<T> {
		this.success = value;
		return this;
	}
}
