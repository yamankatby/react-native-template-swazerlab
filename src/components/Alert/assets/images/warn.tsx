import React from 'react';
import { Platform } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from './index';

export default (props: IconProps) => Platform.OS === 'android'
	? (
		<Svg viewBox='0 0 36 36' height={36} width={36} {...props}>
			<Path
				d='M3,31 L33,31 L18,5 L3,31 Z M19.3636364,26.8947368 L16.6363636,26.8947368 L16.6363636,24.1578947 L19.3636364,24.1578947 L19.3636364,26.8947368 Z M19.3636364,21.4210526 L16.6363636,21.4210526 L16.6363636,15.9473684 L19.3636364,15.9473684 L19.3636364,21.4210526 Z'
				fill={props.tintColor || '#fff'}
			/>
		</Svg>
	) : (
		<Svg viewBox='0 0 36 36' height={36} width={36} {...props}>
			<Path
				d='M32.6345786,28.3833407 C33.2095145,29.2923918 33.1060187,30.516771 32.3240913,31.3122971 C31.8320934,31.8128508 31.1732112,32.0401375 30.5296585,31.9941573 L30.5261887,32 L5.47384588,32 L5.47037471,31.994155 C4.82681186,32.0401451 4.1679155,31.8128591 3.67590874,31.3122971 C2.89382423,30.5166122 2.79044397,29.2919011 3.36576797,28.3827933 L15.8726049,6.43613628 C16.2222546,5.59211562 17.0428572,5 18.0000173,5 C18.9571774,5 19.77778,5.59211562 20.1274297,6.43613628 L32.6345786,28.3833407 L32.6345786,28.3833407 Z M19.3984808,14.813913 L16.6015538,14.813913 L16.8323234,22.4126522 L19.1677113,22.4126522 L19.3984808,14.813913 Z M18.0034789,27.5262174 C18.9519417,27.5262174 19.5219425,27.0085217 19.5219425,26.1386522 C19.5219425,25.2523478 18.9519417,24.7346522 18.0034789,24.7346522 C17.046939,24.7346522 16.4769382,25.2523478 16.4769382,26.1386522 C16.4769382,27.0085217 17.0480929,27.5262174 18.0034789,27.5262174 Z'
				fill={props.tintColor || '#fff'}
			/>
		</Svg>
	);
