import { Action as ReduxAction } from 'redux';
import { ActionTypes as AuthActionTypes, State as AuthState } from '../../processes/auth/logic/types';
import { ActionTypes as ExtraActionTypes, State as ExtraState } from '../../processes/extra/logic/types';
import { ActionTypes as ProfileActionTypes, State as ProfileState } from '../../processes/profile/logic/types';
import { ActionTypes as ServicesActionTypes, State as ServicesState } from '../../processes/services/logic/types';
import { ActionTypes as SettingsActionTypes, State as SettingsState } from '../../processes/settings/logic/types';

export type AppActionTypes = AuthActionTypes
	| ExtraActionTypes
	| ProfileActionTypes
	| ServicesActionTypes
	| SettingsActionTypes

export interface AppState {
	auth: AuthState;
	extra: ExtraState;
	profile: ProfileState;
	services: ServicesState;
	settings: SettingsState;
}

export interface AppAction extends ReduxAction<AppActionTypes> {
	silent?: boolean;
	firebase?: boolean | object;
}

export interface AppResultAction extends AppAction {
	hasError: boolean;
}
