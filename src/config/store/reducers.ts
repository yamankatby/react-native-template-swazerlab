import { combineReducers } from 'redux';
import auth from '../../processes/auth/logic/reducers';
import extra from '../../processes/extra/logic/reducers';
import profile from '../../processes/profile/logic/reducers';
import services from '../../processes/services/logic/reducers';
import settings from '../../processes/settings/logic/reducers';

export default combineReducers({
	auth,
	extra,
	profile,
	services,
	settings,
});
