import React from 'react';
import styled from 'styled-components';

import { InlineIcon } from '@iconify/react';
import SearchIcon from '@iconify/icons-octicon/search';

const FilterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1 1 auto;
`;

const InputForm = styled.form`
	margin-left: 16px;
	margin-top: 0px;
	position: relative;
`;

const Input = styled.input`
	width: 100%;
	font-size: 14px;
	line-height: 20px;
	padding: 5px 12px;
	padding-left: 32px;
	background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    outline: none;
	box-shadow: inset 0 1px 0 rgba(225,228,232,.2);
	color: rgb(88, 96, 105);
    background-repeat: no-repeat;
    background-position: right 8px center;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(225, 228, 232);
    border-image: initial;
    border-radius: 6px;
    outline: none;
`;

const FilterSearchIcon = styled(InlineIcon)`
	position: absolute;
	display: block;
	color: rgb(149, 157, 165);
	text-align: center;
	pointer-events: none;
    top: 10px;
	left: 8px;
	width: 16px;
    height: 16px;
`;

export default function IssueFilterSearch({searchQuery = ""}: {searchQuery?: string}) {
	return (
		<FilterWrapper>
			<InputForm>
				<Input defaultValue={searchQuery} />
				<FilterSearchIcon icon={SearchIcon} />
			</InputForm>
		</FilterWrapper>
	);
}