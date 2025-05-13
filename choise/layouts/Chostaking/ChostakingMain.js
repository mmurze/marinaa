import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function ChostakingMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1><img src="/pic/decor/round-arrow-right.svg" alt="less to do, more to earn"/>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<a href="https://defi.choise.com/staking" className="link_button" target="_blank" rel="noreferrer">{t.link}</a>
				</div>
				<div className="image">
					<Image src="/pic/chostaking/chostaking-main.png" alt="less to do, more to earn" width={600} height={766.32}/>
				</div>
				<img src="/pic/chostaking/chostaking-glow.svg" alt="chostaking glow" className="glow"/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 140px;
	position: relative;
	overflow: hidden;
	@media only screen and (max-width: 600px) {
		padding-top: 120px;
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
		max-width: 510px;
		width: 100%;
		margin-right: 40px;
	}
	.image{
		position: relative;
		z-index: 10;
		margin-right: 60px;
		max-width: 400px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			margin-right: 0;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 50px;
			max-width: 100%;
		}
	}
	.glow{
		position: absolute;
		right: -350px;
		top: -300px;
		@media only screen and (max-width: 820px) {
			right: -200px;
		}
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.title {
		max-width: 508px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 300px;
		}
		img{
			margin-right: 20px;
			@media only screen and (max-width: 820px) {
				display: none;
			}
		}
	}
	.description{
		margin-top: 30px;
		max-width: 367px;
		width: 100%;
		font-size: 18px;
		line-height: 130%;
		color: #7B8199;
	}
	.link_button{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 56px;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 8px 35px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		margin-top: 70px;
		@media only screen and (max-width: 600px) {
			display: flex;
			margin-top: 40px;
		}
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
`