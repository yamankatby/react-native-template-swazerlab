import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';
import { useFocusEffect } from '@react-navigation/native';
import '@react-native-firebase/crashlytics';

export const attachAnalyticsUser = async (id: string, email: string, provider: string) => {
	await Promise.all([
		analytics().setUserId(id),
		analytics().setUserProperty('email', email),
		analytics().setUserProperty('provider', provider),
	]);
};

export const detachAnalyticsUser = async () => {
	await analytics().resetAnalyticsData();
};

export const logFirebaseEvent = async (name: string, params?: { [key: string]: string | number | boolean } | {}) => {
	await analytics().logEvent(name, params);
};

export const forceFirebaseCrash = (message = 'Testing crash') => {
	crashlytics().log(message);
	crashlytics().crash();
};

export const useScreenTracker = (screen: string) => {
	useFocusEffect(() => {
		analytics().setCurrentScreen(screen, screen);
	});
};

export const firebaseEventsMiddleware = (store: any) => (next: any) => (action: any) => {
	const { type, firebase } = action;
	if (firebase) {
		logFirebaseEvent(type.toLocaleUpperCase(), typeof firebase === 'object' ? firebase : undefined).then();
	}
	next(action);
};
