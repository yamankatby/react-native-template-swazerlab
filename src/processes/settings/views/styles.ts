import { StyleSheet } from 'react-native';
import { useStyleSheet } from '../../../assets/styles';

export const useSettingsStyles = () => useStyleSheet(({}) => StyleSheet.create({
	container: {
		flex: 1,
	},
}));
