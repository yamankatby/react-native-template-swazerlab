import { AppAction } from '../../../config/store/types';

export enum ActionTypes {
	change_draft_profile_name = 'PROFILE__CHANGE_DRAFT_PROFILE_NAME',
}

export interface ChangeDraftProfileNameAction extends AppAction {
	type: ActionTypes.change_draft_profile_name;
	name: string;
}

export interface Profile {
	name: string;
	email: string;
}

export type Action =
	& AppAction
	& ChangeDraftProfileNameAction;

export interface State {
	draftProfile: Profile;
	name: string;
	email: string;
}
