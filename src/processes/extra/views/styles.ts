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

export const useHelpCenterStyles = () => useStyleSheet(({ palette }) => StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 24,
		color: palette.accent(),
		textAlign: 'center',
		marginTop: 46,
	},
	text: {
		fontSize: 15,
		color: palette.text(),
		textAlign: 'center',
		marginVertical: 10,
		marginHorizontal: 14,
	},
	infoContainer: {
		marginTop: 10,
		opacity: 0.95,
	},
}));
