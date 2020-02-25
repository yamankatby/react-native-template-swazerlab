import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/store';
import AppNavigator from './config/navigator';

const App = () => {
	return (
		<AppNavigator />
	);
};

export default () => (
	<Provider store={store}>
		<App />
	</Provider>
);
