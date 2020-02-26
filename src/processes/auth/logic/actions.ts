import { AppAction, AppResultAction } from '../../../config/store/types';
import {
	ActionTypes,
	AuthStateTriggerAction,
	ChangeEmailAction,
	ChangeNameAction,
	ChangePasswordAction,
	Provider,
} from './types';

export const changeName = (name: string): ChangeNameAction => ({
	type: ActionTypes.change_name,
	name,
});
export const changeEmail = (email: string): ChangeEmailAction => ({
	type: ActionTypes.change_email,
	email,
});
export const changePassword = (password: string): ChangePasswordAction => ({
	type: ActionTypes.change_password,
	password,
});

export const signInAnonymously = (): AppAction => ({
	type: ActionTypes.sign_in_anonymously,
});
export const signInAnonymouslyResult = (hasError: boolean): AppResultAction => ({
	type: ActionTypes.sign_in_anonymously_result,
	hasError,
});

export const register = (): AppAction => ({
	type: ActionTypes.register,
});
export const registerResult = (hasError: boolean): AppResultAction => ({
	type: ActionTypes.register_result,
	hasError,
});

export const login = (): AppAction => ({
	type: ActionTypes.login,
});
export const loginResult = (hasError: boolean): AppResultAction => ({
	type: ActionTypes.login_result,
	hasError,
});

export const externalLogin = (): AppAction => ({
	type: ActionTypes.external_login,
});
export const externalLoginResult = (hasError: boolean): AppResultAction => ({
	type: ActionTypes.external_login_result,
	hasError,
});

export const sendResetPasswordEmail = (): AppAction => ({
	type: ActionTypes.send_reset_password_email,
});
export const sendResetPasswordEmailResult = (hasError: boolean): AppResultAction => ({
	type: ActionTypes.send_reset_password_email_result,
	hasError,
});

export const authStateTrigger = (refreshToken: string, provider: Provider): AuthStateTriggerAction => ({
	type: ActionTypes.auth_state_trigger,
	refreshToken,
	provider,
});
