import { useState } from 'react';
import { Platform } from 'react-native';
import _ from 'lodash';

export const debounce = <T extends (...args: any[]) => any>(
	func: T,
	duration: number = 1000,
	leading: boolean = true,
) =>
	_.debounce(func, duration, {
		leading,
		trailing: !leading,
	});

export const throttle = (func: any, duration: number = 1000, leading: boolean = true) =>
	_.throttle(func, duration, {
		leading,
		trailing: !leading,
	});

export const platform = <I, A, F>(ios: I, android: A, fallback?: F) => {
	switch (Platform.OS) {
		case 'ios':
			return ios;
		case 'android':
			return android;
		default:
			return fallback;
	}
};

export const useFirstRender = (effect: () => void) => {
	const [firstRender, setFirstRender] = useState(true);
	if (firstRender) {
		effect();
		setFirstRender(false);
	}
};
