import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import WalletDeepLink from "components/Wallet/WalletDeepLink";

export default function CrptPurchasesBanner({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="title">{t.title}</div>
					<WalletDeepLink slug="https://crypterium.onelink.me/jtmZ/buycho?app_screen=buy-crypto/crpt" link={t.wallet_deep_link}/>
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
	.title{
		font-weight: 700;
		font-size: 90px;
		line-height: 100%;
		max-width: 467px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			font-size: 70px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 46px;
			line-height: 100%;
		}
	}
	.banner{
		padding: 75px 100px;
		background: url("/pic/crpt/purchases-background.jpg") center right;
		border-radius: 24px;
		@media only screen and (max-width: 1024px) {
			padding: 40px;
		}
	}
	.wallet_deep_link{
		justify-content: flex-start;
		margin-top: 74px;
	}
	.button_wallet{
		background: #F9F9F9;
		color: #191B20;
	}
	.round{
		border: none;
	}
`