import { Platform, StyleSheet } from 'react-native';

export const nativeButtonStyles = StyleSheet.create({
	container: {
		alignSelf: 'center',

		marginVertical: (Platform.OS === 'ios' ? 14 : 9),
		overflow: 'visible',
	},
	innerContainer: {
		alignSelf: 'stretch',

		...Platform.select({
			ios: {
				borderRadius: 7,
			},
			android: {
				borderRadius: 3,
				elevation: 3,
			},
		}),
		overflow: 'hidden',
	},
	// @ts-ignore
	button: (height: number, accentColor: string) => ({
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		height,
		backgroundColor: accentColor,

		...Platform.select({
			ios: {
				paddingHorizontal: 35,
				paddingVertical: 14,

				borderRadius: 8,
			},
			android: {
				paddingHorizontal: 22,
				paddingVertical: 10,

				borderRadius: 4,
			},
		}),
	}),
	// @ts-ignore
	title: (textColor: string) => ({
		color: textColor,
		fontSize: 16,
		fontWeight: '500',
	}),
});
