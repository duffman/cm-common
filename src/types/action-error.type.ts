/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-19 05:33
 */

export enum ActionErrorType {
	InternalError = "_INTERNAL_ERROR_",
	IOError       = "_IO_ERROR_",
	ParserError   = "_PARSER_ERROR_",
	Unknown       = "_UNKNOWN_ERROR_"
}

export interface IActionError<T = any> {
	message?: string;
	errorCode?: number;
	data?: T;

	setError(e: Error);
	toString(): string;
}
