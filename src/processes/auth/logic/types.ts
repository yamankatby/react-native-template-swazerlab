import { AppAction, AppResultAction } from '../../../config/store/types';

export enum ActionTypes {
	change_name = 'AUTH__CHANGE_NAME',
	change_email = 'AUTH__CHANGE_EMAIL',
	change_password = 'AUTH__CHANGE_PASSWORD',

	sign_in_anonymously = 'AUTH__SIGN_IN_ANONYMOUSLY',
	sign_in_anonymously_result = 'AUTH__SIGN_IN_ANONYMOUSLY_RESULT',

	register = 'AUTH__REGISTER',
	register_result = 'AUTH__REGISTER_RESULT',

	login = 'AUTH__LOGIN',
	login_result = 'AUTH__LOGIN_RESULT',

	external_login = 'AUTH__EXTERNAL_LOGIN',
	external_login_result = 'AUTH__EXTERNAL_LOGIN_RESULT',

	send_reset_password_email = 'AUTH__SEND_RESET_PASSWORD_EMAIL',
	send_reset_password_email_result = 'AUTH__SEND_RESET_PASSWORD_EMAIL_RESULT',

	auth_state_trigger = 'AUTH__AUTH_STATE_TRIGGER',
}

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

export interface AuthStateTriggerAction extends AppAction {
	type: ActionTypes.auth_state_trigger;
	refreshToken: string;
	provider: Provider;
}

export type Action =
	& AppAction
	& AppResultAction
	& ChangeNameAction
	& ChangeEmailAction
	& ChangePasswordAction
	& AuthStateTriggerAction;

export type Provider = 'firebase' | 'google' | 'facebook' | 'twitter';

export interface State {
	isLoggedIn: boolean;
	accessToken: string;
	refreshToken: string;
	provider?: Provider;

	name: string;
	email: string;
	password: string;
}
