import { AppAction, AppResultAction } from '../../../config/store/types';

export enum ActionTypes {
}

export type Action =
	& AppAction
	& AppResultAction;

export interface Profile {
	id: string;
	name: string;
	email: string;
	photoURL: string;
	phoneNumber: string;
	anonymous: boolean;
	emailVerified: boolean;
	createdAt: Date;
	lastLogInTime: Date;
}

export interface State {

}
