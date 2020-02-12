import { Theme } from '../../../assets/styles';
import { AppAction } from '../../../config/store/types';

export enum ActionTypes {

}

export type Action = AppAction;

export interface State {
	theme: Theme;
	accentColor: string;
}
