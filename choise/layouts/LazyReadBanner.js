import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useState} from "react";
import Modal from "components/Modal";
import YoutubeVideo from "components/YoutubeVideo";

export default function LazyReadBanner() {
	const [visible, setVisible] = useState(false)
	return (
		<Wrapper>
			<Modal width={1536} active={visible} onCallBack={setVisible}>
				<YoutubeVideo autoplay={true} embedSrc="https://www.youtube.com/embed/Zmuo0LllSBM"/>
			</Modal>
			<CenterBlock>
				<div className="video_banner">
					<button onClick={() => setVisible(true)} className="play"><img src="/pic/play-video.svg" alt="Play video"/></button>
					<Title><h2>lazy reader? watch 1-min tutorial</h2></Title>
					<p>Return on investment as of February 22, 2022.</p>
				</div>
				<div className="banner">
					<div className="top">
						<Title><h2>too anxius to wait? go virtual!</h2></Title>
						<p>Return on investment as of February 22, 2022. Values can change any time before or after the account is opened. Calculator only emonstrates the possible profitability. The annual interest rate can be changed.</p>
					</div>
					<div className="link">
						<a href="https://app.crypterium.com">Get a virtual</a>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 70px;
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.video_banner{
		max-width: 696px;
		width: 100%;
		margin-right: 30px;
		background: #F7F7F7 url("/pic/cards/video-banner.jpg") bottom right no-repeat;
		background-size: cover;
		border-radius: 24px;
		height: 555px;
		padding: 50px;
		position: relative;
		@media only screen and (max-width: 820px) {
			width: 100%;
			max-width: 100%;
		}
		@media only screen and (max-width: 600px) {
			padding: 20px;
			min-height: 340px;
			height: auto;
		}
		.title{
			max-width: 356px;
			width: 100%;
			@media only screen and (max-width: 820px) {
				max-width: 400px;
			}
			@media only screen and (max-width: 600px) {
				max-width: 195px;
			}
		}
		p{
			font-size: 16px;
			line-height: 140%;
			max-width: 190px;
			width: 100%;
			color: #80889C;
			margin-top: 15px;
		}
	}
	.banner{
		max-width: 474px;
		width: 100%;
		background: radial-gradient(115.82% 103.15% at -20.04% 153.06%, #5CEE9C 0%, #FFFB1F 100%), #F6F7F8;
		border-radius: 24px;
		height: 555px;
		padding: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
			width: 100%;
			margin-top: 20px;
			height: auto;
		}
		@media only screen and (max-width: 600px) {
			padding: 20px;
		}
		.title{
			max-width: 347px;
			width: 100%;
			margin: 0 auto;
			text-align: center;
			@media only screen and (max-width: 820px) {
				max-width: 100%;
			}
		}
		p{
			text-align: center;
			font-size: 16px;
			line-height: 140%;
			margin-top: 20px;
		}
		.link{
			display: flex;
			justify-content: center;
			@media only screen and (max-width: 600px) {
				margin-top: 40px;
			}
			a{
				display: inline-flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				background: #F9F9F9;
				border-radius: 40px;
				height: 60px;
				padding: 0 60px;
				font-weight: 500;
				font-size: 16px;
				line-height: 24px;
			}
		}
	}
	.play{
		position: absolute;
		top: 50px;
		right: 50px;
		z-index: 10;
		width: 70px;
		height: 70px;
		line-height: 0;
		background: #FFFB1F;
		border-radius: 50%;
		@media only screen and (max-width: 600px) {
			top: 20px;
			right: 20px;
		}
	}
`