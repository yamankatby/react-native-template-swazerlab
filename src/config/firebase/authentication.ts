import auth from '@react-native-firebase/auth';

export const signInAnonymously = async () => {
	try {
		await auth().signInAnonymously();
	} catch (e) {
		if (e.code === 'auth/operation-not-allowed') {
			console.log('Enable anonymous in your firebase console.');
		} else {
			console.error(e);
		}
	}
};

export const register = async (email: string, password: string) => {
	try {
		await auth().createUserWithEmailAndPassword(email, password);
	} catch (e) {
		console.error(e.message);
	}
};

export const signIn = async (email: string, password: string) => {
	try {
		await auth().signInWithEmailAndPassword(email, password);
	} catch (e) {
		console.error(e.message);
	}
};
