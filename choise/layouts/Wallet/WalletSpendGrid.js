import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import WalletGrid from "components/Wallet/WalletGrid";

export default function WalletSpendGrid({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
			</CenterBlock>
			<WalletGrid array={t.array}/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	.wallet_grid{
		margin-top: 50px;
	}
	.title{
		text-align: center;
	}
`