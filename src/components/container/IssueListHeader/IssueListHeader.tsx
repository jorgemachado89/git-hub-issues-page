import React from 'react';
import styled from 'styled-components';

import { InlineIcon } from '@iconify/react';
import IssueOpened from '@iconify/icons-octicon/issue-opened';

const IssueListHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border-left-width: 1px;
    border-right-width: 1px;
    border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	padding: 16px;
	border-width: 1px;
	border-style: solid;
    border-color: rgb(225, 228, 232);
    border-image: initial;
	background-color: rgb(246, 248, 250);
`;

const TableListFilters = styled.div`
	display: flex;
	white-space: nowrap;
	flex: 1 1 auto ;
`;

const IssuesIcon = styled(InlineIcon)`
	margin-right: 10px;
	width: 16px;
    height: 16px;
`;

const RepositoriesCount = styled.div`
	color: rgb(36, 41, 46);
	font-weight: 600;
`;

const RepositoriesCountLabel = styled.span`
	&::before {
		content: "\\00a0 ";
	};
`;

export default function IssueListHeader({repositoriesCount}: {repositoriesCount: number}) {
	return (
		<IssueListHeaderContainer>
			<TableListFilters>
				<RepositoriesCount>
					<IssuesIcon icon={IssueOpened} />
					{repositoriesCount}
					<RepositoriesCountLabel>Repositories</RepositoriesCountLabel>
				</RepositoriesCount>
			</TableListFilters>
		</IssueListHeaderContainer>
	);
}