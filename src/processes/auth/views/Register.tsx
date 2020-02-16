import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const Register = () => {
	useScreenTracker('Register');
	return (
		<View>
			<Text>Hi, Register Component!</Text>
		</View>
	);
};

export default Register;
