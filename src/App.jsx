import React from "react";
import { NavigatePanel } from "./Components/NavigatePanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./Components/pages/Error";
import Main from "./Components/pages/Main";
import DataTable from "./Components/pages/Table";
import characters from "../data/characters.json";
import episodes from "../data/episodes.json";
import locations from "../data/locations.json";
import "./index.css";
import CardByIdAndType from "./Components/pages/Сard";

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
		<AppStyled>
			<Router>
				<NavigatePanel>Шаблон</NavigatePanel>
				<MainContent>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route
							path="/characters"
							element={
								<DataTable
									data={characters}
									type="characters"
								/>
							}
						/>
						<Route
							path="/episodes"
							element={
								<DataTable data={episodes} type="episodes" />
							}
						/>
						<Route
							path="/locations"
							element={
								<DataTable data={locations} type="locations" />
							}
						/>
						<Route
							path="/:type/:id"
							element={<CardByIdAndType />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</MainContent>
			</Router>
		</AppStyled>
	);
};

export default App;
