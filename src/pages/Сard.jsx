import React from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col, Typography, Image, Spin } from "antd";
import character from "../../data/characters.json";
import episode from "../../data/episodes.json";
import location from "../../data/locations.json";
import { useGetCategoryCard } from "../hooks/useGetCategoryCard";

const { Text } = Typography;

export function UniversalDetail({ item }) {
	if (!item || typeof item !== "object") return null;

	const excludeFields = [
		"origin",
		"location",
		"episode",
		"url",
		"residents",
		"characters",
	];

	return (
		<Card style={{ width: "400px", margin: "0 auto", padding: 16 }}>
			{Object.entries(item).map(([key, value]) => {
				if (excludeFields.includes(key.toLowerCase())) {
					return null;
				}
				if (value === null || value === undefined || value === "") {
					return null;
				}
				if (key.toLowerCase() === "image") {
					return (
						<Row key={key} gutter={[0, 8]}>
							<Col span={24}>
								<Text strong>{key}:</Text>
							</Col>
							<Col span={24} style={{ textAlign: "center" }}>
								<Image
									src={value}
									alt={item.name || "image"}
									style={{
										maxWidth: "100%",
										borderRadius: 8,
									}}
								/>
							</Col>
						</Row>
					);
				}
				if (key.toLowerCase() === "created") {
					const date = new Date(value);
					const formatted = isNaN(date)
						? value
						: date.toLocaleString();
					return (
						<Row key={key} gutter={[0, 8]}>
							<Col span={24}>
								<Text strong>{key}:</Text> {formatted}
							</Col>
						</Row>
					);
				}

				return (
					<Row key={key} gutter={[0, 8]}>
						<Col span={24}>
							<Text strong>{key}:</Text> {value.toString()}
						</Col>
					</Row>
				);
			})}
		</Card>
	);
}

export default function CardByIdAndType() {
	const { type, id } = useParams();

	const { data, loading, error } = useGetCategoryCard(type, id);

	if (loading) {
		return <Spin style={{ display: "block", margin: "20px auto" }} />;
	}

	if (error) {
		return (
			<div
				className="card-error"
				style={{ textAlign: "center", color: "red", marginTop: 20 }}
			>
				Что-то пошло не так...
			</div>
		);
	}

	if (!data) return null;

	return <UniversalDetail item={data} />;
}
