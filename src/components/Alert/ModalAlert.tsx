import React from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';

interface BluetoothAlertOptions {
	title?: string,
	message?: string,

	positiveButton?: string,
	negativeButton?: string,
	naturalButton?: string,

	onPositivePress?: () => void,
	onNegativePress?: () => void,
	onNaturalPress?: () => void,

	positiveButtonStyle?: 'default' | 'cancel' | 'destructive',
	negativeButtonStyle?: 'default' | 'cancel' | 'destructive',
	naturalButtonStyle?: 'default' | 'cancel' | 'destructive',

	actionSheetIos?: boolean,
	accentColor?: string,

	onDeviceSelected?: (macAddress: string) => void,
}

export default {
	showBluetoothDeviceAlert(options: BluetoothAlertOptions) {
		const { RNBluetoothDeviceDialogModule } = NativeModules;
		const RNBluetoothDeviceDialogEvents = new NativeEventEmitter(RNBluetoothDeviceDialogModule);

		RNBluetoothDeviceDialogEvents.addListener('bluetooth_dialog__device_selected', ({ value }) => {
			const { onDeviceSelected } = options;
			if (onDeviceSelected) onDeviceSelected(value);
			RNBluetoothDeviceDialogEvents.removeAllListeners('bluetooth_dialog__device_selected');
		});

		RNBluetoothDeviceDialogModule.showBluetoothDeviceDialog();
	},
};
