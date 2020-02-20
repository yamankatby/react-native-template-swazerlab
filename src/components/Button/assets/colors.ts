import chroma from 'chroma-js';

export const getColorPalette = (accent: string) => {
	const isDark = chroma(accent).luminance() <= 0.48;
	const scale = chroma.scale([accent, isDark ? '#fff' : '#000']);

	return {
		background: accent,
		ripple: scale(0.4).hex(),
		text: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.7)',
		disabled: isDark ? 'rgba(135,135,135,0.9)' : 'rgba(120,120,120,0.7)',
	};
};
