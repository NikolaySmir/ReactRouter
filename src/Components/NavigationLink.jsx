import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
	color: #fff;
	text-decoration: none;
	padding: ${({ padding }) => padding || "8px 16px"};
	font-size: ${({ fontSize }) => fontSize || "14px"};
	transition: color 0.3s;

	&.active {
		color: #0cb328ff;
	}

	&:hover {
		color: #c0e90cff;
	}
`;

function NavigationLink({ to, label, padding, fontSize }) {
	return (
		<StyledLink
			to={to}
			padding={padding}
			fontSize={fontSize}
			end
			className={({ isActive }) => (isActive ? "active" : "")}
		>
			{label}
		</StyledLink>
	);
}

export default NavigationLink;
