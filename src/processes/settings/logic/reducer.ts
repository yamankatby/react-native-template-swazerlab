import { Reducer } from 'redux';
import { Action, State } from './types';

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
		default:
			return state;
	}
};

export default settings;
