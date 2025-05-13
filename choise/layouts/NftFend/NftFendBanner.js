import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import Responsive from "helpers/Responsive";
import {Link} from "react-scroll";
import htmlContent from "helpers/htmlContent";
export default function NftFendBanner({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="top">
						<h2>{htmlContent(t.title)}</h2>
						<Responsive width={600}>
							<div className="image">
								<Image src="/pic/fend/banner-image.png" width={428} height={363} priority={true} alt="Hurry up! The total amount of NFTs is limited"/>
							</div>
						</Responsive>
					</div>
					<div className="bottom">
						<p className="description">{t.description}</p>
						<Responsive width={600} mobile={
							<div className="image_mobile">
								<Image src="/pic/fend/banner-image-mob.png" width={308} height={283} priority={true} alt="But the total amount of NFTs is still limited"/>
							</div>
						}/>
						<Link className="mint_button" to="calculator" smooth={true} offset={-150}>{t.link}</Link>
					</div>
					<div className="glow"><img src="/pic/fend/banner-glow.svg" alt="It is important that we do not limit the number of NFT"/></div>
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
	.banner{
		background: #202423;
		border-radius: 24px;
		padding: 0 60px 85px 90px;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 820px) {
			padding: 0 40px 40px 40px;
		}
		@media only screen and (max-width: 600px) {
			padding: 50px 16px;
		}
	}
	.mint_button{
		min-width: 247px;
		width: auto;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 16px 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
			max-width: 100%;
			width: 100%;
		}
		&:hover{
			background: #F9F9F9;
			color: #191B20;
		}
	}
	h2{
		font-size: 80px;
		line-height: 100%;
		color: #F9F9F9;
		max-width: 604px;
		width: 100%;
		margin-top: 80px;
		@media only screen and (max-width: 820px) {
			font-size: 46px;
			line-height: 100%;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 0;
		}
		span{
			color: #FFFB1F;
			display: block;
		}
	}
	.bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 85px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			margin-top: 30px;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
		}
	}
	.description{
		font-size: 22px;
		line-height: 150%;
		color: #909292;
		max-width: 743px;
		width: 100%;
		margin-right: 40px;
		@media only screen and (max-width: 820px) {
			font-size: 16px;
			line-height: 130%;
		}
	}
	.top{
		display: flex;
		justify-content: space-between;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.glow{
		position: absolute;
		top: -100px;
		right: -100px;
		@media only screen and (max-width: 600px) {
			right: 0;
			top: auto;
			bottom: 100px;
			width: 120%;
		}
	}
	.image_mobile{
		margin-top: 50px;
	}
`