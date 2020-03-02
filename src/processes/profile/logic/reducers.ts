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
		default:
			return state;
	}
};

export default profile;
