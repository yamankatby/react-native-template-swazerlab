import { StyleSheet } from 'react-native';
import { fontMaker } from '../../assets/styles';

export const sectionStyles = StyleSheet.create({
	container: {},

	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	// @ts-ignore
	title: (textColor: string) => ({
		marginHorizontal: 22,

		color: textColor,
		fontSize: 16,
		...fontMaker({ weight: '500' }),
	}),

	// @ts-ignore
	separator: (color: string) => ({
		marginStart: 18,
		marginTop: 32,
		height: 1,
		backgroundColor: color,
	}),
});
