import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const EditProfile = () => {
	useScreenTracker('EditProfile');
	return (
		<View>
			<Text>Hi, EditProfile Component!</Text>
		</View>
	);
};

export default EditProfile;
