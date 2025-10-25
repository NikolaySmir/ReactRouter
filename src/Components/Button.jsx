import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";

const StyledButton = styled(NavLink)`
	padding: 4px 10px;
	font-size: 16px;
	font-family: Arial, sans-serif;
	background-color: #ffffff;
	color: #333;
	border: 2px solid #ccc;
	border-radius: 4px;
	cursor: pointer;
	text-decoration: none;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.2s, box-shadow 0.2s;

	&:hover {
		background-color: #c0e90cff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	&:active {
		box-shadow: none;
	}
`;

const ButtonWrapper = styled.button`
	padding: 4px 10px;
	font-size: 16px;
	font-family: Arial, sans-serif;
	background-color: #ffffff;
	color: #333;
	border: 2px solid #ccc;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #c0e90cff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	&:active {
		box-shadow: none;
	}
`;

const Button = ({ to, children, type, ...rest }) => {
	if (to) {
		return (
			<StyledButton to={to} {...rest}>
				{children}
			</StyledButton>
		);
	}
	return (
		<ButtonWrapper type={type} {...rest}>
			{children}
		</ButtonWrapper>
	);
};

export default Button;
