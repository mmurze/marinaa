import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function CrptBanner({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="title">{t.title}</div>
					<div className="links">
						<a className="deposit" target="_blank" rel="noreferrer nofollow" href="https://crypterium.onelink.me/jtmZ/deposits?app_screen=deposits">{t.link}</a>
					</div>
					<div className="image">
						<Image src="/pic/crpt/deposit-banner.png" width={427} height={394} priority={true} alt="get 21% annually for your crpt deposit <span>* for new users only"/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.banner{
		background: #191B20 url("/pic/crpt/banner-bg.svg") no-repeat;
		background-size: cover;
		border-radius: 24px;
		padding: 75px 100px;
		color: #F9F9F9;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 1024px) {
			padding: 40px;
		}
		@media only screen and (max-width: 600px) {
			height: 750px;
			padding: 40px 20px;
			background-position: center center;
		}
	}
	.title{
		max-width: 718px;
		width: 100%;
		font-weight: 700;
		font-size: 90px;
		line-height: 110%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			font-size: 70px;
			padding-right: 100px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 46px;
			line-height: 100%;
			max-width: 100%;
			padding-right: 0;
		}
	}
	.image{
		position: absolute;
		bottom: 10px;
		right: 70px;
		@media only screen and (max-width: 820px) {
			right: -140px;
		}
	}
	.links{
		display: flex;
		align-items: center;
		margin-top: 47px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		a{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 56px;
			border-radius: 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
		}
		.deposit{
			max-width: 173px;
			background: #FFFB1F;
			@media only screen and (max-width: 600px) {
				max-width: 100%;
			}
		}
	}
`