/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-14 11:06
 */

import { ActionError } from "./action-error";
import { IAction }     from "../types/action.type";

export class ActionResult<T = void> implements IAction<T> {
	message?: string;

	constructor(
		public success: boolean = false,
		public data?: T,
		public error?: ActionError,
	) {
	}

	/**
	 * Initialize action result object
	 * @param {boolean} value
	 * @returns {ActionResult<T>}
	 * @constructor
	 */
	public static new<T>(value?: boolean): ActionResult<T> {
		return new ActionResult<T>(value);
	}

	public setSuccess(value: boolean = true): ActionResult<T> {
		this.success = value;
		return this;
	}

	public fail(message?: string, code?: number): ActionResult<T> {
		this.success = false;

		if (message || code) {
			this.setError(message, code);
		}

		return this;
	}

	public setMessage(value: string): ActionResult<T> {
		this.message = value;
		return this;
	}

	public setData(data: T): ActionResult<T> {
		this.data = data;
		return this;
	}

	public setError(message: string, code: number = -1): ActionResult<T> {
		(this.error as any) = {
			message: message,
			code: code
		}

		return this;
	}
}

