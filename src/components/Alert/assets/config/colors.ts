export const COLOR_ERROR = '#cc3232';
export const COLOR_INFO = '#2B73B6';
export const COLOR_WARNING = '#cd853f';
export const COLOR_SUCCESS = '#32A54A';
export const COLOR_NO_CONNECTION = '#7d7d7d';
export const COLOR_CUSTOM = '#8460b5';

import { Platform } from 'react-native';

export const getColorPalette = (theme: 'light' | 'dark', accent: string) => {
	const light = {
		background: '#fff',
		text: Platform.OS === 'ios' ? '#3c3c3c' : '#232323',
		progress: Platform.OS === 'ios' ? '#373737' : accent,
	};
	const dark = {
		background: '#424242',
		text: Platform.OS === 'ios' ? '#c3c3c3' : '#dcdcdc',
		progress: Platform.OS === 'ios' ? '#c8c8c8' : accent,
	};

	return theme === 'dark' ? dark : light;
};
