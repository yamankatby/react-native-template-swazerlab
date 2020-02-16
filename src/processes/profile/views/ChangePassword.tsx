import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const ChangePassword = () => {
	useScreenTracker('ChangePassword');

	return (
		<View>
			<Text>Hi, ChangePassword Component!</Text>
		</View>
	);
};

export default ChangePassword;
