import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function SecurityBanner({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="heading">
						<Title><h2>{t.title}</h2></Title>
						<Responsive width={600}>
							<img src="/pic/security/bugcrowd-icon.svg" className="bugcrowd" alt="bugcrowd"/>
						</Responsive>
					</div>
					<p className="description">{t.description}</p>
					<Responsive width={600} mobile={
						<div className="mob_logo">
							<img src="/pic/security/bugcrowd-icon.svg" className="bugcrowd" alt="bugcrowd"/>
						</div>
					}/>
					<p className="label">{t.label}</p>
					<div className="value_block">
						<p className="value">$20,000 +</p>
						<p className="pool"><span>{t.pool}</span></p>
					</div>
					<Image className="safe_pic" src="/pic/security/banner-safe.png" alt="Reward Pool" priority={true} width={449} height={346}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 20px;
	.banner{
		background: #272A32 url("/pic/security/banner-background.svg") no-repeat center right;
		border-radius: 50px;
		padding: 80px;
		color: #fff;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 820px) {
			padding: 40px;
		}
		@media only screen and (max-width: 600px) {
			padding: 40px 30px 0 30px;
			border-radius: 26px;
		}
	}
	.description{
		margin-top: 30px;
		max-width: 605px;
		width: 100%;
		font-size: 24px;
		line-height: 140%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			max-width: 500px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 14px;
			line-height: 150%;
		}
	}
	.label{
		margin-top: 60px;
		font-size: 16px;
		line-height: 120%;
		color: #F6F7F8;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	.value_block{
		display: flex;
		align-items: center;
		margin-top: 15px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.value{
		font-weight: 700;
		font-size: 46px;
		line-height: 100%;
	}
	.pool{
		font-size: 24px;
		line-height: 120%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: linear-gradient(95.94deg, #FFFB1F 35.29%, #3AFA65 123.23%);
		border-radius: 500px;
		margin-left: 12px;
		position: relative;
		padding: 1px;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
			margin-left: 0;
			font-size: 20px;
			line-height: 120%;
		}
		span{
			background: #272A32;
			padding: 10px 25px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 500px;
		}
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		z-index: 10;
	}
	.safe_pic{
		position: absolute;
		bottom: 0;
		right: 55px;
		line-height: 0;
		@media only screen and (max-width: 1024px) {
			right: -100px;
			transform: scale(.8);
			transform-origin: bottom right;
		}
		@media only screen and (max-width: 600px) {
			position: relative;
			right: 0;
			transform: scale(1);
			bottom: -5px;
			margin-top: 40px;
		}
	}
	.mob_logo{
		margin-top: 30px;
		border-top: 1px solid #393D49;
		padding-top: 30px;
	}
`