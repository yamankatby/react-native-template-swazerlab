import React, { useCallback, useEffect } from 'react';
import { Button, Image, TextInput, View } from 'react-native';
import { useScreenTracker } from '../../../config/firebase';
import { useDispatch, useSelector } from '../../../config/store';
import {
	changeDraftProfileName,
	changeProfilePhoto,
	clearDraftProfile,
	setDraftProfile,
	updateProfile,
} from '../logic/actions';
import { useFirstRender } from '../../../config/utilities';

const EditProfile = () => {
	useScreenTracker('EditProfile');
	const dispatch = useDispatch();
	const photoURL = useSelector(state => state.profile.draftProfile?.photoURL);
	const name = useSelector(state => state.profile.draftProfile?.name);

	useFirstRender(() => {
		dispatch(setDraftProfile());
	});
	useEffect(() => () => {
		dispatch(clearDraftProfile());
	}, []);

	const onChoosePhotoTouched = useCallback(() => {
		dispatch(changeProfilePhoto());
	}, []);

	const onChangeName = useCallback((name: string) => {
		dispatch(changeDraftProfileName(name));
	}, []);

	const onUpdateProfileTouched = useCallback(() => {
		dispatch(updateProfile());
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

			<TextInput
				value={name}
				placeholder={'Full Name'}
				onChangeText={onChangeName}
				returnKeyType={'next'}
				autoCapitalize={'words'}
			/>
			<Button title={'Save Profile'} onPress={onUpdateProfileTouched} />
		</View>
	);
};

export default EditProfile;

