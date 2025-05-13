import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function DualCurrencyMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					{/*<a href="#" target="_blank" rel="noreferrer">Earn now</a>*/}
				</div>
				<Responsive width={600}>
					<div className="image">
						<Image src="/pic/dual-product/dual-product-main.png" width={465} height={524} priority={true} alt="dual currency interest accounts"/>
					</div>
				</Responsive>
				<div className="glow"><img src="/pic/dual-product/glow.svg" alt="Dual currency interest account (DCIA) is a short-term product"/></div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 120px;
	position: relative;
	overflow: hidden;
	padding-bottom: 100px;
	margin-bottom: -100px;
	@media only screen and (max-width: 600px) {
		padding-top: 100px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.image{
		position: relative;
		z-index: 10;
	}
	.content{
		max-width: 687px;
		width: 100%;
		position: relative;
		z-index: 10;
		margin-right: 80px;
		@media only screen and (max-width: 600px) {
			margin-right: 0;
		}
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #FFFB1F;
			border-radius: 40px;
			height: 56px;
			padding: 16px 60px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			margin-top: 70px;
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin-top: 40px;
			}
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
	.description{
		max-width: 610px;
		width: 100%;
		font-size: 18px;
		line-height: 150%;
		color: #7B8199;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 150%;
		}
	}
	.glow{
		position: absolute;
		right: -400px;
		top: -400px;
	}
`