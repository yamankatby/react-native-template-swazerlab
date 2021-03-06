import { Reducer } from 'redux';
import { Action, ActionTypes, State } from './types';

const initialState: State = {
	isLoggedIn: false,
	accessToken: '',
	refreshToken: '',
	provider: undefined,

	name: '',
	email: '',
	password: '',
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
		case ActionTypes.register_result:
		case ActionTypes.login_result:
		case ActionTypes.external_login_result:
			if (action.hasError) return state;
			return {
				...state,
				isLoggedIn: true,
			};
		case ActionTypes.send_reset_password_email_result:
			return {
				...state,
			};
		case ActionTypes.log_out_result:
			if (action.hasError) return;
			return {
				...state,
				isLoggedIn: false,
			};
		case ActionTypes.auth_state_trigger:
			return {
				...state,
				refreshToken: action.refreshToken,
				provider: action.provider,
			};
		default:
			return state;
	}
};

export default auth;
