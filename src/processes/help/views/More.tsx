import React, { useMemo } from 'react';
import { Image } from 'react-native';
import Table, { BioCell, Section, StaticCell } from 'react-native-js-tableview';
import { useDispatch, useSelector } from '../../../config/store';
import { navigate } from '../../services/logic/actions';
import { usePalette, useTheme } from '../../../assets/styles';
import { useMoreStyles } from './styles';
import language from '../../../assets/language';
import { Icon } from '../../../components';

const More = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const palette = usePalette();
	const styles = useMoreStyles();

	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const name = useSelector(state => state.profile.name);
	const email = useSelector(state => state.profile.email);
	const photoURL = useSelector(state => state.profile.photoURL);

	const nameFirstCharacters = useMemo(() => {
		const nameWords = name.match(/\b\w/g) || [];
		return ((nameWords.shift() || '') + (nameWords.pop() || '')).toUpperCase();
	}, [name]);

	return (
		<Table
			style={styles.container}
			theme={theme === 'dark' ? 'midnight' : 'light'}
			accentColor={palette.accent()}
			scrollable
		>
			<Section separatorInsetLeft={54}>
				{!isLoggedIn && (
					<BioCell
						title={name}
						subtitle={email}
						accessory={'disclosure'}
						photoComponent={<Image source={{ uri: photoURL }} style={styles.photoContainer} />}
						subtitleStyle={styles.email}
						onPress={() => dispatch(navigate('Profile'))}
					/>
				)}
				<StaticCell
					title={language.titleSettings}
					accessory={'disclosure'}
					iconComponent={<Icon name={'settings'} />}
					onPress={() => dispatch(navigate('Settings'))}
				/>
			</Section>
			<Section header={language.titleMore} separatorInsetLeft={54}>
				<StaticCell
					title={language.titleHelpCenter}
					accessory={'disclosure'}
					iconComponent={<Icon name={'info'} />}
					onPress={() => dispatch(navigate('HelpCenter'))}
				/>
				<StaticCell
					title={language.actionTellFriend}
					iconComponent={<Icon name={'tellFriend'} />}
					onPress={() => dispatch(navigate('TellFriend'))}
				/>
			</Section>
		</Table>
	);
};

export default More;
