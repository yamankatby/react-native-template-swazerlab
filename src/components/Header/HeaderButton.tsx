import * as React from 'react';
import {
	ActivityIndicator,
	Dimensions,
	Platform,
	ScaledSize,
	Text,
	TextStyle,
	TouchableNativeFeedback,
	View,
	ViewStyle,
} from 'react-native';

import Icon, { IconName } from '../../assets/icons';
import { headerButtonStyles as styles } from './styles';
import Touchable from '../Button/Touchable';
import { Palette } from '../../assets/styles';

export interface Props {
	style?: ViewStyle,

	title: string,
	titleStyle?: TextStyle,
	icon?: IconName,

	androidBehavior?: 'title' | 'icon' | 'both-always' | 'both-if-room',
	iosBehavior?: 'title' | 'icon' | 'both-always' | 'both-if-room',

	position?: 'start' | 'end',
	spacing?: number,
	disabled?: boolean,
	loading?: boolean,
	accentColor?: string,
	onPress?: () => void,
	palette: Palette;
}

export interface State {
	dimensions: ScaledSize,
}

class HeaderButton extends React.PureComponent<Props, State> {
	public static defaultProps = {
		androidBehavior: 'icon',
		iosBehavior: 'title',

		position: 'end',
		spacing: 12,
		disabled: false,
		loading: false,
	};

	constructor(props: Props) {
		super(props);
		this.state = { dimensions: Dimensions.get('window') };
	}

	onDimensionsChange = ({ window }: { window: ScaledSize }) => {
		this.setState({ dimensions: window });
	};

	componentDidMount() {
		Dimensions.addEventListener('change', this.onDimensionsChange);
	}

	componentWillUnmount() {
		Dimensions.removeEventListener('change', this.onDimensionsChange);
	}

	public render() {
		const { title, icon, androidBehavior, iosBehavior, position = 'end', spacing, disabled, loading, accentColor, onPress } = this.props;
		let behavior = Platform.select({ android: androidBehavior, ios: iosBehavior });

		if (behavior === 'both-if-room') {
			const { dimensions } = this.state;
			const isTablet = (dimensions?.width || 320) >= 720;
			const hasIcon = !!icon;
			behavior = isTablet ? 'both-always' : (hasIcon ? 'icon' : 'title');
		}

		const renderIcon = () => {
			if (loading || !icon || behavior === 'title') return;
			return (
				<Icon
					name={icon}
					tintColor={accentColor || this.props.palette.header('foreground')}
				/>
			);
		};

		const renderTitle = () => {
			if (icon && behavior === 'icon') return;
			return (<Text
					style={[styles.title(accentColor || this.props.palette.header('foreground'), position, icon && behavior !== 'title'), this.props.titleStyle]}>
					{title}
				</Text>
			);
		};

		const renderActivityIndicator = () => {
			if (!loading) return;

			return (
				<ActivityIndicator
					style={styles.activityIndicator}
					size={23}
					color={accentColor || this.props.palette.header('foreground')}
				/>
			);
		};

		const touchableProps = Platform.select({
			ios: {},
			android: {
				background: TouchableNativeFeedback.Ripple(this.props.palette.ripple(), true),
			},
		});

		return (
			<Touchable {...touchableProps} onPress={onPress} disabled={loading || disabled}
			           hitSlop={{ bottom: 6, top: 6, left: 6, right: 6 }}>
				<View style={[styles.container(position, spacing), this.props.style]}>
					{renderIcon()}
					{renderActivityIndicator()}
					{renderTitle()}
				</View>
			</Touchable>
		);
	}
}
