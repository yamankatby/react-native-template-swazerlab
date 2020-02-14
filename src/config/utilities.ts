import { Dimensions, Platform } from 'react-native';
import _ from 'lodash';

export function hasNotch() {
	const dimen = Dimensions.get('window');

	return (
		Platform.OS === 'ios' &&
		!Platform.isPad &&
		!Platform.isTVOS &&
		(dimen.height >= 812 || dimen.width >= 812)
	);
}

export function debounce<T extends (...args: any[]) => any>(func: T, duration: number = 1000, leading: boolean = true) {
	return _.debounce(func, duration, { leading, trailing: !leading });
}

export function throttle(func: any, duration: number = 1000, leading: boolean = true) {
	return _.throttle(func, duration, { leading, trailing: !leading });
}

export function platform<I, A, F>(ios: I, android: A, fallback?: F) {
	switch (Platform.OS) {
		case 'ios':
			return ios;
		case 'android':
			return android;
		default:
			return fallback;
	}
}
