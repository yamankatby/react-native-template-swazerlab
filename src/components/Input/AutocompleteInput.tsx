import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, BackHandler, Easing, Text, TouchableNativeFeedback, View, ViewStyle } from 'react-native';
import NestedScrollView from 'react-native-nested-scroll-view';

import Input, { Props as InputProps } from './Input';
import { getColorPalette } from './assets/colors';
import { usePalette, useTheme } from '../../assets/styles';
import { autocompleteInputStyles as styles } from './styles';

interface Props<T> extends InputProps {
	inputContainerStyle?: ViewStyle;

	showOnFocus?: boolean;
	maxResultCount?: number;
	maxResultsListHeight?: number;

	data: T[];
	keyExtractor: (item: T) => string;
	titleExtractor: (item: T) => string;

	onSelectItem?: (item: T) => void;
	onChangeAutocompleteVisible?: (visible: boolean) => void;
}

const useScaleIn = (visible: boolean) => {
	const [isExisting, setExisting] = useState(visible);
	const opacity = useMemo(() => new Animated.Value(visible ? 1 : 0), []);
	const scale = useMemo(() => opacity.interpolate({ inputRange: [0, 1], outputRange: [0.95, 1] }), []);

	useEffect(() => {
		if (visible) {
			setExisting(true);
		}

		Animated.timing(
			opacity,
			{
				toValue: visible ? 1 : 0,
				duration: 100,
				useNativeDriver: true,

				easing: visible ? Easing.in(Easing.quad) : Easing.inOut(Easing.quad),
			},
		).start(() => {
			if (!visible) {
				setExisting(false);
			}
		});
	}, [visible]);

	return [isExisting, scale, opacity];
};

const AutocompleteInput = <T extends {}>(props: Props<T>) => {
	const { containerStyle, inputContainerStyle, showOnFocus, maxResultCount, maxResultsListHeight, data, keyExtractor, titleExtractor, onSelectItem, onChangeAutocompleteVisible, ...remainingProps } = props;

	const [isListVisible, setListVisible] = useState(false);

	const alteredData = useMemo(() => maxResultCount === 0 ? data : data.slice(0, maxResultCount), [maxResultCount, data]);
	const listHeight = useMemo(() => {
		const neededHeight = alteredData.length * 48;
		return neededHeight > maxResultsListHeight! ? maxResultsListHeight : neededHeight;
	}, [alteredData, maxResultsListHeight]);
	const shouldShowList = useMemo(() => isListVisible && alteredData.length > 0, [isListVisible, alteredData.length]);

	const input = useRef<Input>(null);
	const [isExisting, scale, opacity] = useScaleIn(shouldShowList);

	useEffect(() => {
		const onAndroidBackTouched = () => {
			setListVisible(false);
			onChangeAutocompleteVisible && onChangeAutocompleteVisible(false);
			return true;
		};

		if (shouldShowList) {
			BackHandler.addEventListener('hardwareBackPress', onAndroidBackTouched);
		}

		return () => {
			BackHandler.removeEventListener('hardwareBackPress', onAndroidBackTouched);
		};
	}, [shouldShowList]);

	const appTheme = useTheme();
	const appPalette = usePalette();
	const palette = getColorPalette(props.theme || appTheme, props.accentColor || appPalette.accent());

	const onTextChange = (clearText: string, maskedText: string) => {
		setListVisible(true);
		onChangeAutocompleteVisible && onChangeAutocompleteVisible(true);
		props.onChangeText && props.onChangeText(clearText, maskedText);
	};

	const onInputFocus = (e: any) => {
		if (showOnFocus) {
			setListVisible(true);
			onChangeAutocompleteVisible && onChangeAutocompleteVisible(true);
		}
		props.onFocus && props.onFocus(e);
	};

	const onInputBlur = (e: any) => {
		setListVisible(false);
		onChangeAutocompleteVisible && onChangeAutocompleteVisible(false);
		props.onBlur && props.onBlur(e);
	};

	const onItemTouched = (item: T) => {
		if (props.blurOnSubmit) {
			input?.current?.blur();
		}

		if (onSelectItem) {
			onSelectItem(item);
		}
	};

	const renderItem = (item: T) => (
		<TouchableNativeFeedback key={keyExtractor(item)} onPress={() => onItemTouched(item)}>
			<View style={styles.itemContainer}>
				<Text style={styles.item(palette.text(false))}>{titleExtractor(item)}</Text>
			</View>
		</TouchableNativeFeedback>
	);

	return (
		<View style={[styles.container, containerStyle]}>
			<Input
				{...remainingProps}
				containerStyle={inputContainerStyle}
				// @ts-ignore
				onChangeText={onTextChange}
				onFocus={onInputFocus}
				onBlur={onInputBlur}
				ref={input}
			/>

			{isExisting &&
			<View>
				<Animated.View style={styles.listContainer(listHeight, palette.autocomplete, scale, opacity)}>
					<NestedScrollView keyboardShouldPersistTaps={'handled'}>
						{alteredData.map(renderItem)}
					</NestedScrollView>
				</Animated.View>
			</View>
			}
		</View>
	);
};

AutocompleteInput.defaultProps = {
	showOnFocus: false,
	maxResultCount: 5,
	maxResultsListHeight: 200,

	blurOnSubmit: true,
};

export default AutocompleteInput;
