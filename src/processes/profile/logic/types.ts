import { AppAction, AppResultAction } from '../../../config/store/types';

export enum ActionTypes {
	profile_trigger = 'PROFILE__PROFILE_TRIGGER',

	change_profile_photo = 'PROFILE__CHANGE_PROFILE_PHOTO',
	change_profile_photo_result = 'PROFILE__CHANGE_PROFILE_PHOTO_RESULT',

	set_draft_profile = 'PROFILE__SET_DRAFT_PROFILE',
	clear_draft_profile = 'PROFILE__CLEAR_DRAFT_PROFILE',
	change_draft_profile_name = 'PROFILE__CHANGE_DRAFT_PROFILE_NAME',

	update_profile = 'PROFILE__UPDATE_PROFILE',
	update_profile_result = 'PROFILE__UPDATE_PROFILE_RESULT',
}

export interface ProfileTriggerAction extends AppAction {
	type: ActionTypes.profile_trigger;
	profile?: Profile;
}

export interface ChangeDraftProfileNameAction extends AppAction {
	type: ActionTypes.change_draft_profile_name;
	name: string;
}

export type Action =
	& AppAction
	& AppResultAction
	& ProfileTriggerAction
	& ChangeDraftProfileNameAction;

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
	draftProfile?: Profile;
}
