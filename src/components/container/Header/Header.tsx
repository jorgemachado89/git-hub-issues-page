import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles';

import { InlineIcon } from '@iconify/react';
import BellIcon from '@iconify/icons-octicon/bell';

const HeaderWrapper = styled.header`
	background-color: #24292e;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 10px 15px;
	@media ${device.tablet} {
		justify-content: center;
	}
`;

const GitHubIcon = styled.div`
	margin-right: 16px;
`;

const GitHubIconLink = styled.a`
	display: block;
	height: 32px;
	width: 32px;
	color: white;
`;

const GitHubIconImg = styled.img``;

const NavLinks = styled.nav`
	display: none;
	@media ${device.tablet} {
		display: flex;
		flex-direction: row;
		margin-right: 16px;
		width: 100%;
	}
`;


const NavLink = styled.a`
	color: white;
	margin-right: 16px;
	text-decoration: none;
	font-weight: 600px;
`;

const Notifications = styled.div`
	color: white;
`;

type HeaderLink = {
	to: string;
	text: string;
}

const headerLinks: HeaderLink[] = [
	{ to: "/", text: "Pulls" },
	{ to: "/", text: "Issues" },
	{ to: "/", text: "Marketplace" },
	{ to: "/", text: "Explore" }
];

function Links({ links }: { links: HeaderLink[] }) {
	return (<>{links.map((link: HeaderLink, index: number) => {
		return <NavLink key={`${Date.now().toString()}${index}`} href={link.to}>{link.text}</NavLink>
	})}</>);
}

function Header() {
	return (
		<HeaderWrapper>
			<GitHubIcon>
				<GitHubIconLink href="http://localhost:3000">
					<GitHubIconImg alt="GitHub icon" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
				</GitHubIconLink>
			</GitHubIcon>
			<NavLinks>
				<Links links={headerLinks} />
			</NavLinks>
			<Notifications>
				<InlineIcon icon={BellIcon} />
			</Notifications>
		</HeaderWrapper>
	)
}

export default Header;