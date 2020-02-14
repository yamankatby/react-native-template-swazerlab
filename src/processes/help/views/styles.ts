import { Platform, StyleSheet } from 'react-native';
import { useStyleSheet } from '../../../assets/styles';

export const useMoreStyles = () => useStyleSheet(({ palette }) => StyleSheet.create({
	container: {
		flex: 1,
	},
	photoContainer: {
		width: 58,
		height: 58,
		marginVertical: 14,
		marginStart: 14,
		backgroundColor: palette.accent(),
		borderRadius: (Platform.OS === 'ios' ? 14 : 50),
	},
	email: {
		fontSize: 16,
	},
}));
