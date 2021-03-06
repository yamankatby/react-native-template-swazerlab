import LocalizedStrings from 'react-native-localization';

import en from './en';

const language = new LocalizedStrings({ en });

export const isRtl = () => language.getLanguage() === 'ar';

export const mirror = <T>(ltr: T, rtl: T) => {
	return isRtl() ? rtl : ltr;
};

export const locale = {
	isRtl() {
		return language.getLanguage() === 'ar';
	},
	mirror<T>(ltr: T, rtl: T) {
		return this.isRtl() ? rtl : ltr;
	},
};
export type Locale = typeof locale;

export default language;
