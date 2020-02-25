import React, { useCallback } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';
import { useDispatch } from '../../../config/store';
import { changeEmail, changeName, changePassword, register } from '../logic/actions';
import { navigate } from '../../services/logic/actions';

const Register = () => {
	useScreenTracker('Register');
	const dispatch = useDispatch();

	const onChangeName = useCallback((name: string) => {
		dispatch(changeName(name));
	}, []);
	const onChangeEmail = useCallback((email: string) => {
		dispatch(changeEmail(email));
	}, []);
	const onChangePassword = useCallback((password: string) => {
		dispatch(changePassword(password));
	}, []);
	const onRegisterTouched = useCallback(() => {
		dispatch(register());
	}, []);
	const onLoginTouched = useCallback(() => {
		dispatch(navigate('Login'));
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Text>Register a new Account</Text>
			<TextInput onChangeText={onChangeName} />
			<TextInput onChangeText={onChangeEmail} />
			<TextInput onChangeText={onChangePassword} />
			<Button title={'Register'} onPress={onRegisterTouched} />
			<Button title={'Login'} onPress={onLoginTouched} />
		</View>
	);
};

export default Register;
