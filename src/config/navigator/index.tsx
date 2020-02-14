import React, { useMemo } from 'react';
import { Platform } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { usePalette, useTheme } from '../../assets/styles';
import navigationService from './navigationService';

import About from '../../processes/help/views/About';
import HelpCenter from '../../processes/help/views/HelpCenter';
import Intro from '../../processes/help/views/Intro';
import More from '../../processes/help/views/More';
import TombRaider from '../../processes/help/views/TombRaider';
import Settings from '../../processes/settings/views/Settings';

import Register from '../../processes/auth/views/Register';
import Login from '../../processes/auth/views/Login';
import ResetPassword from '../../processes/auth/views/ResetPassword';

import Profile from '../../processes/profile/views/Profile';
import UpdateProfile from '../../processes/profile/views/UpdateProfile';
import UpdatePassword from '../../processes/profile/views/UpdatePassword';

import PointOnMap from '../../processes/services/views/PointOnMap';
import SelectList from '../../processes/services/views/SelectList';

import Home from '../../processes/home/views/Home';

export type RouteName =
	| 'About'
	| 'HelpCenter'
	| 'Intro'
	| 'More'
	| 'TombRaider'
	| 'Settings'
	| 'Register'
	| 'Login'
	| 'ResetPassword'
	| 'Profile'
	| 'UpdateProfile'
	| 'UpdatePassword'
	| 'PointOnMap'
	| 'SelectList'
	| 'Home';


const AppNavigator = () => {
	const theme = useTheme();
	const palette = usePalette();

	const Stack = useMemo(() => createStackNavigator(), []);
	const BottomTab = useMemo(() => createBottomTabNavigator(), []);
	const Drawer = useMemo(() => createDrawerNavigator(), []);

	const HomeStack = useMemo(() => createStackNavigator(), []);
	const ProfileStack = useMemo(() => createStackNavigator(), []);
	const MoreStack = useMemo(() => createStackNavigator(), []);

	const HomeScreen = () => (
		<HomeStack.Navigator>
			<HomeStack.Screen name={'Home'} component={Home} />
		</HomeStack.Navigator>
	);
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

	const MainScreen = () => {
		if (Platform.OS === 'ios') {
			return (
				<BottomTab.Navigator>
					<BottomTab.Screen name={'Home'} component={HomeScreen} />
					<BottomTab.Screen name={'More'} component={MoreScreen} />
				</BottomTab.Navigator>
			);
		} else {
			return (
				<Drawer.Navigator>
					<Drawer.Screen name={'Home'} component={HomeScreen} />
					<Drawer.Screen name={'Profile'} component={ProfileScreen} />
				</Drawer.Navigator>
			);
		}
	};

	return (
		<NavigationContainer
			ref={instance => navigationService.setTopLevelNavigator(instance)}
			theme={{
				light: { ...DefaultTheme, colors: { ...DefaultTheme.colors, primary: palette.accent() } },
				dark: { ...DarkTheme, colors: { ...DarkTheme.colors, primary: palette.accent() } },
			}[theme]}>
			<Stack.Navigator>
				<Stack.Screen name={'Main'} component={MainScreen} options={{ headerShown: false }} />
				<Stack.Screen name={'Intro'} component={Intro} />
				<Stack.Screen name={'TombRaider'} component={TombRaider} />
				<Stack.Screen name={'SelectList'} component={SelectList} />
				<Stack.Screen name={'PointOnMap'} component={PointOnMap} />
				<Stack.Screen name={'HelpCenter'} component={HelpCenter} />
				<Stack.Screen name={'About'} component={About} />
				<Stack.Screen name={'Register'} component={Register} />
				<Stack.Screen name={'Login'} component={Login} />
				<Stack.Screen name={'ResetPassword'} component={ResetPassword} />
				<Stack.Screen name={'UpdateProfile'} component={UpdateProfile} />
				<Stack.Screen name={'UpdatePassword'} component={UpdatePassword} />
				<Stack.Screen name={'Settings'} component={Settings} />
				<Stack.Screen name={'Profile'} component={Profile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
