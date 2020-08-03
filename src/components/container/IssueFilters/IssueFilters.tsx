import React from 'react';

import InlineButtons from '../../presentational/InlineButtons/InlineButtons';

export default function IssueFilters() {
	const ISSUE_TYPES = [{label: 'Created'}, {label: 'Assigned'}, {label: 'Mentioned'}];

	return (<InlineButtons ButtonsList={ISSUE_TYPES}/>);
}