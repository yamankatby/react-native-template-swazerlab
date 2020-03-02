import storage from '@react-native-firebase/storage';

export const changeProfilePhotoAPI = async (imagePath: string) => {
	alert(imagePath);
	const ext = imagePath.split('.').pop();
	const filename = `${'uuid'}.${ext}`;
	alert(filename);
	storage()
		.ref(filename)
		.putFile(imagePath)
		.on(
			storage.TaskEvent.STATE_CHANGED,
			snapshot => {
				if (snapshot.state === storage.TaskState.SUCCESS) {

				}
			},
			error => {
				throw error;
			},
		);
};
