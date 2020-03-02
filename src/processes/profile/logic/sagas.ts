import { call, takeLatest } from 'redux-saga/effects';
import ImagePicker from 'react-native-image-picker';
import { changeProfilePhotoAPI } from './apis';
import { ActionTypes } from './types';

function* changeProfilePhotoSaga() {
	const showImagePicker = (): Promise<string> => new Promise((resolve, reject) => {
		ImagePicker.showImagePicker({
			title: 'Select Avatar',
			storageOptions: { skipBackup: true, path: 'images' },
		}, (response) => {
			if (response.didCancel || response.error)
				reject({ didCancel: response.didCancel, error: response.error });
			else resolve(response.uri);
		});
	});

	try {
		const imagePath = yield showImagePicker();
		yield call(changeProfilePhotoAPI, imagePath);
	} catch (e) {
		console.log(e);
	}
}

export default [
	takeLatest(ActionTypes.change_profile_photo, changeProfilePhotoSaga),
];
