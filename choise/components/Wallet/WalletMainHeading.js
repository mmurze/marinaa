import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import WalletLinks from "components/Wallet/WalletLinks";

export default function WalletMainHeading({title, description, linkTitle, image, imageWidth, imageHeight, glow = true, contentWidth = 780, appLink = "https://app.crypterium.com"}) {
	return (
		<>
			<WalletLinks top={true}/>
			<Wrapper contentWidth={contentWidth}>
				<CenterBlock>
					<div className="block_position">
						<div className="content">
							<Title><h1>{title}</h1></Title>
							<p className="description">{description}</p>
							<div className="link">
								<a rel="noreferrer nofollow" target="_blank" href={appLink}>{linkTitle}</a>
							</div>
						</div>
						<div className="image">
							<Image src={image} width={imageWidth} height={imageHeight} alt={title} priority={true}/>
						</div>
						{glow && (
							<div className="glow">
								<img src="/pic/wallet/wallet-main-blur.svg" alt="Wallet Blur"/>
							</div>
						)}
					</div>
				</CenterBlock>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.section`
	@media only screen and (max-width: 768px) {
		margin-top: 40px;
	}
	@media only screen and (max-width: 600px) {
		overflow: hidden;
		padding-bottom: 80px;
		margin-bottom: -80px;
	}
	.block_position{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 60px;
		position: relative;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.content{
		max-width: ${p => p.contentWidth}px;
		width: 100%;
		padding-right: 50px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			padding-right: 0;
		}
	}
	.image{
		width: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-top: 40px;
		}
	}
	.glow{
		position: absolute;
		top: -300px;
		right: -300px;
		@media only screen and (max-width: 1800px) {
			right: 0;
		}
		@media only screen and (max-width: 600px) {
			bottom: 0;
			top: auto;
			transform: scale(2);
		}
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 150%;
			margin-top: 20px;
		}
	}
	.link{
		margin-top: 70px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
		a{
			background: #FFFB1F;
			border-radius: 40px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 16px;
			line-height: 24px;
			height: 56px;
			padding: 16px 40px;
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