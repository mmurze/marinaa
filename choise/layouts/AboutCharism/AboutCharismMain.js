import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function AboutCharismMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<div className="link">
						<a href="https://defi.choise.com/?utm_source=choise_charism&utm_medium=organic&utm_campaign=site" target="_blank" rel="noreferrer nofollow">{t.link}</a>
					</div>
				</div>
				<div className="image">
					<Image src="/pic/charism/about-main.png" width={543} height={457} priority={true} alt="your choice to earn moooore"/>
				</div>
				<div className="glow"><img src="/pic/charism/about-glow.svg" alt="Start earn"/></div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 120px;
	overflow: hidden;
	padding-bottom: 400px;
	margin-bottom: -400px;
	@media only screen and (max-width: 600px) {
		padding-top: 100px;
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
	.content{
		max-width: 627px;
		width: 100%;
		position: relative;
		z-index: 10;
		margin-right: 40px;
		@media only screen and (max-width: 600px) {
			margin-right: 0;
			max-width: 100%;
		}
	}
	.description{
		margin-top: 40px;
		max-width: 474px;
		width: 100%;
		font-weight: 450;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
	}
	.image{
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			margin-top: 50px;
		}
	}
	.link{
		margin-top: 70px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
		a{
			display: inline-flex;
			padding: 16px 40px;
			height: 56px;
			background: #FFFB1F;
			border-radius: 40px;
			font-weight: 500;
			font-size: 18px;
			line-height: 24px;
			text-align: center;
			justify-content: center;
			align-items: center;
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
		}
	}
	.glow{
		position: absolute;
		top: -400px;
		right: -400px;
	}
`