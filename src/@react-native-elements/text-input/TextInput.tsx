import React from 'react';
import { TextInput as RNTextInput, TextInputProps, View } from 'react-native';
import { usePalette } from '../kit';
import { useTextInputStyleSheet } from './styles';

interface Props extends TextInputProps {
	iconComponent?: ((props: { size: number; color: string }) => React.ReactChildren) | React.ReactChildren;
}

const TextInput = (props: Props) => {
	const { ...rest } = props;
	const palette = usePalette();
	const styles = useTextInputStyleSheet();

	return (
		<View style={styles.container}>
			<RNTextInput
				{...rest}
				style={[styles.textInput]}
				underlineColorAndroid={palette.accent()}
				selectionColor={palette.accent()}
			/>
		</View>
	);
};

export default TextInput;
