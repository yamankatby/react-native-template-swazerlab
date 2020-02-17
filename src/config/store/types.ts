import { Action as ReduxAction } from 'redux';

import { ActionTypes as ServicesActionTypes, State as ServicesState } from '../../processes/services/logic/types';
import { ActionTypes as AuthActionTypes, State as AuthState } from '../../processes/auth/logic/types';
import { ActionTypes as SettingsActionTypes, State as SettingsState } from '../../processes/settings/logic/types';
import { ActionTypes as ProfileActionTypes, State as ProfileState } from '../../processes/profile/logic/types';

export type AppActionTypes = ServicesActionTypes | AuthActionTypes | SettingsActionTypes | ProfileActionTypes;

export interface AppState {
	services: ServicesState;
	auth: AuthState;
	settings: SettingsState;
	profile: ProfileState;
}

export interface AppAction extends ReduxAction<AppActionTypes> {
	silent?: boolean;
	firebase?: boolean | object;
}

export interface AppResultAction extends AppAction {
	hasError: boolean;
}
