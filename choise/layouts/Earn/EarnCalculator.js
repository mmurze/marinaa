import styled from "styled-components";
import {useEffect, useState} from "react";
import numberFormat from "helpers/numberFormat";
import { useDebounce } from 'use-debounce';
export default function EarnCalculator({t}) {
	const [currency, setCurrency] = useState("USDT")
	const [amount, setAmount] = useState(200)
	const [duration, setDuration] = useState(12)
	const [total, setTotal] = useState(0)
	const [debounceAmount] = useDebounce(amount, 500);
	const [apy, setApy] = useState(26)
	const onHandleSubmit = (e) => {
		e.preventDefault()
	}
	const data = {
		"USDT": [5.5, 7, 8.6, 9.8, 10.7],
		"USDC": [5.5, 7, 8.6, 9.8, 10.7]
	}
	useEffect(() => {
		const getIndexDate = () => {
			switch (duration) {
				case 3: return 0
				case 6: return 1
				case 12: return 2
				case 18: return 3
				case 24: return 4
			}
		}
		const getTotal = (total) => {
			switch (duration) {
				case 3: return total / 4
				case 6: return total / 2
				case 12: return total
				case 18: return total * 1.5
				case 24: return total * 2
			}
		}
		setApy(data[currency][getIndexDate()])
		if (amount < 200) setAmount(200)
		if (amount > 9999999) setAmount(9999999)
		setTotal(getTotal(data[currency][getIndexDate()] * amount / 100))
	}, [currency, debounceAmount, duration])
	
	const currencyArray = [
		{
			"title": "USDC",
			"icon": "/pic/earn/earn-usdc.svg"
		},
		{
			"title": "USDT",
			"icon": "/pic/earn/earn-usdt.svg"
		}
	]
	const durationArray = [3, 6, 12, 18, 24]
	return (
		<Wrapper>
			<form onSubmit={onHandleSubmit}>
				<div className="list">
					<div className="item">
						<div className="label">{t.title}</div>
						<div className="buttons_list">
							{
								currencyArray.map((item, index) => {
									return (
										<button
											key={index}
											className={`list_button currency_button ${currency === item.title ? "active" : ""}`}
											onClick={() => setCurrency(item.title)}
											type="button"
										><img src={item.icon} alt={item.title}/>{item.title}</button>
									)
								})
							}
						</div>
					</div>
					<div className="item">
						<div className="label">{t.amount}</div>
						<div className="input_block">
							<div className="input_label">{currency}</div>
							<input
								onWheel={e => e.currentTarget.blur()}
								type="number"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</div>
					</div>
					<div className="item">
						<div className="label">{t.duration_title}</div>
						<div className="buttons_list duration_lists">
							{
								durationArray.map((item, index) => {
									return (
										<button
											key={index}
											onClick={() => setDuration(item)}
											type="button"
											className={`list_button duration_button ${duration === item ? "active" : ""}`}>{item} {t.months}</button>
									)
								})
							}
						</div>
					</div>
				</div>
				<div className="total">
					<div className="label">{t.earn_title}</div>
					<div className="total_list">
						<p className="total_value">{numberFormat(total, " ", ",", "2")} {currency}</p>
						<p className="apy">{apy}% {t.APY}</p>
					</div>
				</div>
				<a target="_blank" rel="noreferrer" href="https://defi.choise.com/earn" className="submit_button">{t.earn} {numberFormat(total, " ", ",", "2")} {currency}</a>
			</form>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: 460px;
	width: 100%;
	background: #F9F9F9;
	border-radius: 24px;
	padding: 40px;
	position: relative;
	z-index: 10;
	@media only screen and (max-width: 820px) {
		max-width: 100%;
		margin-top: 40px;
		background: #F6F7F8;
	}
	@media only screen and (max-width: 600px) {
		padding: 20px;
	}
	.label{
		font-size: 16px;
		line-height: 100%;
		color: #80889C;
		margin-bottom: 15px;
	}
	.item{
		margin-bottom: 20px;
		&:last-child{
			margin-bottom: 0;
		}
	}
	.buttons_list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	.duration_lists{
		margin-bottom: -20px;
	}
	.list_button{
		//width: calc(100% / 3 - 5px);
		width: calc(100% / 2 - 5px);
		padding: 15px 18px;
		height: 60px;
		background: #F9F9F9;
		border: 1px solid #DDDFE4;
		border-radius: 50px;
		font-weight: 500;
		font-size: 18px;
		line-height: 100%;
		@media only screen and (max-width: 600px) {
			height: 50px;
			font-size: 16px;
			line-height: 100%;
			padding: 15px 5px;
		}
		&.duration_button{
			width: calc(100% / 3 - 5px);
			margin-bottom: 20px;
			&:nth-child(4), &:nth-child(5){
				width: calc(100% / 2 - 5px);
			}
		}
		&.active.currency_button{
			background: #5CEE9C;
			border: 1px solid #5CEE9C;
		}
		&.active.duration_button{
			background: #191B20;
			border: 1px solid #191B20;
			color: #F9F9F9;
		}
		img{
			margin-right: 5px;
		}
	}
	.input_block{
		width: 100%;
		position: relative;
		input{
			background: #F9F9F9;
			border: 1px solid #DDDFE4;
			border-radius: 500px;
			height: 68px;
			font-weight: 500;
			font-size: 18px;
			line-height: 100%;
			padding: 25px 90px 25px 25px;
		}
	}
	.input_label{
		font-weight: 500;
		font-size: 18px;
		line-height: 100%;
		color: #80889C;
		position: absolute;
		top: 0;
		height: 100%;
		right: 25px;
		display: flex;
		align-items: center;
		text-align: right;
	}
	.total{
		background: #F6F7F8;
		border-radius: 16px;
		padding: 25px;
		margin-top: 20px;
		@media only screen and (max-width: 600px) {
			background: #F9F9F9;
		}
	}
	.total_list{
		display: flex;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
		}
	}
	.total_value{
		font-weight: 700;
		font-size: 24px;
		line-height: 100%;
		@media only screen and (max-width: 600px) {
		
		}
	}
	.apy{
		margin-left: 25px;
		background: #5CEE9C;
		border-radius: 500px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 100%;
		height: 34px;
		padding: 10px 14px;
		text-align: center;
		@media only screen and (max-width: 600px) {
			margin-top: 10px;
			margin-left: 0;
		}
	}
	.submit_button{
		padding: 16px 40px;
		background: #FFFB1F;
		border-radius: 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		margin-top: 40px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
`