import React from 'react';
import Table, { BioCell, Section, StaticCell } from 'react-native-js-tableview';
import { useScreenTracker } from '../../../config/firebase';
import { useDispatch, useSelector } from '../../../config/store';
import { navigate } from '../../services/logic/actions';

const More = () => {
	useScreenTracker('More');
	const dispatch = useDispatch();
	const name = useSelector(state => state.profile.profile?.name);
	const email = useSelector(state => state.profile.profile?.email);
	return (
		<Table>
			<Section>
				{name ? (
					<BioCell
						title={name}
						subtitle={email}
						accessory={'disclosure'}
						onPress={() => dispatch(navigate('Profile'))}
					/>
				) : (
					<StaticCell title={'Log In'} accessory={'disclosure'} onPress={() => dispatch(navigate('Login'))} />
				)}
			</Section>
		</Table>
	);
};

export default More;
