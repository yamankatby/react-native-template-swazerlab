import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from './index';
import { platform } from '../../config/utilities';

const android = (props: IconProps) => (
	<Svg viewBox='0 0 24 24' height={24} width={24} {...props}>
		<Path
			d='M3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L5,3 C3.89,3 3,3.9 3,5 Z M15,9 C15,10.66 13.66,12 12,12 C10.34,12 9,10.66 9,9 C9,7.34 10.34,6 12,6 C13.66,6 15,7.34 15,9 Z M6,17 C6,15 10,13.9 12,13.9 C14,13.9 18,15 18,17 L18,18 L6,18 L6,17 Z'
			fill={props.tintColor || '#fff'}
		/>
	</Svg>
);

const ios = (props: IconProps) => (
	<Svg viewBox='0 0 24 24' height={24} width={24} {...props}>
		<Path
			d='M15,16 L15,14 C15.45,13.777 16.737,12.245 16.872,11.048 C17.226,11.021 17.782,10.696 17.946,9.413 C18.034,8.724 17.684,8.337 17.472,8.215 C17.472,8.215 18,7.212 18,6.001 C18,3.573 17.047,1.501 15,1.501 C15,1.501 14.289,0.001 12,0.001 C7.758,0.001 6,2.722 6,6.001 C6,7.105 6.528,8.215 6.528,8.215 C6.316,8.337 5.966,8.725 6.054,9.413 C6.218,10.696 6.774,11.021 7.128,11.048 C7.263,12.245 8.55,13.777 9,14 L9,16 C8,19 0,17 0,24 L24,24 C24,17 16,19 15,16 Z'
			fill={props.tintColor || '#fff'}
		/>
	</Svg>
);

export default platform(ios, android);
