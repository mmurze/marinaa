import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import StepsSlider from "components/StepsSlider";

export default function DualCurrencySteps({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<StepsSlider array={t.array} title="how to open choise.com dual currency interest account">
					{/*<a href="#" target="_blank" rel="noreferrer" className="link">Earn</a>*/}
				</StepsSlider>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.link{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		border-radius: 40px;
		height: 60px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: -0.03em;
		padding: 20px 85px;
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
`