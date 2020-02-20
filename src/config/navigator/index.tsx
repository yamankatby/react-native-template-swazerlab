import React from 'react';
import { Platform } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { usePalette, useTheme } from '../../assets/styles';
import navigationService from './navigationService';

import Login from '../../processes/auth/views/Login';
import Register from '../../processes/auth/views/Register';
import ResetPassword from '../../processes/auth/views/ResetPassword';
import AboutUs from '../../processes/extra/views/AboutUs';
import HelpCenter from '../../processes/extra/views/HelpCenter';
import More from '../../processes/extra/views/More';
import OnBoarding from '../../processes/extra/views/OnBoarding';
import TombRaider from '../../processes/extra/views/TombRaider';
import ChangePassword from '../../processes/profile/views/ChangePassword';
import EditProfile from '../../processes/profile/views/EditProfile';
import Profile from '../../processes/profile/views/Profile';
import SelectList from '../../processes/services/views/SelectList';
import Settings from '../../processes/settings/views/Settings';

export type RouteName =
	| 'Login'
	| 'Register'
	| 'ResetPassword'
	| 'AboutUs'
	| 'HelpCenter'
	| 'More'
	| 'OnBoarding'
	| 'TombRaider'
	| 'ChangePassword'
	| 'EditProfile'
	| 'Profile'
	| 'SelectList'
	| 'Settings';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ProfileStack = createStackNavigator();
const MoreStack = createStackNavigator();

const ProfileScreen = () => (
	<ProfileStack.Navigator>
		<ProfileStack.Screen name={'Profile'} component={Profile} />
	</ProfileStack.Navigator>
);
const MoreScreen = () => (
	<MoreStack.Navigator>
		<MoreStack.Screen name={'More'} component={More} />
	</MoreStack.Navigator>
);
const MainScreen = () =>
	Platform.OS === 'ios' ? (
		<BottomTab.Navigator>
			<BottomTab.Screen name={'More'} component={MoreScreen} />
		</BottomTab.Navigator>
	) : (
		<Drawer.Navigator>
			<Drawer.Screen name={'Profile'} component={ProfileScreen} />
			<Drawer.Screen name={'HelpCenter'} component={HelpCenter} />
		</Drawer.Navigator>
	);

const AppNavigator = () => {
	const theme = useTheme();
	const palette = usePalette();

	return (
		<NavigationContainer
			ref={instance => navigationService.setTopLevelNavigator(instance)}
			theme={{
				light: { ...DefaultTheme, colors: { ...DefaultTheme.colors, primary: palette.accent() } },
				dark: { ...DarkTheme, colors: { ...DarkTheme.colors, primary: palette.accent() } },
			}[theme]}>

			<Stack.Navigator>
				<Stack.Screen name={'Main'} component={MainScreen} options={{ headerShown: false }} />
				<Stack.Screen name={'Login'} component={Login} />
				<Stack.Screen name={'Register'} component={Register} />
				<Stack.Screen name={'ResetPassword'} component={ResetPassword} />
				<Stack.Screen name={'AboutUs'} component={AboutUs} />
				<Stack.Screen name={'HelpCenter'} component={HelpCenter} />
				<Stack.Screen name={'More'} component={More} />
				<Stack.Screen name={'OnBoarding'} component={OnBoarding} />
				<Stack.Screen name={'TombRaider'} component={TombRaider} />
				<Stack.Screen name={'ChangePassword'} component={ChangePassword} />
				<Stack.Screen name={'EditProfile'} component={EditProfile} />
				<Stack.Screen name={'Profile'} component={Profile} />
				<Stack.Screen name={'SelectList'} component={SelectList} />
				<Stack.Screen name={'Settings'} component={Settings} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
