import { all } from 'redux-saga/effects';
import authSagas from '../../processes/auth/logic/sagas';
import extraSagas from '../../processes/extra/logic/sagas';
import profileSagas from '../../processes/profile/logic/sagas';
import servicesSagas from '../../processes/services/logic/sagas';
import settingsSagas from '../../processes/settings/logic/sagas';

export default function* rootSaga() {
	yield all([
		...authSagas,
		...extraSagas,
		...profileSagas,
		...servicesSagas,
		...settingsSagas,
	]);
}
