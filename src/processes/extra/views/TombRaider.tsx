import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const TombRaider = () => {
	useScreenTracker('TombRaider');
	return (
		<View>
			<Text>Hi, TombRaider Component!</Text>
		</View>
	);
};

export default TombRaider;
