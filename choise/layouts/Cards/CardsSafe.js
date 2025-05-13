import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import EntityLicenseIsuredBitGo from "components/EntityLicenseIsuredBitGo";
import Image from "next/image";

export default function CardsSafe({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="item">
					<Title><h2>{t.title}</h2></Title>
					<div className="list">
						<p>{t.description_1}</p>
						<p>{t.description_2}</p>
					</div>
					<EntityLicenseIsuredBitGo/>
				</div>
				<div className="item risk">
					<Image src="/pic/risk.jpg" width={320} height={330} priority={true} alt="stay digital, stay safe"/>
				</div>
				<div className="item labels">
					<img src="/pic/risk-labels.svg" alt="3D Secure is an additional security layer for all your online transactions."/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	.license_insured{
		margin-top: 30px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.title{
		max-width: 290px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
		}
	}
	.item{
		width: calc(100% / 3 - 30px);
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	.list{
		margin-top: 55px;
		p{
			font-size: 16px;
			line-height: 150%;
			color: #80889C;
			margin-bottom: 20px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.risk, .labels{
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
			display: flex;
			justify-content: center;
		}
	}
`