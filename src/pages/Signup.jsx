import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";

function Signup({ onSubmit }) {
	const [name, setName] = useState("");
	const [nickname, setNickname] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (typeof onSubmit === "function") {
			onSubmit({
				name,
				nickname,
				email,
				gender,
				password,
				confirmPassword,
			});
		}
	};

	const containerStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "98vh",
	};

	const MyIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
		</svg>
	);

	return (
		<div style={containerStyle}>
			<form onSubmit={handleSubmit}>
				<div>
					<Input
						id="signup-name"
						type="text"
						value={name}
						label="Имя:"
						placeholder="Введите ваше имя"
						size="lg"
						withAsterisk={true}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div>
					<Input
						id="signup-nickname"
						type="text"
						value={nickname}
						label="Ник:"
						placeholder="Введите ваш ник"
						size="lg"
						withAsterisk={true}
						onChange={(e) => setNickname(e.target.value)}
						required
						prefix={true}
					/>
				</div>
				<div>
					<Input
						id="signup-email"
						type="email"
						value={email}
						label="Почта:"
						placeholder="Введите почту"
						size="lg"
						withAsterisk={true}
						onChange={(e) => setEmail(e.target.value)}
						required
						autoComplete="email"
					/>
				</div>
				<div style={{ margin: "10px 0" }}>
					<label>Пол:</label>
					<div
						style={{
							display: "flex",
							gap: "10px",
							marginTop: "5px",
						}}
					>
						<label>
							<input
								type="radio"
								name="gender"
								value="male"
								checked={gender === "male"}
								onChange={() => setGender("male")}
							/>
							Мужчина
						</label>
						<label>
							<input
								type="radio"
								name="gender"
								value="female"
								checked={gender === "female"}
								onChange={() => setGender("female")}
							/>
							Женщина
						</label>
					</div>
				</div>
				<div>
					<Input
						id="signup-password"
						type="password"
						value={password}
						label="Пароль:"
						placeholder="Введите пароль"
						size="lg"
						withAsterisk={true}
						onChange={(e) => setPassword(e.target.value)}
						required
						autoComplete="new-password"
					/>
				</div>
				<div>
					<Input
						id="signup-confirm-password"
						type="password"
						value={confirmPassword}
						label="Повторите пароль:"
						placeholder="Повторите пароль"
						size="lg"
						withAsterisk={true}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
						autoComplete="new-password"
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "20px",
					}}
				>
					<Button type="submit">Зарегистрироваться</Button>
				</div>
			</form>
		</div>
	);
}

export default Signup;
