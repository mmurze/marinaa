import styled from "styled-components";
import BusinessCoinSelectValue from "components/BusinessCoinSelectValue";
import {useEffect, useState} from "react";
import numberFormat from "helpers/numberFormat";
import {state} from "state";
import {businessBorrow, businessBorrowCalculator, getRateBorrow} from "utils/business";
import ValuesRange from "components/ValuesRange";
export default function BusinessBorrow({t}) {
	const [loanCoin, setLoanCoin] = useState("USDT")
	const [borrowAmount, setBorrowAmount] = useState(10000)
	const [currencyCoin, setCurrencyCoin] = useState("ETH")
	const [currencyAmount, setCurrencyAmount] = useState(0)
	const [duration, setDuration] = useState(3)
	const [loansPercent, setLoansPercent] = useState(20)
	const [rate, setRate] = useState(null)
	const [total, setTotal] = useState(null)
	const [borrowData, setBorrowData] = useState(null)
	
	const maxAmount = 1000000
	const minAmount = 10000
	const durationArray = [1, 3, 6, 12]
	
	useEffect(() => {
		makeRequest()
	}, [loanCoin, currencyCoin])
	
	useEffect(() => {
		const timer = setInterval(() => {
			makeRequest()
		}, 300000);
		return () => clearInterval(timer);
	})
	
	const makeRequest = () => {
		getRateBorrow({loanCoin, currencyCoin})
			.then(r => {
				if (r.status) setRate(r)
			})
	}
	
	useEffect(() => {
		businessBorrow({coin: currencyCoin, ltv: loansPercent})
			.then(r => setBorrowData(r))
	}, [currencyCoin, loansPercent])
	
	useEffect(() => {
		if (rate && borrowData) {
			setTotal(businessBorrowCalculator({
				borrowAmount,
				loansPercent,
				duration,
				ratePrice: rate.price,
				borrowData
			}))
		}
	}, [rate, borrowAmount, loansPercent, duration, borrowData])
	
	const percentArray = [20, 30, 50, 65, 75]
	
	useEffect(() => {
		if (rate && borrowData) {
			const total = borrowAmount / (borrowData?.ltv / 100)
			setCurrencyAmount(Number((total / rate.price).toFixed(4)))
		}
	}, [rate, borrowData])
	
	const changeBorrowAmount = (e) => {
		if (rate && borrowData) {
			setBorrowAmount(e)
			const total = e / (borrowData?.ltv / 100)
			setCurrencyAmount(Number((total / rate.price).toFixed(4)))
		}
	}
	
	const changeCurrencyAmount = (e) => {
		if (rate) {
			const total = e * rate.price
			setCurrencyAmount(e)
			setBorrowAmount(Number(total.toFixed(2)))
		}
	}
	
	return (
		<Wrapper>
			<div className="item">
				<div className="coins_list">
					<div className="coins_item">
						<BusinessCoinSelectValue
							value={borrowAmount}
							coin={loanCoin}
							changeCoin={setLoanCoin}
							onChange={changeBorrowAmount}
							title={t.title_coinSelectValue}
							min={minAmount}
							max={maxAmount}
							array={["USDC", "USDT"]}
						/>
					</div>
					<div className="coins_item">
						<div className="rate_heading">
							<div className="label">
								{t.label_coins}
								<p>
									<img src="/pic/business/information-icon.svg" alt="Collateral currency"/>
									<span>{t.span_coins}</span>
								</p>
							</div>
							<p className="rate_timer">
								1 {currencyCoin} = {numberFormat(rate?.price, " ", ".", "2")} {loanCoin}
							</p>
						</div>
						<BusinessCoinSelectValue
							value={currencyAmount}
							coin={currencyCoin}
							changeCoin={setCurrencyCoin}
							onChange={changeCurrencyAmount}
							array={["ETH", "BTC"]}
						/>
					</div>
				</div>
				<div className="duration_block">
					<div className="label">{t.label_duration}</div>
					<ul className="duration_list">
						{
							durationArray.map((item, index) => {
								return (
									<li
										onClick={() => setDuration(item)}
										className={duration === item ? "active" : ""}
										key={index}>{item} M
									</li>
								)
							})
						}
					</ul>
				</div>
				<div className="loans_range">
					<div className="loans_heading">
						<div className="label">
							{t.label_loans}
							<p>
								<img src="/pic/business/information-icon.svg" alt="Loan to value"/>
								<span>{t.span_loans}</span>
							</p>
						</div>
						<p className="percent_value">{loansPercent}%</p>
					</div>
					<ValuesRange
						array={percentArray}
						value={loansPercent}
						onClick={setLoansPercent}
					/>
				</div>
			</div>
			<div className="item total_block_item">
				<div className="top">
					<div className="total_list">
						<div className="total_item">
							<p className="label">{t.title_total_1}</p>
							<p className="total_value">{numberFormat(total?.borrowAmount)} <span>{loanCoin}</span></p>
						</div>
						<div className="total_item">
							<p className="label">{t.title_total_2}</p>
							<div className="percent_block">
								<p className="total_value">
									{total?.totalInterest} <span>{loanCoin}</span>
								</p>
								<p className="total_percent">{total?.loansPercent}% APY</p>
							</div>
						</div>
						<div className="total_item">
							<p className="label">{t.title_total_3}</p>
							<p className="total_value">1 {currencyCoin} = {numberFormat(total?.marginCall, " ", ".", "2")} <span>{loanCoin}</span></p>
						</div>
					</div>
					<p className="total_description">{t.total_description}<span>{total?.marginCallInterest}% down</span>{t.span}</p>
				</div>
				<button
					className="link_button"
					disabled={!(borrowAmount > 0 && currencyAmount > 0 && borrowAmount >= minAmount && borrowAmount <= maxAmount)}
					onClick={() => state.businessFormModal = true}>{t.title_button}</button>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 1024px) {
		flex-direction: column;
		justify-content: flex-start;
	}
	.rate_heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.rate_timer{
		font-size: 14px;
		line-height: 100%;
	}
	.item{
		width: calc(50% - 10px);
		background: #272A32;
		border-radius: 30px;
		padding: 40px;
		@media only screen and (max-width: 1024px) {
			width: 100%;
			&:last-child{
				margin-top: 20px;
			}
		}
		@media only screen and (max-width: 600px) {
			padding: 30px 15px;
		}
		&.total_block_item{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}
	.coins_list{
		position: relative;
		z-index: 200;
	}
	.coins_item{
		margin-top: 40px;
		&:first-child{
			margin-top: 0;
			position: relative;
			z-index: 200;
		}
	}
	.label{
		font-weight: 450;
		font-size: 14px;
		line-height: 100%;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 100;
		&:hover span{
			display: block;
		}
		img{
			margin-left: 5px;
		}
		p{
			position: relative;
		}
		span{
			position: absolute;
			background: #393D49;
			border-radius: 16px;
			width: 182px;
			padding: 15px;
			font-size: 10px;
			line-height: 130%;
			color: #A2A8B7;
			left: 30px;
			top: -20px;
			display: none;
		}
	}
	.duration_block{
		margin-top: 40px;
	}
	.duration_list{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		li{
			display: flex;
			width: calc(100% / 4 - 5px);
			align-items: center;
			justify-content: center;
			text-align: center;
			border: 1px solid #454A58;
			border-radius: 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 28px;
			color: #A2A8B7;
			cursor: pointer;
			&.active{
				color: #191B20;
				background: #FFFFFF;
				border: 1px solid #FFFFFF;
				height: 56px;
			}
		}
	}
	.loans_range{
		margin-top: 35px;
	}
	.loans_heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.percent_value{
		font-weight: 700;
		font-size: 18px;
		line-height: 100%;
	}
	.total_item{
		margin-top: 24px;
		padding-bottom: 24px;
		border-bottom: 1px solid #393D49;
		&:first-child{
			margin-top: 0;
		}
		&:last-child{
			padding-bottom: 0;
			border-bottom: none;
		}
	}
	.total_description{
		margin-top: 20px;
		font-weight: 450;
		font-size: 14px;
		line-height: 130%;
		color: #A2A8B7;
		span{
			color: #FF6464;
		}
	}
	.link_button{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 40px;
		padding: 20px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #000000;
		background: #FFFB1F;
		@media only screen and (max-width: 1024px) {
			margin-top: 40px;
		}
		&:disabled{
			background: #656D81;
			color: #FFFFFF;
		}
	}
	.total_value{
		font-weight: 700;
		font-size: 30px;
		line-height: 100%;
		margin-top: 10px;
		@media only screen and (max-width: 600px) {
			font-size: 24px;
		}
		span{
			color: #393D49;
		}
	}
	.percent_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.total_percent{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #1A1C21;
		border-radius: 500px;
		padding: 5px 12px;
		height: 38px;
		font-weight: 700;
		font-size: 20px;
		line-height: 28px;
		color: #FFFFFF;
		@media only screen and (max-width: 600px) {
			font-size: 15px;
		}
	}
	.values_range{
		margin-top: 20px;
	}
`