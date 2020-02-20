import React, { useRef } from 'react';
import { findNodeHandle, UIManager } from 'react-native';

import HeaderButton, { Props as HeaderButtonProps } from './HeaderButton';
import language from '../../assets/language';

interface Props extends HeaderButtonProps {
	items: string[],
	onSelect?: (selectedIndex: number) => void,
}

const HeaderMoreButton = (props: Props) => {
	const button = useRef<HeaderButton>(null);

	const { items, onSelect, ...remainingProps } = props;

	const onPress = () => {
		UIManager.showPopupMenu(
			findNodeHandle(button.current)!,
			items,
			() => undefined,
			(_, index) => {
				(index || index === 0) &&
				onSelect &&
				onSelect(index);
			},
		);
	};

	return (
		<HeaderButton
			ref={button}
			title={language.actionMore}
			icon='more'
			{...remainingProps}
			onPress={onPress}
		/>
	);
};

export default HeaderMoreButton;
