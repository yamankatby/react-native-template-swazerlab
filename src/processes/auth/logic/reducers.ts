import { Reducer } from 'redux';
import { Action, ActionTypes, State } from './types';

const initialState: State = {
	isLoggedIn: false,
	accessToken: '',

	name: '',
	email: '',
	password: '',

	oldPassword: '',
	isResettingPassword: false,
	resetCode: '',

	provider: undefined,
	providerToken: undefined,
};

const auth: Reducer<State, Action> = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.change_name:
			return {
				...state,
				name: action.name,
			};
		case ActionTypes.change_email:
			return {
				...state,
				email: action.email,
			};
		case ActionTypes.change_password:
			return {
				...state,
				password: action.password,
			};

		case ActionTypes.login_result:
		case ActionTypes.register_result:
			if (action.hasError) return state;
			return {
				...state,
				isLoggedIn: true,
				accessToken: action.accessToken!,
			};

		case ActionTypes.change_old_password:
			return {
				...state,
				oldPassword: action.oldPassword,
			};
		case ActionTypes.change_is_resetting_password:
			return {
				...state,
				isResettingPassword: action.isResettingPassword,
			};
		case ActionTypes.change_reset_code:
			return {
				...state,
				resetCode: action.resetCode,
			};
		default:
			return state;
	}
};

export default auth;
