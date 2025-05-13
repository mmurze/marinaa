import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import array from "public/data/social.json"
import Title from "components/Title";
import Marquee from "react-fast-marquee";
import featuredArray from "public/data/featured-media.json"
export default function MainCommunity({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<Title><h4>{t.title}</h4></Title>
					<div className="top_block">
						{
							array.map((item, index) => {
								return (
									<div className="item" key={index}>
										<a href={item.link} target="_blank">{item.title}</a>
										<div className="icon" dangerouslySetInnerHTML={{__html: item.icon}}/>
										<p className="title_icon">{item.title}</p>
									</div>
								)
							})
						}
					</div>
					<div className="media_slider">
						<Marquee gradient={false}>
							{
								featuredArray.concat(featuredArray).map((item, index) => {
									return (
										<div className="featured_item" key={index}>
											<a
												href={item.link}
												target="_blank"
												rel="noreferrer"
												className="icon"
												dangerouslySetInnerHTML={{__html: item.icon}}
											/>
										</div>
									)
								})
							}
						</Marquee>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 200px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.banner{
		background: #191B20;
		border-radius: 30px;
		color: #F9F9F9;
		padding: 50px 0 0 0;
		@media only screen and (max-width: 600px) {
			margin-left: -20px;
			margin-right: -20px;
			border-radius: 0;
			padding: 30px 0 0 0;
		}
	}
	.title{
		text-align: center;
	}
	.top_block{
		padding: 50px 70px 0 70px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			flex-wrap: wrap;
			margin-bottom: -20px;
		}
		@media only screen and (max-width: 600px) {
			padding: 30px 30px 0 30px;
		}
	}
	.item{
		width: calc(100% / 4 - 20px);
		background: #272A32;
		border-radius: 24px;
		position: relative;
		padding: 40px 65px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: .3s ease-in-out;
		@media only screen and (max-width: 1024px) {
			width: calc(100% / 2 - 10px);
			margin-bottom: 20px;
			padding: 20px 16px;
		}
		&:nth-child(1){
			&:hover{
				background: #1D9BF0;
				transition: .3s ease-in-out;
			}
			svg{
				width: 78px;
				height: 68px;
				@media only screen and (max-width: 600px) {
					width: 65px;
					height: 56.67px;
				}
			}
		}
		&:nth-child(2){
			&:hover{
				background: #50A1DC;
				transition: .3s ease-in-out;
			}
			svg{
				width: 74px;
				height: 61px;
				@media only screen and (max-width: 600px) {
					width: 61.67px;
					height: 50.83px;
				}
			}
		}
		&:nth-child(3){
			&:hover{
				background: #F9F9F9;
				color: #191B20;
				transition: .3s ease-in-out;
				svg{
					fill: #191B20;
					transition: .3s ease-in-out;
				}
			}
			svg{
				width: 102px;
				height: 57.76px;
				@media only screen and (max-width: 600px) {
					width: 64px;
					height: 36.24px;
				}
			}
		}
		&:nth-child(4){
			&:hover{
				background: #6773FF;
				transition: .3s ease-in-out;
			}
			svg{
				width: 75px;
				height: 58.05px;
				@media only screen and (max-width: 600px) {
					width: 62.5px;
					height: 48.38px;
				}
			}
		}
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 10;
			font-size: 0;
		}
	}
	.icon{
		height: 120px;
		display: flex;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			height: 100px;
		}
		svg{
			fill: #F9F9F9;
			transition: .3s ease-in-out;
		}
	}
	.title_icon{
		margin-top: 40px;
		font-weight: 700;
		font-size: 32px;
		line-height: 150%;
		text-align: center;
		@media only screen and (max-width: 600px) {
			margin-top: 15px;
			font-size: 24px;
			line-height: 110%;
		}
	}
	.media_slider{
		margin-top: 20px;
	}
	.featured_item{
		margin-right: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		a{
			svg{
				fill: #80889C;
			}
			&:hover svg{
				fill: #28D180;
			}
		}
	}
`