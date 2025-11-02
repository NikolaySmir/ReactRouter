import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
	border: 8px solid rgba(255, 255, 255, 0.3);
	border-top: 8px solid #0cb328ff;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	animation: ${spin} 1s linear infinite;
`;

const LoaderContainer = styled.div`
	position: fixed;
	top: 40px;
	left: 0;
	width: 100%;
	height: 100%;
	//background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 50;
`;

export const Loader = () => {
	return (
		<LoaderContainer>
			<Spinner />
		</LoaderContainer>
	);
};
