import {state} from "state";
import {stateWeb3} from "state/web3";
export default function DisconnectWallet() {
	const handleDisconnectAllWallets = async () => {
		state.verificatedProfileModal = false
		state.verificatedUser = false
		stateWeb3.disconnectWallet()
	}
	
	return (
		<button onClick={handleDisconnectAllWallets} className="disconnect_wallet">Disconnect wallet</button>
	)
}