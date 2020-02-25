import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const Settings = () => {
	useScreenTracker('Settings');
	return (
		<View>
			<Text>Hi, Settings Component!</Text>
		</View>
	);
};

export default Settings;
