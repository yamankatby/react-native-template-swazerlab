declare module 'react-native-number-stepper' {
	export interface RNNumberStepperProps {
		size?: number;

		width?: number,
		height?: number,

		value?: number;
		minValue?: number;
		maxValue?: number;
		stepValue?: number;

		autoRepeat?: boolean;

		leftButtonText?: string;
		rightButtonText?: string;
		buttonsTextColor?: string;
		buttonsBackgroundColor?: string;
		buttonsContainerWidth?: number;

		labelTextColor?: string;
		labelBackgroundColor?: string;

		cornorRadius?: number;
		borderWidth?: number;
		borderColor?: string;

		onChange?: (newValue: number) => void;
	}

	export class RNNumberStepper extends React.Component<RNNumberStepperProps> {
	}
}

declare module 'react-native-gesture-handler' {
	export class Swipeable extends React.Component<any> {
		public close(): any;
	}
}

declare module 'react-native-timer' {
	export function setTimeout(name: string, fn: () => void, interval: number): void;
	export function setTimeout(context: React.Component, name: string, fn: () => void, interval: number): void;

	export function clearTimeout(name: string): void;
	export function clearTimeout(context: React.Component): void;
	export function clearTimeout(context: React.Component, name: string): void;

	export function timeoutExists(name: string): boolean;
	export function timeoutExists(context: React.Component, name: string): boolean;

	export function setInterval(name: string, fn: () => void, interval: number): void;
	export function setInterval(context: React.Component, name: string, fn: () => void, interval: number): void;

	export function clearInterval(name: string): void;
	export function clearInterval(context: React.Component): void;
	export function clearInterval(context: React.Component, name: string): void;

	export function intervalExists(name: string): boolean;
	export function intervalExists(context: React.Component, name: string): boolean;

	export function setImmediate(name: string, fn: () => void, interval: number): void;
	export function setImmediate(context: React.Component, name: string, fn: () => void, interval: number): void;

	export function clearImmediate(name: string): void;
	export function clearImmediate(context: React.Component): void;
	export function clearImmediate(context: React.Component, name: string): void;

	export function immediateExists(name: string): boolean;
	export function immediateExists(context: React.Component, name: string): boolean;

	export function requestAnimationFrame(name: string, fn: () => void): void;
	export function requestAnimationFrame(context: React.Component, name: string, fn: () => void): void;

	export function cancelAnimationFrame(name: string): void;
	export function cancelAnimationFrame(context: React.Component): void;
	export function cancelAnimationFrame(context: React.Component, name: string): void;

	export function animationFrameExists(name: string): boolean;
	export function animationFrameExists(context: React.Component, name: string): boolean;
}

declare module 'react-native-android-location-enabler' {
	export function promptForEnableLocationIfNeeded(options?: { interval?: number, fastInterval?: number }): Promise<any>;
}

declare module 'react-native-system-setting' {
	export default class {
		public static isLocationEnabled(): Promise<any>;
	}
}

declare module 'react-native-print' {
	interface CommonOptions {
		isLandscape?: boolean;
	}

	interface HtmlOptions extends CommonOptions {
		html: string;
	}

	interface FileOptions extends CommonOptions {
		filePath: string;
	}

	export function print(options: HtmlOptions | FileOptions): Promise<any>;
}

declare module 'react-native-flexi-radio-button' {
	import { ViewStyle } from 'react-native';

	export interface RadioGroupProps {
		size?: number;
		thickness?: number;
		color?: string;
		activeColor?: string;
		highlightColor?: string;
		selectedIndex?: number;
		style?: ViewStyle;
		onSelect?: (index: number, value: any) => void;
	}

	export interface RadioButtonProps {
		value: any;
		style?: ViewStyle;
		color?: string;
		disabled?: boolean;
	}

	export class RadioGroup extends React.Component<RadioGroupProps> {
	}

	export class RadioButton extends React.Component<RadioButtonProps> {
	}
}

declare module 'rn-range-slider' {
	import { ViewStyle } from 'react-native';

	export interface RangeSliderProps {
		style: ViewStyle;

		min?: number;
		max?: number;
		step?: number;
		lowValue?: number;
		highValue?: number;

		onValueChanged?: (lowValue: number, highValue: number, fromUser: boolean) => void;

		rangeEnabled?: boolean;
		textFormat?: string;
		labelStyle?: 'none' | 'bubble';
		gravity?: 'top' | 'center' | 'bottom';

		lineWidth?: number;
		thumbRadius?: number;
		thumbBorderWidth?: number;
		textSize?: number;
		labelBorderWidth?: number;
		labelPadding?: number;
		labelBorderRadius?: number;
		labelTailHeight?: number;
		labelGapHeight?: number;

		selectionColor?: string;
		blankColor?: string;
		thumbColor?: string;
		thumbBorderColor?: string;
		labelBackgroundColor?: string;
		labelBorderColor?: string;
		labelTextColor?: string;
	}

	export default class RangeSlider extends React.PureComponent<RangeSliderProps> {

	}
}

declare module 'react-native-snackbar' {
	interface Action {
		title: string;
		color?: string | number;

		onPress?(): void;
	}

	interface SnackBarOptions {
		title: string;
		color?: string | number;
		duration?: number;
		backgroundColor?: string;
		action?: Action;
	}

	export default class {
		public static LENGTH_SHORT: number;
		public static LENGTH_LONG: number;
		public static LENGTH_INDEFINITE: number;

		public static show(options: SnackBarOptions): void;

		public static dismiss(): void;
	}
}

declare module 'react-native-nested-scroll-view' {
	import { ScrollViewProps } from 'react-native';

	export default class NestedScrollView extends React.Component<ScrollViewProps> {

	}
}
