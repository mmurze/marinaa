import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function PredictionsHowItWorks({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title center={true}><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="list_block">
					<div className="line left"><Image src="/pic/predictions/how-line-left.png" width={315} height={82} priority={true} alt="how it works"/></div>
					<div className="list">
						{
							t.array.map((item, index) => {
								return (
									<div className="item" key={index}>
										<h3>{item.title}</h3>
										<p>{item.description}</p>
									</div>
								)
							})
						}
					</div>
					<div className="line right"><Image src="/pic/predictions/how-line-right.png" width={315} height={54} priority={true} alt="Our price predictions are the result"/></div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	overflow: hidden;
	padding-bottom: 80px;
	margin-bottom: -80px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.description{
		text-align: center;
		max-width: 622px;
		width: 100%;
		margin: 20px auto 0 auto;
		font-size: 18px;
		line-height: 150%;
		color: #7B8199;
	}
	.line{
		position: absolute;
		top: 120px;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			display: none;
		}
		&.left{
			left: 100px;
		}
		&.right{
			right: -100px;
		}
	}
	.list_block{
		max-width: 970px;
		width: 100%;
		margin: 60px auto 0 auto;
		position: relative;
	}
	.list{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 90px -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
	}
	.item{
		width: calc(100% / 3 - 20px);
		height: 380px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 24px;
		padding: 40px 30px;
		@media only screen and (max-width: 820px) {
			width: 320px;
			margin-right: 20px;
			flex: 0 0 auto;
			height: auto;
		}
		p{
			font-size: 16px;
			line-height: 140%;
			@media only screen and (max-width: 820px) {
				margin-top: 40px;
			}
		}
		&:nth-child(1) {
			background: linear-gradient(214.77deg, #5CEE9C -57.44%, #FFFB1F 83.74%);
			transform: rotate(-6.28deg);
			@media only screen and (max-width: 820px) {
				transform: rotate(0);
			}
		}
		&:nth-child(2){
			background: #0285FD;
			transform: rotate(2.35deg);
			color: #F9F9F9;
			@media only screen and (max-width: 820px) {
				transform: rotate(0);
			}
		}
		&:nth-child(3){
			background: #7EE3B3;
			transform: rotate(-4.84deg);
			margin-left: 60px;
			@media only screen and (max-width: 820px) {
				transform: rotate(0);
				margin-left: 0;
			}
		}
	}
	h3{
		font-size: 30px;
		line-height: 100%;
	}
`