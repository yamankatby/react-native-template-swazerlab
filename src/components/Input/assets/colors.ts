export const getColorPalette = (theme: 'light' | 'dark', accent: string) => {
	const light = {
		underline: (hasFocus: boolean) => hasFocus ? accent : '#b4b4b4',
		placeholder: (hasFocus: boolean) => hasFocus ? accent : '#9E9E9E',
		text: (disabled: boolean) => disabled ? '#b5b5b5' : '#000',
		autocomplete: '#fff',
	};

	const dark = {
		underline: (hasFocus: boolean) => hasFocus ? accent : '#4b4b4b',
		placeholder: (hasFocus: boolean) => hasFocus ? accent : '#616161',
		text: (disabled: boolean) => disabled ? '#4b4b4b' : '#fff',
		autocomplete: '#303030',
	};

	return theme === 'dark' ? dark : light;
};
