import React from 'react';
import styled from 'styled-components';

const ButtonsInline = styled.nav`
	display: flex;
`;

interface ISelectedBtn {
	readonly isActive: boolean;
};

const Button = styled.a<ISelectedBtn>`
	text-align: center;
	text-decoration: none;
	float: left;
    padding: 5px 16px;
    font-weight: 500;
    line-height: 20px;
	color: ${props => props.isActive ? "#fff" : "#24292e" };
	border: ${props => props.isActive ? "1px solid #005cc5" : "1px solid #e1e4e8" };
	background-color: ${props => props.isActive ? "#0366d6" : null };
	&&&:hover {
		text-decoration: none;
	}
`;

const LeftMostButton = styled(Button)`
	&&& {
 		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
	}
 `;

const RightMostButton = styled(Button)`
 	&&& {
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
	}
 `;

type Button = {
	label: string;
};

export default function InlineButtons({ buttonsList, onButtonSelected, buttonSelected }: {
	buttonsList: Button[],
	onButtonSelected?: any,
	buttonSelected?: string
}) {
	const uniqueKey = (index: number) => `${Date.now().toString()}${index}`;

	return (
		<ButtonsInline>
			{buttonsList.map((button: Button, index: number, array: Button[]) => {
				const baseAttr = {
					key: uniqueKey(index),
					onClick: onButtonSelected,
					"data-name": button.label,
					"isActive": false
				};
				const htmlAttr = button.label === buttonSelected ? {
					...baseAttr,
					"isActive": true
				} : {...baseAttr};

				if (index === 0) {
					return <LeftMostButton {...htmlAttr}>{button.label}</LeftMostButton>;
				} else if (index === array.length - 1) {
					return <RightMostButton {...htmlAttr}>{button.label}</RightMostButton>
				} else {
					return <Button {...htmlAttr}>{button.label}</Button>
				}
			})}
		</ButtonsInline>
	);
};