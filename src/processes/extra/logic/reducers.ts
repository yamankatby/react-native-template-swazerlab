import { Reducer } from 'redux';
import { Action, State } from './types';

const initialState: State = {

};

const extra: Reducer<State, Action> = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default extra;