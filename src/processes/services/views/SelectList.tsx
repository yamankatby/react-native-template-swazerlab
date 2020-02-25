import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const SelectList = () => {
	useScreenTracker('SelectList');
	return (
		<View>
			<Text>Hi, SelectList Component!</Text>
		</View>
	);
};

export default SelectList;
