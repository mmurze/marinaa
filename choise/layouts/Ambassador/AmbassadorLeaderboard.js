import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useEffect, useState} from "react";
import LoadingAnimation from "components/LoadingAnimation";
import Responsive from "helpers/Responsive";
import {renderLeaderboardArray} from "utils/ambassador";

export default function AmbassadorLeaderboard({t}) {
	const [array, setArray] = useState([])
	useEffect(() => {
		renderLeaderboardArray().then(r => setArray(r))
	}, [])
	return (
		array.length ? (
			<Wrapper>
				<CenterBlock>
					<Title><h2>{t.title}</h2></Title>
					<p className="description">{t.description}</p>
					<table>
						<thead>
						<tr>
							{
								t.array((item, index) => {
									return(
									<td key={index}><span>{item}</span></td>
									)
								})
							}
							<td>
							<span>
								<Responsive width={600} mobile="Tasks">
									{t.tasks}
								</Responsive>
							</span>
							</td>
							<td>
							<span>
								<Responsive width={600} mobile="Points">
									{t.points}
								</Responsive>
							</span>
							</td>
						</tr>
						</thead>
						<tbody>
						{
							array.map((item, index) => {
								return (
									<tr>
										<td width="25%">{index + 1}</td>
										<td width="25%">{item.name}</td>
										<td width="25%">{item.completed}</td>
										<td width="25%">{item.points}</td>
									</tr>
								)
							})
						}
						</tbody>
					</table>
				</CenterBlock>
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.description{
		text-align: center;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		margin-top: 20px;
	}
	table{
		width: 100%;
		margin-top: 100px;
		@media only screen and (max-width: 820px) {
			margin-top: 60px;
		}
	}
	thead {
		td{
			padding-bottom: 30px;
		}
		span{
			background: #5CEE9C;
			border-radius: 500px;
			padding: 3px 16px;
			font-weight: 500;
			font-size: 16px;
			line-height: 120%;
		}
	}
	tbody td{
		border-top: 1px solid #DDDFE4;
		padding: 20px 20px 20px 0;
		color: #656D81;
		font-size: 16px;
		line-height: 150%;
		&:nth-child(1) {
			font-weight: 700;
		}
	}
	.loading_block{
		display: flex;
		justify-content: center;
	}
`