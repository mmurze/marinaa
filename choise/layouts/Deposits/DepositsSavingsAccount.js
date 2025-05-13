import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import Title from "components/Title";
import EntityLicenseIsuredBitGo from "components/EntityLicenseIsuredBitGo";

export default function DepositsSavingsAccount({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image">
					<Image src="/pic/deposits/deposits-saving.png" width={541} height={593} priority={true} alt="safe and secure"/>
				</div>
				<div className="content">
					<Title><h2>{t.title}</h2></Title>
					<div className="list">
						<p>{t.description_1}</p>
						<p>{t.description_2}</p>
					</div>
					<EntityLicenseIsuredBitGo/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 40px;
	@media only screen and (max-width: 1024px) {
		margin-top: 70px;
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
	.content{
		max-width: 474px;
		width: 100%;
		padding-right: 70px;
		@media only screen and (max-width: 820px) {
			padding-right: 0;
			max-width: 100%;
		}
	}
	.image{
		margin-right: 40px;
		@media only screen and (max-width: 820px) {
			display: flex;
			justify-content: center;
			max-width: 320px;
			width: 100%;
			margin: 0 auto -50px auto;
			position: relative;
			left: -50px;
		}
		@media only screen and (max-width: 600px) {
			margin: -50px auto;
		}
	}
	.list{
		margin-top: 25px;
		p{
			margin-bottom: 20px;
			font-weight: 450;
			font-size: 16px;
			line-height: 140%;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.license_insured{
		margin-top: 30px;
	}
`