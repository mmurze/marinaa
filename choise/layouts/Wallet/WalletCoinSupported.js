import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import array from "public/data/coin-supported.json"
import numberFormat from "helpers/numberFormat";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function WalletCoinSupported() {
	const [more, setMore] = useState(false)
	const {locale} = useRouter()
	const {wallet_coin_supported} = require(`locale/components/${locale}.json`)
	
	useEffect(() => {
		if (window.innerWidth <= 1024) setMore(true)
	}, [])
	
	const renderItem = (item, index) => {
		return (
			<li key={index}>
				<div className="heading">
					<img src={item.icon} alt={item.title}/>
					<h3>
						<span>{item.title}</span>
						<span>{item.label}</span>
					</h3>
				</div>
				<div className="value">$ {numberFormat(item.value, ".", "2")}</div>
				<div className="percent">
					+{item.percent}%
					<svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.11775 0.214286C3.28764 -0.0714285 3.71236 -0.0714287 3.88224 0.214286L6.94021 5.35714C7.1101 5.64286 6.89774 6 6.55796 6L0.442038 6C0.102264 6 -0.110095 5.64286 0.059792 5.35714L3.11775 0.214286Z" fill="#28D180"/>
					</svg>
				</div>
			</li>
		)
	}
	
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{wallet_coin_supported.title}</h2></Title>
				<p className="description">{wallet_coin_supported.description}</p>
				<ul className="list">
					{
						array.map((item, index) => {
							return (
								more ? renderItem(item, index) : index < 5 ? renderItem(item, index): null
							)
						})
					}
				</ul>
				{!more && <button className="show_more" onClick={() => setMore(true)}>{wallet_coin_supported.show}</button>}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.description{
		max-width: 681px;
		width: 100%;
		margin: 30px auto 0 auto;
		font-size: 20px;
		line-height: 150%;
		color: #7B8199;
		text-align: center;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 150%;
		}
	}
	.percent{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #EBEBEB;
		border-radius: 100px;
		height: 30px;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;
		padding: 5px 15px;
		margin-top: 10px;
		svg{
			margin-left: 5px;
		}
	}
	.show_more{
		width: auto;
		border: 1px solid #EBEBEB;
		border-radius: 40px;
		height: 56px;
		padding: 16px 40px;
		font-size: 16px;
		line-height: 24px;
		margin: 60px auto 0 auto;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
	.value{
		font-weight: 700;
		font-size: 28px;
		line-height: 120%;
		margin-top: 50px;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		margin-right: -20px;
		margin-bottom: -20px;
		margin-top: 60px;
		@media only screen and (max-width: 1024px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin-right: -40px;
			margin-left: -40px;
			padding-bottom: 40px;
			margin-bottom: -40px;
			padding-left: 40px;
		}
		@media only screen and (max-width: 600px) {
			margin-left: -20px;
			margin-right: -20px;
			margin-top: 40px;
		}
		li{
			width: calc(100% / 5 - 20px);
			background: #F7F7F7;
			border-radius: 24px;
			padding: 30px;
			margin-right: 20px;
			margin-bottom: 20px;
			@media only screen and (max-width: 1024px) {
				margin-bottom: 0;
				flex: 0 0 auto;
				width: 232px;
			}
		}
	}
	.heading{
		display: flex;
		align-items: center;
		h3{
			font-weight: normal;
			width: calc(100% - 46px);
			padding-left: 14px;
			span{
				display: block;
				&:first-child{
					font-size: 18px;
					line-height: 100%;
				}
				&:last-child{
					font-size: 15px;
					line-height: 120%;
					color: #7B8199;
				}
			}
		}
	}
`