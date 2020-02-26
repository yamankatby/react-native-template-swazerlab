import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { externalLoginAPI, loginAPI, registerAPI, sendResetPasswordEmailAPI, signInAnonymouslyAPI } from './apis';
import { AppState } from '../../../config/store/types';
import { loginResult, registerResult } from './actions';

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
		yield put(registerResult(false));
	} catch (e) {

	}
}

function* loginSaga() {
	const { email, password } = yield select((state: AppState) => state.auth);
	try {
		yield call(loginAPI, email, password);
		yield put(loginResult(false));
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
	try {
		yield call(sendResetPasswordEmailAPI);
	} catch (e) {

	}
}

export default [
	takeLatest(ActionTypes.sign_in_anonymously, signInAnonymouslySaga),
	takeLatest(ActionTypes.register, registerSaga),
	takeLatest(ActionTypes.login, loginSaga),
	takeLatest(ActionTypes.external_login, externalLoginSaga),
	takeLatest(ActionTypes.send_reset_password_email, sendResetPasswordEmailSaga),
];
