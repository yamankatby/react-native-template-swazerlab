import { Platform, StatusBar, StyleSheet } from 'react-native';
import { hasNotch } from '../../config/utilities';

export default StyleSheet.create({
// @ts-ignore
	alert: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,

		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowRadius: 4,
				shadowOpacity: 0.4,
				shadowOffset: { height: 6 },
			},
			android: {
				elevation: 3,
				paddingTop: StatusBar.currentHeight,
			},
		}),
	},

	touchable: {
		paddingTop: (Platform.OS === 'ios' ? (hasNotch() ? 46 : 32) : 22),
		paddingBottom: 20,
	},

	container: {
		flexDirection: 'row',
		marginStart: 12,
	},

	noContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 0.001,
		height: 0.001,
	},

	textContainer: {
		flex: 1,
		marginStart: 12,
		marginEnd: 12,

		justifyContent: 'center',
	},

	title: {
		fontSize: 16,
		textAlign: 'left',
		color: '#fff',
	},
	message: {
		fontSize: 14,
		textAlign: 'left',
		color: '#fff',

	},
});
