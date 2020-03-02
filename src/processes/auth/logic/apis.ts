import auth from '@react-native-firebase/auth';
import { morphism, Schema } from 'morphism';
import { useDispatch } from '../../../config/store';
import { authStateTrigger } from './actions';
import { profileTrigger } from '../../profile/logic/actions';

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

export const sendResetPasswordEmailAPI = async (email: string) => {
	await auth().sendPasswordResetEmail(email);
};

export const logOutAPI = async () => {
	await auth().signOut();
};

export const useAuthStateListener = () => {
	const dispatch = useDispatch();
	const unsubscribe = auth().onAuthStateChanged((user) => {
		console.log('user', user);
		if (!user) return;
		const { refreshToken, provider, ...profile } = morphism(AuthStateMap, user);
		dispatch(authStateTrigger(refreshToken, provider));
		dispatch(profileTrigger(profile));
	});
	return () => {
		unsubscribe();
	};
};

const AuthStateMap: Schema = {
	id: '_user.uid',
	name: '_user.displayName',
	email: '_user.email',
	photoURL: '_user.photoURL',
	phoneNumber: '_user.phoneNumber',
	anonymous: '_user.isAnonymous',
	emailVerified: '_user.emailVerified',
	createdAt: iteratee => new Date(iteratee._user.metadata.creationTime),
	lastLogInTime: iteratee => new Date(iteratee._user.metadata.lastSignInTime),

	refreshToken: '_user.refreshToken',
	provider: '_user.providerId',
};
