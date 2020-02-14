import { Reducer } from 'redux';
import { Action, ActionTypes, State } from './types';

const initialState: State = {
	draftProfile: {
		name: '',
		email: '',
	},
	name: 'Yaman KATBY',
	email: 'm.yaman.katby@gmail.com',
};

const profile: Reducer<State, Action> = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.change_draft_profile_name:
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
