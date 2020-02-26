import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, useDispatch, useSelector } from './config/store';
import AppNavigator from './config/navigator';
import { signInAnonymously } from './processes/auth/logic/actions';
import { useAuthStateListener } from './processes/auth/logic/apis';

const App = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

	useEffect(() => {
		if (isLoggedIn) return;
		dispatch(signInAnonymously());
	}, [isLoggedIn]);

	useAuthStateListener();

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
