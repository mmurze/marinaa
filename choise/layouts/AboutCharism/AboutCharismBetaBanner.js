import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Link from "next/link";
import Image from "next/image";

export default function AboutCharismBetaBanner() {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="content">
						<div className="heading">
							<div className="labels">
								<span>Charism</span>
								<span>Beta Testing</span>
							</div>
							<h2>join and win an exclusive nft</h2>
						</div>
						<div className="image">
							<Image src="/pic/charism/about-beta-banner.png" width={691} height={382} priority={true} alt="Sign up for Beta Testing!"/>
						</div>
					</div>
					<div className="link">
						<Link href="/charism/beta">Sign up for Beta Testing!</Link>
					</div>
					<div className="glow"><img src="/pic/charism/about-banner-glow.svg" alt="Sign up for Beta Test!"/></div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	color: #F9F9F9;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.labels{
		font-weight: 700;
		font-size: 66px;
		line-height: 100%;
		position: relative;
		height: 165px;
		@media only screen and (max-width: 1024px) {
			font-size: 45px;
			line-height: 100%;
			height: 140px;
		}
		@media only screen and (max-width: 820px) {
			font-size: 30px;
			height: 120px;
		}
		@media only screen and (max-width: 600px) {
			width: 250px;
			margin: 0 auto;
			height: 110px;
		}
		span{
			position: absolute;
			padding: 13px 32px;
			color: #191B20;
			&:first-child{
				background: #FFFB1F;
				border-radius: 500px;
				transform: rotate(7.22deg);
			}
			&:last-child{
				background: #5CEE9C;
				border-radius: 500px;
				transform: rotate(-3.52deg);
				right: 0;
				bottom: 0;
			}
		}
	}
	.heading {
		@media only screen and (max-width: 600px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			margin-top: 20px;
		}
		h2{
			max-width: 354px;
			width: 100%;
			font-size: 48px;
			line-height: 120%;
			margin-top: 30px;
			@media only screen and (max-width: 1024px) {
				font-size: 40px;
			}
			@media only screen and (max-width: 600px) {
				font-size: 30px;
				line-height: 100%;
				text-align: center;
				max-width: 200px;
			}
		}
	}
	.content{
		position: relative;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column-reverse;
			align-items: flex-start;
			justify-content: flex-start;
		}
	}
	.banner{
		background: #191B20;
		border-radius: 24px;
		padding: 80px 65px;
		overflow: hidden;
		position: relative;
		@media only screen and (max-width: 820px) {
			padding: 40px 30px;
		}
		@media only screen and (max-width: 600px) {
			padding: 40px 30px;
			border-radius: 0;
			margin-left: -20px;
			margin-right: -20px;
			width: calc(100% + 40px);
		}
	}
	.link{
		margin-top: 50px;
		text-align: center;
		position: relative;
		z-index: 10;
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 8px 60px;
			height: 56px;
			background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
			border-radius: 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
		}
	}
	.glow{
		position: absolute;
		top: -800px;
		left: -800px;
	}
	.image{
		margin-left: 20px;
	}
`