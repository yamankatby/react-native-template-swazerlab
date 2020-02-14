import React from 'react';
import Table, { Section, SwitchCell } from 'react-native-js-tableview';
import { usePalette, useTheme } from '../../../assets/styles';
import { useSettingsStyles } from './styles';
import { useDispatch } from '../../../config/store';
import { toggleTheme } from '../logic/actions';
import language from '../../../assets/language';

const Settings = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const palette = usePalette();
	const styles = useSettingsStyles();

	return (
		<Table
			style={styles.container}
			theme={theme === 'dark' ? 'midnight' : 'light'}
			accentColor={palette.accent()}
			scrollable
		>
			<Section>
				<SwitchCell value={theme === 'dark'} title={language.textDarkMode} onSwitch={() => dispatch(toggleTheme())} />
			</Section>
		</Table>
	);
};

export default Settings;
