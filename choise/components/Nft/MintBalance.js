import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function MintBalance({amount}) {
	const snap = useSnapshot(state);
	return (
		<Wrapper>
			<li>Your Balance: <strong>{snap.balance} BNB</strong></li>
			<li className="line">|</li>
			<li>Mint Price: <strong>{process.env.MINT_PRICE * amount} BNB</strong></li>
		</Wrapper>
	)
}

const Wrapper = styled.ul`
	display: flex;
	justify-content: center;
	width: calc(100% + 4px);
	position: absolute;
	bottom: -20px;
	left: -2px;
	background: #EEEFF2;
	border-radius: 0 0 8px 8px;
	padding: 10px 20px;
	font-size: 14px;
	line-height: 120%;
	letter-spacing: -0.03em;
	.line{
		margin: 0 10px;
	}
	strong{
		font-weight: 700;
		color: #0285FD;
	}
`