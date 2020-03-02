import { ActionTypes, Profile, ProfileTriggerAction } from './types';
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
