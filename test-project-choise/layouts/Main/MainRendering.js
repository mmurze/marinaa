import styled from "styled-components";
import Title from "helpers/Title";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function MainRendering({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title className="title_arrow">
					<div className="circle"><img src="/pic/arrow.svg" alt="arrow"/></div>
					<h2>{t.title}</h2>
				</Title>
				<p className="description">{t.description}</p>
				<div className="labels_block">
					<p>{t.slogan1}</p>
					<p>{t.slogan2}</p>
					<p>{t.slogan3}</p>
					<p>{t.slogan4}</p>
				</div>
				<Responsive  width={1160}>
					<Image className="decor_left" width={260} height={155} src="/pic/main/pic1.png" alt="decor_left"/>
					<Image className="decor_right" width={200} height={150} src="/pic/main/pic2.png" alt="decor_right"/>
				</Responsive>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	.center_block {
		margin-top: 150px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: 820px) {
			margin-top: 90px;
		}
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: center;
		//h2{
		//	width: fit-content;
		//}
		.circle {
			border-radius: 60px;
			position: relative;
			background: #FFFB1F;
			width: 70px;
			height: 70px;
			margin-right: 20px;
			img {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%)
			}
		}
	}
	.decor_left{
		position: absolute;
		top: 70%;
		left: 0;
	}
	.decor_right{
		position: absolute;
		top: 20%;
		right: 0;
	}
	.description {
		max-width: 580px;
		width: 100%;
		color: #80889C;
		margin-top: 40px;
		text-align: center;
	}

	.labels_block {
		position: relative;
		display: flex;
		max-width: 590px;
		width: 100%;
		height: 240px;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		margin: 45px auto 0 auto;
		@media only screen and (max-width: 820px) {
			max-width: 480px;
			height: 210px;
		}
		p {
			position: absolute;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			height: 70px;
			padding: 10px 30px;
			border-radius: 65px;
			font-weight: 700;
			font-size: 48px;
			line-height: 100%;
			@media only screen and (max-width: 820px) {
				font-size: 33px;
				height: 60px;
			}
			&:nth-child(1) {
				top: 20px;
				left: 0;
				transform: rotate(-7.33deg);
				background: #FFFB1F;
			}

			&:nth-child(2) {
				transform: rotate(-1.15deg);
				background: #5CEE9C;
			}

			&:nth-child(3) {
				top: 55px;
				right: 5px;
				width: 155px;
				transform: rotate(12.25deg);
				text-align: center;
				border: 1px solid #80889C;
				background: #fff;
				@media only screen and (max-width: 1024px) {
					top: 40px;
				}
				@media only screen and (max-width: 600px) {
					display: none;
				}
			}

			&:nth-child(4) {
				bottom: 15px;
				right: 0;
				transform: rotate(-7.66deg);
				background: #0285FD;
				color: #fff;
			}
		}
	}
	

`