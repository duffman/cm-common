/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-19 10:34
 */

import { ActionErrorType } from "..";
import { IAction }         from "..";
import { IActionError }    from "./action-error.type";

export interface IActionResult<T = any> {
	success: boolean,
	data?: T,
	error?: IActionError

	setSuccess(value: boolean): IActionResult<T>;
	fail(message?: string, code?: number): IActionResult<T>;
	setMessage(value: string): IActionResult<T>;
	setData(data: any): IAction<T>;
	setError(error: IActionError): IActionResult<T>;
	newError(message: string, code?: number, errorData?: any): IActionResult<T>;
}
