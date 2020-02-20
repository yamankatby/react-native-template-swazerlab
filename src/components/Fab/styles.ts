import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
	// @ts-ignore
	container: (colorPalette: any) => {
		const length = Platform.OS === 'ios' ? 60 : 56;
		return {
			height: length,
			width: length,

			...Platform.select({
				android: {
					elevation: 10,
					overflow: 'hidden',
				},
				ios: {
					shadowColor: '#000',
					shadowRadius: 10,
					shadowOpacity: 0.25,
					shadowOffset: { height: 5 },
				},
			}),

			backgroundColor: colorPalette.background,

			borderRadius: 100,
			borderWidth: 0.5,
			borderColor: colorPalette.border,
		};
	},
	touchable: {
		flex: 1,
		alignSelf: 'stretch',
	},
	touchableContent: {
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
