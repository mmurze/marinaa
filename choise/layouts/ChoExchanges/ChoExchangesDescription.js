import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function ChoExchangesDescription({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<h2>{t.title}</h2>
					<div className="list">
						<p>{t.description_1}</p>
						<p>{t.description_2}</p>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 40px;
	.banner{
		background: linear-gradient(267.59deg, #5CEE9C -28.97%, #FFFB1F 87.33%);
		border-radius: 24px;
		padding: 60px 100px;
		display: flex;
		align-items: center;
		@media only screen and (max-width: 820px) {
			padding: 50px 40px;
			flex-direction: column;
			align-items: flex-start;
		}
		@media only screen and (max-width: 600px) {
			margin-left: -20px;
			margin-right: -20px;
			border-radius: 0;
			padding: 50px 20px;
		}
	}
	h2{
		width: 305px;
		font-size: 27px;
		line-height: 120%;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
		@media only screen and (max-width: 600px) {
			font-size: 20px;
			line-height: 120%;
		}
	}
	.list{
		width: calc(100% - 305px);
		margin-left: 50px;
		@media only screen and (max-width: 820px) {
			margin-left: 0;
			width: 100%;
			margin-top: 20px;
		}
		p{
			font-size: 16px;
			line-height: 150%;
			margin-bottom: 15px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
`