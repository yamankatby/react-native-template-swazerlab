import { StyleSheet } from 'react-native';
import { useStyles } from '../../assets/styles';

export const useSegmentedViewStyles = () => useStyles((palette, fontMaker) => StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',

		overflow: 'hidden',
		borderRadius: 100,

		backgroundColor: 'rgba(128,128,128,0.12)',
	},

	segmentContainer: {
		flex: 1,

		overflow: 'hidden',
		borderRadius: 100,
	},

	// @ts-ignore
	segment: (selected: boolean) => {
		const styles = {
			alignItems: 'center',
			paddingVertical: 5,
			paddingHorizontal: 20,
		};
		const selectedStyles = {
			backgroundColor: palette.alpha(0.2),
			borderRadius: 100,
		};

		return selected ? { ...styles, ...selectedStyles } : styles;
	},

	// @ts-ignore
	segmentTitle: (selected: boolean) => {
		const styles = {
			color: palette.text(1.5),
			fontSize: 16,

			...fontMaker({ weight: '500' }),
		};

		const selectedStyles = {
			color: palette.accent(),
		};

		return selected ? { ...styles, ...selectedStyles } : styles;
	},
}));
