import React from 'react';
import { SvgProps } from 'react-native-svg';
import { usePalette } from '../styles';

const icons = {};

export type IconName = keyof typeof icons;

export interface IconProps {
	name: IconName,
	tintColor?: string,
}

const Icon = (props: IconProps & SvgProps) => {
	const palette = usePalette();
	const Target = icons[props.name] as any;

	return <Target {...props} tintColor={props.tintColor || palette.accent()} />;
};

export default Icon;
