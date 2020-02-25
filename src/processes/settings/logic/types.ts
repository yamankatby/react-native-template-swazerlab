import { AppAction, AppResultAction } from '../../../config/store/types';

export enum ActionTypes {
}

export type Action =
	& AppAction
	& AppResultAction;

export interface State {

}
