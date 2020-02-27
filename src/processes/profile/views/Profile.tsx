import React from 'react';
import Table, { Section, StaticCell } from 'react-native-js-tableview';
import { useScreenTracker } from '../../../config/firebase';
import { useDispatch } from '../../../config/store';
import { logOut } from '../../auth/logic/actions';

const Profile = () => {
	useScreenTracker('Profile');
	const dispatch = useDispatch();
	return (
		<Table>
			<Section>
				<StaticCell title={'Log Out'} onPress={() => dispatch(logOut())} />
			</Section>
		</Table>
	);
};

export default Profile;
