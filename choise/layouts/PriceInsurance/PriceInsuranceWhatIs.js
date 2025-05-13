import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function PriceInsuranceWhatIs({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image">
					<Image src="/pic/price-insurance/price-insurance-what.jpg" width={820} height={555.93} priority={true} alt=""/>
				</div>
				<div className="content">
					<Title><h2>{t.title}</h2></Title>
					<div className="list">
						{
							t.descriptions.map((item ,index) =>{
								return(
									<p key={index}>{item}</p>
								)
							})
						}
					</div>
					<a href="https://crypterium.onelink.me/jtmZ/insurance?app_screen=insurance" target="_blank" className="label">{t.link}</a>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column-reverse;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.image{
		max-width: 590px;
		width: 100%;
		margin-right: 40px;
		border-radius: 24px;
		overflow: hidden;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
			margin-right: 0;
			margin-top: 40px;
		}
	}
	.content{
		max-width: 524px;
		width: 100%;
		margin-left: 40px;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
			margin-left: 0;
		}
	}
	.list{
		margin-top: 16px;
		p{
			font-size: 16px;
			line-height: 150%;
			color: #80889C;
			margin-bottom: 30px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.label{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 40px;
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
		border: 1.15425px solid #C6CAD3;
		border-radius: 577.123px;
		transform: rotate(-1.35deg);
		padding: 7px 20px;
	}
`