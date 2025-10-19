import React from "react";
import styled from "styled-components";
import NavigationLink from "./NavigationLink";

const NavigatePanelContainer = ({ className }) => (
	<header className={className}>
		<NavigationLink
			to="/characters"
			label="Characters"
			fontSize="20px"
		></NavigationLink>
		<NavigationLink
			to="/locations"
			label="Locations"
			fontSize="20px"
		></NavigationLink>
		<NavigationLink
			to="/episodes"
			label="Episodes"
			fontSize="20px"
		></NavigationLink>
	</header>
);

export const NavigatePanel = styled(NavigatePanelContainer)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #333;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	box-shadow: 0px -2px 17px #000;
	overflow: hidden;
`;
