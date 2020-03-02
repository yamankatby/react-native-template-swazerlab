import { call, select, takeLatest } from 'redux-saga/effects';
import ImagePicker from 'react-native-image-picker';
import { changeProfilePhotoAPI } from './apis';
import { ActionTypes } from './types';
import { AppState } from '../../../config/store/types';

function* changeProfilePhotoSaga() {
	const showImagePicker = (): Promise<string> => new Promise((resolve, reject) => {
		ImagePicker.showImagePicker({
			title: 'Select Avatar',
			storageOptions: { skipBackup: true, path: 'images' },
			allowsEditing: true,
			maxHeight: 420,
			maxWidth: 420,
			mediaType: 'photo',
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

export default [
	takeLatest(ActionTypes.change_profile_photo, changeProfilePhotoSaga),
];
