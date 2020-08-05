import {State} from './types';

const initialState = {
	isLoading: false,
	repositories: []
};

export default function repositoriesReducer(state: State = initialState, action: any) {
	switch (action.type) {
		case "loadUserRepositories":
		  return { ...state, isLoading: true };
		case "loadUserRepositoriesDone":
			return { repositories: action.payload || [], isLoading: false };
		default:
		  return state;
	}
}