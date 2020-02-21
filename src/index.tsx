// import { store, useDispatch, useSelector } from './config/store';
// import { AppStateStatus, Platform, StatusBar, UIManager } from 'react-native';
// import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import Timer from 'react-native-timer';
// import 'react-native-gesture-handler';
// import SplashScreen from 'react-native-splash-screen';
// import { NetInfoState } from '@react-native-community/netinfo';
// import { clearAlert, updateAppState, updateNetworkStatus } from './processes/services/logic/actions';
// import { increaseRunTimes } from './processes/settings/logic/actions';
// import AppNavigator from './config/navigator';
// import ProgressOverlay from './components/Progress/ProgressOverlay';
// import DropdownAlert from './components/Alert/DropdownAlert';
//
// import './config/firebase';
// import { signInAnonymously } from './config/firebase/authentication';
// import { ThemeProvider, useTheme } from './@react-native-elements/kit';
//
// const App = () => {
// 	const dispatch = useDispatch();
// 	const alert = useSelector(x => x.services.alert);
// 	const progress = useSelector(x => x.services.progress);
//
// 	const theme = useTheme();
// 	const palette = usePalette();
//
// 	useEffect(() => {
// 		signInAnonymously();
// 		if (Platform.OS === 'android') {
// 			UIManager.setLayoutAnimationEnabledExperimental &&
// 			UIManager.setLayoutAnimationEnabledExperimental(true);
// 		}
// 	}, []);
//
// 	useEffect(() => {
// 		if (__DEV__) SplashScreen.hide();
// 		else Timer.setTimeout('dismissMsg', () => SplashScreen.hide(), 500);
// 		return () => {
// 			Timer.clearTimeout('dismissMsg');
// 		};
// 	}, []);
//
// 	const onNetworkStatusChanged = (newStatus: NetInfoState) => {
// 		dispatch(updateNetworkStatus(newStatus.isConnected));
// 	};
//
// 	const onAppStateChanged = (appState: AppStateStatus) => {
// 		dispatch(updateAppState(appState));
// 	};
//
// 	const storeDidRehydrate = () => {
// 		dispatch(increaseRunTimes());
// 	};
//
// 	return (
// 		<>
// 			<StatusBar
// 				translucent
// 				animated
// 				backgroundColor={palette.header('status-bar')}
// 				barStyle={
// 					Platform.OS === 'ios'
// 						? (theme === 'light' ? 'dark-content' : 'light-content')
// 						: (theme === 'light' ? 'light-content' : 'dark-content')
// 				}
// 			/>
// 			<AppNavigator />
// 			<ProgressOverlay
// 				visible={progress.visible}
// 				size="large"
// 				text={progress.message}
// 				palette={palette}
// 			/>
// 			<DropdownAlert
// 				type={alert.type}
// 				title={alert.title}
// 				message={alert.message}
// 				visible={alert.visible}
// 				duration={alert.duration}
// 				statusBarColor={palette.header('status-bar')}
// 				onDismiss={() => dispatch(clearAlert())}
// 			/>
// 		</>
// 	);
// };
//
// export default () => (
// 	<ThemeProvider>
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	</ThemeProvider>
// )
//

import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from './@react-native-elements/kit';
import Button from './@react-native-elements/button';

const App = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Button title={'Button'} variant="contained" />
			<Button title={'Button'} variant="outlined" />
			<Button title={'Button'} variant="text" />

			<Button title={'Button'} variant="contained" disabled />
			<Button title={'Button'} variant="outlined" disabled />
			<Button title={'Button'} variant="text" disabled />

			<Button title={'Button'} variant="contained" loading />
			<Button title={'Button'} variant="outlined" loading />
			<Button title={'Button'} variant="text" loading />

			<Button title={'Button'} variant="contained" disabled loading />
			<Button title={'Button'} variant="outlined" disabled loading />
			<Button title={'Button'} variant="text" disabled loading />
		</View>
	);
};

export default () => {
	return (
		<ThemeProvider>
			<App />
		</ThemeProvider>
	);
}
