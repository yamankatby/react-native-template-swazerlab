import React from 'react';
import { Platform, TouchableNativeFeedback, View, ViewStyle } from 'react-native';

import Touchable from '../Button/Touchable';
import { getColorPalette } from './assets/colors';
import styles from './styles';
import { usePalette } from '../../assets/styles';

interface Props {
	style?: ViewStyle,
	iconComponent: React.ReactNode | ((iconColor: string) => React.ReactNode),

	accentColor?: string,
	onPress?: () => void,
}

const Fab = (props: Props) => {
	const appPalette = usePalette();
	const palette = getColorPalette(props.accentColor || appPalette.accent());

	const { iconComponent } = props;
	const icon = typeof iconComponent === 'function'
		? iconComponent(palette.icon)
		: iconComponent;

	const touchableProps = Platform.select({
		ios: {},
		android: {
			background: TouchableNativeFeedback.Ripple(palette.ripple, false),
		},
	});

	return (
		<View style={[styles.container(palette), props.style]}>
			<Touchable style={styles.touchable} onPress={props.onPress} {...touchableProps}>
				<View style={styles.touchableContent}>
					{icon}
				</View>
			</Touchable>
		</View>
	);
};

export default Fab;
