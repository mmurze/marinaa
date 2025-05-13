import axios from "axios";

/**
 * We get an array of the user's balance in the desired network
 * @param wallet - user's wallet
 * @param chainId - network chainId
 * @param full - Full description of the coin
 * @returns {Promise<any>}
 */
export async function getUserBalance({wallet, chainId, full = false}) {
	try {
		return (await axios.get("/api/profile/user-balance", {
			params: {wallet, chainId, full}
		})).data.array
	} catch (error) {
		return []
	}
}

/**
 * Checking the network for downloading data from the contract
 * @param network - Network label [binance, ethereum]
 * @param userNetwork - The network currently in use
 * @returns {boolean}
 */
export function allowFetchWallet({network, userNetwork}){
	if (network === "binance") {
		if (process.env.NODE_ENV === "development") {
			return userNetwork === 97
		} else return userNetwork === 56
	}
	if (network === "ethereum") return userNetwork === 1
	return false
}