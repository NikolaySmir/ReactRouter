import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../pages/ErrorPage/Error";
import { AuthProvider, PrivateRoute } from "../shared/context/User";
import { ErrorBoundary, Loader, NavigatePanel } from "../shared/components";

const AppStyled = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainContent = styled.div`
	padding-top: 50px;
	max-height: 94vh;
`;

const Main = lazy(() => import("../pages/MainPage/Main"));
const Signin = lazy(() => import("../pages/SignInPage/Signin"));
const Signup = lazy(() => import("../pages/SignUpPage/Signup"));
const DataTable = lazy(() => import("../pages/TablePage/Table"));
const CardByIdAndType = lazy(() => import("../pages/CardPage/Сard"));

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

export { App };
