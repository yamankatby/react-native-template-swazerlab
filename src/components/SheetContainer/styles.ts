import { Platform, StatusBar, StyleSheet } from 'react-native';
import chroma from 'chroma-js';

import { hasNotch } from '../../config/utilities';
import { fontMaker } from '../../assets/styles';

export default StyleSheet.create({
	// @ts-ignore
	container: (borderRadius: number) => ({
		position: 'absolute',
		left: 0,
		top: (Platform.OS === 'ios' ? (hasNotch() ? 40 : 22) : 30),
		right: 0,
		bottom: 0,

		overflow: 'hidden',
		borderTopLeftRadius: borderRadius,
		borderTopRightRadius: borderRadius,

		backgroundColor: '#fff',
	}),

	// @ts-ignore
	statusBarContainer: (accentColor: string) => {
		if (Platform.OS === 'ios') {
			accentColor = chroma.scale([accentColor, '#fff'])(0.75).hex();
		}

		return {
			height: 80,
			backgroundColor: accentColor,
		};
	},

	// @ts-ignore
	statusBar: (statusBarColor: string) => {
		if (Platform.OS === 'ios') return {};
		return {
			...StyleSheet.absoluteFillObject,
			top: StatusBar.currentHeight,
			backgroundColor: statusBarColor,
		};
	},

	background: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
	},

	// @ts-ignore
	header: (dockHeader: boolean) => ({
		flexDirection: 'row',
		alignItems: 'center',

		...(dockHeader ? {} : {
			position: 'absolute',
			left: 0,
			top: 0,
			right: 0,
		}),
	}),

	// @ts-ignore
	dismissButton: (gravity: 'flex-start' | 'center' | 'flex-end') => ({
		flexDirection: 'row',
		justifyContent: gravity,

		marginHorizontal: 20,
		marginTop: 20,
		marginBottom: 8,
	}),

	// @ts-ignore
	title: (accentColor: string, compact: true) => ({
		...fontMaker({ weight: '500' }),

		color: accentColor,
		fontSize: compact ? 17 : 30,
		marginTop: compact ? 2 : 20,
		marginHorizontal: compact ? 18 : 36,
	}),
});
