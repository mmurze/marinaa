import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function AboutCharismDex({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image">
					<Image src="/pic/charism/about-dex.png" width={590} height={400} priority={true} alt="swap with the best rates"/>
				</div>
				<div className="content">
					<Title><h2>{t.title}</h2></Title>
					<p className="description">{t.description}</p>
					<a className="link_button" href="https://defi.choise.com/swap" target="_blank" rel="noreferrer">{t.link}</a>
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
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column-reverse;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.image{
		max-width: 590px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: calc(50% - 20px);
		}
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			margin-top: 40px;
		}
	}
	.content{
		max-width: 524px;
		width: 100%;
		margin-left: 88px;
		@media only screen and (max-width: 820px) {
			max-width: calc(50% - 20px);
			margin-left: 0;
		}
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}
	.description{
		font-size: 16px;
		line-height: 150%;
		color: #80889C;
		margin-top: 16px;
	}
	.link_button{
		height: 56px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 16px 40px;
		margin-top: 40px;
		min-width: 200px;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
`