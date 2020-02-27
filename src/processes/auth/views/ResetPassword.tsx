import React, { useCallback } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';
import { useDispatch, useSelector } from '../../../config/store';
import { changeEmail, sendResetPasswordEmail } from '../logic/actions';

const ResetPassword = () => {
	useScreenTracker('ResetPassword');
	const dispatch = useDispatch();
	const email = useSelector(state => state.auth.email);

	const onChangeEmail = useCallback((email: string) => {
		dispatch(changeEmail(email));
	}, []);
	const onSendResetPasswordEmailTouched = useCallback(() => {
		dispatch(sendResetPasswordEmail());
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<TextInput
				value={email}
				placeholder={'Email'}
				onChangeText={onChangeEmail}
				returnKeyType={'next'}
				autoCapitalize={'none'}
				keyboardType={'email-address'}
			/>
			<Button title={'Reset Password'} onPress={onSendResetPasswordEmailTouched} />
		</View>
	);
};

export default ResetPassword;
