import { Repository } from './../store/types';

const Loading = () => {
	return {
		type: "loadUserRepositories"
	};
}

const FetchedUserRepositories = (repositories: Repository[]) => {
	return {
		type: "loadUserRepositoriesDone",
		payload: repositories
	};
};

export function fetchRepositories() {
	const GIT_HUB_REPOSITORIES = "https://api.github.com/users/jorgemachado89/repos";

	return async (dispatch: Function) => {
		dispatch(Loading());
		await fetch(GIT_HUB_REPOSITORIES)
			.then((payload: any) => payload.json())
			.then((repositories: Repository[]) => dispatch(FetchedUserRepositories(repositories)))
			.catch((err: Error) => console.error(`Error in Fetch: ${err}`));
	}
}