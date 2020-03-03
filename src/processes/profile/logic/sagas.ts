import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import ImagePicker from 'react-native-image-picker';
import { changeProfilePhotoAPI, updateProfileAPI } from './apis';
import { ActionTypes } from './types';
import { AppState } from '../../../config/store/types';
import { updateProfileResult } from './actions';
import { goBack } from '../../services/logic/actions';

function* changeProfilePhotoSaga() {
	const showImagePicker = (): Promise<string> => new Promise((resolve, reject) => {
		ImagePicker.showImagePicker({
			title: 'Select Avatar',
			storageOptions: { skipBackup: true, path: 'images' },
			allowsEditing: true,
			maxHeight: 420,
			maxWidth: 420,
			mediaType: 'photo',
			tintColor: 'red',
		}, (response) => {
			if (response.didCancel || response.error)
				reject({ didCancel: response.didCancel, error: response.error });
			else resolve(response.uri);
		});
	});

	try {
		const uid = yield select((state: AppState) => state.profile.profile?.id);

		const imagePath = yield showImagePicker();
		yield call(changeProfilePhotoAPI, uid, imagePath);
	} catch (e) {
		console.log(e);
	}
}

function* updateProfileSaga() {
	const name = yield select((state: AppState) => state.profile.draftProfile?.name);

	try {
		yield call(updateProfileAPI, name!);
		yield all([
			put(updateProfileResult(false)),
			put(goBack()),
		]);
	} catch (e) {

	}
}

export default [
	takeLatest(ActionTypes.change_profile_photo, changeProfilePhotoSaga),
	takeLatest(ActionTypes.update_profile, updateProfileSaga),
];
