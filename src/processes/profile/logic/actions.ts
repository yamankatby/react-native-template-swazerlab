import { ActionTypes, ChangeDraftProfileNameAction, Profile, ProfileTriggerAction } from './types';
import { AppAction, AppResultAction } from '../../../config/store/types';

export const profileTrigger = (profile?: Profile): ProfileTriggerAction => ({
	type: ActionTypes.profile_trigger,
	profile,
});

export const changeProfilePhoto = (): AppAction => ({
	type: ActionTypes.change_profile_photo,
});
export const changeProfilePhotoResult = (hasError: boolean): AppResultAction => ({
	type: ActionTypes.change_profile_photo_result,
	hasError,
});

export const setDraftProfile = (): AppAction => ({
	type: ActionTypes.set_draft_profile,
});
export const clearDraftProfile = (): AppAction => ({
	type: ActionTypes.clear_draft_profile,
});

export const changeDraftProfileName = (name: string): ChangeDraftProfileNameAction => ({
	type: ActionTypes.change_draft_profile_name,
	name,
});

export const updateProfile = (): AppAction => ({
	type: ActionTypes.update_profile,
});
export const updateProfileResult = (hasError: boolean): AppResultAction => ({
	type: ActionTypes.update_profile_result,
	hasError,
});
