import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const OnBoarding = () => {
	useScreenTracker('OnBoarding');
	return (
		<View>
			<Text>Hi, OnBoarding Component!</Text>
		</View>
	);
};

export default OnBoarding;
