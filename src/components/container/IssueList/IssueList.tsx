import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";

import IssueListHeader from './../IssueListHeader/IssueListHeader';

const ListContainer = styled.div`
	margin-right: 0px;
	margin-left: 0px;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(225, 228, 232);
	border-image: initial;
	border-radius: 6px;
`;

type Repository = {

};

export default function IssueList({repositoriesList}: {repositoriesList: Repository[]}) {
	const totalRepositoriesCount = useSelector((state: any) => {
		return state.repositoriesReducer.repositories.length;
	});

	return (
		<ListContainer>
			<IssueListHeader repositoriesCount={totalRepositoriesCount}/>
		</ListContainer>
	);
}