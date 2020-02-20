import chroma from 'chroma-js';

export const getColorPalette = (theme: 'light' | 'dark') => {
	const light = {
		title: chroma('#000').alpha(0.7).css(),
		separator: chroma('#000').alpha(0.05).css(),
	};

	const dark = {
		title: chroma('#fff').alpha(0.7).css(),
		separator: chroma('#fff').alpha(0.05).css(),
	};

	return theme === 'dark' ? dark : light;
};
