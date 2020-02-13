import { Dimensions, Platform } from 'react-native';

export function hasNotch() {
	const dimen = Dimensions.get('window');

	return (
		Platform.OS === 'ios' &&
		!Platform.isPad &&
		!Platform.isTVOS &&
		(dimen.height >= 812 || dimen.width >= 812)
	);
}
