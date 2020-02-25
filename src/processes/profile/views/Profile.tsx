import React from 'react';
import { Text, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';

const Profile = () => {
	useScreenTracker('Profile');
	return (
		<View>
			<Text>Hi, Profile Component!</Text>
		</View>
	);
};

export default Profile;
