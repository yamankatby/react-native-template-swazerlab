import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '../../processes/auth/logic/reducers';
import extra from '../../processes/extra/logic/reducers';
import profile from '../../processes/profile/logic/reducers';
import services from '../../processes/services/logic/reducers';
import settings from '../../processes/settings/logic/reducers';

const generateConfig = (reducer: any, key: string, blacklist?: string[], whitelist?: string[]) =>
	persistReducer({
		storage: AsyncStorage,
		debug: __DEV__,
		key,
		blacklist,
		whitelist,
	}, reducer);

export default combineReducers({
	auth: generateConfig(auth, '__auth', ['name', 'email', 'password']),
	extra,
	profile,
	services,
	settings,
});
