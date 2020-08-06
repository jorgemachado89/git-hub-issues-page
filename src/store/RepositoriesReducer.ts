import {State} from './types';
import { LOADING, FETCH_REPOSITORIES } from '../actions/types';

const initialState = {
	isLoading: false,
	repositories: []
};

export default function repositoriesReducer(state: State = initialState, action: any) {
	switch (action.type) {
		case LOADING:
		  return { ...state, isLoading: true };
		case FETCH_REPOSITORIES:
			return { repositories: action.payload || [], isLoading: false };
		default:
		  return state;
	}
}