import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import htmlContent from "helpers/htmlContent";

export default function Million4choDescription({t}) {
	return (
		<Wrapper id="participate">
			<CenterBlock>
				<h2>{htmlContent(t.title)}</h2>
				<p className="description">{htmlContent(t.description)}</p>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 140px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	h2{
		max-width: 1011px;
		width: 100%;
		margin: 0 auto;
		font-weight: 700;
		font-size: 56px;
		line-height: 130%;
		text-transform: uppercase;
		text-align: center;
		@media only screen and (max-width: 600px) {
			font-size: 28px;
			line-height: 130%;
		}
		span{
			color: #4200FF;
		}
	}
	.description{
		max-width: 694px;
		width: 100%;
		text-align: center;
		margin: 150px auto 0 auto;
		font-size: 32px;
		line-height: 130%;
		@media only screen and (max-width: 600px) {
			margin: 60px auto 0 auto;
			max-width: 100%;
			font-size: 18px;
			line-height: 150%;
		}
		span{
			color: #4200FF;
		}
	}
`