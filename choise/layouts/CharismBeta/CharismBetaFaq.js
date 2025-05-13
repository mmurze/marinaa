import styled from "styled-components";
import FaqBlock from "components/FaqBlock";

export default function CharismBetaFaq({t}) {
	return (
		<Wrapper>
			<FaqBlock array={t.array}/>
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
	}
	ul{
		list-style: disc;
		margin-top: 10px;
	}
`