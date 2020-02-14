import { CommonActions, DrawerActions, NavigationContainerRef, StackActions } from '@react-navigation/native';
import { RouteName } from './';
import { debounce } from '../utilities';

let _navigator: NavigationContainerRef;

const setTopLevelNavigator = (navigatorRef: NavigationContainerRef) => {
	_navigator = navigatorRef;
};
const getTopLevelNavigator = () => {
	return _navigator;
};

const navigate = debounce((routeName: RouteName, params?: object) => {
	if (!_navigator) return;
	_navigator.dispatch(CommonActions.navigate({
		name: routeName,
		params,
	}));
});
const goBack = debounce(() => {
	if (!_navigator) return;
	_navigator.dispatch(CommonActions.goBack());
});
const setParams = debounce((params: object) => {
	if (!_navigator) return;
	_navigator.dispatch(CommonActions.setParams(params));
});

const replace = debounce((routeName: RouteName, params?: object) => {
	if (!_navigator) return;
	_navigator.dispatch(StackActions.replace(routeName, params));
});
const popToTop = debounce(() => {
	if (!_navigator) return;
	_navigator.dispatch(StackActions.popToTop());
});

const toggleDrawer = debounce(() => {
	if (!_navigator) return;
	_navigator.dispatch(DrawerActions.toggleDrawer());
});
const closeDrawer = debounce(() => {
	if (!_navigator) return;
	_navigator.dispatch(DrawerActions.closeDrawer());
});

export default {
	setTopLevelNavigator,
	getTopLevelNavigator,
	navigate,
	goBack,
	setParams,
	replace,
	popToTop,
	toggleDrawer,
	closeDrawer,
};
