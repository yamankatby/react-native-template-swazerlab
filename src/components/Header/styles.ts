import { Platform, StyleSheet } from 'react-native';

export const headerContainerStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export const headerButtonStyles = StyleSheet.create({
	// @ts-ignore
	container: (position: 'start' | 'end', spacing: number) => ({
		flexDirection: 'row',
		alignItems: 'center',

		...(position === 'start' ? { marginStart: spacing } : { marginEnd: spacing }),
		padding: 4,
	}),
	// @ts-ignore
	title: (color: string, position: 'start' | 'end', hasIcon: string) => ({
		fontSize: Platform.OS === 'ios' ? 17 : 15,
		fontWeight: Platform.OS === 'ios' ? '700' : '500',

		color,

		marginStart: position === 'end' && hasIcon ? 6 : 0,
		marginEnd: position === 'start' && hasIcon ? 6 : 0,
	}),
	activityIndicator: {
		marginStart: 0.5,
		marginEnd: 0.5,
	},
});
