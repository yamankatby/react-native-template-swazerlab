import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const HelpCenter = () => {
	useScreenTracker('HelpCenter');
	return (
		<View>
			<Text>Hi, HelpCenter Component!</Text>
		</View>
	);
};

export default HelpCenter;
