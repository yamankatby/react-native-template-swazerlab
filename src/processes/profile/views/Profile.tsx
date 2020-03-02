import React from 'react';
import { View } from 'react-native';
import Table, { BioCell, KeyValueCell, Section, StaticCell } from 'react-native-js-tableview';
import { useScreenTracker } from '../../../config/firebase';
import { useDispatch, useSelector } from '../../../config/store';
import { logOut } from '../../auth/logic/actions';
import { navigate } from '../../services/logic/actions';

const Profile = () => {
	useScreenTracker('Profile');
	const dispatch = useDispatch();
	const anonymous = useSelector(state => state.profile.profile?.anonymous);
	const name = useSelector(state => state.profile.profile?.name);
	const email = useSelector(state => state.profile.profile?.email);
	const phoneNumber = useSelector(state => state.profile.profile?.phoneNumber);

	if (anonymous) return <View />;
	return (
		<Table>
			<Section separatorInsetLeft={54}>
				<BioCell
					title={name!}
					subtitle={email}
					accessory={'disclosure'}
					onPress={() => dispatch(navigate('EditProfile'))}
				/>
				<StaticCell
					title={'Change Password'}
					accessory={'disclosure'}
					onPress={() => dispatch(navigate('ChangePassword'))}
				/>
			</Section>
			{(name || email || phoneNumber) && (
				<Section header={'Overview'}>
					{name && <KeyValueCell title={'Full Name'} value={name} />}
					{email && <KeyValueCell title={'Email'} value={email} />}
					{phoneNumber && <KeyValueCell title={'Phone Number'} value={phoneNumber} />}
				</Section>
			)}
			<Section>
				<StaticCell title={'Log Out'} onPress={() => dispatch(logOut())} />
			</Section>
		</Table>
	);
};

export default Profile;
