import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import StepsSlider from "components/StepsSlider";

export default function DepositsSteps({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<StepsSlider array={t.array} title="how to deposit crypto?">
					<div className="link">
						<a href="https://crypterium.onelink.me/jtmZ/deposits?app_screen=deposits" target="_blank" rel="noreferrer nofollow">{t.link_a}</a>
					</div>
				</StepsSlider>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 170px;
	@media only screen and (max-width: 820px) {
		margin-top: 100px;
	}
`