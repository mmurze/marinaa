import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import WalletDeepLink from "components/Wallet/WalletDeepLink";
import Image from "next/image";

export default function PredictionsMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<WalletDeepLink slug="https://crypterium.onelink.me/jtmZ/predictions?app_screen=predictions" link={t.wallet_deep_link}/>
				</div>
				<div className="image">
					<Image src="/pic/predictions/predictions-main.png" width={459.74} height={556.14} priority={true} alt="predict prices, win big"/>
				</div>
				<div className="glow"><img src="/pic/predictions/predictions-main-glow.svg" alt="Put the chances on your side with daily AI-powered price predictions"/></div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 120px;
	padding-bottom: 100px;
	margin-bottom: -100px;
	overflow: hidden;
	@media only screen and (max-width: 600px) {
		padding-top: 100px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: center;
		}
	}
	.title{
		max-width: 590px;
		width: 100%;
		@media only screen and (max-width: 1024px) {
			max-width: 500px;
		}
		@media only screen and (max-width: 820px) {
			text-align: center;
			max-width: 100%;
		}
	}
	.content{
		max-width: 590px;
		width: 100%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
			max-width: 100%;
		}
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		margin-top: 40px;
		@media only screen and (max-width: 820px) {
			text-align: center;
		}
	}
	.image{
		position: relative;
		padding-left: 60px;
		z-index: 20;
		@media only screen and (max-width: 820px) {
			padding-left: 0;
			margin-top: 40px;
		}
	}
	.glow{
		position: absolute;
		top: -400px;
		right: -400px;
	}
	.wallet_deep_link{
		justify-content: flex-start;
		@media only screen and (max-width: 820px) {
			justify-content: center;
		}
	}
`