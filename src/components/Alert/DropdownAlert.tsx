import React, { createRef } from 'react';
import { Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Timer from 'react-native-timer';

import {
	COLOR_CUSTOM,
	COLOR_ERROR,
	COLOR_INFO,
	COLOR_NO_CONNECTION,
	COLOR_SUCCESS,
	COLOR_WARNING,
} from './assets/config/colors';
import { darkenColor } from './assets/config/utilities';
import Icon from './assets/images';

import styles from './styles';

export type AlertType = 'info' | 'error' | 'warn' | 'success' | 'noConnection';

interface Props {
	type: AlertType;

	title: string;
	titleStyle?: any;
	titleNumOfLines?: number;

	message?: string;
	messageStyle?: any;
	messageNumOfLines?: number;

	visible?: boolean;
	duration?: number;

	statusBarColor: string;
	onDismiss?: (() => void) | false;
}

class DropdownAlert extends React.Component<Props> {
	private root = createRef<any>();

	public static defaultProps = {
		type: 'info',

		titleNumOfLines: 1,
		messageNumOfLines: 3,

		statusBarColor: COLOR_CUSTOM,
	};

	public componentDidUpdate(prevProps: Props) {
		if (prevProps.visible) {
			Timer.clearTimeout(this);
		}

		if (this.props.visible && this.props.duration !== 0) {
			const duration = this.getAlertDuration();

			Timer.setTimeout(this, 'dismissMsg', this.onTouchablePress.bind(this), duration);
		}
	}

	public componentWillUnmount() {
		Timer.clearTimeout(this);
	}

	public updateStatusBar = (onScreen: boolean) => {
		if (Platform.OS === 'ios') {
			const style = onScreen ? 'light-content' : 'default';
			StatusBar.setBarStyle(style, true);
		} else {
			const color = onScreen ? darkenColor(this.getAlertColor(), 25) : this.props.statusBarColor;
			StatusBar.setBackgroundColor(color, true);
		}
	};

	public onTouchablePress = () => {
		Timer.clearTimeout(this);
		this.updateStatusBar(false);

		const root = this.root.current;
		// @ts-ignore
		root && root.fadeOutUp(400).then(() => {
			const { onDismiss } = this.props;
			if (onDismiss) {
				onDismiss();
			}
		});
	};

	public getAlertColor = () => {
		switch (this.props.type) {
			case 'info':
			default:
				return COLOR_INFO;
			case 'error':
				return COLOR_ERROR;
			case 'warn':
				return COLOR_WARNING;
			case 'success':
				return COLOR_SUCCESS;
			case 'noConnection':
				return COLOR_NO_CONNECTION;
		}
	};

	public getAlertDuration = () => {
		const { type, duration } = this.props;

		if (duration && duration !== 0) {
			return duration;
		}

		switch (type) {
			case 'info':
			default:
				return 1800;
			case 'error':
				return 4200;
			case 'warn':
				return 3000;
			case 'success':
				return 3800;
			case 'noConnection':
				return 1400;
		}
	};

	public render() {
		if (!this.props.visible) {
			return null;
		}

		const { title, message, titleNumOfLines, messageNumOfLines } = this.props;

		const getIcon = (): React.ReactNode => {
			const type = this.props.type;
			return <Icon name={type} tintColor={'#fff'} />;
		};

		const getTitle = (): React.ReactNode => {
			if (title) {
				return <Text style={styles.title} numberOfLines={titleNumOfLines}>{title}</Text>;
			}
		};

		const getMessage = (): React.ReactNode => {
			if (message) {
				return <Text style={styles.message} numberOfLines={messageNumOfLines}>{message}</Text>;
			}
		};

		const getAlertStyle = (): any => {
			const alertColor = this.getAlertColor();
			return [styles.alert, { backgroundColor: alertColor }];
		};

		const getAnimationEasing = () => {
			switch (this.props.type) {
				case 'info':
					return 'ease-out-expo';
				case 'error':
				case 'noConnection':
					return 'ease-in-out-quart';
				case 'warn':
					return 'ease-out-cubic';
				case 'success':
					return 'ease-in-out-back';
				default:
					return 'ease-in-out';
			}
		};

		this.updateStatusBar(true);

		return (
			<Animatable.View
				ref={this.root}
				style={getAlertStyle()}
				animation='fadeInDown'
				duration={400}
				easing={getAnimationEasing()}
				useNativeDriver
			>
				<TouchableOpacity style={styles.touchable} onPress={this.onTouchablePress}>
					<View style={styles.container}>
						{getIcon()}
						<View style={styles.textContainer}>
							{getTitle()}
							{getMessage()}
						</View>
					</View>
				</TouchableOpacity>
			</Animatable.View>
		);
	}
}

export default DropdownAlert;
