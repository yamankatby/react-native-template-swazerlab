import { ActionTypes, ChangeDraftProfileNameAction } from './types';

export const changeDraftProfileName = (name: string): ChangeDraftProfileNameAction => ({
	type: ActionTypes.change_draft_profile_name,
	name,
});
