import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function RaydiumBanner({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="round1">
						<Image src="/pic/raydium/banner-round-top.png" width={110} height={69} priority={true} alt="Round top"/>
					</div>
					<div className="round2">
						<Image src="/pic/raydium/banner-round-bottom.png" width={157} height={67} priority={true} alt="Round bottom"/>
					</div>
					<div className="content">
						<Title><h2>{t.title}</h2></Title>
						<p className="description">{t.description}</p>
						<div className="logo"><img src="/pic/raydium/raydium-logo-white.svg" alt="choise.com - the world's 1st MetaFi platform"/></div>
					</div>
					<div className="image">
						<Image src="/pic/raydium/banner-image.png" width={553} height={446} priority={true} alt="that combined all the benefits of CeFi and DeFi services."/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 80px;
	@media only screen and (max-width: 600px) {
		margin-top: 40px;
	}
	.banner{
		background: #0285FD;
		border-radius: 50px;
		overflow: hidden;
		padding: 70px 100px;
		color: #F9F9F9;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			padding: 70px;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			padding: 40px 30px;
			margin-left: -20px;
			margin-right: -20px;
			border-radius: 30px 30px 0 0;
		}
	}
	.content{
		max-width: 387px;
		width: 100%;
		position: relative;
		z-index: 10;
	}
	.description{
		margin-top: 30px;
		font-size: 18px;
		line-height: 150%;
	}
	.logo{
		margin-top: 30px;
	}
	.image{
		padding-left: 80px;
		@media only screen and (max-width: 820px) {
			position: absolute;
			right: -150px;
			bottom: 0;
			transform: scale(.8);
			transform-origin: right bottom;
		}
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.round1{
		position: absolute;
		top: 0;
		right: 50px;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.round2{
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		line-height: 0;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
`