import { AppStateStatus } from 'react-native';
import { AlertType } from '../../../components/Alert/DropdownAlert';
import {
	ActionTypes,
	AlertAction,
	AppStateAction,
	FetchUserLocationAction,
	FetchUserLocationResultAction,
	LocationStatusAction,
	NavigateAction,
	NetworkStatusAction,
	PermissionAccess,
	PhysicalLocation,
	ProgressAction,
} from './types';
import { AppAction } from '../../../config/store/types';
import language from '../../../assets/language';
import { RouteName } from '../../../config/navigator';
import navigationService from '../../../config/navigator/navigationService';

export const showAlert = (type: AlertType, title: string, message?: string, duration?: number): AlertAction => ({
	type: ActionTypes.show_alert,
	alert: {
		type,
		title,
		message,
		duration,
	},
});
export const showConnectionAlert = (connectionLost: boolean = false): AlertAction => ({
	type: ActionTypes.show_alert,
	alert: {
		type: 'noConnection',
		title: language.titleNoConnection,
		message: connectionLost ? language.textNoConnection1 : language.textNoConnection2,
	},
});
export const clearAlert = (): AppAction => ({
	type: ActionTypes.clear_alert,
});

export const showProgress = (message?: string): ProgressAction => ({
	type: ActionTypes.show_progress,
	message,
});
export const hideProgress = (): AppAction => ({
	type: ActionTypes.hide_progress,
});

export const updateNetworkStatus = (isConnected: boolean): NetworkStatusAction => ({
	type: ActionTypes.update_network_status,
	isConnected,
});

export const updateAppState = (appState: AppStateStatus): AppStateAction => ({
	type: ActionTypes.update_app_state,
	appState,
});

export const navigate = (routeName: RouteName, params?: any): NavigateAction => {
	navigationService.navigate(routeName, params);
	return {
		type: ActionTypes.navigate,
		routeName,
		params,
	};
};
export const replace = (routeName: RouteName, params?: any): NavigateAction => {
	navigationService.replace(routeName, params);
	return {
		type: ActionTypes.replace,
		routeName,
		params,
	};
};
export const goBack = (): AppAction => {
	navigationService.goBack();
	return {
		type: ActionTypes.go_back,
	};
};
export const popToTop = (): AppAction => {
	navigationService.popToTop();
	return {
		type: ActionTypes.pop_to_top,
	};
};

export const updateLocationStatus = (locationAccess?: PermissionAccess, locationEnabled?: boolean): LocationStatusAction => ({
	type: ActionTypes.update_location_status,
	locationAccess,
	locationEnabled,
});
export const fetchUserLocation = (silent: boolean = true, openSettingsIfNecessary: boolean = false): FetchUserLocationAction => ({
	type: ActionTypes.fetch_user_location,
	highAccuracy: false,
	silent,
	openSettingsIfNecessary,
});
export const fetchUserLocationResult = (hasError: boolean, location?: PhysicalLocation, timestamp?: number): FetchUserLocationResultAction => ({
	type: ActionTypes.fetch_user_location_result,
	hasError,
	location,
	timestamp,
});
