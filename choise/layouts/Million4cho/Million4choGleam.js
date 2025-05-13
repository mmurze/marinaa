import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import htmlContent from "helpers/htmlContent";

export default function Million4choGleam({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<h2>{htmlContent(t.title)}</h2>
				<p className="description">{t.description}</p>
				<div className="link_block">
					<a href="https://gleam.io/xgvcT/publish-1-tweet-and-win-1500000-cho-price-prediction-" target="_blank" rel="noreferrer" className="link_button">
						{t.link}
						<span/>
						<span/>
						<span/>
						<span/>
					</a>
				</div>
				<div className="image_left">
					<Image src="/pic/million4cho/tweet-user-left.png" width={456.23} height={480.97} priority={true} alt="Participate in Gleam"/>
				</div>
				<div className="image_right">
					<Image src="/pic/million4cho/tweet-user-right.png" width={496.19} height={527.52} priority={true} alt="Increase your chances of winning"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 210px;
	background: #111111;
	overflow: hidden;
	position: relative;
	z-index: 10;
	padding-bottom: 150px;
	margin-bottom: -150px;
	@media only screen and (max-width: 1024px) {
		padding-bottom: 200px;
		margin-bottom: -200px;
	}
	@media only screen and (max-width: 600px) {
		padding-top: 80px;
		padding-bottom: 0;
		margin-bottom: -1px;
	}
	h2{
		text-align: center;
		max-width: 900px;
		width: 100%;
		margin: 0 auto;
		font-weight: 700;
		font-size: 48px;
		line-height: 130%;
		color: #F9F9F9;
		@media only screen and (max-width: 600px) {
			font-size: 28px;
			line-height: 130%;
		}
		span{
			color: #00FF66;
		}
	}
	.description{
		max-width: 525px;
		width: 100%;
		margin: 30px auto 0 auto;
		text-align: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		color: #F9F9F9;
		@media only screen and (max-width: 600px) {
			font-size: 24px;
			line-height: 150%;
		}
	}
	.link_block{
		display: flex;
		justify-content: center;
		margin-top: 110px;
		@media only screen and (max-width: 600px) {
			margin-top: 70px;
		}
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #00FF66;
			border-radius: 150px;
			width: 199px;
			height: 49px;
			position: relative;
			padding: 0 22px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			text-transform: uppercase;
			@media only screen and (max-width: 600px) {
				width: 210px;
				height: 60px;
			}
			&:hover{
				background: #60FF9F;
			}
			&:before{
				content: "";
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				background: #00FF66;
				opacity: 0.4;
				filter: blur(25px);
				@media only screen and (max-width: 600px) {
					display: none;
				}
			}
		}
		span{
			border: 1px solid #F9F9F9;
			border-radius: 150px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			@media only screen and (max-width: 600px) {
				display: none;
			}
			&:nth-child(1){
				width: 217px;
				height: 61px;
				opacity: 0.15;
			}
			&:nth-child(2){
				width: 245px;
				height: 77px;
				opacity: 0.15;
			}
			&:nth-child(3){
				width: 285px;
				height: 113px;
				opacity: 0.14;
			}
			&:nth-child(4){
				width: 327px;
				height: 149px;
				opacity: 0.11;
			}
		}
	}
	.image_left{
		position: absolute;
		left: -350px;
		top: 0;
		@media only screen and (max-width: 1024px) {
			left: -250px;
			top: 100px;
		}
		@media only screen and (max-width: 600px) {
			top: auto;
			bottom: 0;
			width: 250px;
			left: -100px;
		}
	}
	.image_right{
		position: absolute;
		top: 0;
		right: -350px;
		@media only screen and (max-width: 1024px) {
			top: 100px;
			right: -250px;
		}
		@media only screen and (max-width: 600px) {
			top: auto;
			bottom: 0;
			width: 250px;
			right: -100px;
		}
	}
	.center_block{
		@media only screen and (max-width: 600px) {
			padding-bottom: 300px;
		}
	}
`