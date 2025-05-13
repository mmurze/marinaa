import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import NftAnchors from "components/Nft/NftAnchors";
import SuccessMint from "components/Nft/MainMint/SuccessMint";
export default function NftMain({t}) {
	return (
		<Wrapper id="main">
			<CenterBlock>
				<div className="content">
					<NftAnchors/>
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<div className="title_blur"><img src="/pic/nft/main-title-blur.svg" alt="mint NFTs that contain access to CHO tokens"/></div>
				</div>
				<div className="nft_content">
					<div className="blur"><img src="/pic/nft/main-blur.svg" alt="Total supply"/></div>
					<SuccessMint/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	position: relative;
	z-index: 100;
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
	}
	.blur{
		position: absolute;
		bottom: -200px;
		right: -200px;
		@media only screen and (max-width: 1600px) {
			right: 0;
		}
	}
	.title_blur{
		position: absolute;
		top: -100px;
		left: -300px;
	}
	.nft_content{
		background: linear-gradient(314.13deg, #5CEE9C -3.49%, #FFFB1F 82.66%);
		border-radius: 500px 500px 24px 24px;
		max-width: 460px;
		width: 100%;
		padding: 2px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 1024px) {
			margin-top: 40px;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
			max-width: 100%;
		}
	}
	.title{
		margin-top: 80px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			text-align: left;
			margin-top: 0;
		}
	}
	.content{
		max-width: 590px;
		width: 100%;
		position: relative;
		padding-right: 40px;
		@media only screen and (max-width: 1024px) {
			text-align: center;
			padding-right: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: 100%;
		}
		@media only screen and (max-width: 600px) {
			align-items: flex-start;
		}
		.description{
			max-width: 538px;
			width: 100%;
			margin-top: 35px;
			font-size: 32px;
			line-height: 120%;
			letter-spacing: -0.03em;
			color: #7B8199;
			position: relative;
			z-index: 10;
			@media only screen and (max-width: 600px) {
				font-size: 20px;
				line-height: 150%;
				text-align: left;
				max-width: 242px;
				width: 100%;
			}
		}
	}
`