import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import WalletDeepLink from "components/Wallet/WalletDeepLink";
import htmlContent from "helpers/htmlContent";

export default function RebrandingMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1><img src="/pic/decor/round-arrow-right.svg" alt="rebranding"/>{htmlContent(t.title)}</h1></Title>
					<p className="description">{t.description}</p>
					<WalletDeepLink slug="https://crypterium.onelink.me/jtmZ" link={t.link}/>
				</div>
				<div className="image">
					<div className="decor1">
						<Image src="/pic/rebranding/main-decor-1.png" width={287} height={55} priority={true} alt="the next step in Crypterium"/>
					</div>
					<div className="decor2">
						<Image src="/pic/rebranding/main-decor-2.png" width={287} height={73} priority={true} alt="the next step in Crypterium"/>
					</div>
					<Image src="/pic/rebranding/rebranding-main.png" width={459} height={690} priority={true} alt="rebranding to сhoise.com"/>
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
		@media only screen and (max-width: 768px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	.content, .image{
		position: relative;
		z-index: 20;
	}
	.image{
		@media only screen and (max-width: 768px) {
			margin-top: 40px;
		}
	}
	.decor1{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: -150px;
		z-index: 30;
		margin-top: -70px;
	}
	.decor2{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: -200px;
		z-index: 30;
		margin-top: 100px;
	}
	.title{
		img{
			width: 70px;
			height: 70px;
			position: relative;
			top: 10px;
			margin-right: 10px;
			@media only screen and (max-width: 820px) {
				width: 50px;
				height: 50px;
			}
		}
		span{
			position: relative;
			p{
				position: relative;
				z-index: 10;
				display: inline-flex;
			}
			&:before{
				content: "";
				background: #5CEE9C;
				border-radius: 50px;
				padding: 5px 15px;
				position: absolute;
				width: 100%;
				left: -10px;
				height: 70px;
				bottom: 10px;
				@media only screen and (max-width: 1024px) {
					height: 50px;
				}
				@media only screen and (max-width: 820px) {
					height: 30px;
					bottom: 2px;
					padding: 5px 10px;
					left: -5px;
				}
			}
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
	.description{
		margin-top: 40px;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		max-width: 236px;
		width: 100%;
		@media only screen and (max-width: 768px) {
			text-align: center;
			margin: 40px auto 0 auto;
		}
	}
	.wallet_deep_link{
		justify-content: flex-start;
		margin-top: 50px;
	}
`