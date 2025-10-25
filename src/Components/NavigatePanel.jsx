import React from "react";
import styled from "styled-components";
import NavigationLink from "./NavigationLink";
import Button from "./Button";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const NavigatePanelContainer = ({ className }) => {
	const auth = useAuth();
	const navigate = useNavigate();

	const handleSignout = () => {
		auth.signout(() => {
			navigate("/");
		});
	};

	return (
		<header className={className}>
			<div className="left-area" />
			<div className="center-area">
				<NavigationLink
					to="/characters"
					label="Characters"
					fontSize="20px"
				/>
				<NavigationLink
					to="/locations"
					label="Locations"
					fontSize="20px"
				/>
				<NavigationLink
					to="/episodes"
					label="Episodes"
					fontSize="20px"
				/>
			</div>
			{auth.user !== null ? (
				<div style={{ display: "flex", alignItems: "center" }}>
					<p style={{ color: "#fff", margin: "0 10px 0 0" }}>
						{auth.user?.email}
					</p>
					<div className="right-area">
						<Button onClick={handleSignout}>Выйти</Button>
					</div>
				</div>
			) : (
				<div className="right-area">
					<Button to="/login">Войти</Button>
				</div>
			)}
		</header>
	);
};

export const NavigatePanel = styled(NavigatePanelContainer)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #333;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;

	.left-area {
		flex: 1;
	}

	.center-area {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 15px;
	}

	.right-area {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		padding-right: 20px;
	}
`;
