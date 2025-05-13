import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function RaydiumPrize({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image">
					<Image src="/pic/raydium/prize.jpg" width={472} height={439.23} priority={true} alt="perform any transaction with CHO"/>
				</div>
				<div className="content">
					<img src="/pic/raydium/raydium-logo.svg" alt="raydium"/>
					<p>{t.description_1}<br/><span>{t.title_span}</span><br/>{t.description_2}<br/>{t.description_3}</p>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 820px) {
		margin-top: 50px;
	}
	.center_block{
		display: flex;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
		}
	}
	.image{
		width: 472px;
		@media only screen and (max-width: 600px) {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
	.content{
		width: 419px;
		margin-left: 40px;
		@media only screen and (max-width: 820px) {
			margin-left: 0;
			text-align: center;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-top: 30px;
		}
		p{
			font-weight: 700;
			font-size: 36px;
			line-height: 120%;
			margin-top: 30px;
			@media only screen and (max-width: 600px) {
				font-size: 30px;
			}
			span{
				color: #0285FD;
			}
		}
	}
`