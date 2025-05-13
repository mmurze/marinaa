import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Link from "next/link";
import Image from "next/image";

export default function SecurityRiskManagement({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h2>{t.title}</h2></Title>
					<div className="description">
						{
							t.descriptions.map((item, index)=>{
								return(
									<p key={index}>{item}</p>
								)
							})
						}
					</div>
					<Link href="/news/insights/choise-com-security-and-transparency">{t.link_more}</Link>
				</div>
				<div className="image">
					<Image src="/pic/security/risk-management.jpg" alt="Prudent risk management" width={590} height={446} priority={true}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 110px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.content{
		max-width: 500px;
		width: 100%;
		margin-right: 40px;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			margin-right: 0;
		}
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-top: 40px;
			padding: 16px 40px;
			background: #FFFB1F;
			border-radius: 40px;
			height: 56px;
			font-weight: 500;
			font-size: 18px;
			line-height: 24px;
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
		}
	}
	.image{
		max-width: 590px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			margin-top: 40px;
		}
	}
	.description{
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
		p{
			font-size: 16px;
			line-height: 150%;
			color: #656D81;
			margin-bottom: 20px;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 140%;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
`