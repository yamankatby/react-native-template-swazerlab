import { useFocusEffect } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';
import '@react-native-firebase/crashlytics';

// ANALYTICS
if (firebase.app().utils().isRunningInTestLab) {
	firebase.analytics().setAnalyticsCollectionEnabled(false);
}
export const logEvent = async (name: string, params?: { [key: string]: string | boolean | number }) => {
	await analytics().logEvent(name, params);
};
export const useScreenTracker = (screen: string) => {
	useFocusEffect(() => {
		analytics().setCurrentScreen(screen, screen);
	});
};

// CRASHLYTICS
export const forceFirebaseCrash = (message = 'Testing crash') => {
	crashlytics().log(message);
	crashlytics().crash();
};
