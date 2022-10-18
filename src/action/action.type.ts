/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>

 */

import { ActionError } from "./action-error";

export interface IAction<T = void> {
	success: boolean,
	data?: any,
	error?: ActionError

	setSuccess(value: boolean): IAction<T>;
	setData(data: any): IAction<T>;
	setError(message: string, error: any, code: number): IAction<T>;
}
