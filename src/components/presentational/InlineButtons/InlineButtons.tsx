import React from 'react';
import styled from 'styled-components';

const ButtonsInline = styled.nav`
	display: flex;
`;

const Button = styled.a`
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	text-align: center;
	text-decoration: none;
    float: left;
    padding: 5px 16px;
    font-weight: 500;
    line-height: 20px;
    color: #24292e;
    border: 1px solid #e1e4e8;
`;

type Button = {
	label: string;
};

export default function InlineButtons({ ButtonsList }: { ButtonsList: Button[] }) {
	return (
		<ButtonsInline>
			{ButtonsList.map((button: Button, index: number) => {
				return <Button key={`${Date.now().toString()}${index}`}>{button.label}</Button>
			})}
		</ButtonsInline>
	);
};