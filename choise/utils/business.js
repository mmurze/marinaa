import axios from "axios";

export async function businessEarn({coin}){
	return (await axios.get("/api/business/business-earn", {params: {coin}})).data
}

export function businessEarnCalculator({amount, duration, flexible, earnData}){
	const apy = flexible ? earnData["flex12"] : earnData[duration]
	const apyCalc =  flexible ? (apy / 12) * 12 : (apy / 12) * duration
	const getProfit = () => {
		return (amount * apyCalc) / 100
	}
	return {
		apy,
		totalAmount: getProfit() + amount,
		totalProfit: getProfit()
	}
}

export async function getRateBorrow({loanCoin, currencyCoin}){
	return (await axios.get("/api/business/borrow-rate", {
		params: {
			from: currencyCoin,
			to: loanCoin
		}
	})).data
}

export async function businessBorrow({coin, ltv}){
	return (await axios.get("/api/business/business-borrow", {params: {coin, ltv}})).data
}

export function businessBorrowCalculator({borrowAmount, ratePrice, loansPercent, duration, borrowData}){
	const totalInterestPercent = (borrowData[duration] * duration) / 12
	return {
		borrowAmount: borrowAmount,
		totalInterest: ((borrowAmount * totalInterestPercent) / 100).toFixed(2),
		loansPercent: borrowData[duration],
		marginCall: ratePrice * (1 - (1 * borrowData?.margin_rate / 100)),
		marginCallInterest: borrowData?.margin_rate
	}
}

export async function writeBusinessForm({name, phone, email, utm}){
	return (await axios.post("/api/business/write-form", {name, phone, email, utm})).data
}