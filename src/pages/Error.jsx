import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: Arial, sans-serif;
`;

const Title = styled.h1`
	font-size: 72px;
	margin: 0;
	color: #333;
`;

const Message = styled.p`
	font-size: 24px;
	margin: 20px 0;
`;

const StyledLink = styled(Link)`
	padding: 10px 20px;
	background-color: #333;
	color: #fff;
	text-decoration: none;
	border-radius: 4px;
	font-size: 18px;
`;

function NotFound() {
	return (
		<Container>
			<Title>404</Title>
			<Message>Страница не найдена</Message>
			<StyledLink to="/">Вернуться на главную</StyledLink>
		</Container>
	);
}

export default NotFound;
