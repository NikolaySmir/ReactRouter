import React, { lazy, Suspense, useState } from "react";
import { NavigatePanel } from "./Components/NavigatePanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./pages/Error";
import characters from "../data/characters.json";
import episodes from "../data/episodes.json";
import locations from "../data/locations.json";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider";
import { PrivateRoute } from "./context/PrivateRoute";
import { Loader } from "./Components/Loader";
import ErrorBoundary from "./Components/ErrorBoundary";

const AppStyled = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainContent = styled.div`
	padding-top: 50px;
	max-height: 94vh;
`;

const Main = lazy(() => import("./pages/Main"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const DataTable = lazy(() => import("./pages/Table"));
const CardByIdAndType = lazy(() => import("./pages/Сard"));

const App = () => {
	const [categoriesType, setCategoriesType] = useState("");
	return (
		<AuthProvider>
			<AppStyled>
				<Router>
					<NavigatePanel>Шаблон</NavigatePanel>
					<Suspense fallback={<Loader />}>
						<ErrorBoundary>
							<MainContent>
								<Routes>
									<Route
										path="/"
										element={
											<Suspense fallback={<Loader />}>
												<Main />
											</Suspense>
										}
									/>
									<Route
										path="/login"
										element={
											<Suspense fallback={<Loader />}>
												<Signin />
											</Suspense>
										}
									/>
									<Route
										path="/register"
										element={
											<Suspense fallback={<Loader />}>
												<Signup />
											</Suspense>
										}
									/>
									{
										<Route
											path="/:type"
											element={
												<PrivateRoute>
													<Suspense
														fallback={<Loader />}
													>
														<DataTable
															setCategoriesType={
																setCategoriesType
															}
														/>
													</Suspense>
												</PrivateRoute>
											}
										/>
									}
									<Route
										path="/:type/:id"
										element={
											<PrivateRoute>
												<Suspense fallback={<Loader />}>
													<CardByIdAndType />
												</Suspense>
											</PrivateRoute>
										}
									/>
									<Route
										path="*"
										element={
											<Suspense fallback={<Loader />}>
												<NotFound />
											</Suspense>
										}
									/>
								</Routes>
							</MainContent>
						</ErrorBoundary>
					</Suspense>
				</Router>
			</AppStyled>
		</AuthProvider>
	);
};

export default App;
