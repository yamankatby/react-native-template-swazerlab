import { AppAction, AppResultAction } from '../../../config/store/types';

export enum ActionTypes {
	change_name = 'AUTH__CHANGE_NAME',
	change_email = 'AUTH__CHANGE_EMAIL',
	change_password = 'AUTH__CHANGE_PASSWORD',

	register = 'AUTH__REGISTER',
	register_result = 'AUTH__REGISTER_RESULT',

	login = 'AUTH__LOGIN',
	login_result = 'AUTH__LOGIN_RESULT',

	external_login = 'AUTH__EXTERNAL_LOGIN',
	external_login_result = 'AUTH__EXTERNAL_LOGIN_RESULT',

	send_reset_password_email = 'AUTH__SEND_RESET_PASSWORD_EMAIL',
	send_reset_password_email_result = 'AUTH__SEND_RESET_PASSWORD_EMAIL_RESULT',
}

export type Provider = 'google' | 'facebook' | 'twitter';

export interface ChangeNameAction extends AppAction {
	type: ActionTypes.change_name;
	name: string;
}

export interface ChangeEmailAction extends AppAction {
	type: ActionTypes.change_email;
	email: string;
}

export interface ChangePasswordAction extends AppAction {
	type: ActionTypes.change_password;
	password: string;
}

export type Action =
	& AppAction
	& AppResultAction
	& ChangeNameAction
	& ChangeEmailAction
	& ChangePasswordAction;

export interface State {
	isLoggedIn: boolean;
	accessToken: string;
	provider?: Provider;

	name: string;
	email: string;
	password: string;
}
