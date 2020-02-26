import { AppAction, AppResultAction } from '../../../config/store/types';
import { RouteName } from '../../../config/navigator';

export enum ActionTypes {
	navigate = 'SERVICES_NAVIGATION__NAVIGATE',
	replace = 'SERVICES_NAVIGATION__REPLACE',
	go_back = 'SERVICES_NAVIGATION__GO_BACK',
	pop_to_top = 'SERVICES_NAVIGATION__POP_TO_TOP',
	set_params = 'SERVICES_NAVIGATION__SET_PARAMS',
	toggle_drawer = 'SERVICES_NAVIGATION__TOGGLE_DRAWER',
	close_drawer = 'SERVICES_NAVIGATION__CLOSE_DRAWER',
}

export interface NavigateAction extends AppAction {
	type: ActionTypes.navigate;
	routeName: RouteName;
	params?: object;
}

export interface ReplaceAction extends AppAction {
	type: ActionTypes.replace;
	routeName: RouteName;
	params: object;
}

export interface SetParamsAction extends AppAction {
	type: ActionTypes.set_params;
	params?: object;
}

export type Action =
	& AppAction
	& AppResultAction
	& NavigateAction
	& ReplaceAction
	& SetParamsAction;

export interface State {

}
