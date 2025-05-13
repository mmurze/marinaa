import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import htmlContent from "helpers/htmlContent";

export default function CpaPlatformMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<h1>{htmlContent(t.title)}</h1>
					<p className="description">{t.description}</p>
					<div className="link">
						<a href="#" target="_blank">{t.join}</a>
					</div>
				</div>
				<div className="image">
					<Image src="/pic/cpa/cpa-main.png" width={1299} height={778} alt={t.alt} priority={true}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #F8F8FA;
	padding-top: 120px;
	overflow-x: hidden;
	@media only screen and (max-width: 600px) {
		padding-top: 100px;
	}
	@media only screen and (max-width: 820px) {
		overflow: initial;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
		}
	}
	.image{
		max-width: 1299px;
		width: 100%;
		position: absolute;
		bottom: 0;
		right: -500px;
		line-height: 0;
		@media only screen and (max-width: 1230px) {
			right: -330px ;
		}
		@media only screen and (max-width: 820px) {
			position: relative;
			right: auto;
			left: 0;
			margin-top: 60px;
		}
	}
	.content{
		max-width: 350px;
		width: 100%;
		padding-bottom: 150px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 1230px) {
			padding-bottom: 80px;
		}
		@media only screen and (max-width: 820px) {
			padding-bottom: 0;
			max-width: 100%;
		}
	}
	.description{
		margin-top: 25px;
		font-size: 16px;
		line-height: 150%;
		letter-spacing: -0.03em;
		@media only screen and (max-width: 820px) {
			text-align: center;
		}
	}
	.link{
		margin-top: 70px;
		visibility: hidden;
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
			//display: flex;
			justify-content: center;
			display: none;
		}
		a{
			background: #1E3A55;
			border-radius: 40px;
			height: 47px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 0 45px;
			font-size: 16px;
			line-height: 24px;
			letter-spacing: -0.03em;
			color: #F9F9F9;
			@media only screen and (max-width: 820px) {
				padding: 0 80px;
			}
			&:hover{
				background: #0285FD;
			}
		}
	}
	h1{
		font-size: 78px;
		line-height: 115%;
		@media only screen and (max-width: 820px) {
			text-align: center;
		}
		@media only screen and (max-width: 600px) {
			font-size: 50px;
		}
		p{
			position: relative;
			z-index: 10;
		}
		span{
			position: relative;
			display: flex;
			justify-content: left;
			@media only screen and (max-width: 820px) {
				display: inline-flex;
			}
			&:before{
				content: url("/pic/cpa/cpa-line.svg");
				position: absolute;
				bottom: -17px;
				left: 0;
				@media only screen and (max-width: 600px) {
					transform: scale(.7);
					left: -50px;
				}
			}
		}
	}
`