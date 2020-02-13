import { useMemo } from 'react';
import { Platform } from 'react-native';
import chroma from 'chroma-js';
import { useSelector } from '../../config/store';
import { locale, Locale } from '../language';

export type Theme = 'light' | 'dark';
export type Palette = ReturnType<typeof generatePalette>;

type Level = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 3.6;
type Header = 'status-bar' | 'background' | 'border' | 'title-dark' | 'action-dark' | 'title-light' | 'action-light';

export const useTheme = () => {
	return useSelector(state => state.settings.theme);
};

export const usePalette = () => {
	const theme = useTheme();
	const accentColor = useSelector(state => state.settings.accentColor);
	return useMemo(() => {
		return generatePalette(theme, accentColor);
	}, [theme, accentColor]);
};

export const useStyleSheet = <T>(sheetFactory: (tools: { theme: Theme, palette: Palette, locale: Locale }) => T) => {
	const theme = useTheme();
	const palette = usePalette();
	return useMemo(() => {
		return sheetFactory({ theme, palette, locale });
	}, [palette]);
};

const generatePalette = (theme: Theme, accentColor: string) => {
	const pick = <L, D>(light: L, dark: D) => {
		return theme === 'light' ? light : dark;
	};
	const ripple = () => {
		return pick('rgba(255, 255, 255, .26)', 'rgba(0, 0, 0, .26)');
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

	const header = (witch: Header) => {
		switch (witch) {
			case 'status-bar':
				return chroma('#000').alpha(0.25).css();
			case 'background':
				return Platform.OS === 'ios' ? '#1B1B1B' : accent();
			case 'border':
				return '#3A3A3A';
			case 'title-dark':
				return Platform.OS === 'ios' ? '#0a0a0a' : darken(0.8).hex();
			case 'action-dark':
				return Platform.OS === 'ios' ? accent() : darken(0.8).hex();
			case 'title-light':
				return '#f5f5f5';
			case 'action-light':
				return Platform.OS === 'ios' ? accent() : '#f5f5f5';
		}
	};
	const background = (level: Level | 'primary' | 'secondary' = 'primary') => {
		if (level === 'primary') level = 0;
		if (level === 'secondary') level = 1;

		let scale = level * 0.04;
		if (theme !== 'dark') scale = scale + 0.9;

		return chroma.scale(['#1f1f1f', '#fff'])(scale).hex();
	};
	const text = (level: Level | 'title' | 'subtitle' = 'title') => {
		if (level === 'title') level = 0;
		if (level === 'subtitle') level = 2;

		let scale = level * 0.25;
		if (theme !== 'dark') scale = 1 - scale;

		return chroma.scale(['#f5f5f5', '#0a0a0a'])(scale).hex();
	};

	return { pick, ripple, accent, lighten, darken, alpha, header, text, background };
};
