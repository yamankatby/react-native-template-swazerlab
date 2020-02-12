import { persistor, store, useDispatch, useSelector } from './config/store';
import AppNavigator from './config/navigator';
import ProgressOverlay from './components/Progress/ProgressOverlay';
import DropdownAlert from './components/Alert/DropdownAlert';
import { AppStateStatus, Platform, StatusBar, UIManager } from 'react-native';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Timer from 'react-native-timer';
import 'react-native-gesture-handler';

const App = () => {
	const dispatch = useDispatch();
	const alert = useSelector(x => x.services.alert);
	const progress = useSelector(x => x.services.progress);
	const isLoggedIn = useSelector(x => x.auth.isLoggedIn);
	const accessToken = useSelector(x => x.auth.accessToken);

	const theme = useTheme();
	const palette = usePalette();

	useEffect(() => {
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental &&
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}, []);

	useEffect(() => {
		if (__DEV__) SplashScreen.hide();
		else Timer.setTimeout('dismissMsg', () => SplashScreen.hide(), 500);

		return () => {
			Timer.clearTimeout('dismissMsg');
		};
	}, []);

	const onNetworkStatusChanged = (newStatus: NetInfoState) => {
		dispatch(updateNetworkStatus(newStatus.isConnected));
	};

	const onAppStateChanged = (appState: AppStateStatus) => {
		dispatch(updateAppState(appState));
	};

	const storeDidRehydrate = () => {
		dispatch(increaseRunTimes());
		dispatch(fetchAppSettings());
	};

	return (
		<PersistGate persistor={persistor} onBeforeLift={storeDidRehydrate}>
			<StatusBar
				translucent
				animated
				backgroundColor={palette.header('status-bar')}
				barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
			/>
			<AppNavigator />
			<ProgressOverlay
				visible={progress.visible}
				size="large"
				text={progress.message}
			/>
			<DropdownAlert
				type={alert.type}
				title={alert.title}
				message={alert.message}
				visible={alert.visible}
				duration={alert.duration}
				statusBarColor={palette.header('status-bar')}
				onDismiss={() => dispatch(clearAlert())}
			/>
		</PersistGate>
	);
};

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};
