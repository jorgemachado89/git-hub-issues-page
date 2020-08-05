export type License = {
	"key": string,
	"name": string,
	"url": string,
}

export type Repository = {
	name: string,
	isPrivate: boolean,
	description: string,
	created_at: string,
	updated_at: string,
	pushed_at: string,
	license: License
	forks: number,
	open_issues: number,
	watchers: number,
	default_branch: string
};

export type State = {
	isLoading: Boolean,
	repositories: Repository[]
};

export type Reducers = {
	repositoriesReducer: State
};