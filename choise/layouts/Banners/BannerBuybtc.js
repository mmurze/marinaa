import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {state} from "state";
import Link from "next/link";
import imageBanner from "public/pic/banners/buybtc.png"
import Image from "next/image";

export default function BannerBuybtc() {
	return (
		<Wrapper>
			<CenterBlock>
				<button onClick={() => state.topBanner = null} className="close_button">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.1365 1.69683L8.30331 0.863647L5.00013 4.16683L1.69695 0.863647L0.86377 1.69683L4.16695 5.00001L0.86377 8.30319L1.69695 9.13637L5.00013 5.83319L8.30331 9.13637L9.1365 8.30319L5.83331 5.00001L9.1365 1.69683Z"/>
					</svg>
				</button>
				<p>Don’t pay full price for BTC anymore. Buy Bitcoin with a <span>10% discount!</span> 😱</p>
				<div className="image">
					<Image height={170} src={imageBanner} alt="Don’t pay full price for BTC anymore. Buy Bitcoin with a 10% discount!"/>
				</div>
				<Link onClick={() => state.topBanner = null} href="/buybtc" className="button_link">Get 10% off BTC price</Link>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background: #8238FA;
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 170px;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			padding-top: 20px;
		}
	}
	p{
		max-width: 482px;
		width: 50%;
		font-size: 28px;
		line-height: 130%;
		color: #fff;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 768px) {
			width: 100%;
			max-width: 80%;
			padding-right: 80px;
			font-size: 22px;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			max-width: 100%;
			font-size: 19px;
			padding-right: 40px;
		}
		span{
			color: #FFF61B;
		}
	}
	.close_button{
		position: absolute;
		top: 20px;
		right: 0;
		background: rgba(255, 255, 255, 0.15);
		border-radius: 4px;
		width: 26px;
		height: 26px;
		z-index: 30;
		&:hover{
			background: #fff;
			svg{
				fill: #191B20;
			}
		}
		svg{
			fill: #fff;
		}
	}
	.button_link{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFFFF;
		border-radius: 49px;
		padding: 20px 35px;
		font-weight: 700;
		font-size: 16px;
		line-height: 19px;
		margin-right: 50px;
		position: absolute;
		right: 0;
		@media only screen and (max-width: 768px) {
			margin-top: 20px;
			margin-right: 0;
			width: 100%;
			font-size: 18px;
			position: relative;
		}
		&:hover{
			background: #FFFB1E;
		}
	}
	.image{
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: center;
		line-height: 0;
		margin-left: 50px;
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
`
