import { AppAction } from '../../../config/store/types';
import { ActionTypes } from './types';

export const increaseRunTimes = (): AppAction => ({
	type: ActionTypes.increase_run_time,
});
