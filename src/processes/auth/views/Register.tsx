import React, { useCallback } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';
import { useDispatch, useSelector } from '../../../config/store';
import { changeEmail, changeName, changePassword, register } from '../logic/actions';
import { navigate } from '../../services/logic/actions';

const Register = () => {
	useScreenTracker('Register');
	const dispatch = useDispatch();
	const name = useSelector(state => state.auth.name);
	const email = useSelector(state => state.auth.email);
	const password = useSelector(state => state.auth.password);

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
			<TextInput
				value={name}
				placeholder={'Name'}
				onChangeText={onChangeName}
				returnKeyType={'next'}
				autoCapitalize={'words'}
			/>
			<TextInput
				value={email}
				placeholder={'Email'}
				onChangeText={onChangeEmail}
				returnKeyType={'next'}
				autoCapitalize={'none'}
				keyboardType={'email-address'}
			/>
			<TextInput
				value={password}
				placeholder={'Password'}
				onChangeText={onChangePassword}
				returnKeyType={'done'}
				autoCapitalize={'none'}
				secureTextEntry
			/>
			<Button title={'Register'} onPress={onRegisterTouched} />
			<Button title={'Login'} onPress={onLoginTouched} />
		</View>
	);
};

export default Register;
