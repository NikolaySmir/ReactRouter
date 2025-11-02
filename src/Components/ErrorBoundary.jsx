import { Component } from "react";
import React from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
		};
	}
	componentDidCatch(error, errorInfo) {}

	render() {
		if (this.state.hasError) {
			return (
				<h4 style={{ position: "fixed", top: "40px", margin: "20px" }}>
					Что-то пошло не так...
				</h4>
			);
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
