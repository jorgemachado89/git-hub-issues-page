import React from 'react';
import styled from 'styled-components';

const ButtonsInline = styled.nav`
	display: flex;
`;

const Button = styled.a`
	text-align: center;
	text-decoration: none;
    float: left;
    padding: 5px 16px;
    font-weight: 500;
    line-height: 20px;
    color: #24292e;
    border: 1px solid #e1e4e8;
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

export default function InlineButtons({ ButtonsList }: { ButtonsList: Button[] }) {
	return (
		<ButtonsInline>
			{ButtonsList.map((button: Button, index: number, array: Button[]) => {
				const uniqueKey = `${Date.now().toString()}${index}`;

				if (index === 0) {
					return <LeftMostButton key={uniqueKey}>{button.label}</LeftMostButton>;
				} else if (index === array.length - 1) {
					return <RightMostButton key={uniqueKey}>{button.label}</RightMostButton>
				} else {
					return <Button key={uniqueKey}>{button.label}</Button>
				}
			})}
			
		</ButtonsInline>
	);
};