import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import WalletDeepLink from "components/Wallet/WalletDeepLink";

export default function CardsMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<WalletDeepLink slug="https://crypterium.onelink.me/jtmZ/cardsorderorderws?app_screen=cards/order_order_ws" link={t.wallet_deep_link}/>
				</div>
				<div className="image">
					<Image src="/pic/cards/cards-main.png" width={631.67} height={429} priority={true} alt="crypterium visa card"/>
				</div>
				<div className="glow"><img src="/pic/cards/cards-main-glow.svg" alt="Getting a card in just minutes?"/></div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 1024px) {
		margin-top: 100px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			flex-direction: column-reverse;
			justify-content: center;
		}
	}
	.content{
		max-width: 480px;
		width: 100%;
		@media only screen and (max-width: 1024px) {
			text-align: center;
			margin-top: 40px;
			max-width: 100%;
		}
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		margin-top: 40px;
	}
	.image{
		position: relative;
		padding-left: 60px;
		z-index: 20;
		@media only screen and (max-width: 1024px) {
			padding-left: 0;
		}
	}
	.glow{
		position: absolute;
		top: -400px;
		right: -400px;
		z-index: 10;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
	}
	.wallet_deep_link{
		justify-content: flex-start;
		@media only screen and (max-width: 1024px) {
			justify-content: center;
		}
	}
`