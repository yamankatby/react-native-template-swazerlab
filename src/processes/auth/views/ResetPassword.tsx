import React, { useCallback } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';
import { useDispatch } from '../../../config/store';
import { changeEmail, sendResetPasswordEmail } from '../logic/actions';

const ResetPassword = () => {
	useScreenTracker('ResetPassword');
	const dispatch = useDispatch();

	const onChangeEmail = useCallback((email: string) => {
		dispatch(changeEmail(email));
	}, []);
	const onSendResetPasswordEmailTouched = useCallback(() => {
		dispatch(sendResetPasswordEmail());
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Text>Reset Your Password</Text>
			<TextInput onChangeText={onChangeEmail} />
			<Button title={'Reset Password'} onPress={onSendResetPasswordEmailTouched} />
		</View>
	);
};

export default ResetPassword;
