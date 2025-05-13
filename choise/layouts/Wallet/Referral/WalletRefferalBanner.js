import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import htmlContent from "helpers/htmlContent";

export default function WalletRefferalBanner({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="content">
						<h2>{htmlContent(t.title)}</h2>
						<p className="description">{t.description}</p>
						<div className="link">
							<a href="https://crypterium.onelink.me/jtmZ?pid=website&af_web_dp=https%3A%2F%2Fapp.crypterium.com%2F&utm_source=website&utm_campaign=referral&utm_medium=organic&cookie_id=1927962282.1646762476&utm_content=wallet_referral_link" target="_blank" rel="noreferrer nofollow">{t.link}</a>
						</div>
					</div>
					<div className="image">
						<Image src="/pic/wallet/referral-banner.png" width={605} height={550} priority={true} alt="more than 422 000 crpt "/>
					</div>
					<div className="image_mob">
						<Image src="/pic/wallet/referral-banner-mob.png" width={750} height={278} priority={true} alt="more than 422 000 crpt "/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.banner{
		background: linear-gradient(294.27deg, #5CEE9C -5.81%, #FFEF21 84.09%);
		border-radius: 24px;
		padding: 75px 100px;
		overflow: hidden;
		height: 550px;
		@media only screen and (max-width: 820px) {
			padding: 75px;
		}
		@media only screen and (max-width: 600px) {
			padding: 70px 0 0 0;
			height: auto;
		}
	}
	.content{
		max-width: 570px;
		width: 100%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			padding: 0 30px;
		}
	}
	.image_mob{
		display: none;
		line-height: 0;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			display: block;
		}
	}
	.image{
		position: absolute;
		top: 0;
		right: 0;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	h2{
		font-size: 90px;
		line-height: 100%;
		@media only screen and (max-width: 600px) {
			font-size: 46px;
			line-height: 100%;
			text-align: center;
		}
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		max-width: 448px;
		width: 100%;
		margin-top: 30px;
		@media only screen and (max-width: 600px) {
			text-align: center;
		}
	}
	.link{
		margin-top: 50px;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		a{
			font-size: 16px;
			line-height: 24px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #F9F9F9;
			border-radius: 40px;
			height: 56px;
			padding: 0 40px;
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
`