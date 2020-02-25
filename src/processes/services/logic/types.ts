import { AppAction, AppResultAction } from '../../../config/store/types';
import { RouteName } from '../../../config/navigator';

export enum ActionTypes {
	navigate = 'SERVICES__NAVIGATE',
	replace = 'SERVICES__REPLACE',
	go_back = 'SERVICES__GO_BACK',
	pop_to_top = 'SERVICES__POP_TO_TOP',
	set_params = 'SERVICES__SET_PARAMS',
	toggle_drawer = 'SERVICES__TOGGLE_DRAWER',
	close_drawer = 'SERVICES__CLOSE_DRAWER',
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
