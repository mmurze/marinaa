import styled from "styled-components";
import FaqBlock from "components/FaqBlock";

export default function DepositsFaq() {
	const array = [
		{
			"title": "Can i withdraw my deposit with interest?",
			"description": "You can receive your profit monthly or at the end of the term. It depends on the type of deposit you made"
		},
		{
			"title": "When will i receive my profit? ",
			"description": "You can receive your profit monthly or at the end of the term. It depends on the type of deposit you made"
		},
		{
			"title": "Can i request a refund?",
			"description": "You can receive your profit monthly or at the end of the term. It depends on the type of deposit you made"
		},
		{
			"title": "Can i add an amount every month and will the % change? ",
			"description": "You can receive your profit monthly or at the end of the term. It depends on the type of deposit you made"
		}
	]
	return (
		<Wrapper>
			<FaqBlock array={array}/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 1024px) {
		margin-top: 100px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
`