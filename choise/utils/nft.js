import ABI from "helpers/ABI";
import axios from "axios";
import nftArray from "public/data/tokens/token-types.json"
import {stateWeb3} from "state/web3";
import {parseEther} from "ethers";


export function renderNftImage(type) {
	return nftArray[type]
}

export function splitWalletAddress(address, size = 6) {
	return `${address.slice(0, size)} ... ${address.slice(0 - size)}`
}

export async function mintTokens(address, amount) {
	return await stateWeb3.readContract({
		abi: ABI,
		contractAddress: process.env.CONTRACT,
		functionName: "mint",
		params: [address, amount],
		send: {msgValue: parseEther((amount * process.env.MINT_PRICE).toString())}
	})
}

export async function claimToken(account, tokenId) {
	return await stateWeb3.writeContract({
		abi: ABI,
		contractAddress: process.env.CONTRACT,
		functionName: "burn",
		params: [tokenId],
		send: {from: account}
	})
}

export function renderTransactionLink(transaction, size = 4) {
	if (transaction) {
		if (process.env.NODE_ENV === "development") {
			return <a href={`https://testnet.bscscan.com/tx/${transaction}`} rel="noreferrer nofollow" target="_blank">{transaction.slice(0, size)} ... {transaction.slice(0 - size)}</a>
		} else {
			return <a href={`https://bscscan.com/tx/${transaction}`} rel="noreferrer nofollow" target="_blank">{transaction.slice(0, size)} ... {transaction.slice(0 - size)}</a>
		}
	}
}

export async function getTotalMintTokens(){
	const data = await stateWeb3.readContract({
		contractAddress: process.env.CONTRACT,
		functionName: "numTokens",
		abi: ABI,
	})
	return Number(data)
}

export async function getOwnerTokens(account) {
	const tokens = await stateWeb3.readContract({
		contractAddress: process.env.CONTRACT,
		functionName: "totalOfOwner",
		abi: ABI,
		params: [account]
	})
	const array = []
	tokens.map(item => {
		array.push(Number(item))
	})
	return array
}

export async function writeMintTotal(total) {
	await axios.post(`${process.env.NFT_API}/tokens`, {
		total,
		prod: process.env.NODE_ENV !== "development"
	})
}

export async function getMintTotal() {
	return (await axios.get(`${process.env.NFT_API}/tokens`, {
		params: {prod: process.env.NODE_ENV !== "development"}
	})).data.data.value
}

export async function getProfileTokens(page, filter, tokens) {
	return (await axios.post(`${process.env.NFT_API}/ProfileGallery`, {
		page,
		limit: 9,
		tokens,
		filters: {
			token_category: filter
		},
		sortBy: "id",
		sortOrder: "asc"
	})).data
}