import React from 'react';
import styled from 'styled-components';
import ReactTimeAgo from 'react-time-ago';

import { InlineIcon } from '@iconify/react';
import IssueOpened from '@iconify/icons-octicon/issue-opened';

import { License } from './../../../store/types';

const RepositoryEntryContainer = styled.div`
	border-top-color: transparent;
	display: flex;
	&::hover {
		background-color: #f6f8fa;
	};
`;

const OpenIssuesContainer = styled.div`
	padding-top: 8px;
	padding-left: 16px;
	flex-shrink: 0;
`;

const HasOpenIssues = styled(InlineIcon)`
	width: 16px;
    height: 16px;
	color: #28a745;
	line-height: 21px;
`;

const NoOpenIssues = styled(HasOpenIssues)`
	color: red;
`;

const RepositoryEntryDetails = styled.div`
	padding: 8px;
	width: 100%;
	display: grid;
	text-align: left;
`;

const rightPaddedText = styled.a`
	padding-right: 4px;
`;

const RepositoryName = styled(rightPaddedText)`
	color: #586069;
	font-size: 16px;
	vertical-align: middle;
	&::hover {
		text-decoration: none;
		outline-width: 0;
		color: #0366d6
	}
`;

const RepositoryDescription = styled(RepositoryName)`
	color: #24292e;
`;

const Pill = styled(rightPaddedText)`
	background-color: #ededed;
	vertical-align: middle;
	color: #000000;
	padding: 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    border: 1px solid transparent;
    border-radius: 2em;
`;

const Details = styled.div`
	width: 100%;
	margin-top: 4px;
	font-size: 12px;
	color: #586069;
`;

export default function RepositoryEntry(
	{ name, description, created_at, updated_at, pushed_at, license, forks, open_issues, watchers, default_branch }: { 
		name: string,
		description: string,
		created_at: string,
		updated_at: string,
		pushed_at: string,
		license: License,
		forks: number,
		open_issues: number,
		watchers: number,
		default_branch: string
	}) {
	return (
		<RepositoryEntryContainer>
			<OpenIssuesContainer>{open_issues ? <HasOpenIssues icon={IssueOpened}/> : <NoOpenIssues icon={IssueOpened}/>}</OpenIssuesContainer>
			<RepositoryEntryDetails>
				<div>
					<RepositoryName>{name}</RepositoryName>
					<RepositoryDescription>{description}</RepositoryDescription>
					<span>
						<Pill>{license?.name || "No License"}</Pill>
						<Pill>{forks}</Pill>
						<Pill>{watchers}</Pill>
						<Pill>{default_branch}</Pill>
					</span>
				</div>
				<Details>
					Created: <ReactTimeAgo date={new Date(created_at)} locale={'en'}/>, Updated: <ReactTimeAgo date={new Date(updated_at)} locale={'en'}/>, Pushed At: <ReactTimeAgo date={new Date(pushed_at)} locale={'en'}/>
				</Details>
			</RepositoryEntryDetails>

		</RepositoryEntryContainer>
	);
}