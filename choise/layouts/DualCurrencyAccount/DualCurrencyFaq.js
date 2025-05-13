import styled from "styled-components";
import FaqBlock from "components/FaqBlock";

export default function DualCurrencyFaq({t}) {
	return (
		<Wrapper>
			<FaqBlock array={t.array} center={true}/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
`