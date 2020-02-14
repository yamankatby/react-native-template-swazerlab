import React from 'react';
import { Platform } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from './index';

export default (props: IconProps) => Platform.OS === 'android'
	? (
		<Svg viewBox='0 0 36 36' height={36} width={36} {...props}>
			<Path
				d='M16.5,25.5 L19.5,25.5 L19.5,16.5 L16.5,16.5 L16.5,25.5 Z M18,3 C9.7125,3 3,9.7125 3,18 C3,26.2875 9.7125,33 18,33 C26.2875,33 33,26.2875 33,18 C33,9.7125 26.2875,3 18,3 Z M18,30 C11.385,30 6,24.615 6,18 C6,11.385 11.385,6 18,6 C24.615,6 30,11.385 30,18 C30,24.615 24.615,30 18,30 Z M16.5,13.5 L19.5,13.5 L19.5,10.5 L16.5,10.5 L16.5,13.5 Z'
				fill={props.tintColor || '#fff'}
			/>
		</Svg>
	) : (
		<Svg viewBox='0 0 36 36' height={36} width={36} {...props}>
			<Path
				d='M17.3617165,3.01303053 C19.7650759,2.91352465 22.1672623,3.38508862 24.2997561,4.38744878 C27.9401201,6.05530174 30.8411617,9.25032923 32.1573863,13.0362693 C33.1672462,15.9014277 33.2724452,19.0758362 32.456436,22.0054979 C31.8084729,24.3527896 30.5721363,26.5356747 28.8922831,28.3015873 C27.0517922,30.2551789 24.6847448,31.6962841 22.1163507,32.4225474 C18.9970933,33.3243498 15.58671,33.1652437 12.5670918,31.9779142 C10.6054338,31.2240618 8.79834603,30.0276736 7.30041892,28.5021617 C5.57681994,26.7531615 4.29547021,24.5778726 3.60692542,22.2283291 C2.88151495,19.7616551 2.80439902,17.1113796 3.38620954,14.6129124 C4.03088128,11.7962622 5.52627318,9.17596399 7.62634026,7.17083078 C10.2260261,4.65880946 13.7561309,3.14992046 17.3617165,3.01303053 Z M17.5174697,4.97069309 C14.7806743,5.05372462 12.0785508,6.04574018 9.92321708,7.75385842 C7.80162562,9.42181307 6.22202789,11.7612416 5.47643314,14.3456004 C4.78706587,16.7154244 4.78706587,19.2821418 5.47653306,21.6523099 C6.01803667,23.5211248 6.98996688,25.2662206 8.29583595,26.71567 C9.58583301,28.1542554 11.1991099,29.299109 12.9801246,30.0379105 C14.7489875,30.7796975 16.6925499,31.1185921 18.6233461,31.0244291 C21.0615868,30.9151294 23.4629024,30.0985873 25.4618372,28.6983441 C27.3168414,27.4083435 28.826011,25.6244236 29.792283,23.5795043 C30.9274116,21.1955965 31.3036054,18.4488251 30.8606874,15.8232488 C30.5183544,13.769345 29.6711963,11.801363 28.4147439,10.1433416 C27.1702123,8.4906795 25.529704,7.14304992 23.6707345,6.24926556 C21.7883283,5.33052158 19.6554293,4.89095494 17.5174697,4.97069309 Z M17.654375,9.53595899 C18.580625,9.34016678 19.57875,9.96531682 19.806875,10.8907655 C20.08375,11.819362 19.516875,12.8889792 18.599375,13.1779458 C17.753125,13.4864287 16.730625,13.0684029 16.334375,12.2550154 C16.028125,11.6695274 16.0625,10.9190956 16.425,10.3663446 C16.696875,9.93257985 17.155,9.62850386 17.654375,9.53595899 Z M15.5,15.7975322 C16.75,15.7975322 18,15.7975322 19.25,15.7975322 C19.25,18.9453169 19.25,22.0924719 19.25,25.2402566 C19.66625,25.2415157 20.083125,25.2408861 20.5,25.2408861 C20.5,25.6608006 20.5,26.0800855 20.499375,26.5 C18.833125,26.5 17.166875,26.5 15.5,26.5 C15.5,26.0800855 15.5,25.6601711 15.5,25.2408861 C15.916875,25.2408861 16.333125,25.2408861 16.75,25.2408861 C16.75,22.513016 16.75,19.7845162 16.75,17.0566461 C16.333125,17.0566461 15.916875,17.0566461 15.5,17.0566461 C15.5,16.6367316 15.5,16.2174467 15.5,15.7975322 Z'
				fill={props.tintColor || '#fff'}
			/>
		</Svg>
	);