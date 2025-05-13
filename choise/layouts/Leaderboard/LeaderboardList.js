import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function LeaderboardList({t}) {
	const snap = useSnapshot(state);
	const [limit, setLimit] = useState(10)
	const [array, setArray] = useState([])
	
	useEffect(() => {
		makeRequest()
	}, [limit])
	
	const makeRequest = () => {
		axios.get("/api/leaderboard", {
			params: {limit}
		}).then(r => setArray(r.data))
	}
	
	return (
		<Wrapper id="leaderboard">
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					<table>
						<thead className={array.length === 0 ? "empty" : ""}>
							<tr>
								<td><span>{t.title_span_1}</span></td>
								<td><span>{t.title_span_2}</span></td>
								<td><span>{t.title_span_3}</span></td>
							</tr>
						</thead>
						<tbody>
							{
								array.map((item, index) => {
									return (
										<tr key={index}>
											<td><span>{t.title_span_1}</span>{index + 1}</td>
											<td><span>{t.title_span_2}</span>{item.address}</td>
											<td><span>{t.title_span_3}</span>{item.trades}</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
					{
						limit !== 50 && (
							<div className="show_more">
								<button onClick={() => setLimit(50)}>{t.title_button}</button>
							</div>
						)
					}
					<div className="not_list">
						<p><a href={snap.uniswapLink} target="_blank" rel="noreferrer nofollow">{t.link_a}</a></p>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 180px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.show_more{
		margin-top: 20px;
		display: flex;
		justify-content: center;
		position: relative;
		width: 100%;
		&:before{
			content: '';
			width: 100%;
			height: 200px;
			background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
			top: -200px;
			position: absolute;
			z-index: 10;
		}
		button{
			width: auto;
			border: 1px solid #0285FD;
			border-radius: 40px;
			height: 56px;
			font-weight: 500;
			font-size: 18px;
			line-height: 24px;
			color: #0285FD;
			padding: 16px 40px;
			&:hover{
				background: #0285FD;
				color: #F9F9F9;
			}
		}
	}
	.title{
		text-align: center;
		max-width: 512px;
		width: 100%;
		margin: 0 auto;
	}
	.description{
		max-width: 412px;
		width: 100%;
		margin: 30px auto 0 auto;
		text-align: center;
		font-size: 18px;
		line-height: 140%;
	}
	.join_link{
		display: flex;
		justify-content: center;
		margin-top: 30px;
		a{
			padding: 16px 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 56px;
			background: #FFFB1F;
			color: #191B20;
			border-radius: 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			cursor: pointer;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
	.list{
		max-width: 720px;
		width: 100%;
		margin: 70px auto 0 auto;
		@media only screen and (max-width: 768px) {
			margin: 40px auto 0 auto;
		}
	}
	table{
		width: 100%;
		@media only screen and (max-width: 768px) {
			margin-top: -20px;
		}
	}
	td{
		&:first-child, &:last-child{
			text-align: center;
		}
	}
	tbody{
		td{
			border-bottom: 1px solid #DDDFE4;
			padding: 20px 0;
			color: #656D81;
			font-size: 16px;
			line-height: 150%;
			@media only screen and (max-width: 768px) {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				border-bottom: none;
				padding: 5px 0;
			}
			span{
				display: none;
				@media only screen and (max-width: 768px) {
					display: block;
				}
			}
			&:last-child{
				@media only screen and (max-width: 768px) {
					border-bottom: 1px solid #DDDFE4;
					padding: 5px 0 20px 0;
					flex-direction: row;
					span{
						margin-right: 7px;
					}
				}
			}
			&:first-child{
				font-weight: 700;
				@media only screen and (max-width: 768px) {
					padding: 20px 0 5px 0;
					flex-direction: row;
					span{
						margin-right: 7px;
					}
				}
			}
		}
		tr{
			&:first-child{
				td{
					color: #0285FD;
					font-weight: bold;
				}
			}
			&:last-child{
				td{
					border-bottom: none;
				}
			}
		}
	}
	thead{
		@media only screen and (max-width: 768px) {
			display: none;
		}
		td{
			padding-bottom: 30px;
			border-bottom: 1px solid #DDDFE4;
		}
		&.empty span{
			background: #EEEFF2;
			color: #80889C;
		}
		span{
			background: #5CEE9C;
			border-radius: 500px;
			padding: 3px 16px;
			font-size: 16px;
			line-height: 120%;
			text-align: center;
			display: inline-block;
		}
	}
	.not_list{
		max-width: 340px;
		width: 100%;
		margin: 30px auto 0 auto;
		text-align: center;
		a{
			background: #FFFB1F;
			border-radius: 40px;
			height: 56px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 16px;
			line-height: 24px;
			padding: 16px 70px;
			margin-top: 40px;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
`