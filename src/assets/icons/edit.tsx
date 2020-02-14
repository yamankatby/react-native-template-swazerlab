import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from './index';
import { platform } from '../../config/utilities';

const ios = (props: IconProps) => (
	<Svg viewBox="0 0 26 24" height={24} width={26} {...props}>
		<Path
			d="M24.957,3.543 L22.457,1.043 L22.982,0.518 C23.672,-0.172 24.792,-0.172 25.482,0.518 C26.172,1.208 26.172,2.328 25.482,3.018 L24.957,3.543 Z M21.043,2.457 L23.543,4.957 L12.975,15.525 L10,16 L10.475,13.025 L21.043,2.457 Z M20,11.328 L22,9.329 L22,22 C22,23.105 21.105,24 20,24 L2,24 C0.895,24 0,23.105 0,22 L0,4 C0,2.895 0.895,2 2,2 L18.672,2 L12.672,8 L2,8 L2,22 L20,22 L20,11.328 Z"
			fill={props.tintColor || '#fff'}
		/>
	</Svg>
);

const android = (props: IconProps) => (
	<Svg viewBox="0 0 24 24" height={24} width={24} {...props}>
		<Path
			d="M3,17.2525 L3,21.0025 L6.75,21.0025 L17.81,9.9425 L14.06,6.1925 L3,17.2525 Z M20.71,7.0425 C21.1,6.6525 21.1,6.0225 20.71,5.6325 L18.37,3.2925 C17.98,2.9025 17.35,2.9025 16.96,3.2925 L15.13,5.1225 L18.88,8.8725 L20.71,7.0425 Z"
			fill={props.tintColor || '#fff'}
		/>
	</Svg>
);

export default platform(ios, android);
