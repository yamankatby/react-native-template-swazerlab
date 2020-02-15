import { Theme } from '../../../assets/styles';
import { AppAction } from '../../../config/store/types';

export enum ActionTypes {
	increase_run_time = 'SETTINGS__INCREASE_RUN_TIME',
	toggle_theme = 'SETTINGS__TOGGLE_THEME',
}

export type Action = AppAction;

export interface State {
	theme: Theme;
	accentColor: string;

	websiteURL: string;
	appStoreAndroidURL: string;
	appStoreIosURL: string;
	faqURL: string;
	privacyPolicyURL: string;
	serviceTermsURL: string;
	supportTel: string;
}
