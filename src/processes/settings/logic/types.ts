import { Theme } from '../../../assets/styles';
import { AppAction } from '../../../config/store/types';

export enum ActionTypes {
	increase_run_time = 'SETTINGS__INCREASE_RUN_TIME',
}

export type Action = AppAction;

export interface State {
	theme: Theme;
	accentColor: string;
}