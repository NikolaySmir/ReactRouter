import React, { useEffect, useState } from "react";
import { useSearchCategories } from "../hooks/useSearchCategories";
import { Table, Spin } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { Typography } from "antd";
const { Text } = Typography;

function DataTable({ setCategoriesType }) {
	const [query, setQuery] = useState("");
	const [pageNumber, setPageNumber] = useState(1);
	const { type } = useParams();

	const navigate = useNavigate();

	const { loading, error, categories, hasMore } = useSearchCategories(
		type,
		query,
		pageNumber
	);

	useEffect(() => {
		setCategoriesType(type);
		setPageNumber(1);
		setQuery("");
	}, [type, setCategoriesType]);

	const columns = [
		{
			title: "ID",
			dataIndex: "id",
			key: "id",
			width: 50,
			align: "center",
		},
		{
			title: "Имя",
			dataIndex: "name",
			key: "name",
			width: 300,
			align: "left",
			render: (text, record) => (
				<Text style={{ cursor: "pointer" }}>{text}</Text>
			),
		},
	];

	const handleClick = (id) => {
		navigate(`/${type}/${id}`);
	};

	const handleTableScroll = (e) => {
		const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
		if (
			scrollHeight - scrollTop - clientHeight < 50 &&
			hasMore &&
			!loading
		) {
			setPageNumber((prev) => prev + 1);
		}
	};

	const dataSource = categories.map((item) => ({
		key: item.id,
		...item,
	}));

	return (
		<div style={{ maxWidth: 600, margin: "0 auto", height: "90vh" }}>
			<Table
				dataSource={dataSource}
				columns={columns}
				pagination={false}
				scroll={{ y: "85vh" }}
				rowKey="id"
				onScroll={handleTableScroll}
				onRow={(record) => {
					return {
						onClick: () => handleClick(record.id),
					};
				}}
			/>
			{loading && (
				<div style={{ textAlign: "center", padding: "1em" }}>
					<Spin />
				</div>
			)}
			{error && (
				<div style={{ color: "red" }}>Что-то пошло не так...</div>
			)}
		</div>
	);
}

export default DataTable;
