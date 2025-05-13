import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function LeaderboardSteps({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="icon"><img src="/pic/leaderboard/un-logo.svg" alt="the more transactions with CHO you make - the higher your chances"/></div>
				<Title><h2>{t.title}</h2></Title>
				<div className="list_block">
					<div className="list_left">
						<Image src="/pic/leaderboard/step-left.png" width={172} height={168.5} priority={true} alt="Step left"/>
					</div>
					<div className="list">
						{
							t.array.map((item, index) => {
								return (
									<div className="item" key={index}>
										<p className="step">{t.text} {index + 1}</p>
										<p className="description">{item}</p>
									</div>
								)
							})
						}
					</div>
					<div className="list_right">
						<Image src="/pic/leaderboard/step-right.png" width={179.5} height={197} priority={true} alt="Step right"/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.icon{
		display: flex;
		justify-content: center;
	}
	.list_block{
		position: relative;
		display: flex;
		justify-content: center;
		max-width: 850px;
		width: 100%;
		margin: 100px auto 0 auto;
		@media only screen and (max-width: 600px) {
			margin: 40px auto 0 auto;
		}
	}
	.list_left{
		position: absolute;
		top: -30px;
		left: -120px;
		z-index: 40;
		@media only screen and (max-width: 1024px) {
			left: -80px;
		}
		@media only screen and (max-width: 820px) {
			display: none;
		}
	}
	.list_right{
		position: absolute;
		top: -30px;
		right: -80px;
		z-index: 40;
		@media only screen and (max-width: 1024px) {
			right: -80px;
		}
		@media only screen and (max-width: 820px) {
			display: none;
		}
	}
	.title{
		max-width: 746px;
		width: 100%;
		margin: 20px auto 0 auto;
		text-align: center;
	}
	.list{
		display: flex;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			padding: 0 20px;
			margin-top: 30px;
		}
	}
	.item{
		max-width: 285px;
		width: 100%;
		height: 300px;
		border-radius: 24px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		margin: 0 -20px;
		@media only screen and (max-width: 600px) {
			margin: 20px 0 0 0;
			max-width: 100%;
			height: 216px;
		}
		&:nth-child(1){
			background: linear-gradient(214.77deg, #5CEE9C -57.44%, #FFFB1F 83.74%);
			z-index: 10;
			transform: rotate(8.12deg);
			@media only screen and (max-width: 600px) {
				transform: rotate(10.46deg);
				margin-top: 0;
				.description{
					width: 158.7px;
				}
			}
		}
		&:nth-child(2){
			background: #0285FD;
			color: #F9F9F9;
			z-index: 20;
			transform: rotate(-10.77deg);
			top: 60px;
			@media only screen and (max-width: 600px) {
				transform: rotate(-5.73deg);
				top: 0;
				margin-top: -20px;
				.description{
					width: 160.89px;
				}
			}
		}
		&:nth-child(3){
			background: #5CEE9C;
			z-index: 30;
			transform: rotate(9.33deg);
			top: -30px;
			@media only screen and (max-width: 600px) {
				transform: rotate(-17.68deg);
				top: 0;
				margin-top: -5px;
			}
		}
	}
	.step{
		font-weight: 700;
		font-size: 30px;
		line-height: 100%;
		@media only screen and (max-width: 600px) {
			font-size: 25px;
		}
	}
	.description{
		font-size: 18px;
		line-height: 140%;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
	}
`