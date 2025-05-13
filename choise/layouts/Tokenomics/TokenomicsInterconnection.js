import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function TokenomicsInterconnection({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image">
					<Image src="/pic/tokenomics/interconnection-image.png" width={921} height={290.41} priority={true} alt="CRPT – CHO interconnection"/>
				</div>
				<Title><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="links">
					<a href="https://docs.choise.com/more/retrodrop" target="_blank" rel="noreferrer">{t.link_a_1}</a>
					<a href="https://docs.choise.com/more/retrodrop#ongoing-airdrop-program-1st-year" target="_blank" rel="noreferrer">{t.link_a_2}</a>
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
		margin-top: 20px;
	}
	.description{
		text-align: center;
		margin-top: 20px;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
	}
	.links{
		display: flex;
		justify-content: center;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 16px 40px;
			background: #FFFB1F;
			border-radius: 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			margin: 0 10px;
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin: 0;
				&:last-child{
					margin-top: 10px;
				}
			}
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
	.image{
		display: flex;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			margin: 0 -20px;
		}
	}
`