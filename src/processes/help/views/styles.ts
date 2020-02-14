import { Platform, StyleSheet } from 'react-native';
import { useStyleSheet } from '../../../assets/styles';

export const useMoreStyles = () => useStyleSheet(({ theme, palette }) => StyleSheet.create({
	container: {
		flex: 1,
	},
	photoContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 58,
		height: 58,
		marginVertical: 16,
		marginStart: 16,
		marginEnd: 2,
		backgroundColor: palette.accent(),
		borderRadius: (Platform.OS === 'ios' ? 15 : 50),
	},
	photoPlaceholder: {
		fontSize: 26,
		color: theme === 'light' ? 'white' : 'black',
		fontWeight: '600',
	},
	email: {
		fontSize: 16,
	},
}));
