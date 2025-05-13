import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function DepositsMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1><img width={80} height={80} src="/pic/decor/round-arrow-right.svg" alt="crypto Interest accounts for earning up to 6.2% APY"/>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<a className="link_button" href="https://crypterium.onelink.me/jtmZ/deposits?app_screen=deposits" target="_blank" rel="noreferrer">{t.link_a}</a>
					<p className="fast"><img src="/pic/decor/top-speed.svg" alt="Outpace traditional market yields with Choise.com"/>{t.description_fast}</p>
				</div>
				<div className="image">
					<Image src="/pic/deposits/deposits-main.png" width={476} height={493} priority={true} alt="earn up to 6.2% APY on crypto interest accounts"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 100px;
	overflow: hidden;
	padding-bottom: 200px;
	margin-bottom: -200px;
	.image{
		position: relative;
		&:before{
			content: url("/pic/deposits/glow-calc.svg");
			position: absolute;
			top: -300px;
			right: -300px;
			@media only screen and (max-width: 1024px) {
				top: -600px;
			}
		}
		@media only screen and (max-width: 600px) {
			max-width: 200px;
			margin: 0 auto;
		}
	}
	.title{
		img{
			line-height: 0;
			position: relative;
			top: 20px;
			@media only screen and (max-width: 820px) {
				width: 40px;
				height: 40px;
				top: 4px;
			}
		}
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: inherit;
		@media only screen and (max-width: 600px) {
			flex-direction: column-reverse;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.content{
		max-width: 800px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			width: 100%;
			margin-top: 40px;
		}
	}
	.description{
		max-width: 391px;
		width: 100%;
		font-size: 18px;
		line-height: 150%;
		margin-top: 28px;
		color: #80889C;
	}
	.fast{
		font-size: 16px;
		line-height: 150%;
		margin-top: 40px;
		@media only screen and (max-width: 1024px) {
			margin-top: 40px;
		}
		img{
			margin-right: 11px;
		}
	}
	.link_button{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		border-radius: 40px;
		height: 56px;
		padding: 8px 35px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		margin-top: 40px;
		&:hover{
			background: #0285FD;
			color: #F9F9F9;
		}
	}
`