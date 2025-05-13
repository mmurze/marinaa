import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import {Link} from "react-scroll";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function LeaderboardMain({t}) {
	const snap = useSnapshot(state);
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<div className="icon">
						<img src="/pic/uniswap.svg" alt="CHO trading competition on"/>
					</div>
					<Title><h1>{t.title}</h1></Title>
					<div className="links">
						<a href={snap.uniswapLink} target="_blank" rel="noreferrer nofollow">{t.link_a}</a>
					</div>
					<p className="how_to">
						<a href="https://choisecom.medium.com/how-to-trade-cho-on-uniswap-dex-exchange-6a76d9d4d615" target="_blank" rel="noreferrer nofollow">{t.link_a_1}</a>
						{t.text_1}
						<a href="https://www.youtube.com/watch?v=D5yj3jJ3BYA" target="_blank" rel="noreferrer nofollow">{t.link_a_2}</a>
						{t.text_2}
					</p>
				</div>
				<div className="image">
					<Image src="/pic/leaderboard/uniswap-cho.png" width={638.76} height={376} priority={true} alt="win 100 000 $"/>
					<p>{t.description_img}</p>
				</div>
				<div className="glow"><img src="/pic/leaderboard/glow.svg" alt="CHO token sale rounds were a huge success"/></div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 120px;
	overflow-x: hidden;
	@media only screen and (max-width: 600px) {
		padding-top: 100px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	.glow{
		position: absolute;
		top: -500px;
		right: -300px;
	}
	.content{
		max-width: 550px;
		width: 100%;
		padding-right: 20px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 1024px) {
			max-width: 600px;
			padding-right: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	.title{
		margin-top: 20px;
	}
	h1{
		font-size: 80px;
		line-height: 100%;
		@media only screen and (max-width: 1130px) {
			font-size: 60px;
		}
		@media only screen and (max-width: 1024px) {
			text-align: center;
		}
		@media only screen and (max-width: 600px) {
			font-size: 46px;
		}
	}
	.icon{
		width: 188px;
	}
	.image{
		max-width: 638.76px;
		width: 100%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 1024px) {
			max-width: 600px;
			margin-bottom: 0;
			margin-top: 60px;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		p{
			font-size: 18px;
			line-height: 130%;
			color: #80889C;
			margin-top: 20px;
			padding-left: 140px;
			padding-right: 100px;
			@media only screen and (max-width: 1024px) {
				text-align: center;
				padding-left: 0;
				max-width: 100%;
				padding-right: 0;
			}
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