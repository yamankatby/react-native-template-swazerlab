import { Animated, LayoutRectangle, Platform, StyleSheet } from 'react-native';
import { fontMaker, locale } from '../../assets/styles';

export type OverlayGravity = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

export const inputStyles = StyleSheet.create({
	// @ts-ignore
	container: (borderColor: string, floatingPlaceholder: boolean) => ({
		flexDirection: 'row',

		...(floatingPlaceholder ? {
			paddingTop: 8,
		} : {}),

		...Platform.select({
			ios: {
				height: 48,
				marginVertical: 6,

				borderWidth: 0.5,
				borderRadius: 8,
				borderColor,
			},
			android: {
				marginVertical: 9,
			},
		}),
	}),

	// @ts-ignore
	input: (textColor: string, paddingStart: number, paddingEnd: number) => ({
		fontSize: 16,
		color: textColor,

		paddingStart,
		paddingEnd,

		...fontMaker(),
	}),

	// @ts-ignore
	placeholderContainer: (floatingPlaceholder: boolean) => ({
		position: 'absolute',
		start: 0,
		top: 0,
		end: 0,
		bottom: 1,
		flexDirection: 'row',
		alignItems: 'center',

		...(floatingPlaceholder ? {
			marginTop: 8,
		} : {}),
	}),

	// @ts-ignore
	placeholder: (textColor: string, paddingStart: number, paddingEnd: number) => ({
		fontSize: 16,
		color: textColor,

		marginStart: paddingStart,
		marginEnd: paddingEnd,

		...fontMaker(),
	}),

	// @ts-ignore
	floatingPlaceholder: (slide: Animated.Value, containerRect: LayoutRectangle, placeholderRect: LayoutRectangle, paddingStart: number) => {
		const scale = 16 / (placeholderRect.height || 16);
		const newWidth = placeholderRect.width * scale;

		let translateX = placeholderRect.width / -2 + (newWidth / 2) - paddingStart + 12;
		if (locale.isRtl()) translateX *= -1;
		const translateY = (containerRect.height / -2) + (scale * 4);

		return {
			transform: [{
				translateX: slide.interpolate({
					inputRange: [0, 1],
					outputRange: [translateX, 0],
				}),
			}, {
				translateY: slide.interpolate({
					inputRange: [0, 1],
					outputRange: [translateY, 0],
				}),
			}, {
				scale: slide.interpolate({
					inputRange: [0, 1],
					outputRange: [scale, 1],
				}),
			}],
		};
	},

	// @ts-ignore
	togglePasswordButton: (floatingPlaceholder: boolean) => ({
		position: 'absolute',
		top: floatingPlaceholder ? 8 : 0,
		right: 8,
		bottom: 0,

		justifyContent: 'center',

		backgroundColor: 'transparent',
	}),

	// @ts-ignore
	togglePasswordButtonText: (textColor: string) => ({
		fontSize: 13,
		padding: 8,

		color: textColor,
	}),

	// @ts-ignore
	overlay: (gravity: OverlayGravity, interactive: boolean, floatingPlaceholder: boolean) => ({
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: gravity,

		...(interactive ? {} : {
			backgroundColor: 'transparent',
		}),
		...StyleSheet.absoluteFillObject,
		top: floatingPlaceholder ? 8 : 0,

		paddingStart: 12,
		paddingEnd: (Platform.OS === 'ios' ? 20 : 12),
		paddingBottom: Platform.OS === 'ios' ? 0 : 2,
	}),

	// @ts-ignore
	overlayAction: (gravity: OverlayGravity, interactive: boolean) => ({
		...(interactive ? {} : {
			backgroundColor: 'transparent',
			flex: 1,
			flexDirection: 'row',
			justifyContent: gravity,
		}),
	}),
});

export const autocompleteInputStyles = StyleSheet.create({
	container: {},

	// @ts-ignore
	listContainer: (listHeight: number, background: string, scale: Animated.Value, opacity: Animated.Value) => ({
		position: 'absolute',

		top: -14,
		start: 0,
		end: 0,
		height: listHeight,

		zIndex: 1000,

		overflow: 'hidden',
		backgroundColor: background,
		borderRadius: 2,

		elevation: 12,

		transform: [{ scale }],
		opacity,
	}),

	itemContainer: {
		justifyContent: 'space-around',
		height: 48,
	},

	// @ts-ignore
	item: (textColor: string) => ({
		marginHorizontal: 18,

		fontSize: 16,
		color: textColor,
	}),
});
