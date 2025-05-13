import styled from "styled-components";
import Link from "next/link";
import moment from "moment";
import {useEffect, useState} from "react";
import htmlContent from "helpers/htmlContent";
export default function StepInformationPredict({array, t}) {
	const [total, setTotal] = useState(0)
	useEffect(() => {
		let total = 0;
		array.forEach(item => {
			total+=item.profit;
		})
		setTotal(parseInt(total))
	}, [array])
	return (
		<Wrapper className="tab_item_block">
			<div className="content">
				<Link href="/pages/predictions" className="top_link">{t.link_predict}</Link>
				<div className="top">
					<h3>{t.title}</h3>
					<p className="description">{t.description}</p>
					<div className="labels_list">
						{
							t.array.map((item, index)=>{
								return(
									<p key={index}>{item}</p>
								)
							})
						}
					</div>
				</div>
				<div className="link_block">{t.link_predict}</div>
			</div>
			<div className="graph_block">
				<div className="graph_heading">
					<p className="coin_heading"><img src="/pic/main-new/eth-tab-icon.svg" alt="Ethereum"/>{t.coin_heading}</p>
					<p className="profit_heading">{total}% {htmlContent(t.profit_heading)}</p>
				</div>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<Line height={item.profit}>
										<span/>
									</Line>
									<div className="profit_value">{parseInt(item.profit) > 0 ? '+' : null}{parseInt(item.profit)}%</div>
									<div className="profit_date">
										{moment(item.timestamp).format("MM.YY")}
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</Wrapper>
	)
}


const Line = styled.div`
	height: 100%;
	position: relative;
	width: 100%;
	background: #ebebeb;
	border-radius: 3px;
	overflow: hidden;
	span {
		height: ${props => props.height}%;
		display: block;
		width: calc(100% - 6px);
		background: #28D180;
		border-radius: 3px;
		position: absolute;
		left: 3px;
		bottom: 4px;
		z-index: 10;
		transition: all .3s ease-in-out;
	}
`
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	.labels_list{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -5px;
		margin-top: 20px;
		p{
			background: #F6F7F8;
			border-radius: 8px;
			padding: 4px 5px;
			margin-right: 5px;
			margin-bottom: 5px;
			font-weight: 500;
			font-size: 12px;
			line-height: 150%;
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.content{
		background: #F9F9F9;
		border-radius: 20px;
		width: 286px;
		height: 484px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		&:hover .link_block{
			background: #272A32;
			transition: .3s ease-in-out;
		}
	}
	.graph_block{
		overflow: hidden;
		border-radius: 20px;
		width: calc(100% - 286px - 20px);
		background: #F9F9F9;
		padding: 30px;
	}
	h3{
		font-size: 24px;
		line-height: 120%;
	}
	.description{
		margin-top: 20px;
		font-size: 14px;
		line-height: 150%;
		color: #848484;
	}
	.link_block{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #191B20;
		padding: 20px;
		border-radius: 55px;
		height: 43px;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		color: #F9F9F9;
		transition: .3s ease-in-out;
	}
	.top_link{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		font-size: 0;
	}
	.graph_heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.coin_heading{
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		display: flex;
		align-items: center;
		img{
			margin-right: 10px;
		}
	}
	.profit_heading{
		text-align: right;
		font-weight: 700;
		font-size: 24px;
		line-height: 150%;
		span{
			display: block;
			font-weight: 400;
			font-size: 12px;
			line-height: 150%;
			color: #A2A8B7;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		height: 279px;
		margin-top: 50px;
		.item{
			width: calc(100% / 7 - 20px);
		}
	}
	.profit_value{
		font-weight: 700;
		font-size: 14px;
		line-height: 120%;
		color: #28D180;
		text-align: center;
		margin-top: 10px;
	}
	.profit_date{
		text-align: center;
		font-weight: 500;
		font-size: 12px;
		line-height: 150%;
		color: #C6CAD3;
		margin-top: 4px;
	}
`
