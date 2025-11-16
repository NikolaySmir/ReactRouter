import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const PrivateRoute = ({ children }) => {
	const auth = useAuth();
	const Location = useLocation();

	if (auth.user === null) {
		return (
			<Navigate
				to="/login"
				state={{ from: location.pathname }}
				replace
			></Navigate>
		);
	}

	return children;
};
