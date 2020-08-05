export type Repository = {

};

export type State = {
	isLoading: Boolean,
	repositories: Repository[]
};

export type Reducers = {
	repositoriesReducer: State
};