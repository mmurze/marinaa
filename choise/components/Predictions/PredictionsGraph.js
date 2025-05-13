import styled from "styled-components";
import {useEffect, useState} from "react";
import moment from "moment/moment";

export default function PredictionsGraph({array, title, t}) {
	const [total, setTotal] = useState(0)
	
	useEffect(() => {
		let total = 0;
		array.forEach(item => {
			total+=item.profit;
		})
		setTotal(parseInt(total))
	}, [array])
	
	return (
		<Wrapper>
			<div className="title_block">
				<div className="title">
					<img src={`/pic/predictions/coins/${title.toLowerCase()}.svg`} alt={title}/>
					<p>{title}</p>
				</div>
				<div className="total">
					<p>{t.total}</p>
					<p>{total}%</p>
				</div>
			</div>
			<div className="graph_position">
				<div className="graph_box">
					<div className="list">
						{
							array.map((item, index) => {
								return (
									<div className="graph_item" key={index}>
										<Line height={parseInt(item.profit)}>
											<div className="line"/>
											<div className="graph"/>
										</Line>
									</div>
								)
							})
						}
					</div>
					<div className="values_list">
						{
							array.map((item, index) => {
								return (
									<div className="values" key={index}>
										<div className="profit">{parseInt(item.profit) > 0 ? '+' : null}{parseInt(item.profit)}%</div>
										<div className="date">
											<span>{moment(item.timestamp).format("MM.YY")}</span>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

const Line = styled.div`
	height: 100%;
	position: relative;
	width: 80px;
	.line {
		position: absolute;
		content: '';
		border-left: 1px solid #DDDFE4;
		height: 100%;
		left: 4.5px;
		bottom: 0;
		z-index: 9;
	}
	.graph {
		height: ${props => props.height}px;
		display: block;
		width: 11px;
		position: absolute;
		bottom: 0;
		z-index: 10;
		background: #5CEE9C;
		border-radius: 20px;
		transition: all .3s ease-in-out;
	}
`

const Wrapper = styled.div`
	width: 770px;
	border-right: 1px solid #C6CAD3;
	padding-right: 60px;
	@media only screen and (max-width: 1024px) {
		width: 550px;
	}
	@media only screen and (max-width: 820px) {
		border-right: none;
		padding-right: 0;
		width: 100%;
	}
	@media only screen and (max-width: 600px) {
		.graph_position {
			display: flex;
			flex-wrap: nowrap;
			overflow-x: auto;
		}
		.graph_box {
			flex: 0 0 auto;
			width: 600px;
		}
	}
	@media only screen and (max-width: 900px) {
		width: 100%;
		margin-top: 40px;
	}
	.title_block {
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
			box-sizing: border-box;
		}
	}
	.total {
		display: flex;
		align-items: center;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
		p:first-child {
			font-weight: 500;
			background: #FFFB1F;
			border-radius: 38px;
			padding: 5px 26px;
			display: inline-flex;
			font-size: 16px;
			line-height: 26px;
		}
		p:last-child {
			font-weight: bold;
			font-size: 36px;
			line-height: 26px;
			margin-left: 16px;
		}
	}
	.title {
		display: flex;
		align-items: center;
		p {
			margin-left: 20px;
			font-weight: bold;
			font-size: 36px;
			line-height: 26px;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 46px;
		align-items: flex-end;
		.graph_item {
			width: calc(100% / 7);
			display: flex;
			align-items: flex-end;
			justify-content: center;
			height: 188px;
			position: relative;
			&:nth-child(even) {
				height: 153px;
			}
		}
	}
	.values_list{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		.values{
			width: calc(100% / 7);
		}
		.profit {
			font-weight: 700;
			font-size: 20px;
			line-height: 100%;
		}
		.date {
			display: inline-flex;
			margin-top: 5px;
			span{
				height: 20px;
				font-weight: 500;
				font-size: 10px;
				line-height: 12px;
				text-align: center;
				background: #FFFB1F;
				border-radius: 100px;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 4px 8px;
			}
		}
	}
`