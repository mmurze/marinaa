import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useEffect, useState} from "react";
import numberFormat from "helpers/numberFormat";

export default function CrptData({data, t}) {
	const [currentPrice, setCurrentPrice] = useState(0)
	const [totalSupply, setTotalSupply] = useState(0)
	
	useEffect(() => {
		if (data) {
			setTotalSupply(data.total_supply)
			setCurrentPrice(data.quote.USD.price.toFixed(4))
		}
	}, [])
	
	return (
		<Wrapper>
			<CenterBlock>
				<div className="item total_price">
					<p className="number">${numberFormat(currentPrice, " ", ".", "4")}</p>
					<span className="label">{t.total_price}</span>
				</div>
				<div className="line"/>
				<div className="item">
					<p className="number">{numberFormat(totalSupply, ",", ",")}</p>
					<span className="label">{t.total_supply}</span>
				</div>
				<div className="line"/>
				<div className="item">
					<p className="number">{numberFormat(82416919, ",", ",")}</p>
					<span className="label">{t.current_supply}</span>
				</div>
				<div className="line"/>
				<div className="item">
					<p className="top_label">{t.top_label}</p>
					<p className="number">{numberFormat(18026933, ",", ",")}</p>
					<span className="label">{t.frozen}</span>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			flex-wrap: wrap;
			margin-bottom: -80px;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.line{
		width: 1px;
		height: 115px;
		background: #DDDFE4;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
	}
	.item{
		border: 1px solid #80889C;
		border-radius: 65.3708px;
		position: relative;
		width: calc(100% / 4 - 30px);
		padding: 20px 40px;
		@media only screen and (max-width: 1024px) {
			width: calc(100% / 2 - 10px);
			margin-bottom: 80px;
			text-align: center;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-bottom: 60px;
		}
		&.total_price{
			background: #5CEE9C;
			border: none;
		}
		.number{
			font-weight: 700;
			font-size: 36px;
			line-height: 100%;
			letter-spacing: -0.03em;
		}
		.label{
			position: absolute;
			font-size: 18px;
			line-height: 150%;
			background: #80889C;
			border-radius: 65.3708px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 3px 15px;
			right: 15px;
			color: #F9F9F9;
			bottom: -18px;
		}
		.top_label{
			position: absolute;
			top: -28px;
			right: 15px;
			font-size: 14px;
			line-height: 17px;
			color: #80889C;
		}
	}
`