import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import EntityLicenseIsuredBitGo from "components/EntityLicenseIsuredBitGo";
import EarnCalculator from "layouts/Earn/EarnCalculator";

export default function EarnMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<EntityLicenseIsuredBitGo/>
					<a className="earning_link" href="https://defi.choise.com/earn" target="_blank" rel="noreferrer">{t.link}</a>
				</div>
				<EarnCalculator t={t.calculator}/>
				<div className="glow"><img src="/pic/earn/earn-glow.svg" alt="Web 3.0 interest accounts"/></div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 120px;
	position: relative;
	overflow: hidden;
	margin-bottom: -200px;
	padding-bottom: 200px;
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			align-items: flex-start;
		}
	}
	.content{
		max-width: 680px;
		width: 100%;
		margin-right: 50px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
			margin-right: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		@media only screen and (max-width: 600px) {
			align-items: flex-start;
		}
	}
	.description{
		max-width: 380px;
		width: 100%;
		margin-top: 40px;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		@media only screen and (max-width: 820px) {
			text-align: center;
		}
		@media only screen and (max-width: 600px) {
			text-align: left;
			margin-top: 20px;
		}
	}
	.license_insured{
		margin-top: 20px;
	}
	.earning_link{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #DDDFE4;
		border-radius: 40px;
		height: 56px;
		padding: 16px 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		margin-top: 40px;
		background: #F9F9F9;
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-top: 30px;
		}
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
	.glow{
		position: absolute;
		top: -400px;
		right: -300px;
	}
	.title{
		@media only screen and (max-width: 820px) {
			max-width: 400px;
			width: 100%;
			text-align: center;
			margin: 0 auto;
		}
		@media only screen and (max-width: 600px) {
			text-align: left;
		}
	}
`