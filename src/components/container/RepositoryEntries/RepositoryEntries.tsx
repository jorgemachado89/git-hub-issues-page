import React from 'react';

import {Repository} from './../../../store/types';

import RepositoryEntry from './RepositoryEntry';

export default function RepositoryEntries({repositories}: {repositories: Repository[]}) {
	return (<>
			{repositories.map((repository: Repository, index: number) => {
				return <RepositoryEntry key={`${Date.now().toString()}${index}`} {...repository} />
			})}
		</>
	);
}