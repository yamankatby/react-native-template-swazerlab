import { Platform, StyleSheet } from 'react-native';
import { useStyleSheet } from '../kit';

export const useTextInputStyleSheet = () => {
	return useStyleSheet(({ palette }) => StyleSheet.create({
		container: {
			...Platform.select({
				ios: {
					marginVertical: 6,
					height: 48,
					borderColor: palette.accent(),
					borderWidth: 1,
					borderRadius: 8,
				},
			}),
		},
		textInput: {
			flex: 1,
			paddingStart: 8,
			color: palette.text(),
		},
	}));
};
