import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';


export const changeProfilePhotoAPI = async (uid: string, imagePath: string) => {
	storage()
		.ref(`${uid}/profile-photo.${imagePath.split('.').pop()}`)
		.putFile(imagePath)
		.on(
			storage.TaskEvent.STATE_CHANGED,
			snapshot => {
				if (snapshot.state === storage.TaskState.SUCCESS) {
					snapshot.ref.getDownloadURL().then((url) => {
						const currentUser = auth().currentUser;
						if (!currentUser) return;
						currentUser.updateProfile({
							photoURL: url,
						});
					});
				}
			},
			error => {
				throw error;
			},
		);
};
