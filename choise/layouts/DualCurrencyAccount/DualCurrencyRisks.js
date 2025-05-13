import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import EntityLicenseIsuredBitGo from "components/EntityLicenseIsuredBitGo";
import Image from "next/image";

export default function DualCurrencyRisks({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					<div className="item">
						<p className="description">{t.description}</p>
						<EntityLicenseIsuredBitGo/>
					</div>
					<div className="item risk">
						<Image src="/pic/risk.jpg" width={320} height={330} priority={true} alt="risks and limitations"/>
					</div>
					<div className="item labels">
						<img src="/pic/risk-labels.svg" alt="Choise.com is a licensed, fully regulated financial institution in the European Union."/>
					</div>
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
	.title{
		text-align: center;
	}
	.list{
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.item{
		width: calc(100% / 3 - 40px);
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	.risk, .labels{
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
			display: flex;
			justify-content: center;
		}
	}
	.description{
		font-size: 16px;
		line-height: 150%;
		letter-spacing: -0.03em;
		color: #7B8199;
	}
	.license_insured{
		margin-top: 100px;
		@media only screen and (max-width: 820px) {
			margin-top: 30px;
		}
	}
`