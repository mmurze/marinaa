import fendTypesArray from "public/data/fend-types.json"
import {filter} from "smart-array-filter";
import moment from "moment";
import axios from "axios";
import {stateWeb3} from "state/web3";
import {parseUnits} from "ethers";

const contract = (coin) => {
	const develop = process.env.NODE_ENV === "development"
	switch (coin) {
		case "USDT": {
			if (develop) {
				return {
					depositContract: "0x9b778cc734fca9e8a1ebe266420e21d92d809b36",
					nftContract: "0x2b76c07491e0cb7934e57e74dc6029e3b68a1df8",
					coinContract: "0x4049a9537e9fc2b66b0b721aad2b3df7a111ef24"
				}
			} else return {
				depositContract: "0xE3Db5f5860F0c5d341924B7E5f42A3952e6F7930",
				nftContract: "0x5ed2FACC7885AebEB267F91fa243A55aFF3c0e47",
				coinContract: "0x55d398326f99059fF775485246999027B3197955"
			}
		}
		case "USDC": {
			if (develop) {
				return {
					depositContract: "0xF337E34ec8B4Ee18973Ed7B0933e73Be0DCeE9D8",
					nftContract: "0xe22E36Db11a52068b4244c58d203a38C561e4988",
					coinContract: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
				}
			} else return {
				depositContract: "0xF337E34ec8B4Ee18973Ed7B0933e73Be0DCeE9D8",
				nftContract: "0xe22E36Db11a52068b4244c58d203a38C561e4988",
				coinContract: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
			}
		}
		case "DAI": {
			if (develop) {
				return {
					depositContract: "0xad53D5Ff710Ca55BB71861b16E40f23B2CA3EfAA",
					nftContract: "0x1B1151560b10E1a9718E1bF6dF74E74131Ba7afE",
					coinContract: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"
				}
			} else return {
				depositContract: "0xad53D5Ff710Ca55BB71861b16E40f23B2CA3EfAA",
				nftContract: "0x1B1151560b10E1a9718E1bF6dF74E74131Ba7afE",
				coinContract: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"
			}
		}
	}
}

/**
 * Апрув перед минтом
 * @param coin - монета
 * @param amount - сумма
 * @returns {Promise<Result|Transaction>}
 */
export async function fendApprove(coin, amount) {
	const develop = process.env.NODE_ENV === "development"
	const countAmount = () => {
		if (coin === "CHO") {
			//TODO add for CHO
			return amount
		} else {
			return parseUnits(amount, develop ? 6 : 18).toString();
			// return BigNumber.from(amount).mul(BigNumber.from(10).pow(develop ? 6 : 18));
		}
	}
	return await stateWeb3.readContract({
		abi: [{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		}],
		contractAddress: contract(coin).coinContract,
		functionName: "approve",
		params: [contract(coin).depositContract, countAmount()]
	})
}

export async function fendMint(coin, amount, period){
	return await stateWeb3.readContract({
		abi: [{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_nftType",
					"type": "uint256"
				},
				{
					"internalType": "uint8",
					"name": "_period",
					"type": "uint8"
				}
			],
			"name": "deposit",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		}],
		contractAddress: contract(coin).depositContract,
		functionName: "deposit",
		params: [getFendCoin(coin, amount, period).type, period === 12 ? 1 : 2]
	})
}

export function getFendCoin(coin, amount, period){
	const coinsArray = filter(fendTypesArray, {
		keywords: `coin:${coin}`
	})
	const typesArray = filter(coinsArray, {
		limit: 2,
		keywords: `amount:${amount}`
	})
	const fendType = filter(typesArray, {
		limit: 1,
		keywords: `period:${period}`
	})
	return fendType[0]
}

export async function getFendTokensList(coin, address){
	return await stateWeb3.readContract({
		abi: [{
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
		}],
		contractAddress: contract(coin).nftContract,
		functionName: "totalOfOwner",
		params: [address]
	})
}

export async function getFendItemDate(coin, tokenId, lockPeriod) {
	const data = await stateWeb3.readContract({
		abi: [{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "depositInfo",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "amountDeposited",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reward",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "timestamp",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"internalType": "uint8",
							"name": "period",
							"type": "uint8"
						},
						{
							"internalType": "bool",
							"name": "rewarded",
							"type": "bool"
						}
					],
					"internalType": "struct FENDUSDTDeposit.Stake",
					"name": "info",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}],
		contractAddress: contract(coin).depositContract,
		functionName: "depositInfo",
		params: [tokenId]
	})
	const timestamp = Number(data.timestamp)
	const dateAddMonths = moment.unix(timestamp).add(lockPeriod, "months").format()
	return {
		timestampNow: moment(new Date()).unix(),
		timestampLock: moment(dateAddMonths).unix(),
		date: moment(dateAddMonths).format("MMM DD, YYYY")
	}
}

export async function writeFendData({utm, transaction, wallet, amountTotal, coin, period}) {
	if (process.env.NODE_ENV !== "development") {
		(await axios.post("/api/fend/fend-data", {utm, transaction, wallet: wallet.toLowerCase(), amountTotal, coin, period})).data
	}
}