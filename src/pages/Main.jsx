import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #282c34;
	padding: 30px 40px;
	border-radius: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	max-width: 400px;
	width: 90%;
	text-align: center;
`;

const Title = styled.h1`
	color: #0cb328ff;
	font-family: Arial, sans-serif;
	font-size: 2em;
	margin-bottom: 20px;
`;

const Description = styled.p`
	color: #ffffff;
	font-family: Arial, sans-serif;
	font-size: 1.2em;
`;

function Main() {
	return (
		<Container>
			<Title>Добро пожаловать на наш сайт!</Title>
			<Description>
				Рады видеть вас здесь. Исследуйте материалы и наслаждайтесь
				функциональностью.
			</Description>
		</Container>
	);
}

export default Main;
