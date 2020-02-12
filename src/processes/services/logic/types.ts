import { AppStateStatus } from 'react-native';
import { AppAction, AppResultAction } from '../../../config/store/types';
import { RouteName } from '../../../config/navigator/types';
import { AlertType } from '../../../components/Alert/DropdownAlert';

export enum ActionTypes {
	show_alert = 'GENERAL__SHOW_ALERT',
	clear_alert = 'GENERAL__CLEAR_ALERT',

	show_progress = 'GENERAL__SHOW_PROGRESS',
	hide_progress = 'GENERAL__HIDE_PROGRESS',

	update_network_status = 'GENERAL__UPDATE_NETWORK_STATE',
	update_app_state = 'GENERAL__UPDATE_APP_STATE',

	navigate = 'GENERAL__NAVIGATE',
	replace = 'GENERAL__REPLACE',
	go_back = 'GENERAL__GO_BACK',
	pop_to_top = 'GENERAL__POP_TO_TOP',

	update_location_status = 'GENERAL__UPDATE_LOCATION_STATUS',
	fetch_user_location = 'GENERAL__FETCH_USER_LOCATION',
	fetch_user_location_result = 'GENERAL__FETCH_USER_LOCATION_RESULT',
}

export interface AlertAction extends AppAction {
	type: ActionTypes.show_alert,
	alert: {
		type: AlertType,
		title: string,
		message?: string,
		duration?: number,
	},
}

export interface ProgressAction extends AppAction {
	type: ActionTypes.show_progress,
	message?: string,
}

export interface NetworkStatusAction extends AppAction {
	type: ActionTypes.update_network_status,
	isConnected: boolean,
}

export interface AppStateAction extends AppAction {
	type: ActionTypes.update_app_state,
	appState: AppStateStatus,
}

export interface NavigateAction extends AppAction {
	type: ActionTypes.navigate | ActionTypes.replace,
	routeName: RouteName,
	params?: { [key: string]: any },
}

export interface LocationStatusAction extends AppAction {
	type: ActionTypes.update_location_status,
	locationAccess?: PermissionAccess,
	locationEnabled?: boolean,
}

export interface FetchUserLocationAction extends AppAction {
	type: ActionTypes.fetch_user_location,
	highAccuracy: boolean,
	silent: boolean,
	openSettingsIfNecessary: boolean,
}

export interface FetchUserLocationResultAction extends AppResultAction {
	type: ActionTypes.fetch_user_location_result,
	location?: PhysicalLocation,
	timestamp?: number,
}

export type Action =
	& AlertAction
	& ProgressAction
	& NetworkStatusAction
	& AppStateAction
	& NavigateAction
	& LocationStatusAction
	& FetchUserLocationAction
	& FetchUserLocationResultAction
	& AppResultAction
	& AppAction;

export interface PhysicalLocation {
	latitude: number,
	longitude: number,
	latitudeDelta: number,
	longitudeDelta: number,
}

export type PermissionAccess = 'authorized' | 'denied' | 'restricted' | 'undetermined';

export interface State {
	// Alerts
	alert: {
		visible: boolean,
		type?: AlertType,
		title: string,
		message?: string,
		duration?: number,
	},

	// Progress
	progress: {
		visible: boolean,
		message?: string,
	},

	// Network
	isConnected?: boolean,
	hasAlertedUserInThisSession?: boolean,

	// App State
	appState?: AppStateStatus,

	// GPS Location
	locationEnabled?: boolean,
	locationAccess: PermissionAccess,
	fetchingLocation: boolean,
	userLocation?: PhysicalLocation,
}
