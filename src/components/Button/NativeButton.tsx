import React from 'react';
import { Platform, Text, TouchableNativeFeedback, View, ViewStyle } from 'react-native';

import Touchable from './Touchable';
import { getColorPalette } from './assets/colors';
import { nativeButtonStyles as styles } from './styles';
import { usePalette } from '../../assets/styles';

interface Props {
	style?: ViewStyle,
	innerStyle?: ViewStyle,

	title: string,
	titleStyle?: any,

	accentColor?: string,
	onPress?: () => void,

	disabled?: boolean,
}

const NativeButton = (props: Props) => {
	const { title, onPress, disabled } = props;
	const palette = usePalette();

	const height = props.style?.height;
	const colorPalette = getColorPalette(props.accentColor || palette.accent());

	const touchableProps = Platform.select({
		ios: {},
		android: {
			background: TouchableNativeFeedback.Ripple(colorPalette.ripple, false),
		},
	});

	return (
		<View style={[styles.container, props.style]}>
			<View style={[styles.innerContainer, props.innerStyle]}>
				<Touchable onPress={onPress} disabled={disabled} {...touchableProps}>
					<View style={styles.button(height, colorPalette.background)}>
						<Text style={[styles.title(disabled ? colorPalette.disabled : colorPalette.text), props.titleStyle]}>{title}</Text>
					</View>
				</Touchable>
			</View>
		</View>
	);
};

NativeButton.defaultProps = {
	disabled: false,
};

export default NativeButton;
