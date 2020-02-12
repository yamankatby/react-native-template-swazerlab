import React, { useMemo } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Intro from '../../processes/Other/views/Intro';
import More from '../../processes/Other/views/More';
import TellFriend from '../../processes/Other/views/TellFriend';
import TombRaider from '../../processes/Other/views/TombRaider';
import SelectList from '../../processes/Extra/views/SelectList';
import PointOnMap from '../../processes/Extra/views/PointOnMap';
import HelpCenter from '../../processes/Help/views/HelpCenter';
import About from '../../processes/Help/views/About';
import Register from '../../processes/Auth/views/Register';
import Login from '../../processes/Auth/views/Login';
import ResetPassword from '../../processes/Auth/views/ResetPassword';
import Profile from '../../processes/Profile/views/Profile';
import UpdateProfile from '../../processes/Profile/views/UpdateProfile';
import UpdatePassword from '../../processes/Profile/views/UpdatePassword';
import Home from '../../processes/Home/views/Home';

const AppNavigator = () => {
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
					<BottomTab.Screen name={'HomeScreen'} component={HomeScreen} />
					<BottomTab.Screen name={'ProfileScreen'} component={ProfileScreen} />
					<BottomTab.Screen name={'MoreScreen'} component={MoreScreen} />
				</BottomTab.Navigator>
			);
		} else {
			return (
				<Drawer.Navigator>
					<Drawer.Screen name={'HomeScreen'} component={HomeScreen} />
					<Drawer.Screen name={'ProfileScreen'} component={ProfileScreen} />
				</Drawer.Navigator>
			);
		}
	};

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name={'MainScreen'} component={MainScreen} options={{ headerShown: false }} />
				<Stack.Screen name={'Intro'} component={Intro} />
				<Stack.Screen name={'TellFriend'} component={TellFriend} />
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
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
