import { Reducer } from 'redux';
import { Action, ActionTypes, State } from './types';

const initialState: State = {

};

const profile: Reducer<State, Action> = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.profile_trigger:
			if (!action.profile) return initialState;
			return {
				...state,
				profile: action.profile,
			};
		case ActionTypes.change_profile_photo_result:
			return {
				...state,
			};
		case ActionTypes.set_draft_profile:
			return {
				...state,
				draftProfile: state.profile,
			};
		case ActionTypes.clear_draft_profile:
			return {
				...state,
				draftProfile: initialState.draftProfile,
			};
		case ActionTypes.change_draft_profile_name:
			if (!state.draftProfile) return state;
			return {
				...state,
				draftProfile: {
					...state.draftProfile,
					name: action.name,
				},
			};
		default:
			return state;
	}
};

export default profile;
