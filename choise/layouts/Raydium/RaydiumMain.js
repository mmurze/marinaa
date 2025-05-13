import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import {Link} from "react-scroll";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function RaydiumMain({t}) {
	const snap = useSnapshot(state);
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<div className="icon">
						<img src="/pic/raydium/logo.svg" alt="100k CHO Airdrop"/>
					</div>
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<div className="arrow_description">
						<img src="/pic/decor/round-arrow-right-green.svg" alt="meet choise.com on Raydium"/>
						<p>{t.arrow_description}</p>
					</div>
					<div className="links">
						<a href={snap.raydiumLink} target="_blank" rel="noreferrer nofollow">{t.link_a}</a>
					</div>
					<p className="how_to">
						<a href="https://choisecom.medium.com/how-to-trade-cho-on-raydium-dex-exchange-2dcf543909ad" target="_blank" rel="noreferrer nofollow">{t.link_a_1}</a>
						{t.text_1}
						<a href="https://youtu.be/Dt4n818vQ7g" target="_blank" rel="noreferrer nofollow">{t.link_a_2}</a>
						{t.text_2}
					</p>
				</div>
				<div className="image">
					<Image src="/pic/raydium/main-pic.png" width={381} height={437} priority={true} alt="100 000 CHO is up for grabs now, as we celebrate the CHO TGE and listing on Raydium with a grand Airdrop"/>
				</div>
				<div className="glow"><img src="/pic/raydium/main-glow.svg" alt="Check the Terms"/></div>
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
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: center;
		}
	}
	.description{
		font-weight: 700;
		font-size: 48px;
		line-height: 100%;
		margin-top: 10px;
		@media only screen and (max-width: 820px) {
			max-width: 400px;
			width: 100%;
			text-align: center;
		}
		@media only screen and (max-width: 600px) {
			text-align: left;
			font-size: 30px;
		}
	}
	.arrow_description{
		display: flex;
		align-items: center;
		max-width: 530px;
		width: 100%;
		margin-top: 40px;
		p{
			font-size: 18px;
			line-height: 150%;
			width: calc(100% - 56px);
			padding-left: 15px;
			color: #80889C;
			@media only screen and (max-width: 600px) {
				font-size: 16px;
			}
		}
	}
	.content{
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	.glow{
		position: absolute;
		top: -500px;
		right: -300px;
	}
	.image{
		position: relative;
		z-index: 10;
		padding-left: 40px;
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
			display: flex;
			justify-content: center;
			padding-left: 0;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	.title{
		margin-top: 20px;
		@media only screen and (max-width: 820px) {
			text-align: center;
		}
		@media only screen and (max-width: 600px) {
			text-align: left;
		}
	}
	.links{
		margin-top: 70px;
		display: flex;
		justify-content: space-between;
		max-width: 454px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			max-width: 100%;
			justify-content: flex-start;
			margin-top: 40px;
		}
		a{
			width: calc(100% / 2 - 10px);
			height: 56px;
			border-radius: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 500;
			font-size: 18px;
			line-height: 24px;
			color: #0285FD;
			border: 1px solid #0285FD;
			@media only screen and (max-width: 600px) {
				margin-top: 20px;
			}
			&:hover{
				background: #0285FD;
				color: #F9F9F9;
			}
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
		}
	}
	.how_to{
		margin-top: 40px;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		color: #0285FD;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
		a{
			text-decoration: underline;
			color: #0285FD;
		}
	}
`