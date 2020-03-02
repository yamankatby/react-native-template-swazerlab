import React, { useCallback } from 'react';
import { Button, Image, View } from 'react-native';
import Table, { Section, StaticCell } from 'react-native-js-tableview';
import { useScreenTracker } from '../../../config/firebase';
import { useDispatch, useSelector } from '../../../config/store';
import { changeProfilePhoto } from '../logic/actions';

const EditProfile = () => {
	useScreenTracker('EditProfile');
	const dispatch = useDispatch();
	const photoURL = useSelector(state => state.profile.profile?.photoURL);

	const onChoosePhotoTouched = useCallback(() => {
		dispatch(changeProfilePhoto());
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Button title={'Change Photo'} onPress={onChoosePhotoTouched} />
			<Image source={{ uri: photoURL ? photoURL : 'https://www.simplyrecipes.com/wp-content/uploads/2019/04/Beef-Pho-LEAD-3-600x840.jpg' }} style={{
				width: 160,
				height: 160,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'red',
			}} />
			<Table>
				<Section>
					<StaticCell title={'fdsa'} />
				</Section>
			</Table>
		</View>
	);
};

export default EditProfile;

