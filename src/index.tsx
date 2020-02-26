import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './config/store';
import AppNavigator from './config/navigator';

const App = () => {
	return (
		<AppNavigator />
	);
};

export default () => (
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
