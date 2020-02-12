import { Action, ActionTypes, State } from './types';
import language from '../../../assets/language';

const initialState: State = {
	alert: {
		visible: false,
		type: undefined,
		title: '',
		message: '',
		duration: undefined,
	},

	progress: {
		visible: false,
		message: '',
	},

	isConnected: undefined,
	hasAlertedUserInThisSession: false, // Determines whether we have alerted the user about the lack of internet connection in this session.

	appState: 'active',

	locationEnabled: undefined,
	locationAccess: 'undetermined',
	fetchingLocation: false,
	userLocation: undefined,
};

export default (state: State = initialState, action: Action): State => {
	switch (action.type) {
		case ActionTypes.show_alert:
			return {
				...state,
				alert: { visible: true, ...action.alert },
			};
		case ActionTypes.clear_alert:
			return {
				...state,
				alert: initialState.alert,
			};

		case ActionTypes.show_progress:
			return {
				...state,
				progress: { visible: true, message: action.message },
			};
		case ActionTypes.hide_progress:
			return {
				...state,
				progress: initialState.progress,
			};

		case ActionTypes.update_network_status:
			const { isConnected } = action;

			if (!isConnected && !state.hasAlertedUserInThisSession) {
				return {
					...state,
					isConnected,
					hasAlertedUserInThisSession: true,

					alert: {
						visible: true,
						type: 'noConnection',
						title: language.titleNoConnection,
						message: language.textNoConnection1,
						duration: 3000,
					},
				};
			}
			return {
				...state,
				isConnected,
			};

		case ActionTypes.update_app_state:
			return {
				...state,
				appState: action.appState,
			};

		case ActionTypes.update_location_status: {
			const { locationAccess, locationEnabled } = action;
			const reVal = { ...state };
			if (locationAccess) reVal.locationAccess = locationAccess || 'undetermined';
			if (locationEnabled) reVal.locationEnabled = locationEnabled || undefined;
			return reVal;
		}

		case ActionTypes.fetch_user_location:
			return {
				...state,
				fetchingLocation: true,
			};
		case ActionTypes.fetch_user_location_result: {
			if (action.hasError) return { ...state, fetchingLocation: false };

			const { location } = action;
			const reVal = { ...state, fetchingLocation: false };

			if (location && location.latitude && location.longitude) {
				let delta = 0.006;
				if (state.userLocation && state.userLocation.longitudeDelta === 0.006) {
					delta = 0.005;
				}

				reVal.userLocation = {
					...location,
					latitudeDelta: delta,
					longitudeDelta: delta,
				};
			}
			return reVal;
		}

		default:
			return state;
	}
};
