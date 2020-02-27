import { ActionTypes, Profile, ProfileTriggerAction } from './types';

export const profileTrigger = (profile?: Profile): ProfileTriggerAction => ({
	type: ActionTypes.profile_trigger,
	profile,
});
