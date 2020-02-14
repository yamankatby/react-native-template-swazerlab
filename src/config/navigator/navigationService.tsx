import {  ActionCreators} from '@react-navigation/native';


import { RouteName } from './types';
import { debounce } from '../utilities';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
	_navigator = navigatorRef;
}

function getTopLevelNavigator() {
	return _navigator;
}

const navigate = debounce((routeName: RouteName, params?: NavigationParams) => {
	_navigator.dispatch(NavigationActions.navigate({
		routeName,
		params,
	}));
});
const replace = debounce((routeName: RouteName, params?: NavigationParams) => {
	_navigator.dispatch(StackActions.replace({
		routeName,
		params,
	}));
});
const setParams = debounce((key: string, params?: NavigationParams) => {
	_navigator.dispatch(NavigationActions.setParams({
		key,
		params,
	}));
});

const goBack = debounce(() => {
	_navigator.dispatch(NavigationActions.back());
});

const popToTop = debounce(() => {
	_navigator.dispatch(StackActions.popToTop({ immediate: true }));
});

const toggleDrawer = debounce(() => {
	_navigator.dispatch(DrawerActions.toggleDrawer());
});

const closeDrawer = debounce(() => {
	_navigator.dispatch(DrawerActions.closeDrawer());
});

export function getNavOptions(title: string, icon: IconName) {
	const propKey = Platform.OS === 'ios' ? 'tabBarIcon' : 'drawerIcon';
	const propValue = ({ tintColor }: { tintColor: string }) => (
		<Icon name={icon} tintColor={tintColor} />
	);

	return {
		title,
		[propKey]: propValue,
	};
}

export default {
	navigate,
	replace,
	setParams,
	goBack,
	popToTop,
	toggleDrawer,
	closeDrawer,
	setTopLevelNavigator,
	getTopLevelNavigator,
};
