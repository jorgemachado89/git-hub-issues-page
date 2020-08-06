import { Repository } from '../store/types';
import { LOADING, FETCH_REPOSITORIES } from './types';

export function loading() {
	return {
		type: LOADING
	};
}

export function fetchedUserRepositories(repositories: Repository[] = []) {
	return {
		type: FETCH_REPOSITORIES,
		payload: repositories
	};
};

export function fetchRepositories() {
	const GIT_HUB_REPOSITORIES = "https://api.github.com/users/jorgemachado89/repos";

	return async (dispatch: Function) => {
		dispatch(loading());
		await fetch(GIT_HUB_REPOSITORIES)
			.then((payload: any) => payload.json())
			.then((repositories: Repository[]) => dispatch(fetchedUserRepositories(repositories)))
			.catch((err: Error) => console.error(`Error in Fetch: ${err}`));
	}
}