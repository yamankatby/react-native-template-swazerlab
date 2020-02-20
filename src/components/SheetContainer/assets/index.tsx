import React from 'react';
import { SvgProps } from 'react-native-svg';

import dismiss from './dismiss';
import close from './close';

const svgs = {
	close,
	dismiss,
};

export interface IconProps extends SvgProps {
	name: keyof typeof svgs,
	tintColor?: string,
}

const Icon = (props: IconProps) => {
	const Target = svgs[props.name];
	return <Target {...props} />;
};

Icon.defaultProps = {};

export default Icon;
