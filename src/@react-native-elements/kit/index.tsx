import React, { createContext, useContext, useMemo } from 'react';
import { Platform } from 'react-native';
import chroma from 'chroma-js';

// CONTEXT
export interface Theme {
	accent: string;
	isDark: boolean;
	direction: Direction;
	font: Font;
}

export interface Font {
	regular: object;
	regularItalic: object;
	medium: object;
	mediumItalic: object;
	bold: object;
	boldItalic: object;
}

export type Direction = 'ltr' | 'rtl';

export const DefaultTheme: Theme = {
	accent: Platform.OS === 'ios' ? '#007AFF' : '#6200EE',
	isDark: false,
	direction: 'ltr',
	font: {
		regular: {
			fontWeight: '400',
		},
		regularItalic: {
			fontWeight: '400',
			fontStyle: 'italic',
		},
		medium: {
			fontWeight: '500',
		},
		mediumItalic: {
			fontWeight: '500',
			fontStyle: 'italic',
		},
		bold: {
			fontWeight: '700',
		},
		boldItalic: {
			fontWeight: '700',
			fontStyle: 'italic',
		},
	},
};

export const ThemeContext = createContext<Theme>(DefaultTheme);

// CONTEXT PROVIDER
interface Props {
	accent?: string;
	isDark?: boolean;
	direction?: Direction;
	font?: Font;
	children?: any;
}

export const ThemeProvider = (props: Props) => {
	const { children, ...rest } = props;
	const theme = useMemo(() => ({ ...DefaultTheme, ...rest }), [rest]);
	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

// HOOKS
export const useDirection = () => useContext(ThemeContext).direction;
export const useFont = () => useContext(ThemeContext).font;
export const useIsDark = () => useContext(ThemeContext).isDark;
export const useTheme = () => useContext(ThemeContext);

export const usePalette = () => {
	const { isDark, accent } = useTheme();
	return useMemo(() => generatePalette(accent, isDark), [isDark, accent]);
};

export const useStyleSheet = function <T>(
	factory: (tools: { palette: Palette; isDark: boolean; direction: Direction; font: Font }) => T,
) {
	const { direction, isDark, font } = useTheme();
	const palette = usePalette();
	return useMemo(() => factory({ palette, isDark, direction, font }), [factory, palette, isDark, direction, font]);
};

// PALETTE
export type Palette = ReturnType<typeof generatePalette>;
export type Level = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 3.6;
export type Header = 'status-bar' | 'background' | 'foreground' | 'foreground-reversed';

const generatePalette = (accentColor: string, isDark: boolean) => {
	const pick = <D, L>(dark: D, light: L) => {
		return isDark ? dark : light;
	};
	const accent = () => {
		return accentColor;
	};
	const lighten = (value: number) => {
		return chroma.scale([accent(), '#fff'])(value);
	};
	const darken = (value: number) => {
		return chroma.scale([accent(), '#000'])(value);
	};
	const alpha = (value: number) => {
		return chroma(accent()).alpha(value);
	};
	const header = (value: Header) => {
		return {
			'status-bar': chroma('#000')
				.alpha(0.25)
				.css(),
			'background': accent(),
			'foreground': pick('#2d2d2d', '#ebebeb'),
			'foreground-reversed': pick('#ebebeb', '#2d2d2d'),
		}[value];
	};
	const background = (level: Level | 'primary' | 'secondary' = 'primary') => {
		if (level === 'primary') level = 0;
		if (level === 'secondary') level = 1;
		let scale = level * 0.04;
		if (!isDark) scale = scale + 0.9;
		return chroma
			.scale(['#1f1f1f', '#fff'])(scale)
			.hex();
	};
	const text = (level: Level | 'title' | 'subtitle' = 'title') => {
		if (level === 'title') level = 0;
		if (level === 'subtitle') level = 2;
		let scale = level * 0.25;
		if (!isDark) scale = 1 - scale;
		return chroma
			.scale(['#f5f5f5', '#0a0a0a'])(scale)
			.hex();
	};
	const ripple = () => {
		return pick('rgba(0, 0, 0, .35)', 'rgba(0, 0, 0, .26)');
	};

	return { pick, accent, lighten, darken, alpha, header, background, text, ripple };
};
