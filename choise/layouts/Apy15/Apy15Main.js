import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import WalletDeepLink from "components/Wallet/WalletDeepLink";
import Image from "next/image";

export default function Apy15Main({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<WalletDeepLink slug="https://crypterium.onelink.me/jtmZ/opendepositUSDT?app_screen=opendeposit/USDT" link={t.wallet_deep_link}/>
				</div>
				<div className="image">
					<Image src="/pic/apy15/apy15-main.png" width={538} height={485.5} priority={true} alt="price insurance"/>
				</div>
				<div className="glow"><img src="/pic/rebranding/glow.svg" alt="rebranding glow"/></div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 120px;
	overflow: hidden;
	padding-bottom: 100px;
	margin-bottom: -100px;
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
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		margin-top: 40px;
		max-width: 441px;
		width: 100%;
	}
	.content{
		max-width: 718px;
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
		top: -400px;
		right: -600px;
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
			display: none;
		}
	}
`