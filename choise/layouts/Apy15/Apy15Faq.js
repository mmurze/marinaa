import styled from "styled-components";
import FaqBlock from "components/FaqBlock";

export default function Apy15Faq({t}) {
	return (
		<Wrapper>
			<FaqBlock array={t.array}/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
`