import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Apy15Exchanges({t}) {
	const [value, setValue] = useState(null)
	const graphValue = 5000000 - value + 300000
	useEffect(() => {
		axios.get("/api/choise-usdt5m").then(r => setValue(r.data.total))
	}, [])
	return (
		<Wrapper value={(graphValue * 100) / 5000000}>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="block_position">
					<div className="content">
						<div className="item celebration">
							<p>{t.total}</p>
							<p>{t.pool}</p>
						</div>
						<div className="item">
							<img src="/pic/main/exchanges-apy.svg" alt="exchanges"/>
						</div>
						{/*<div className="item exchange">*/}
						{/*	<div className="left">*/}
						{/*		<p>${numberFormat(graphValue, " ", ".", "2")}</p>*/}
						{/*		<p>already closed</p>*/}
						{/*	</div>*/}
						{/*	<p className="exchange_description">Out of $5M</p>*/}
						{/*	<span/>*/}
						{/*</div>*/}
					</div>
					<div className="pool_block">
						<div className="pool_title">{t.pool_title}</div>
						<p className="pool_description">{t.pool_description}</p>
						<a href="https://crpt.onelink.me/WpQ0/lkjmkm1w" className="link" target="_blank" rel="noreferrer nofollow">{t.link_account}</a>
						{/*<a href="#" className="terms" target="_blank" rel="noreferrer nofollow">Check the terms*/}
						{/*</a>*/}
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	background: linear-gradient(228.24deg, #5CEE9C 8.28%, #FFEF21 74.33%);
	padding: 100px 0;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		max-width: 796px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}
	.description, .pool_description{
		text-align: center;
		margin-top: 20px;
		font-size: 20px;
		line-height: 150%;
		color: #191B20;
	}
	.pool_description{
		color: #80889C;
	}
	.block_position{
		display: flex;
		justify-content: space-between;
		margin-top: 70px;
		@media only screen and (max-width: 1100px) {
			flex-direction: column;
		}
	}
	.pool_block{
		width: 414px;
		background: #F6F8FD;
		border-radius: 31px;
		padding: 40px 50px;
		@media only screen and (max-width: 1100px) {
			width: 100%;
			margin-top: 20px;
		}
		@media only screen and (max-width: 600px) {
			padding: 40px 20px;
		}
	}
	.content{
		width: calc(100% - 414px);
		margin-right: 40px;
		@media only screen and (max-width: 1100px) {
			width: 100%;
			margin-right: 0;
		}
	}
	.pool_title{
		font-weight: 700;
		font-size: 32px;
		line-height: 120%;
		text-align: center;
		max-width: 254px;
		width: 100%;
		margin: 0 auto;
		@media only screen and (max-width: 600px) {
			font-size: 26px;
		}
	}
	.link{
		height: 56px;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 16px 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 55px;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
	}
	.terms{
		font-size: 16px;
		line-height: 150%;
		color: #0285FD;
		margin-top: 15px;
		text-align: center;
		display: block;
	}
	.item{
		margin-bottom: 30px;
		width: 100%;
		&:last-child{
			margin-bottom: 0;
		}
	}
	.exchange_description{
		font-weight: 700;
		font-size: 20px;
		line-height: 100%;
		position: relative;
		z-index: 10;
	}
	.exchange{
		background: #00FFA9 url("/pic/main/exchange-bg.svg");
		height: 94px;
		border-radius: 65px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 40px;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 600px) {
			padding: 20px;
			height: 60px;
		}
		span{
			position: absolute;
			height: 100%;
			top: 0;
			left: 0;
			width: ${p => p.value}%;
			background: #00DE93;
		}
		.left{
			display: flex;
			align-items: center;
			position: relative;
			z-index: 10;
			p{
				&:first-child{
					font-weight: 700;
					font-size: 56px;
					line-height: 100%;
					@media only screen and (max-width: 600px) {
						font-size: 25px;
					}
				}
				&:last-child{
					font-size: 20px;
					line-height: 100%;
					width: 110px;
					margin-left: 26px;
					@media only screen and (max-width: 600px) {
						margin-left: 10px;
						font-size: 14px;
						width: 80px;
					}
				}
			}
		}
	}
	.celebration{
		display: flex;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
		}
		p{
			&:first-child{
				font-weight: 700;
				font-size: 56px;
				line-height: 100%;
				background: #F9F9F9;
				border-radius: 65px;
				color: #0285FD;
				height: 94px;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				max-width: 372px;
				width: 100%;
				@media only screen and (max-width: 820px) {
					max-width: 100%;
				}
				@media only screen and (max-width: 600px) {
					height: 60px;
					font-size: 30px;
				}
			}
			&:last-child{
				font-weight: 700;
				font-size: 32px;
				line-height: 100%;
				margin-left: 20px;
				@media only screen and (max-width: 820px) {
					margin-left: 0;
					margin-top: 20px;
				}
			}
		}
	}
`
