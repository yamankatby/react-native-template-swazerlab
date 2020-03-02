import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import NativeDialog from 'react-native-native-dialog';
import { ActionTypes } from './types';
import {
	externalLoginAPI,
	loginAPI,
	logOutAPI,
	registerAPI,
	sendResetPasswordEmailAPI,
	signInAnonymouslyAPI,
} from './apis';
import { AppState } from '../../../config/store/types';
import { loginResult, logOutResult, registerResult } from './actions';
import { popToTop } from '../../services/logic/actions';

function* signInAnonymouslySaga() {
	try {
		yield call(signInAnonymouslyAPI);
	} catch (e) {

	}
}

function* registerSaga() {
	const { name, email, password } = yield select((state: AppState) => state.auth);
	try {
		yield call(registerAPI, name, email, password);
		yield all([
			put(registerResult(false)),
			put(popToTop()),
		]);
	} catch (e) {

	}
}

function* loginSaga() {
	const { email, password } = yield select((state: AppState) => state.auth);
	try {
		yield call(loginAPI, email, password);
		yield all([
			put(loginResult(false)),
			put(popToTop()),
		]);
	} catch (e) {

	}
}

function* externalLoginSaga() {
	try {
		yield call(externalLoginAPI);
	} catch (e) {

	}
}

function* sendResetPasswordEmailSaga() {
	const { email } = yield select((state: AppState) => state.auth);
	try {
		yield call(sendResetPasswordEmailAPI, email);
	} catch (e) {

	}
}

function* logOutSaga() {
	const showDialog = () => new Promise((resolve, reject) => {
		NativeDialog.showDialog({
			title: 'some',
			preferredStyle: 'actionSheet',
			positiveButton: 'ok',
			negativeButton: 'cancel',
			message: 'do some th',
			positiveButtonStyle: 'destructive',
			negativeButtonStyle: 'cancel',
			onPositivePress: resolve,
			onNegativePress: reject,
		});
	});

	try {
		yield call(showDialog);
		yield call(logOutAPI);
		yield put(logOutResult(false));
	} catch (e) {
	}
}

export default [
	takeLatest(ActionTypes.sign_in_anonymously, signInAnonymouslySaga),
	takeLatest(ActionTypes.register, registerSaga),
	takeLatest(ActionTypes.login, loginSaga),
	takeLatest(ActionTypes.external_login, externalLoginSaga),
	takeLatest(ActionTypes.send_reset_password_email, sendResetPasswordEmailSaga),
	takeLatest(ActionTypes.log_out, logOutSaga),
];
