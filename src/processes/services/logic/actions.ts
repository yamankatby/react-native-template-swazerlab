import { RouteName } from '../../../config/navigator';
import { ActionTypes, NavigateAction, ReplaceAction, SetParamsAction } from './types';
import { AppAction } from '../../../config/store/types';
import navigationService from '../../../config/navigator/navigationService';

export const navigate = (routeName: RouteName, params?: object): NavigateAction => {
	navigationService.navigate(routeName, params);
	return ({
		type: ActionTypes.navigate,
		routeName,
		params,
	});
};
export const replace = (routeName: RouteName, params: object): ReplaceAction => {
	navigationService.replace(routeName, params);
	return ({
		type: ActionTypes.replace,
		routeName,
		params,
	});
};
export const goBack = (): AppAction => {
	navigationService.goBack();
	return ({
		type: ActionTypes.go_back,
	});
};
export const popToTop = (): AppAction => {
	navigationService.popToTop();
	return ({
		type: ActionTypes.pop_to_top,
	});
};
export const setParams = (params?: object): SetParamsAction => {
	navigationService.setParams();
	return ({
		type: ActionTypes.set_params,
		params,
	});
};
export const toggleDrawer = (): AppAction => {
	navigationService.toggleDrawer();
	return ({
		type: ActionTypes.toggle_drawer,
	});
};
export const closeDrawer = (): AppAction => {
	navigationService.closeDrawer();
	return ({
		type: ActionTypes.close_drawer,
	});
};
