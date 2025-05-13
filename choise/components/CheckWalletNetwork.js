import styled from "styled-components";
import {useSnapshot} from "valtio";
import {useEffect, useState} from "react";
import {stateWeb3} from "state/web3";

/**
 * Wrapper to test the desired network. If the connected network is suitable, children are shown
 * @param children
 * @param network Network label to use [binance, ethereum]
 * @returns {*|JSX.Element}
 * @constructor
 */
export default function CheckWalletNetwork({children, defaultNetwork}) {
	const snap = useSnapshot(stateWeb3);
	const [active, setActive] = useState(false)
	
	useEffect(() => {
		if (defaultNetwork === "binance") {
			if (process.env.NODE_ENV === "development") {
				setActive(snap.network === 97)
			} else setActive(snap.network === 56)
		}
		if (defaultNetwork === "ethereum") setActive(snap.network === 1)
	}, [snap.network])
	
	const findNetWork = () => {
		if (defaultNetwork === "binance") return process.env.NODE_ENV === "development" ? "Binance Smart Chain Testnet" : "Binance Smart Chain MainNet"
		if (defaultNetwork === "ethereum") return "Ethereum Mainnet"
	}
	return (
		active ? children : (
			<Wrapper>
				<p className="error_icon"><img src="/pic/error-message-icon.svg" alt=""/></p>
				<p className="error_description">Change network to <strong onClick={() => stateWeb3.changeOrAddNetwork(defaultNetwork)}>{findNetWork()}</strong></p>
			</Wrapper>
		)
	)
}

const Wrapper = styled.div`
	margin-top: 40px;
	background: rgba(255, 100, 100, 0.05);
	border: 1px solid rgba(255, 100, 100, 0.3);
	border-radius: 20px;
	padding: 20px;
	display: flex;
	align-items: center;
	.error_icon{
		width: 32px;
	}
	.error_description{
		font-size: 16px;
		line-height: 130%;
		width: calc(100% - 32px);
		padding-left: 20px;
		strong{
			text-decoration: underline;
			cursor: pointer;
		}
	}
`