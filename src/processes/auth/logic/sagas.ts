import { takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './types';

function* loginSaga() {
	try {

	} catch (e) {

	}
}

function* registerSaga() {
	try {

	} catch (e) {

	}
}

export default [
	takeLatest(ActionTypes.login, loginSaga),
	takeLatest(ActionTypes.register, registerSaga),
];
