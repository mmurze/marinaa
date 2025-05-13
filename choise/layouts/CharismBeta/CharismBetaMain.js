import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import {Link} from "react-scroll";

export default function CharismBetaMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<div className="labels">
						<span>{t.span_1}</span>
						<span>{t.span_2}</span>
					</div>
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<div className="link">{t.title_link}</div>
				</div>
				<div className="image">
					<Image src="/pic/charism/charism-beta-main.png" width={485} height={470} priority={true} alt="join and win an exclusive nft"/>
				</div>
				<div className="glow"><img src="/pic/charism/main-glow.svg" alt="Participate in Charism Beta Test from June 27 to July 27"/></div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 120px;
	overflow: hidden;
	padding-bottom: 300px;
	margin-bottom: -300px;
	@media only screen and (max-width: 600px) {
		padding-top: 100px;
		margin-top: 40px;
		padding-bottom: 0;
		margin-bottom: 0;
		overflow: initial;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.glow{
		position: absolute;
		right: -400px;
		bottom: -300px;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.labels{
		font-weight: 700;
		font-size: 66px;
		line-height: 100%;
		position: relative;
		height: 165px;
		@media only screen and (max-width: 600px) {
			font-size: 45px;
			line-height: 100%;
			height: 140px;
		}
		span{
			position: absolute;
			padding: 13px 32px;
			&:first-child{
				background: #FFFB1F;
				border-radius: 500px;
				transform: rotate(7.22deg);
			}
			&:last-child{
				background: #5CEE9C;
				border-radius: 500px;
				transform: rotate(-3.52deg);
				right: 100px;
				bottom: 0;
				@media only screen and (max-width: 600px) {
					right: 0;
				}
			}
		}
	}
	.title{
		margin-top: 30px;
		h1{
			font-size: 48px;
			line-height: 120%;
			@media only screen and (max-width: 600px) {
				font-size: 46px;
				line-height: 100%;
			}
		}
	}
	.content{
		max-width: 579px;
		width: 100%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}
	.image{
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			margin-top: 80px;
		}
	}
	.description{
		max-width: 457px;
		width: 100%;
		margin-top: 10px;
		color: #80889C;
		font-size: 22px;
		line-height: 150%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			font-size: 16px;
			line-height: 150%;
		}
	}
	.link{
		display: inline-flex;
		margin-top: 40px;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #F6F7F8;
		border-radius: 40px;
		height: 56px;
		padding: 8px 60px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		cursor: default;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
`