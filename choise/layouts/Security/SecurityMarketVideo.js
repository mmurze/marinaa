import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function SecurityMarketVideo({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="video_block">
					<div className="top">
						<Title className="video_title"><h2>{t.title}</h2></Title>
						<p className="description">{t.description}</p>
					</div>
					<div className="video_link_block">
						<a className="video_link" href="https://www.youtube.com/watch?v=BTZQrERzuao" target="_blank" rel="noreferrer">
							{t.link}
						</a>
					</div>
					<Image src="/pic/security/vladimir-video.jpg" alt="Vladimir Gorbunov" width={398} height={406} priority={true} className="video_image"/>
				</div>
				<div className="content">
					<p className="label">{t.label}</p>
					<Title className="content_title"><h3>{t.content_title}</h3></Title>
					<ul className="list">
						{
							t.list.map((item, index) =>{
								return(
									<li key={index}>{item}</li>
								)
							})
						}
					</ul>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 80px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column-reverse;
			justify-content: flex-start;
		}
	}
	.video_block{
		max-width: 587px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
			margin-top: 40px;
		}
	}
	.content{
		max-width: 477px;
		width: 100%;
		margin-left: 40px;
		@media only screen and (max-width: 820px) {
			margin-left: 0;
			max-width: 100%;
		}
	}
	.label{
		font-weight: 500;
		font-size: 18px;
		line-height: 100%;
		color: #A2A8B7;
		background: #EEEFF2;
		border-radius: 15.5px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 7px 15px;
	}
	.content_title{
		margin-top: 18px;
	}
	.list{
		margin-top: 40px;
		list-style-type: disc;
		padding-left: 15px;
		li{
			margin-bottom: 7px;
			font-size: 16px;
			line-height: 150%;
			color: #656D81;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.video_block{
		background: #F6F7F8;
		border-radius: 50px;
		padding: 60px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 600px) {
			border-radius: 24px;
			padding: 40px 30px;
		}
	}
	.video_title{
		max-width: 183px;
		width: 100%;
		position: relative;
		z-index: 10;
	}
	.description{
		margin-top: 20px;
		font-size: 28px;
		line-height: 120%;
		color: #656D81;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			font-size: 18px;
			line-height: 120%;
		}
	}
	.video_link{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 20px;
		padding: 16px 40px;
		background: #FFFB1F;
		border-radius: 40px;
		height: 56px;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		position: relative;
		z-index: 10;
	}
	.video_image{
		position: absolute;
		bottom: 0;
		right: 0;
		line-height: 0;
		@media only screen and (max-width: 600px) {
			transform: scale(.7);
			transform-origin: bottom right;
		}
	}
`