import { AppAction } from '../../../config/store/types';
import {
	ActionTypes,
	ChangeEmailAction,
	ChangeIsResettingPasswordAction,
	ChangeNameAction,
	ChangeOldPasswordAction,
	ChangePasswordAction,
	ChangeResetCodeAction,
	LoginResultAction,
	RegisterResultAction,
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

export const login = (): AppAction => ({
	type: ActionTypes.login,
});
export const loginResult = (hasError: boolean, accessToken?: string): LoginResultAction => ({
	type: ActionTypes.login_result,
	hasError,
	accessToken,
});

export const register = (): AppAction => ({
	type: ActionTypes.register,
});
export const registerResult = (hasError: boolean, accessToken?: string): RegisterResultAction => ({
	type: ActionTypes.register_result,
	hasError,
	accessToken,
});

export const changeOldPassword = (oldPassword: string): ChangeOldPasswordAction => ({
	type: ActionTypes.change_old_password,
	oldPassword,
});
export const changeIsResettingPassword = (isResettingPassword: boolean): ChangeIsResettingPasswordAction => ({
	type: ActionTypes.change_is_resetting_password,
	isResettingPassword,
});
export const changeResetCode = (resetCode: string): ChangeResetCodeAction => ({
	type: ActionTypes.change_reset_code,
	resetCode,
});
