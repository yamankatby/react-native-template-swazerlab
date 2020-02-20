import React from 'react';
import {
	Animated,
	Easing,
	LayoutChangeEvent,
	LayoutRectangle,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';

import MaskedInput, { Props as MaskedInputProps } from './MaskedInput';

import language from '../../assets/language';
import { getColorPalette } from './assets/colors';
import { palette, ThemeContext } from '../../assets/styles';
import { inputStyles as styles, OverlayGravity } from './styles';

export interface Props extends MaskedInputProps {
	theme?: 'dark' | 'light',
	accentColor?: string,

	containerStyle?: ViewStyle,
	style?: TextStyle,
	placeholderStyle?: TextStyle,
	disabled?: boolean,
	secureTextEntry?: boolean,
	interactive?: boolean,
	floatingPlaceholder?: boolean,

	overlayComponent?: ((isFocused: boolean) => React.ReactNode) | React.ReactNode,
	overlayStyle?: ViewStyle,
	overlayGravity?: OverlayGravity,
	onOverlayPress?: () => void,
}

interface State {
	focused: boolean,
	passwordVisible?: boolean,
	slide: Animated.Value,

	containerRect: LayoutRectangle,
	placeholderRect: LayoutRectangle,
}

class Input extends React.Component<Props, State> {
	public static defaultProps = {
		disabled: false,
		interactive: true,
		floatingPlaceholder: false,
		overlayGravity: 'flex-start',
		mask: 'default',
	};
	public static contextType = ThemeContext;

	private maskedInput = React.createRef<MaskedInput>();

	constructor(props: Props) {
		super(props);

		this.state = {
			focused: false,
			passwordVisible: props.secureTextEntry,
			slide: new Animated.Value(props.value ? 0 : 1),

			containerRect: { x: 0, y: 0, width: 0, height: 0 },
			placeholderRect: { x: 0, y: 0, width: 0, height: 0 },
		};
	}

	public UNSAFE_componentWillUpdate(nextProps: Props, nextState: State) {
		const { focused } = nextState;

		const focusChanged = this.state.focused !== focused;
		const valueChanged = this.props.value !== nextProps.value;
		const hasValue = !!nextProps.value;

		if (focusChanged) {
			Animated.timing(
				this.state.slide,
				{
					toValue: (focused || hasValue) ? 0 : 1,
					duration: 150,
					useNativeDriver: true,

					easing: Easing.inOut(Easing.quad),
				},
			).start();
		}

		if (!focused && valueChanged) {
			this.setState({
				slide: new Animated.Value(hasValue ? 0 : 1),
			});
		}
	}

	public onInputFocus = (e: any) => {
		this.setState({ focused: !this.state.focused });
		this.props.onFocus && this.props.onFocus(e);
	};
	public onInputBlur = (e: any) => {
		this.setState({ focused: !this.state.focused });
		this.props.onBlur && this.props.onBlur(e);
	};

	public onTogglePasswordPress = () => {
		this.setState({ passwordVisible: !this.state.passwordVisible });
	};

	public focus() {
		if (this.maskedInput.current) {
			this.maskedInput.current.focus();
		}
	}

	public blur() {
		if (this.maskedInput.current) {
			this.maskedInput.current.blur();
		}
	}

	public render() {
		const appTheme = this.context;

		const {
			theme,
			accentColor,

			disabled,
			secureTextEntry,
			interactive,

			overlayComponent,
			overlayGravity,
			onOverlayPress,

			floatingPlaceholder,
			placeholder,
			...remainingProps
		} = this.props;

		const { focused, passwordVisible } = this.state;
		const colorPalette = getColorPalette(theme || appTheme, accentColor || palette.accent());

		const paddingStart = overlayComponent && (overlayGravity === 'flex-start' || overlayGravity === 'space-between') ? 46 : 20;
		const paddingEnd = secureTextEntry ? 60 : overlayComponent && (overlayGravity === 'flex-end' || overlayGravity === 'space-between') ? 46 : 20;

		const renderComponentOverlay = () => {
			const overlay = () => typeof overlayComponent === 'function'
				? overlayComponent(focused)
				: overlayComponent;

			const overlayWithAction = () => (
				<TouchableOpacity
					style={styles.overlayAction(overlayGravity, interactive)}
					onPress={onOverlayPress}
					disabled={disabled}
				>
					{overlay()}
				</TouchableOpacity>
			);

			const combinedStyles = [
				styles.overlay(overlayGravity, interactive, floatingPlaceholder),
				this.props.overlayStyle,
			];

			if (!overlayComponent) {
				if (!interactive) {
					return <View style={combinedStyles} pointerEvents={interactive ? 'box-none' : 'auto'} />;
				}
			} else {
				return (
					<View style={combinedStyles} pointerEvents={interactive ? 'box-none' : 'auto'}>
						{onOverlayPress ? overlayWithAction() : overlay()}
					</View>
				);
			}
		};

		const renderTogglePasswordButton = () => {
			if (!secureTextEntry) return;

			const togglePasswordText =
				passwordVisible ? language.actionShow : language.actionHide;

			return (
				<TouchableOpacity
					style={styles.togglePasswordButton(floatingPlaceholder)}
					onPress={this.onTogglePasswordPress}
				>

					<Text style={styles.togglePasswordButtonText(colorPalette.text(disabled!))}>
						{togglePasswordText}
					</Text>
				</TouchableOpacity>
			);
		};

		const renderPlaceholder = () => {
			const { slide, containerRect, placeholderRect, focused } = this.state;
			const hasValue = !!this.props.value;
			if (hasValue && !floatingPlaceholder) return;

			const combinedStyles = [
				styles.placeholder(colorPalette.placeholder((floatingPlaceholder || false) && focused), paddingStart, paddingEnd),
				this.props.style,
				this.props.placeholderStyle,
			];
			if (floatingPlaceholder) {
				combinedStyles.unshift(styles.floatingPlaceholder(slide, containerRect, placeholderRect, paddingStart));
			}

			const Component = floatingPlaceholder ? Animated.Text : Text;
			const componentProps = floatingPlaceholder ? {
				onLayout: (event: LayoutChangeEvent) => this.setState({ placeholderRect: event.nativeEvent.layout }),
			} : {};

			return (
				<View style={styles.placeholderContainer(floatingPlaceholder)} pointerEvents='none'>
					<Component
						style={combinedStyles}
						adjustsFontSizeToFit
						allowFontScaling
						numberOfLines={1}
						{...componentProps}
					>
						{placeholder}
					</Component>
				</View>
			);
		};

		const combinedStyles = [
			{ flex: 1 },
			styles.input(colorPalette.text(disabled!), paddingStart, paddingEnd),
			this.props.style,
		];

		const componentProps = floatingPlaceholder ? {
			onLayout: (event: LayoutChangeEvent) => this.setState({ containerRect: event.nativeEvent.layout }),
		} : {};

		return (
			<View
				style={[styles.container(colorPalette.underline(focused), floatingPlaceholder), this.props.containerStyle]}
				{...componentProps}
			>
				<MaskedInput
					{...remainingProps}
					ref={this.maskedInput}
					style={combinedStyles}
					onFocus={this.onInputFocus}
					onBlur={this.onInputBlur}
					underlineColorAndroid={colorPalette.underline(focused)}
					keyboardAppearance={theme || appTheme}
					editable={!disabled}
					selectTextOnFocus={!disabled}
					secureTextEntry={passwordVisible}
				/>

				{renderPlaceholder()}
				{renderTogglePasswordButton()}
				{renderComponentOverlay()}
			</View>
		);
	}
}

export default Input;
