import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function ChostakingStakeIt({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="video_block">
					<video autoPlay={true} muted={true} loop={true} playsInline>
						<source src="/video/chostaking.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
						<source src="/video/chostaking.webm" type='video/webm; codecs="vp8, vorbis"'/>
					</video>
				</div>
				<div className="content_block">
					<Title><h2>{t.title}</h2></Title>
					<p className="description">{t.description}</p>
					<ol className="list">
						{
							t.list.map((item, index) => {
								return (
									<li key={index}>
										<span><img src={item.icon} alt={item.title}/></span>
										<p>{item.title}</p>
									</li>
								)
							})
						}
					</ol>
					<a className="link_button" href="https://youtu.be/EbDJgjLPKPo" target="_blank" rel="noreferrer">{t.link_a}</a>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column-reverse;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.video_block{
		width: calc(100% - 500px);
		border-radius: 20px;
		padding: 20px;
		background: #242331;
		overflow: hidden;
		margin-right: 150px;
		@media only screen and (max-width: 1260px) {
			margin-right: 60px;
		}
		@media only screen and (max-width: 820px) {
			width: calc(50% - 20px);
			margin-right: 0;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-top: 70px;
		}
		video{
			width: 100%;
			border-radius: 20px;
		}
	}
	.content_block{
		width: 500px;
		@media only screen and (max-width: 820px) {
			width: calc(50% - 20px);
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.description{
		margin-top: 30px;
		font-size: 18px;
		line-height: 140%;
		color: #7B8199;
	}
	.list{
		margin-top: 60px;
		margin-left: 30px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
		li{
			margin-bottom: 18px;
			position: relative;
			&:last-child{
				margin-bottom: 0;
			}
			p{
				font-weight: 500;
				font-size: 18px;
				line-height: 140%;
				padding-left: 45px;
			}
			span{
				width: 32px;
				height: 32px;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				background: #FFFB1F;
				border-radius: 50%;
				position: absolute;
				top: -3px;
				left: 0;
			}
		}
	}
	.link_button{
		margin-top: 60px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		border-radius: 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		padding: 16px 40px;
		height: 56px;
		@media only screen and (max-width: 600px) {
			display: flex;
			margin-top: 40px;
		}
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
`