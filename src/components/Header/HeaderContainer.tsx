import * as React from 'react';
import { View } from 'react-native';

import { headerContainerStyles as styles } from './styles';

interface Props {
	children: React.ReactNode,
}

const HeaderContainer = (props: Props) => (
	<View style={styles.container}>
		{props.children}
	</View>
);

export default HeaderContainer;
