import React from 'react';
import { useDispatch } from '../../../config/store';
import { usePalette, useTheme } from '../../../assets/styles';
import Table, { Section, StaticCell } from 'react-native-js-tableview';
import { useMoreStyles } from './styles';
import language from '../../../assets/language';
import { navigate } from '../../services/logic/actions';

const More = () => {
	const dispatch = useDispatch();

	const theme = useTheme();
	const palette = usePalette();
	const styles = useMoreStyles();

	return (
		<Table
			style={styles.container}
			theme={theme}
			accentColor={palette.accent()}
			scrollable
		>

			<Section separatorInsetLeft={54}>
				<StaticCell
					title={language.titleSettings}
					accessory="disclosure"
					// onPress={() => dispatch(navigate('Settings'))}
				/>

				<StaticCell
					title={language.titleHelpCenter}
					accessory="disclosure"
					onPress={() => dispatch(navigate('HelpCenter'))}
				/>
			</Section>
			<Section header={language.titleMore} separatorInsetLeft={54}>
				<StaticCell
					title={language.titleHelpCenter}
					accessory="disclosure"
					onPress={() => dispatch(navigate('TellFriend'))}
				/>
			</Section>
		</Table>
	);
};

// More.navigationOptions = getNavOptions(language.titleMore, 'moreMenu');

export default More;
