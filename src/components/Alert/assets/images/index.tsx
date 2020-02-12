import React from 'react';
import { SvgProps } from 'react-native-svg';

import info from './info';
import warn from './warn';
import error from './error';
import success from './success';
import noConnection from './noConnection';

const svgs = {
	info,
	warn,
	error,
	success,
	noConnection,
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
