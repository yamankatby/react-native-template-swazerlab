import { call, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { externalLoginAPI, loginAPI, registerAPI, sendResetPasswordEmailAPI } from './apis';

function* registerSaga() {
	try {
		yield call(registerAPI);
	} catch (e) {

	}
}

function* loginSaga() {
	try {
		yield call(loginAPI);
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
	takeLatest(ActionTypes.register, registerSaga),
	takeLatest(ActionTypes.login, loginSaga),
	takeLatest(ActionTypes.external_login, externalLoginSaga),
	takeLatest(ActionTypes.send_reset_password_email, sendResetPasswordEmailSaga),
];
