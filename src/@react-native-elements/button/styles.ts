import { Platform, StyleSheet } from 'react-native';
import { useStyleSheet } from '../kit';

interface Props {
	variant: 'contained' | 'text' | 'outlined';
	disabled: boolean;
	uppercase: boolean;
}

export const useButtonStyleSheet = (props: Props) => {
	const { variant, disabled, uppercase } = props;
	return useStyleSheet(({ palette, font }) => StyleSheet.create({
		container: {
			alignSelf: 'center',

			marginVertical: (Platform.OS === 'ios' ? 14 : 9),
			overflow: 'visible',
		},
		innerContainer: {
			alignSelf: 'stretch',
			borderRadius: Platform.OS === 'ios' ? 7 : 3,
			elevation: Platform.OS === 'android' && variant === 'contained' ? 2 : undefined,
			overflow: 'hidden',
		},
		button: {
			flexDirection: 'row',
			alignSelf: 'stretch',
			alignItems: 'center',
			justifyContent: 'center',

			paddingHorizontal: Platform.OS === 'ios' ? 35 : 22,
			paddingVertical: Platform.OS === 'ios' ? 14 : 10,
			borderRadius: Platform.OS === 'ios' ? 8 : 5,

			backgroundColor: variant === 'contained' ? disabled ? 'gray' : palette.accent() : 'transparent',
			borderWidth: variant === 'outlined' ? 1 : 0,
			borderColor: disabled ? 'gray' : palette.accent(),
		},
		title: {
			fontSize: 16,
			color: variant === 'contained' ? 'white' : disabled ? 'gray' : palette.accent(),
			...font.medium,
			textTransform: uppercase ? 'uppercase' : undefined,
		},
	}), [props]);
};
