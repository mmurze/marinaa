import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import WalletDeepLink from "components/Wallet/WalletDeepLink";
import Link from "next/link";

export default function CrptMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<div className="links">
						<WalletDeepLink slug="https://crypterium.onelink.me/jtmZ/buycho?app_screen=buy-crypto/crpt" link={t.wallet_deep_link}/>
						<Link className="learn_more" href="/news/updates/the-biggest-crpt-burning">{t.link}</Link>
					</div>
				</div>
				<div className="image">
					<Image src="/pic/crpt/crpt-main.jpg" width={499} height={596} alt="сrypterium (crpt) token" priority={true}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 60px;
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column-reverse;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.content{
		max-width: 590px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
			margin-top: 40px;
		}
	}
	.links{
		display: flex;
		align-items: center;
		margin-top: 70px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
		}
		.learn_more{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 16px 40px;
			border: 1px solid #DDDFE4;
			border-radius: 40px;
			font-size: 16px;
			line-height: 24px;
			margin-left: 10px;
			@media only screen and (max-width: 600px) {
				margin-left: 0;
				width: 100%;
				margin-top: 20px;
			}
		}
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		margin-top: 50px;
	}
	.image{
		line-height: 0;
		padding-left: 40px;
		@media only screen and (max-width: 820px) {
			width: 100%;
			display: flex;
			justify-content: center;
			padding: 0 50px;
		}
	}
	.wallet_deep_link{
		justify-content: flex-start;
		margin-top: 0;
	}
`