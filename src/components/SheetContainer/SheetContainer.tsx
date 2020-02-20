import React from 'react';
import { Platform, ScrollView, StatusBar, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from './assets';

import { usePalette } from '../../assets/styles';
import styles from './styles';

interface Props {
	containerStyle?: ViewStyle,
	style?: ViewStyle,
	children: any,

	accentColor?: string,
	statusBarColor?: string,
	borderRadius?: number,

	dismissIcon?: 'close' | 'dismiss',
	dismissTint?: string,
	onDismissPress?: () => void,

	dockHeader?: boolean,
	header?: React.ReactNode | ((dismissButton: any) => React.ReactNode),
	headerStyle?: any,

	background?: any,
	backgroundStyle?: any,

	title?: string,
	titleMode?: 'compact' | 'central',
	titleStyle?: any,
}

const SheetContainer = (props: Props) => {
	const {
		children,
		accentColor,
		statusBarColor,
		borderRadius,

		dismissIcon,
		dismissTint,
		onDismissPress,

		dockHeader,
		header,

		background,

		title,
		titleMode,
	} = props;

	const palette = usePalette();

	const getBackground = () => {
		if (!background) return;

		return (
			<View style={[styles.background, props.backgroundStyle]}>
				{background}
			</View>
		);
	};

	const getHeader = () => {
		const isCenter = dismissIcon === 'dismiss' && titleMode === 'central';

		const dismissButton = (
			<TouchableOpacity key='dismiss' style={{ flex: 1 }} onPress={onDismissPress}>
				<View style={styles.dismissButton(isCenter ? 'center' : 'flex-start')}>
					<Icon name={dismissIcon || 'dismiss'} tintColor={dismissTint || accentColor || palette.accent()} />
					{
						title && titleMode === 'compact' &&
						<Text style={[styles.title(accentColor, true), props.titleStyle]}>{title}</Text>
					}
				</View>
			</TouchableOpacity>
		);

		return (
			<View style={[styles.header(dockHeader), props.headerStyle]}>
				{header
					? (typeof header === 'function' ? header(dismissButton) : header)
					: dismissButton
				}
			</View>
		);
	};

	const getTitle = () => {
		if (title && titleMode === 'central') {
			return (
				<Text style={[styles.title(accentColor || palette.accent(), false), props.titleStyle]}>
					{title}
				</Text>
			);
		}
	};

	const getContent = () => (
		<View style={props.style}>
			{children}
		</View>
	);

	const combinedStyles = [
		styles.container(borderRadius),
		props.containerStyle,
	];

	return (
		<>
			<StatusBar barStyle='dark-content' animated />
			<View style={styles.statusBarContainer(accentColor || palette.accent())}>
				{Platform.OS === 'android' &&
				<View style={styles.statusBar(statusBarColor || palette.header('status-bar'))} />}
			</View>
			<View style={combinedStyles}>
				{getBackground()}
				{dockHeader && getHeader()}
				<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='always'>
					{getTitle()}
					{getContent()}
				</ScrollView>
				{!dockHeader && getHeader()}
			</View>
		</>
	);
};

SheetContainer.defaultProps = {
	borderRadius: 20,
	dismissIcon: 'dismiss',
	dockHeader: true,
	titleMode: 'central',
};

export default SheetContainer;
