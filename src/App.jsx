import React from "react";
import { NavigatePanel } from "./Components/NavigatePanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./pages/Error";
import Main from "./pages/Main";
import DataTable from "./pages/Table";
import characters from "../data/characters.json";
import episodes from "../data/episodes.json";
import locations from "../data/locations.json";
import "./index.css";
import CardByIdAndType from "./pages/Сard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthProvider";
import { PrivateRoute } from "./context/PrivateRoute";

const AppStyled = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainContent = styled.div`
	padding-top: 50px;
	max-height: 94vh;
	overflow-y: auto;
`;

const App = () => {
	return (
		<AuthProvider>
			<AppStyled>
				<Router>
					<NavigatePanel>Шаблон</NavigatePanel>
					<MainContent>
						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/login" element={<Signin />} />
							<Route path="/register" element={<Signup />} />
							<Route
								path="/characters"
								element={
									<PrivateRoute>
										<DataTable
											data={characters}
											type="characters"
										/>
									</PrivateRoute>
								}
							/>
							<Route
								path="/episodes"
								element={
									<PrivateRoute>
										{" "}
										<DataTable
											data={episodes}
											type="episodes"
										/>
									</PrivateRoute>
								}
							/>
							<Route
								path="/locations"
								element={
									<PrivateRoute>
										{" "}
										<DataTable
											data={locations}
											type="locations"
										/>
									</PrivateRoute>
								}
							/>
							<Route
								path="/:type/:id"
								element={
									<PrivateRoute>
										<CardByIdAndType />
									</PrivateRoute>
								}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</MainContent>
				</Router>
			</AppStyled>
		</AuthProvider>
	);
};

export default App;
