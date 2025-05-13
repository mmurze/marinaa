import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useState} from "react";
import YoutubeVideo from "components/YoutubeVideo";
import Modal from "components/Modal";
import Image from "next/image";

export default function RebrandingVideoBanner({t}) {
	const [visible, setVisible] = useState(false)
	return (
		<Wrapper>
			<Modal width={1536} active={visible} onCallBack={setVisible}>
				<YoutubeVideo autoplay={true} embedSrc="https://www.youtube.com/embed/glRR-nhBUIw"/>
			</Modal>
			<CenterBlock>
				<div className="banner">
					<div className="content">
						<p>{t.title}</p>
						<button onClick={() => setVisible(true)}>{t.button}</button>
					</div>
					<div className="image">
						<Image src="/pic/nft/video-banner.jpg" width={456} height={261} alt="how to mint an nft from cho metafi collection" priority={true}/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.banner{
		background: #F6F7F8;
		border-radius: 24px;
		padding: 50px;
		position: relative;
		@media only screen and (max-width: 768px) {
			padding: 40px 30px;
		}
		@media only screen and (max-width: 600px) {
			height: 510px;
			padding: 40px;
		}
	}
	.image{
		position: absolute;
		bottom: 0;
		right: 0;
	}
	.content{
		max-width: 345px;
		width: 100%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
		p{
			font-weight: 700;
			font-size: 48px;
			line-height: 110%;
			@media only screen and (max-width: 600px) {
				font-size: 30px;
				line-height: 110%;
				text-align: center;
			}
		}
		button{
			width: auto;
			height: 56px;
			background: #FFFB1F;
			border-radius: 40px;
			padding: 10px 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			text-align: center;
			margin-top: 70px;
			@media only screen and (max-width: 600px) {
				margin: 50px auto 0 auto;
			}
		}
	}
`