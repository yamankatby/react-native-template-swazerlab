import auth from '@react-native-firebase/auth';

export const signInAnonymouslyAPI = async () => {
	await auth().signInAnonymously();
};

export const registerAPI = async (name: string, email: string, password: string) => {
	const { user } = await auth().createUserWithEmailAndPassword(email, password);
	await user.updateProfile({
		displayName: name,
	});
};

export const loginAPI = async (email: string, password: string) => {
	await auth().signInWithEmailAndPassword(email, password);
};

export const externalLoginAPI = async () => {

};

export const sendResetPasswordEmailAPI = async () => {

};
