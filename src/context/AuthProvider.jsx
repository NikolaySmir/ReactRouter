import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() =>
		localStorage.getItem("user")
			? JSON.parse(localStorage.getItem("user"))
			: null
	);

	const signin = (newUser, callback) => {
		setUser(newUser);
		localStorage.setItem("user", JSON.stringify(newUser));
		callback();
	};

	const signout = (callback) => {
		setUser(null);
		localStorage.removeItem("user");
		callback();
	};

	const value = {
		user: user,
		signin,
		signout,
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};
