/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>

 */

import { IActionError } from "..";

export interface IAction<T = any> {
	message?: string;
	success: boolean,
	data?: any,
	error?: IActionError

	setSuccess(value: boolean): IAction<T>;
	fail(): IAction<T>;
	setData(data: any): IAction<T>;
	setError(message: string, error: any, code: number): IAction<T>;
}
