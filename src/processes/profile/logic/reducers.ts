import { Reducer } from 'redux';
import { Action, ActionTypes, State } from './types';

const initialState: State = {
	draftProfile: {
		name: '',
		email: '',
		photoURL: '',
	},
	name: 'Yaman KATBY',
	email: 'm.yaman.katby@gmail.com',
	photoURL: 'https://mir-s3-cdn-cf.behance.net/user/115/c65ec111471167.5d62a2d707a23.jpg',
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
