import React from 'react';
import {
	Platform,
	TouchableHighlight,
	TouchableHighlightProps,
	TouchableNativeFeedback,
	TouchableNativeFeedbackProps,
	TouchableOpacity,
	TouchableOpacityProps,
	TouchableWithoutFeedback,
	TouchableWithoutFeedbackProps,
} from 'react-native';

interface Props extends TouchableWithoutFeedbackProps, TouchableHighlightProps, TouchableOpacityProps, TouchableNativeFeedbackProps {
	children: React.ReactNode,
	androidBehavior?: 'without' | 'highlight' | 'opacity' | 'native',
	iosBehavior?: 'without' | 'highlight' | 'opacity',
}

const Touchable = (props: Props) => {
	const { androidBehavior, iosBehavior, ...remainingProps } = props;
	if (Platform.OS === 'android') {
		switch (props.androidBehavior) {
			case 'without':
				return <TouchableWithoutFeedback {...remainingProps} />;
			case 'highlight':
				return <TouchableHighlight {...remainingProps} />;
			case 'opacity':
				return <TouchableOpacity {...remainingProps} />;
			default:
				return <TouchableNativeFeedback {...remainingProps} />;
		}
	} else {
		switch (props.iosBehavior) {
			case 'without':
				return <TouchableWithoutFeedback {...remainingProps} />;
			case 'highlight':
				return <TouchableHighlight {...remainingProps} />;
			default:
				return <TouchableOpacity {...remainingProps} />;
		}
	}
};

Touchable.defaultProps = {
	androidBehavior: 'native',
	iosBehavior: 'opacity',
};

export default Touchable;
