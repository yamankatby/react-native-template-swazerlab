import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const AboutUs = () => {
	useScreenTracker('AboutUs');
	return (
		<View>
			<Text>Hi, AboutUs Component!</Text>
		</View>
	);
};

export default AboutUs;
