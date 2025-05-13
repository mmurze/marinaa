import {useSnapshot} from "valtio";
import {state} from "state";
import htmlContent from "helpers/htmlContent";
import styled from "styled-components";
import {stateWeb3} from "state/web3";

export default function WalletActionButton({children, disabled = false, onClick, defaultNetwork, className}) {
	const snap = useSnapshot(stateWeb3);
	const checkNetwork = () => {
		if (defaultNetwork === "binance") {
			if (process.env.NODE_ENV === "development") {
				return snap.network === 97
			} else return snap.network === 56
		}
		if (defaultNetwork === "ethereum") return snap.network === 1
		return false
	}
	const renderTitle = () => {
		if (defaultNetwork === "binance") {
			if (process.env.NODE_ENV === "development") {
				if (snap.network === 97) {
					return children
				} else return `Change network to <span>Binance Smart Chain Testnet</span>`
			}
			if (snap.network === 56) {
				return children
			} else return `Change network to <span>Binance Smart Chain MainNet</span>`
		}
		if (defaultNetwork === "ethereum") {
			if (snap.network === 1) {
				return children
			} else return `Change network to <span>Ethereum Mainnet</span>`
		}
	}
	return (
		snap.network ? (
			<Wrapper
				className={`button ${className ? className : ""} ${!checkNetwork() ? "change_network" : ""}`}
				disabled={disabled || !checkNetwork()}
				onClick={onClick}
			>
				{checkNetwork() ? children : <p onClick={() => stateWeb3.changeOrAddNetwork(defaultNetwork)}>{htmlContent(renderTitle())}</p>}
			</Wrapper>
		) : (
			<Wrapper type="button" onClick={() => state.walletConnectModal = true} className={`button ${className ? className : ""}`}>
				Connect wallet
			</Wrapper>
		)
	)
}

const Wrapper = styled.button`
	&:disabled{
		opacity: .4;
	}
	&.change_network{
		padding: 20px 10px;
		flex-direction: column;
		opacity: 1 !important;
		p{
			line-height: 1.3;
			display: flex;
			flex-direction: column;
			span{
				text-decoration: underline;
				cursor: pointer;
				font-size: 13px;
			}
		}
	}
`