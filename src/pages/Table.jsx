import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const shouldForwardProp = (prop) =>
	!["alignCenter", "alignLeft"].includes(prop);

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const TableWrapper = styled.div`
	max-width: 600px;
	width: 100%;
	border: 4px solid #333;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	background-color: #fff;
	border: none;
	border-radius: 8px;
	overflow: hidden;
`;

const Th = styled.th.withConfig({ shouldForwardProp })`
	border: 2px solid #333;
	padding: 12px;
	text-align: ${(props) => (props.alignCenter ? "center" : "left")};
	background-color: #333;
	font-weight: 600;
	color: #fff;
`;

const Td = styled.td.withConfig({ shouldForwardProp })`
	border: 2px solid #333;
	padding: 12px;
	text-align: ${(props) => (props.alignLeft ? "left" : "center")};
	user-select: none;
`;

const Tr = styled.tr`
	&:hover {
		background-color: #333;
		color: #c0e90cff;
	}
`;

const TextSpan = styled.span`
	user-select: text;
`;

function DataTable({ data, type }) {
	const navigate = useNavigate();

	const handleClick = (id) => {
		navigate(`/${type}/${id}`);
	};

	return (
		<Container>
			<TableWrapper>
				<Table>
					<thead>
						<tr>
							<Th alignCenter width="50px">
								ID
							</Th>
							<Th alignCenter width="300px">
								Имя
							</Th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<Tr
								key={item.id}
								onClick={() => handleClick(item.id)}
							>
								<Td>
									<TextSpan>{item.id}</TextSpan>
								</Td>
								<Td alignLeft>
									<TextSpan>{item.name}</TextSpan>
								</Td>
							</Tr>
						))}
					</tbody>
				</Table>
			</TableWrapper>
		</Container>
	);
}

export default DataTable;
