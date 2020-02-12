import React from 'react';
import { Platform } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from './index';

export default (props: IconProps) => Platform.OS === 'android'
	? (
		<Svg viewBox='0 0 36 36' height={36} width={36} {...props}>
			<Path
				d='M12.5280068,25.1479687 L30.5860108,7 L33,9.42601565 L12.5280068,30 L3,20.4245248 L5.4139892,17.9985091 L12.5280068,25.1479687 Z'
				fill={props.tintColor || '#fff'}
			/>
		</Svg>
	) : (
		<Svg viewBox='0 0 36 36' height={36} width={36} {...props}>
			<Path
				d='M17.3617165,3.01303053 C19.7650759,2.91352465 22.1672623,3.38508862 24.2997561,4.38744878 C27.9401201,6.05530174 30.8411617,9.25032923 32.1573863,13.0362693 C33.1672462,15.9014277 33.2724452,19.0758362 32.456436,22.0054979 C31.8084729,24.3527896 30.5721363,26.5356747 28.8922831,28.3015873 C27.0517922,30.2551789 24.6847448,31.6962841 22.1163507,32.4225474 C18.9970933,33.3243498 15.58671,33.1652437 12.5670918,31.9779142 C10.6054338,31.2240618 8.79834603,30.0276736 7.30041892,28.5021617 C5.57681994,26.7531615 4.29547021,24.5778726 3.60692542,22.2283291 C2.88151495,19.7616551 2.80439902,17.1113796 3.38620954,14.6129124 C4.03088128,11.7962622 5.52627318,9.17596399 7.62634026,7.17083078 C10.2260261,4.65880946 13.7561309,3.14992046 17.3617165,3.01303053 Z M17.5174697,4.97069309 C14.7806743,5.05372462 12.0785508,6.04574018 9.92321708,7.75385842 C7.80162562,9.42181307 6.22202789,11.7612416 5.47643314,14.3456004 C4.78706587,16.7154244 4.78706587,19.2821418 5.47653306,21.6523099 C6.01803667,23.5211248 6.98996688,25.2662206 8.29583595,26.71567 C9.58583301,28.1542554 11.1991099,29.299109 12.9801246,30.0379105 C14.7489875,30.7796975 16.6925499,31.1185921 18.6233461,31.0244291 C21.0615868,30.9151294 23.4629024,30.0985873 25.4618372,28.6983441 C27.3168414,27.4083435 28.826011,25.6244236 29.792283,23.5795043 C30.9274116,21.1955965 31.3036054,18.4488251 30.8606874,15.8232488 C30.5183544,13.769345 29.6711963,11.801363 28.4147439,10.1433416 C27.1702123,8.4906795 25.529704,7.14304992 23.6707345,6.24926556 C21.7883283,5.33052158 19.6554293,4.89095494 17.5174697,4.97069309 Z M11.1364848,17.3678767 L15.4946889,21.7272965 L24.8637813,12.3634265 C25.2153512,12.0120526 25.7851996,12.0122115 26.1365735,12.3637813 C26.4879474,12.7153512 26.4877885,13.2851996 26.1362187,13.6365735 L16.1306414,23.6365735 C15.7791062,23.9879127 15.2093261,23.9877936 14.8579379,23.6363074 L9.86351516,18.6404915 C9.51209231,18.2889706 9.51217178,17.7191221 9.86369265,17.3676993 C10.2152135,17.0162764 10.785062,17.0163559 11.1364848,17.3678767 Z'
				fill={props.tintColor || '#fff'}
			/>
		</Svg>
	);
