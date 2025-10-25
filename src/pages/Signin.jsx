import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useAuth } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

function Signin({ onSubmit }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const location = useLocation();
	const auth = useAuth();

	const from = location.state?.from || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		auth.signin({ email, password }, () => {
			navigate(from, {
				replace: true,
			});
		});
	};

	const containerStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "98vh",
	};

	return (
		<div style={containerStyle}>
			<form onSubmit={handleSubmit}>
				<div>
					<Input
						id="signin-email"
						type="email"
						value={email}
						label="Email:"
						placeholder="Введите email"
						size="lg"
						withAsterisk={true}
						onChange={(e) => setEmail(e.target.value)}
						required
						autoComplete="email"
						style={{ margin: "5px 0 5px 0" }}
					/>
				</div>
				<div>
					<Input
						id="signin-password"
						type="password"
						value={password}
						label="Пароль:"
						placeholder="Введите пароль"
						size="lg"
						withAsterisk={true}
						onChange={(e) => setPassword(e.target.value)}
						required
						autoComplete="current-password"
						style={{ margin: "5px 0 5px 0" }}
						minLength={8}
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						gap: "10px",
					}}
				>
					<Button type="submit">Войти</Button>
					{/* <Button to="/register">Зарегистрироваться</Button> */}
				</div>
			</form>
		</div>
	);
}

export default Signin;
