import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {Link} from "react-scroll";
import Image from "next/image";

export default function RaydiumTryLuck({t}) {
	return (
		<Wrapper>
			<CenterBlock width={1000}>
				<div className="content">
					<p className="description">{t.description}<span>{t.title_span}</span></p>
					<p className="slogan">{t.slogan}</p>
				</div>
				<div className="image">
					<p>{t.description_img}</p>
					<p className="slogan"><span className="luck">{t.title_span_img}</span></p>
					<div className="link">
						<Link smooth={true} offset={-150} to="form" >{t.link}</Link>
					</div>
					<div className="terms">
						<a href="https://choisecom.medium.com/cho-airdrop-7c2518324a5a" target="_blank" rel="noreferrer nofollow">{t.link_a}</a>
					</div>
					<div className="background">
						<Image src="/pic/raydium/luck-block.png" width={600} height={630.26} priority={true} alt="try your luck"/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 160px;
	@media only screen and (max-width: 820px) {
		margin-top: 100px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column-reverse;
			align-items: center;
			justify-content: center;
		}
	}
	.content{
		position: relative;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-bottom: 80px;
			margin-top: 40px;
		}
		.slogan{
			color: #F9F9F9;
			font-weight: 500;
			font-size: 23px;
			line-height: 120%;
			padding: 7px 21px;
			background: #0285FD;
			border-radius: 30px;
			transform: rotate(-6.89deg);
			margin-top: -2px;
			display: inline-block;
			@media only screen and (max-width: 820px) {
				position: absolute;
				right: 0;
			}
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				margin-top: 5px;
			}
		}
	}
	.description{
		width: 408px;
		font-weight: 700;
		font-size: 48px;
		line-height: 100%;
		@media only screen and (max-width: 820px) {
			width: 100%;
			text-align: center;
			margin-top: 20px;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			font-size: 30px;
		}
		span{
			color: #0285FD;
		}
	}
	.background{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		@media only screen and (max-width: 600px) {
			top: 0;
			left: 0;
			transform: translate(0, 0) scale(1.5);
		}
	}
	.image{
		width: 488px;
		padding: 80px 70px 45px 70px;
		height: 510px;
		border: 16px solid #EEEFF2;
		background: #EEEFF2;
		border-radius: 300px 300px 10px 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		position: relative;
		@media only screen and (max-width: 600px) {
			width: 100%;
			padding: 80px 30px 30px 30px;
			height: 400px;
		}
		.slogan{
			width: 100%;
			display: flex;
			justify-content: flex-end;
			margin-top: -10px;
			position: relative;
			z-index: 10;
		}
		p{
			font-weight: 700;
			font-size: 48px;
			line-height: 100%;
			text-align: center;
			position: relative;
			z-index: 10;
			@media only screen and (max-width: 600px) {
				font-size: 30px;
			}
		}
		.luck{
			font-weight: 500;
			font-size: 23px;
			line-height: 120%;
			padding: 7px 21px;
			background: #0285FD;
			border-radius: 30px;
			transform: rotate(-6.23deg);
			display: inline-block;
			color: #F9F9F9;
			position: relative;
			z-index: 10;
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				margin-top: 5px;
			}
		}
	}
	.link{
		width: 100%;
		margin-top: 65px;
		position: relative;
		z-index: 10;
		a{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 56px;
			background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
			border-radius: 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
		}
	}
	.terms{
		margin-top: 15px;
		text-align: center;
		position: relative;
		z-index: 10;
		a{
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			color: #2F80ED;
		}
	}
`