import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import StepsSlider from "components/StepsSlider";

export default function CrptSteps({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<StepsSlider array={t.array} title={t.title}>
					<div className="link">
						<a href="https://crypterium.onelink.me/jtmZ/buycho?app_screen=buy-crypto/crpt" target="_blank" rel="noreferrer nofollow">{t.link}</a>
					</div>
				</StepsSlider>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 180px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
`