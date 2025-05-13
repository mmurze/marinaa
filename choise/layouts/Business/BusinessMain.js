import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import {state} from "state";

export default function BusinessMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="left_image">
					<Image src="/pic/business/business-main-1.jpg" alt="accelerate Investment Performance of your business" width={260} height={394} priority={true}/>
				</div>
				<h1>{t.title}</h1>
				<p className="description">{t.description}</p>
				<div className="link_block">
					<button onClick={() => state.businessFormModal = true} className="scroll_button">{t.title_button}</button>
					<p>{t.title_link} <a href="https://business.choise.com/en/sign-in" target="_blank" rel="noreferrer">{t.link}</a>
					</p>
				</div>
				<div className="list">
					{
						t.list.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="icon">
										<img src={item.icon} alt={item.description}/>
									</div>
									<p>{item.description}</p>
								</div>
							)
						})
					}
				</div>
				<div className="right_image">
					<Image src="/pic/business/business-main-1.jpg" alt="accelerate Investment Performance of your business" width={276} height={432} priority={true}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	color: #FFFFFF;
	position: relative;
	padding-top: 160px;
	@media only screen and (max-width: 600px) {
		padding-top: 120px;
	}
	h1{
		max-width: 854px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
		font-weight: 500;
		font-size: 64px;
		line-height: 110%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			font-weight: 700;
			font-size: 32px;
			line-height: 110%;
			text-align: left;
		}
	}
	.description{
		margin: 50px auto 0 auto;
		font-weight: 450;
		max-width: 724px;
		width: 100%;
		font-size: 24px;
		line-height: 150%;
		text-align: center;
		color: #C6CAD3;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			text-align: left;
			font-weight: 450;
			font-size: 14px;
			line-height: 150%;
			margin-top: 20px;
		}
	}
	.link_block{
		margin-top: 90px;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
		.scroll_button{
			width: auto;
			background: #FFFB1F;
			border-radius: 40px;
			padding: 8px 80px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			height: 56px;
			color: #000000;
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
		}
		p{
			text-align: center;
			margin-top: 20px;
			font-weight: 450;
			font-size: 18px;
			line-height: 150%;
		}
		a{
			color: #FFFB1F;
			@media only screen and (max-width: 600px) {
				display: block;
			}
		}
	}
	.list{
		margin-top: 60px;
		display: flex;
		justify-content: space-between;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 1140px) {
			flex-wrap: wrap;
			margin-bottom: -10px;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
	}
	.item{
		width: calc(100% / 4 - 10px);
		background: #272A32;
		border-radius: 16px;
		padding: 18px;
		display: flex;
		align-items: center;
		@media only screen and (max-width: 1140px) {
			width: calc(100% / 2 - 10px);
			margin-bottom: 10px;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
		}
		.icon{
			background: #393D49;
			border-radius: 8px;
			width: 54px;
			height: 54px;
			display: flex;
			align-items: center;
			justify-content: center;
			@media only screen and (max-width: 600px) {
				width: 40px;
				height: 40px;
			}
		}
		p{
			width: calc(100% - 54px);
			max-width: 158px;
			font-weight: 450;
			font-size: 16px;
			line-height: 130%;
			color: #FFFFFF;
			padding-left: 20px;
			@media only screen and (max-width: 600px) {
				padding-left: 0;
				margin-top: 10px;
				width: calc(100% - 40px);
				font-weight: 450;
				font-size: 14px;
				line-height: 130%;
			}
		}
	}
	.left_image{
		position: absolute;
		left: -100px;
		z-index: 1;
		top: 0;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
	}
	.right_image{
		position: absolute;
		top: 0;
		right: -100px;
		z-index: 1;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
	}
`