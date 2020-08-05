import React, {useState} from 'react';

import InlineButtons from '../../presentational/InlineButtons/InlineButtons';

export default function IssueFilters() {
	const [buttonSelected, setButtonSelected] = useState<string>("");
	const ISSUE_TYPES = [{label: 'Created'}, {label: 'Assigned'}, {label: 'Mentioned'}];

	const clickedButton = (event: Event & { target: HTMLInputElement }) => {
		setButtonSelected(event?.target?.getAttribute('data-name') || "");
	};

	return (<InlineButtons onButtonSelected={clickedButton} buttonSelected={buttonSelected} buttonsList={ISSUE_TYPES}/>);
}