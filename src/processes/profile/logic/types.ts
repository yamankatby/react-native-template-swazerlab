import { AppAction, AppResultAction } from '../../../config/store/types';

export enum ActionTypes {
	profile_trigger = 'PROFILE__PROFILE_TRIGGER',

	change_profile_photo = 'PROFILE__CHANGE_PROFILE_PHOTO',
	change_profile_photo_result = 'PROFILE__CHANGE_PROFILE_PHOTO_RESULT',
}

export interface ProfileTriggerAction extends AppAction {
	type: ActionTypes.profile_trigger;
	profile?: Profile;
}

export type Action =
	& AppAction
	& AppResultAction
	& ProfileTriggerAction;

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
	profile?: Profile;
}
