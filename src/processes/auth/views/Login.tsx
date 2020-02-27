import React, { useCallback } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';
import { useDispatch, useSelector } from '../../../config/store';
import { changeEmail, changePassword, login } from '../logic/actions';
import { navigate } from '../../services/logic/actions';

const Login = () => {
	useScreenTracker('Login');
	const dispatch = useDispatch();
	const email = useSelector(state => state.auth.email);
	const password = useSelector(state => state.auth.password);

	const onChangeEmail = useCallback((email: string) => {
		dispatch(changeEmail(email));
	}, []);
	const onChangePassword = useCallback((password: string) => {
		dispatch(changePassword(password));
	}, []);
	const onLoginTouched = useCallback(() => {
		dispatch(login());
	}, []);
	const onRegisterTouched = useCallback(() => {
		dispatch(navigate('Register'));
	}, []);
	const onResetPasswordTouched = useCallback(() => {
		dispatch(navigate('ResetPassword'));
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Text>Login To Your Account</Text>
			<TextInput value={email} placeholder={'Email'} onChangeText={onChangeEmail} />
			<TextInput value={password} placeholder={'Password'} onChangeText={onChangePassword} />
			<Button title={'Login'} onPress={onLoginTouched} />
			<Button title={'Register'} onPress={onRegisterTouched} />
			<Button title={'ResetPassword'} onPress={onResetPasswordTouched} />
		</View>
	);
};

export default Login;
