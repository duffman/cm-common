/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-14 11:06
 */

import { ActionError }  from "..";
import { IAction }      from "..";
import { IActionError } from "..";

export class Action<T = any> implements IAction<T> {

	constructor(
		public success: boolean = false,
		public data?: T,
		public error?: IActionError ,
	) {
	}

	public setSuccess(value: boolean = true): IAction<T> {
		this.success = value;
		return this;
	}


	public fail(): IAction<T>{
		this.success = false;
		return this;
	}

	public setData(data: any): IAction<T> {
		this.data = data;
		return this;
	}

	public setError(message: string, error: any, code: number): IAction<T> {
		this.error = new ActionError(message, code);
		return this;
	}
}
