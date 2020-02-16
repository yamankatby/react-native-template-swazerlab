import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const Login = () => {
	useScreenTracker('Login');
	return (
		<View>
			<Text>Hi, Login Component!</Text>
		</View>
	);
};

export default Login;
