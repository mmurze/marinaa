import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import WalletDeepLink from "components/Wallet/WalletDeepLink";
import Image from "next/image";

export default function PriceInsuranceMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1><img width={70} height={70} src="/pic/decor/round-arrow-right.svg" alt="price insurance"/>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<WalletDeepLink slug="https://crypterium.onelink.me/jtmZ/insurance?app_screen=insurance" link={t.wallet_deep_link}/>
				</div>
				<div className="image">
					<Image src="/pic/price-insurance/price-insurance-main.png" width={577} height={416.88} priority={true} alt="price insurance"/>
				</div>
				<div className="glow"><img src="/pic/rebranding/glow.svg" alt="rebranding glow"/></div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 120px;
	overflow: hidden;
	@media only screen and (max-width: 600px) {
		padding-top: 100px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	.title{
		img{
			position: relative;
			top: 15px;
			margin-right: 10px;
			@media only screen and (max-width: 820px) {
				width: 40px;
				height: 40px;
				top: 10px;
			}
		}
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		margin-top: 40px;
	}
	.content{
		max-width: 407px;
		width: 100%;
		position: relative;
		z-index: 20;
	}
	.wallet_deep_link{
		justify-content: flex-start;
		margin-top: 50px;
	}
	.glow{
		position: absolute;
		top: -600px;
		right: -400px;
		z-index: 10;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
	}
	.image{
		position: relative;
		z-index: 20;
		padding-left: 40px;
		@media only screen and (max-width: 600px) {
			padding-left: 0;
			margin-top: 40px;
			display: flex;
			justify-content: center;
		}
	}
`