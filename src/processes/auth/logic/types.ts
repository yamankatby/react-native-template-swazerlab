import { AppAction, AppResultAction } from '../../../config/store/types';

export enum ActionTypes {
	change_name = 'AUTH__CHANGE_NAME',
	change_email = 'AUTH__CHANGE_EMAIL',
	change_password = 'AUTH__CHANGE_PASSWORD',

	login = 'AUTH__LOGIN',
	login_result = 'AUTH__LOGIN_RESULT',

	register = 'AUTH__REGISTER',
	register_result = 'AUTH__REGISTER_RESULT',

	change_old_password = 'AUTH__CHANGE_OLD_PASSWORD',
	change_is_resetting_password = 'AUTH__CHANGE_IS_RESETTING_PASSWORD',
	change_reset_code = 'AUTH__CHANGE_RESET_CODE',
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

export interface LoginResultAction extends AppResultAction {
	type: ActionTypes.login_result;
	accessToken?: string;
}

export interface RegisterResultAction extends AppResultAction {
	type: ActionTypes.register_result;
	accessToken?: string;
}

export interface ChangeOldPasswordAction extends AppAction {
	type: ActionTypes.change_old_password;
	oldPassword: string;
}

export interface ChangeIsResettingPasswordAction extends AppAction {
	type: ActionTypes.change_is_resetting_password;
	isResettingPassword: boolean;
}

export interface ChangeResetCodeAction extends AppAction {
	type: ActionTypes.change_reset_code;
	resetCode: string;
}

export type ExternalProvider = 'google' | 'facebook' | 'twitter' | 'linkedIn';

export type Action =
	& AppAction
	& AppResultAction
	& ChangeNameAction
	& ChangeEmailAction
	& ChangePasswordAction
	& LoginResultAction
	& RegisterResultAction
	& ChangeOldPasswordAction
	& ChangeIsResettingPasswordAction
	& ChangeResetCodeAction;

export interface State {
	isLoggedIn: boolean;
	accessToken: string;

	name: string;
	email: string;
	password: string;

	oldPassword: string;
	isResettingPassword: boolean;
	resetCode: string;

	provider?: ExternalProvider;
	providerToken?: string;
}
