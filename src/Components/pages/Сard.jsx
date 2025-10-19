import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import characters from "../../../data/characters.json";
import episodes from "../../../data/episodes.json";
import locations from "../../../data/locations.json";

const CenteredWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	max-width: 600px;
	padding: 16px;
	border: 4px solid #333;
	border-radius: 8px;
	font-family: Arial, sans-serif;
	background-color: #fafafa;
`;

const DetailRow = styled.div`
	margin-bottom: 8px;
`;

const ImageWrapper = styled.div`
	margin-top: 8px;
`;

export function UniversalDetail({ item }) {
	if (!item || typeof item !== "object") return null;

	return (
		<CenteredWrapper>
			<Container>
				{Object.entries(item).map(([key, value]) => {
					if (value === null || value === undefined || value === "")
						return null;
					if (key.toLowerCase() === "image") {
						return (
							<DetailRow key={key}>
								<strong>{key}:</strong>
								<ImageWrapper>
									<img
										src={value}
										alt={item.name || "image"}
									/>
								</ImageWrapper>
							</DetailRow>
						);
					}
					if (key.toLowerCase() === "created") {
						const date = new Date(value);
						const formatted = isNaN(date)
							? value
							: date.toLocaleString();
						return (
							<DetailRow key={key}>
								<strong>{key}:</strong> {formatted}
							</DetailRow>
						);
					}
					return (
						<DetailRow key={key}>
							<strong>{key}:</strong> {value.toString()}
						</DetailRow>
					);
				})}
			</Container>
		</CenteredWrapper>
	);
}

const Wrapper = styled.div`
	max-width: 600px;
	margin: 1rem auto;
	padding: 16px;
	border: 4px solid #333;
	border-radius: 8px;
	font-family: Arial, sans-serif;
`;

export default function CardByIdAndType() {
	console.log(123);
	const { type, id } = useParams();
	console.log(id, type);

	const dataMap = {
		characters,
		episodes,
		locations,
	};

	const dataArray = dataMap[type] || [];
	const item = dataArray.find((el) => el.id === Number(id));

	if (!item)
		return (
			<Wrapper>
				Элемент с id={id} не найден в {type}
			</Wrapper>
		);

	return <UniversalDetail item={item} />;
}
