import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import Table, { BioCell, Section, StaticCell } from 'react-native-js-tableview';
import { useDispatch, useSelector } from '../../../config/store';
import { navigate } from '../../services/logic/actions';
import { usePalette, useTheme } from '../../../assets/styles';
import { useMoreStyles } from './styles';
import language from '../../../assets/language';

const More = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const palette = usePalette();
	const styles = useMoreStyles();

	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const name = useSelector(state => state.profile.name);
	const email = useSelector(state => state.profile.email);

	const nameFirstCharacters = useMemo(() => {
		const words = name.match(/\b\w/g) || [];
		return ((words.shift() || '') + (words.pop() || '')).toUpperCase();
	}, [name]);

	return (
		<Table style={styles.container} theme={theme === 'dark' ? 'midnight' : 'light'} accentColor={palette.accent()} scrollable>
			{
				!isLoggedIn &&
				<Section separatorInsetLeft={54}>
					<BioCell
						title={name}
						subtitle={email}
						accessory={'disclosure'}
						photoComponent={(
							<View style={styles.photoContainer}>
								<Text style={styles.photoPlaceholder}>{nameFirstCharacters}</Text>
							</View>
						)}
						subtitleStyle={styles.email}
						onPress={() => dispatch(navigate('Profile'))}
					/>
					<StaticCell
						title={'Edit Profile'}
						accessory={'disclosure'}
						onPress={() => dispatch(navigate('UpdateProfile'))}
					/>
				</Section>
			}

			<Section separatorInsetLeft={54}>
				<StaticCell
					title={language.titleSettings}
					accessory={'disclosure'}
					onPress={() => dispatch(navigate('Settings'))}
				/>
				<StaticCell
					title={language.titleHelpCenter}
					accessory={'disclosure'}
					onPress={() => dispatch(navigate('HelpCenter'))}
				/>
			</Section>
			<Section header={language.titleMore}>
				<StaticCell
					title={language.titleHelpCenter}
					accessory={'disclosure'}
					onPress={() => dispatch(navigate('TellFriend'))}
				/>
			</Section>
		</Table>
	);
};

export default More;
