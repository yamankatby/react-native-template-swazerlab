import { Action, ActionTypes, State } from './types';

const INITIAL_STATE: State = {
	isLoggedIn: false,
	accessToken: undefined,
	refreshToken: undefined,

	email: '',
	password: '',
	oldPassword: '',

	isResettingPassword: false,
	resetCode: '',
};

export default function (state: State = INITIAL_STATE, action: Action): State {
	switch (action.type) {
		case ActionTypes.clear_data:
			return {
				...state,

				password: '',
				oldPassword: '',
				resetCode: '',
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
		case ActionTypes.change_reset_code:
			return {
				...state,
				resetCode: action.resetCode,
			};
		case ActionTypes.change_old_password:
			return {
				...state,
				oldPassword: action.password,
			};

		case ActionTypes.login_result:
			if (action.hasError) {
				return {
					...state,
					isLoggedIn: false,
					password: '',
				};
			}
			return {
				...state,
				email: '',
				password: '',
				isLoggedIn: true,
				accessToken: action.accessToken || undefined,
				refreshToken: action.refreshToken || undefined,
			};

		case ActionTypes.refresh_token_result:
			if (action.hasError) {
				return state;
			}
			return {
				...state,
				email: '',
				password: '',
				isLoggedIn: true,
				accessToken: action.accessToken || undefined,
				refreshToken: action.refreshToken || undefined,
			};

		case ActionTypes.send_reset_email_result:
			if (action.hasError) {
				return state;
			}
			return {
				...state,
				isResettingPassword: true,
			};

		case ActionTypes.reset_password_result:
			if (action.hasError) {
				return {
					...state,
					password: '',
				};
			}
			return {
				...state,
				isResettingPassword: false,

				password: '',
				resetCode: '',
			};

		case ActionTypes.update_password_result:
			if (action.hasError) {
				return {
					...state,
					password: '',
				};
			}
			return {
				...state,

				oldPassword: '',
				password: '',
			};

		case ActionTypes.logout_result:
			return {
				...state,
				isLoggedIn: false,
				accessToken: '',

				email: '',
				password: '',
			};

		default:
			return state;
	}
}
