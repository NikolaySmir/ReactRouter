import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useMemo,
} from "react";

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

	const signin = useCallback(
		(newUser, callback) => {
			setUser(newUser);
			localStorage.setItem("user", JSON.stringify(newUser));
			callback();
		},
		[setUser]
	);

	const signout = useCallback(
		(callback) => {
			setUser(null);
			localStorage.removeItem("user");
			callback();
		},
		[setUser]
	);

	const value = useMemo(
		() => ({
			user,
			signin,
			signout,
		}),
		[user, signin, signout]
	);

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};
