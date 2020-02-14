import { AppAction, AppResultAction } from '../../../config/store/types';


export enum ActionTypes {
	login = 'AUTH__LOGIN',
	login_result = 'AUTH__LOGIN_RESULT',

	refresh_token = 'AUTH__REFRESH_TOKEN',
	refresh_token_result = 'AUTH__REFRESH_TOKEN_RESULT',

	send_reset_email = 'AUTH__SEND_RESET_EMAIL',
	send_reset_email_result = 'AUTH__SEND_RESET_EMAIL_RESULT',

	reset_password = 'AUTH__RESET_PASSWORD',
	reset_password_result = 'AUTH__RESET_PASSWORD_RESULT',

	update_password = 'AUTH__UPDATE_PASSWORD',
	update_password_result = 'AUTH__UPDATE_PASSWORD_RESULT',

	change_email = 'AUTH__CHANGE_EMAIL',
	change_password = 'AUTH__CHANGE_PASSWORD',
	change_reset_code = 'AUTH__CHANGE_RESET_CODE',
	change_old_password = 'AUTH__CHANGE_OLD_PASSWORD',

	clear_data = 'Auth__CLEAR_DATA',

	logout = 'AUTH__LOGOUT',
	logout_result = 'AUTH__LOGOUT_RESULT',
}

export interface LoginAction extends AppAction {
	type: ActionTypes.login,
	email: string,
	password: string,
}

export interface TokenResultAction extends AppResultAction {
	type: ActionTypes.login_result | ActionTypes.refresh_token_result,
	accessToken?: string,
	refreshToken?: string,
}

export interface SendEmailResultAction extends AppResultAction {
	type: ActionTypes.send_reset_email_result,
	code?: string,
}

export interface ChangeEmailAction extends AppAction {
	type: ActionTypes.change_email,
	email: string,
}

export interface ChangePasswordAction extends AppAction {
	type: ActionTypes.change_password | ActionTypes.change_old_password,
	password: string,
}

export interface ChangeResetCodeAction extends AppAction {
	type: ActionTypes.change_reset_code,
	resetCode: string,
}

export interface ClearDataAction extends AppAction {
	type: ActionTypes.clear_data,
	isSocialRegister: boolean,
}

export interface LogoutAction extends AppAction {
	type: ActionTypes.logout,
	force: boolean,
}

export type Action =
	& ChangeEmailAction
	& ChangePasswordAction
	& ChangeResetCodeAction
	& LoginAction
	& TokenResultAction
	& LogoutAction
	& AppResultAction
	& AppAction;

export interface State {
	isLoggedIn: boolean,
	accessToken?: string,
	refreshToken?: string,

	email: string,
	password: string,
	oldPassword: string,

	isResettingPassword: boolean,
	resetCode: string,
}
