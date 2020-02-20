import React from 'react';
import { findNodeHandle, NativeModules, TextInput, TextInputProps } from 'react-native';

const TextInputModule = NativeModules.RNTextInputModule;

type Mask =
	{
		type: 'money',
		currency?: string,
		precision?: number,
	}
	| { type: 'credit-card', }
	| { type: 'phone-number' };

export type Props = TextInputProps & {
	value?: string,
	mask?: Mask,
	onChangeText?: (clearText: string, maskedText: string) => void,
};

type State = {
	finalValue?: string,
}

class MaskedInput extends React.Component<Props, State> {
	private input = React.createRef<TextInput>();

	constructor(props: Props) {
		super(props);
		this.state = { finalValue: undefined };
	}

	public componentDidMount() {
		this.updateMask(this.props);
		this.updateValue(this.props);
	}

	public UNSAFE_componentWillReceiveProps(nextProps: Props) {
		const { mask, value } = nextProps;

		if (this.props.mask !== mask) {
			this.updateMask(nextProps);
		}

		if (this.props.value !== value) {
			this.updateValue(nextProps);
		}
	}

	public componentWillUnmount() {
		const tag = findNodeHandle(this.input.current);
		const { unsetMask } = TextInputModule;
		unsetMask(tag);
	}

	public focus() {
		if (this.input.current) {
			this.input.current.focus();
		}
	}

	public blur() {
		if (this.input.current) {
			this.input.current.blur();
		}
	}

	public hasMask = (mask?: Mask) => {
		return mask &&
			typeof mask === 'object' && (
				mask.type === 'money' ||
				mask.type === 'credit-card' ||
				mask.type === 'phone-number'
			);
	};

	public updateMask(props: Props) {
		const { setMask, unsetMask } = TextInputModule;
		const tag = findNodeHandle(this.input.current);

		if (this.hasMask(props.mask)) {
			const map = { ...props.mask, tag };
			setMask(map);
		} else {
			unsetMask(tag);
		}
	}

	public updateValue(props: Props) {
		const input = this.input.current;
		if (!input) return;

		if (this.hasMask(props.mask)) {
			const { maskValue } = TextInputModule;
			const map = { ...props.mask, value: props.value };

			maskValue(map, (maskedValue: string) => {
				this.setState({ finalValue: maskedValue });
			});
		}
	}

	public onValueChanged = (newValue: string) => {
		if (!this.input.current?.isFocused()) return;
		this.setState({ finalValue: newValue });

		const { mask, onChangeText } = this.props;
		const { unmaskValue } = TextInputModule;

		if (onChangeText && this.hasMask(mask)) {
			const map = { ...mask, value: newValue };
			unmaskValue(map, (unmaskedValue: string) => onChangeText(unmaskedValue, newValue));
		}
	};

	public render() {
		const { mask, ...remainingProps } = this.props;

		const maskProps = this.hasMask(mask) ? {
			value: this.state.finalValue,
			onChangeText: this.onValueChanged,
		} : {};

		return (
			<TextInput
				{...remainingProps}
				{...maskProps}
				ref={this.input}
			/>
		);
	}
}

export default MaskedInput;
