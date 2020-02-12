import { Action as ReduxAction } from 'redux';

import { ActionTypes as ServicesActionTypes, State as ServicesState } from '../../processes/services/logic/types';
import { ActionTypes as AuthActionTypes, State as AuthState } from '../../processes/auth/logic/types';
import { ActionTypes as SettingsActionTypes, State as SettingsState } from '../../processes/settings/logic/types';

export type AppActionTypes = ServicesActionTypes | AuthActionTypes | SettingsActionTypes;

export interface AppState {
	services: ServicesState;
	auth: AuthState;
	settings: SettingsState;
}

export interface AppAction extends ReduxAction<AppActionTypes> {
	silent?: boolean;
	firebase?: 'event' | 'navigate';
}

export interface AppResultAction extends AppAction {
	hasError: boolean;
}
