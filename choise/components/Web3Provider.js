import {useEffect} from "react";
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";

export default function Web3Provider({children}) {
	const {network} = useSnapshot(stateWeb3)
	useEffect(() => {
		window.ethereum && window.ethereum?.on('chainChanged', chainId => {
			stateWeb3.network = +chainId
			stateWeb3.hexChainId = chainId
		})
		window.ethereum && window.ethereum?.on('networkChanged', chainId => {
			stateWeb3.network = +chainId
			stateWeb3.hexChainId = chainId
		})
		window.BinanceChain && window.BinanceChain?.on('chainChanged', chainId => {
			stateWeb3.network = +chainId
			stateWeb3.hexChainId = chainId
		})
	}, []);
	return children
}