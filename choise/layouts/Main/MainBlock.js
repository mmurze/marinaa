import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import htmlContent from "helpers/htmlContent";

export default function MainBlock({t}){
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<div className="label">{t.label}</div>
					<Title><h1>{htmlContent(t.title)}</h1></Title>
					<p className="description">{htmlContent(t.description)}</p>
					<div className="links">
						<a href="https://crpt.onelink.me/WpQ0/lkjmkm1w" target="_blank" rel="noreferrer">{t.link_name}</a>
					</div>
				</div>
				<div className="image_block">
					<div className="image">
						<Image src="/pic/main-new/main-pic.png" width={402} height={668} priority={true} alt="Your crypto — your choise"/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	position: relative;
	height: calc(100vh + 30px);
	display: flex;
	align-items: center;
	background: #F6F7F8;
	@media only screen and (max-width: 600px) {
		height: auto;
		padding-top: 100px;
	}
	&:after{
		content: "";
		width: 45%;
		background: linear-gradient(217.84deg, #FFFB1F 4.65%, #5CEE9C 162.6%);
		position: absolute;
		right: 0;
		height: 100%;
		top: 0;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.content{
		padding-right: 40px;
		@media only screen and (max-width: 600px) {
			padding-right: 0;
		}
	}
	.content{
		width: 55%;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.image_block{
		width: 45%;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.image_block{
		padding-top: 150px;
	}
	.image{
		position: relative;
		right: -140px;
		@media only screen and (max-width: 1690px) {
			right: 0;
		}
		@media only screen and (max-height: 820px) {
			transform: scale(.8);
		}
	}
	.label{
		font-weight: 500;
		font-size: 18px;
		line-height: 100%;
		color: #A2A8B7;
		background: #EEEFF2;
		border-radius: 15.5px;
		padding: 7px 16px;
		display: inline-flex;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 120%;
		}
	}
	.title{
		max-width: 478px;
		width: 100%;
		margin-top: 30px;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
		h1{
			font-size: 66px;
			line-height: 110%;
			@media only screen and (max-width: 1024px) {
				font-size: 46px;
			}
			@media only screen and (max-width: 600px) {
				font-size: 32px;
				line-height: 110%;
			}
		}
	}
	.description{
		font-size: 14px;
		line-height: 150%;
		color: #80889C;
		margin-top: 30px;
		max-width: 424px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
	}
	.image_block{
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 90px);
		@media only screen and (max-width: 1024px) {
			padding-left: 40px;
		}
		@media only screen and (max-width: 600px) {
			background: linear-gradient(217.84deg, #FFFB1F 4.65%, #5CEE9C 162.6%);
			padding: 50px 20px;
			margin-top: 50px;
			margin-left: -20px;
			margin-right: -20px;
			width: calc(100% + 40px);
			height: auto;
		}
	}
	.links{
		display: flex;
		margin-top: 60px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 8px 35px;
			height: 56px;
			border-radius: 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			margin-right: 10px;
			background: #FFFB1F;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
			@media only screen and (max-width: 820px) {
				margin-right: 0;
				margin-bottom: 10px;
				&:last-child{
					margin-bottom: 0;
				}
			}
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
		}
	}
`
