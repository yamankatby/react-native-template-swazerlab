import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import services from '../../processes/services/logic/reducers';
import settings from '../../processes/settings/logic/reducer';
import auth from '../../processes/auth/logic/reducers';
import profile from '../../processes/profile/logic/reducers';

const generateConfig = (reducer: any, key: string, whitelist?: string[], blacklist?: string[]) =>
	persistReducer({
		storage: AsyncStorage,
		debug: __DEV__,
		key,
		whitelist,
		blacklist,
	}, reducer);

export default combineReducers({
	services,
	settings,
	auth,
	profile,
});
