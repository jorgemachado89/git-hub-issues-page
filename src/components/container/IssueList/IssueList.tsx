import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";

import { Reducers } from "./../../../store/types";
import IssueListHeader from './../IssueListHeader/IssueListHeader';
import RepositoryEntries from './../RepositoryEntries/RepositoryEntries';

const ListContainer = styled.div`
	margin-right: 0px;
	margin-left: 0px;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(225, 228, 232);
	border-image: initial;
	border-radius: 6px;
`;

export default function IssueList() {
	const isLoading = useSelector((state: Reducers) => state.repositoriesReducer.isLoading);
	const repositories = useSelector((state: Reducers) => state.repositoriesReducer.repositories);

	return (
		<ListContainer>
			<IssueListHeader repositoriesCount={repositories.length} />
			{isLoading ? <p>Is Loading...</p> : <RepositoryEntries repositories={repositories}/>}
		</ListContainer>
	);
}