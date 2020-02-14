import { Reducer } from 'redux';
import { Action, ActionTypes, State } from './types';

const initialState: State = {
	theme: 'light',
	accentColor: '#007AFF',

	websiteURL: '',
	appStoreAndroidURL: '',
	appStoreIosURL: '',
	faqURL: '',
	privacyPolicyURL: '',
	serviceTermsURL: '',
	supportTel: '',
};

const settings: Reducer<State, Action> = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.toggle_theme:
			return {
				...state,
				theme: state.theme === 'light' ? 'dark' : 'light',
			};
		default:
			return state;
	}
};

export default settings;
