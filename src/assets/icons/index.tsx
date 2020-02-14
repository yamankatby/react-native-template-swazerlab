import React from 'react';
import { SvgProps } from 'react-native-svg';
import { usePalette } from '../styles';

import tellFriend from './tellFriend';
import info from './info';
import settings from './settings';
import edit from './edit';

const icons = {
	tellFriend,
	info,
	settings,
	edit,
};

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
