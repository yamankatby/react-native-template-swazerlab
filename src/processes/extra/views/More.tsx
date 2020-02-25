import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const More = () => {
	useScreenTracker('More');
	return (
		<View>
			<Text>Hi, More Component!</Text>
		</View>
	);
};

export default More;
