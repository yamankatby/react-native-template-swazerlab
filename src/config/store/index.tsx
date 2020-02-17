import { applyMiddleware, compose, createStore, Dispatch, Middleware } from 'redux';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { firebaseEventsMiddleware } from '../firebase';
import { AppAction, AppState } from './types';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware, firebaseEventsMiddleware];
if (__DEV__) {
	middlewares.push(
		createLogger({
			predicate: (_, action: AppAction) => action.silent !== true,
		}),
	);
}

const enhancers = [applyMiddleware(...middlewares)];
const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, initialState, compose(...enhancers));
const persistor = persistStore(store, persistConfig as any);
sagaMiddleware.run(rootSaga);

export const useDispatch = (): Dispatch<AppAction> => useReduxDispatch();
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export { store, persistor };
