import React from 'react';
import { Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';

import { ThemeContext } from '../../assets/styles';
import { getColorPalette } from './assets/colors';
import { sectionStyles as styles } from './styles';

interface Props {
	theme?: 'dark' | 'light';

	style?: ViewStyle;
	containerStyle?: ViewStyle;

	title?: string;
	titleStyle?: TextStyle;
	subtitle?: string;
	subtitleStyle?: TextStyle;
	children: React.ReactNode;
	hideSeparator?: boolean;
}

class Section extends React.PureComponent<Props> {
	private subtitleRef = React.createRef<TextInput>();

	public static defaultProps = {
		hideSeparator: false,
	};
	public static contextType = ThemeContext;

	public setSubtitle(subtitle: string) {
		if (this.subtitleRef.current) {
			this.subtitleRef.current.setNativeProps({ text: subtitle });
		}
	}

	public render() {
		const appTheme = this.context;
		const { theme, title, subtitle, children, hideSeparator } = this.props;

		const containerProps = this.props.containerStyle ? { style: this.props.containerStyle } : {};
		const palette = getColorPalette(theme || appTheme);

		return (
			<View style={[styles.container, this.props.style]}>
				<View style={styles.titleContainer}>
					<Text
						style={[styles.title(palette.title), this.props.titleStyle]}
					>
						{title}
					</Text>

					<View style={{ flex: 1 }} />

					<TextInput
						ref={this.subtitleRef}
						style={[styles.title(palette.title), this.props.subtitleStyle]}
						editable={false}
						underlineColorAndroid='transparent'
					>
						{subtitle}
					</TextInput>
				</View>

				<View {...containerProps}>
					{children}
				</View>

				{!hideSeparator &&
				<View style={styles.separator(palette.separator)} />
				}
			</View>
		);
	}
}

export default Section;
