import React, { useCallback, useMemo } from 'react';
import { Image, Share } from 'react-native';
import Table, { BioCell, Section, StaticCell } from 'react-native-js-tableview';
import { Icon } from '../../../components';
import { useDispatch, useSelector } from '../../../config/store';
import { navigate } from '../../services/logic/actions';
import { usePalette, useTheme } from '../../../assets/styles';
import { useMoreStyles } from './styles';
import language from '../../../assets/language';
import { generateShareMessage } from '../../../config/utilities';
import { useScreenTracker } from '../../../config/firebase';

const More = () => {
	useScreenTracker('More');

	const dispatch = useDispatch();
	const theme = useTheme();
	const palette = usePalette();
	const styles = useMoreStyles();

	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const name = useSelector(state => state.profile.name);
	const email = useSelector(state => state.profile.email);
	const photoURL = useSelector(state => state.profile.photoURL);

	const onTellFriendTouched = useTellFriend();

	return (
		<Table
			style={styles.container}
			theme={theme === 'dark' ? 'midnight' : 'light'}
			accentColor={palette.accent()}
			scrollable
		>
			<Section separatorInsetLeft={54}>
				{isLoggedIn ? (
					<BioCell
						title={name}
						subtitle={email}
						accessory={'disclosure'}
						photoComponent={<Image source={{ uri: photoURL }} style={styles.photoContainer} />}
						subtitleStyle={styles.email}
						onPress={() => dispatch(navigate('Profile'))}
					/>
				) : undefined}
				<StaticCell
					title={language.titleSettings}
					accessory={'disclosure'}
					iconComponent={<Icon name={'settings'} />}
					onPress={() => dispatch(navigate('Settings'))}
				/>
			</Section>
			<Section header={language.titleMore} separatorInsetLeft={54}>
				<StaticCell
					title={language.actionTellFriend}
					iconComponent={<Icon name={'tellFriend'} />}
					onPress={onTellFriendTouched}
				/>
				<StaticCell
					title={language.titleHelpCenter}
					accessory={'disclosure'}
					iconComponent={<Icon name={'info'} />}
					onPress={() => dispatch(navigate('HelpCenter'))}
				/>
			</Section>
		</Table>
	);
};

export default More;

export const useTellFriend = () => {
	const palette = usePalette();
	const websiteURL = useSelector(state => state.settings.websiteURL);
	const appStoreIosURL = useSelector(state => state.settings.appStoreIosURL);
	const appStoreAndroidURL = useSelector(state => state.settings.appStoreAndroidURL);

	const title = useMemo(() => language.titleTellFriendMessage, []);
	const content = useMemo(() => language.textTellFriendMessage.replace('{0}', appStoreAndroidURL).replace('{1}', appStoreIosURL), [appStoreAndroidURL, appStoreIosURL]);
	const message = useMemo(() => generateShareMessage(title, content, websiteURL), [title, content, websiteURL]);

	return useCallback(() => {
		Share.share({ title, message }, {
			subject: title,
			tintColor: palette.accent(),
			dialogTitle: language.titleShare,
		});
	}, [title, message, palette]);
};
