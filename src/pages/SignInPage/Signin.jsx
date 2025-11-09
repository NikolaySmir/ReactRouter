import React from "react";
import { Form, Input, Button } from "antd";
import { useAuth } from "../../shared/context/User/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Signin = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from || "/";

	const onFinish = (values) => {
		const { email, password } = values;
		auth.signin({ email, password }, () => {
			navigate(from, { replace: true });
		});
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	const inputStyle = { width: 300 };
	const buttonStyle = { width: "auto" };

	const labelStyle = {
		fontSize: "18px",
		color: "#222",
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "94vh",
			}}
		>
			<Form
				name="signin"
				layout="vertical"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				initialValues={{
					email: "",
					password: "",
				}}
			>
				<Form.Item
					label={<span style={labelStyle}>Email:</span>}
					name="email"
					rules={[
						{
							required: true,
							message: "Пожалуйста, введите email",
						},
						{ type: "email", message: "Некорректный email" },
					]}
					style={{ marginBottom: 24 }}
				>
					<Input
						placeholder="Введите email"
						autoComplete="email"
						size="large"
						style={inputStyle}
					/>
				</Form.Item>
				<Form.Item
					label={<span style={labelStyle}>Пароль:</span>}
					name="password"
					rules={[
						{
							required: true,
							message: "Пожалуйста, введите пароль",
						},
						{
							min: 8,
							message: "Пароль должен быть не менее 8 символов",
						},
					]}
					style={{ marginBottom: 32 }}
				>
					<Input.Password
						placeholder="Введите пароль"
						autoComplete="current-password"
						size="large"
						style={inputStyle}
					/>
				</Form.Item>
				<Form.Item style={{ textAlign: "center" }}>
					<Button
						type="primary"
						htmlType="submit"
						size="large"
						style={{ ...buttonStyle, padding: "0 16px" }}
					>
						Войти
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Signin;
