import {stateWeb3} from "state/web3";

export async function getCharismBetaTokensList(address){
	const abi = [{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "totalOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}]
	const tokens = await stateWeb3.readContract({
		contractAddress: "0x84d78D3e4a8273A824DD1b21CfADD14436D81991",
		abi,
		functionName: "totalOfOwner",
		params: [address]
	})
	const array = []
	if (tokens.length > 0) {
		tokens.map(item => {
			array.push(Number(item))
		})
		return array
	} else return []
}