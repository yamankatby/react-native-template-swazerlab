import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const ResetPassword = () => {
	useScreenTracker('ResetPassword');
	return (
		<View>
			<Text>Hi, ResetPassword Component!</Text>
		</View>
	);
};

export default ResetPassword;
