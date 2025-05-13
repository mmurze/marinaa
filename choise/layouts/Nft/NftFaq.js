import styled from "styled-components";
import array from "public/data/nft-faq.json"
import FaqBlock from "components/FaqBlock";

export default function NftFaq() {
	return (
		<Wrapper id="faq">
			<FaqBlock array={array} center={true}/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 70px;
`