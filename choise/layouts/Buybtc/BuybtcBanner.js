import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import bannerImage1 from "public/pic/buybtc/buybtc-banner-1.png"
import bannerImage2 from "public/pic/buybtc/buybtc-banner-2.png"
import Image from "next/image";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function BuybtcBanner({t}) {
	const snap = useSnapshot(state)
	const [active, setActive] = useState(null)
	useEffect(() => {
		if (localStorage.getItem("buybtc")) {
			setActive(Number(localStorage.getItem("buybtc")))
		}
	}, [])
	const onHandleClick = (e) => {
		if (active === null) {
			localStorage.setItem("buybtc", e)
			axios.post("/api/buybtc/banner", {
				answer: e + 1, utm: snap.utm
			}).then(r => {
				if (r.data.status) setActive(e)
			})
		}
	}
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="image1">
						<Image src={bannerImage1} width={187} height={209} alt="Do you want to stop paying full price for BTC?"/>
					</div>
					<div className="image2">
						<Image src={bannerImage2} width={188} height={202} alt="No, not interested at all"/>
					</div>
					<div className="logo"><img src="/pic/logo-white.svg" alt="Choise.com"/></div>
					<h2>{t.title}</h2>
					<ul className={`list ${active !== null ? "has_value" : ""}`}>
						{
							t.array.map((item, index) => {
								return (
									<li
										className={`${active === index ? "active" : ""}`}
										key={index}
										onClick={() => onHandleClick(index)}
									>{index === active ? t.text : item}
									</li>
								)
							})
						}
					</ul>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 820px) {
		margin-top: 60px;
	}
	.banner{
		padding: 50px;
		background: #191B20 url("/pic/buybtc/banner-background.jpg") no-repeat;
		background-size: cover;
		border-radius: 30px;
		color: #fff;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 600px) {
			padding: 30px;
		}
	}
	.logo{
		position: relative;
		z-index: 10;
		display: flex;
		justify-content: center;
	}
	h2{
		max-width: 695px;
		width: 100%;
		margin: 40px auto 0  auto;
		font-weight: 700;
		font-size: 60px;
		line-height: 110%;
		text-align: center;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			font-size: 50px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 28px;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		max-width: 910px;
		width: 100%;
		margin: 55px auto 0 auto;
		position: relative;
		z-index: 10;
		&.has_value{
			li{
				&:hover{
					cursor: default;
					background: rgba(0, 0, 0, 0.3);
					color: #fff;
				}
				&.active{
					background: #fff;
					color: #191B20;
				}
			}
		}
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			margin-top: 40px;
		}
		li{
			width: calc(100% / 3 -  20px);
			padding: 8px 24px;
			background: rgba(0, 0, 0, 0.3);
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			color: #fff;
			border: 1px solid #A2A8B7;
			border-radius: 40px;
			min-height: 56px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			cursor: pointer;
			transition: all .3s ease-in-out;
			&:hover{
				background: #fff;
				color: #191B20;
				transition: all .3s ease-in-out;
			}
			&.active{
				cursor: default;
				background: #fff;
				color: #191B20;
				transition: all .3s ease-in-out;
			}
			@media only screen and (max-width: 820px) {
				width: 100%;
				margin-bottom: 10px;
				&:last-child{
					margin-bottom: 0;
				}
			}
		}
	}
	.image1{
		position: absolute;
		top: 40px;
		left: 50px;
		@media only screen and (max-width: 600px) {
			top: -20px;
			left: -20px;
			width: 100px;
		}
	}
	.image2{
		position: absolute;
		top: 40px;
		right: 50px;
		@media only screen and (max-width: 600px) {
			top: -20px;
			right: -20px;
			width: 100px;
		}
	}
`
