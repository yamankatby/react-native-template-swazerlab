import { useMemo } from 'react';
import { generatePalette } from './palette';
import { useSelector } from '../../config/store';
import { locale, Locale } from '../language';

export type Theme = 'light' | 'dark';
export type Palette = ReturnType<typeof generatePalette>;

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

