import React from 'react';
import { ActivityIndicator, Platform, Text, TouchableNativeFeedback, View } from 'react-native';
import { useButtonStyleSheet } from './styles';
import Touchable from './Touchable';
import { usePalette } from '../kit';

interface Props {
	title: string;
	accessibilityLabel?: string;
	variant?: 'contained' | 'text' | 'outlined';
	disabled?: boolean;
	uppercase?: boolean;
	loading?: boolean;
	iconComponent?: ((props: { size: number; color: string }) => React.ReactChildren) | React.ReactChildren;
	onPress?: () => void;
	style?: object;
	innerStyle?: object;
	buttonStyle?: object;
	titleStyle?: object;
}

const Button = (props: Props) => {
	const {
		title,
		accessibilityLabel,
		variant,
		disabled,
		uppercase,
		loading,
		iconComponent,
		onPress,
		style,
		innerStyle,
		buttonStyle,
		titleStyle,
	} = props;
	const styles = useButtonStyleSheet({ variant: variant!, disabled: disabled!, uppercase: uppercase! });
	const palette = usePalette();
	const touchableProps = Platform.select({
		ios: {},
		android: {
			background: TouchableNativeFeedback.Ripple(palette.ripple(), false),
		},
	});
	return (
		<View style={[styles.container, style]}>
			<View style={[styles.innerContainer, innerStyle]}>
				<Touchable
					{...touchableProps}
					onPress={onPress}
					disabled={disabled}
					accessibilityLabel={accessibilityLabel}
					accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
					accessibilityComponentType={'button'}
					accessibilityRole={'button'}
					accessibilityStates={disabled ? ['disabled'] : []}
				>
					<View style={[styles.button, buttonStyle]}>
						{loading && (
							<ActivityIndicator
								style={{ marginEnd: 5 }}
								color={variant === 'contained' ? 'white' : disabled ? 'gray' : palette.accent()}
							/>
						)}
						<Text style={[styles.title, titleStyle]}>{title}</Text>
					</View>
				</Touchable>
			</View>
		</View>
	);
};

Button.defaultProps = {
	variant: 'contained',
	disabled: false,
	uppercase: true,
	loading: false,
};

export default Button;
