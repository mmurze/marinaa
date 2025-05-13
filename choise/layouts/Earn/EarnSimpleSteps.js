import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import htmlContent from "helpers/htmlContent";
import Image from "next/image";
export default function EarnSimpleSteps({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title className="header_title"><h2>{t.title}</h2></Title>
				<p className="header_description">{t.description}</p>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<Title><h3>{item.title}</h3></Title>
									<p className="description">{htmlContent(item.description)}</p>
									<div className="image">
										<Image src={item.image} width={225} height={211} priority={true} alt={item.title}/>
									</div>
									<div className="count">0{index + 1}</div>
								</div>
							)
						})
					}
				</div>
				<div className="link">
					<a href="https://defi.choise.com/earn" target="_blank" rel="noreferrer">
						{t.link}
					</a>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.header_title{
		text-align: center;
	}
	.header_description{
		text-align: center;
		font-size: 20px;
		line-height: 120%;
		color: #7B8199;
		margin-top: 10px;
	}
	.link{
		display: flex;
		justify-content: center;
		margin-top: 60px;
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #FFFB1F;
			border-radius: 40px;
			height: 56px;
			padding: 16px 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
	.title{
		position: relative;
		z-index: 10;
	}
	.list{
		margin-top: 40px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 40px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
		}
	}
	.item{
		background: #F6F6F6;
		border-radius: 24px;
		padding: 50px;
		width: calc(100% / 3 - 10px);
		position: relative;
		height: 440px;
		@media only screen and (max-width: 820px) {
			width: 360px;
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
		}
		@media only screen and (max-width: 600px) {
			width: 300px;
			padding: 30px;
			height: 400px;
		}
	}
	.description{
		font-size: 16px;
		line-height: 130%;
		color: #80889C;
		max-width: 211px;
		width: 100%;
		margin-top: 10px;
		position: relative;
		z-index: 10;
		a{
			color: #0285FD;
		}
	}
	.count{
		position: absolute;
		bottom: 50px;
		left: 50px;
		z-index: 10;
		background: #FFFB1F;
		border-radius: 50%;
		width: 70px;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 700;
		font-size: 20px;
		line-height: 110%;
		@media only screen and (max-width: 600px) {
			bottom: 30px;
			left: 30px;
		}
	}
	.image{
		position: absolute;
		bottom: 40px;
		right: 0;
	}
`