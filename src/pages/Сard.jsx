import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import character from "../../data/characters.json";
import episode from "../../data/episodes.json";
import location from "../../data/locations.json";
import { useGetCategoryCard } from "../hooks/useGetCategoryCard";
import { Loader } from "../Components/Loader";

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
	word-break: break-word;
`;

const ImageWrapper = styled.div`
	margin-top: 8px;
`;

export function UniversalDetail({ item }) {
	if (!item || typeof item !== "object") return null;

	const exludeFields = [
		"origin",
		"location",
		"episode",
		"url",
		"residents",
		"characters",
	];

	return (
		<CenteredWrapper>
			<Container>
				{Object.entries(item).map(([key, value]) => {
					if (
						exludeFields.some((item) => item === key.toLowerCase())
					) {
						return;
					}
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

export default function CardByIdAndType() {
	const { type, id } = useParams();

	let { data, loading, error } = useGetCategoryCard(type, id);

	if (!data) return;
	if (loading) {
		return <Loader />;
	}
	if (error) {
		return <div className="card-error">Что-то пошло не так...</div>;
	}
	return <UniversalDetail item={data} />;
}
