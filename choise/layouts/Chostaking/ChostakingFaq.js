import styled from "styled-components";
import FaqBlock from "components/FaqBlock";

export default function ChostakingFaq({t}) {
	return (
		<Wrapper>
			<FaqBlock title="FAQ" array={t.array} center={true}/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
`