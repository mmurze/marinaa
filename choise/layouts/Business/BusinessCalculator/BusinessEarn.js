import styled from "styled-components";
import {useEffect, useState} from "react";
import BusinessCoinSelectValue from "components/BusinessCoinSelectValue";
import {businessEarn, businessEarnCalculator} from "utils/business";
import numberFormat from "helpers/numberFormat";

export default function BusinessEarn({t}) {
	const [coin, setCoin] = useState("USDT")
	const [amount, setAmount] = useState(100000)
	const [duration, setDuration] = useState(6)
	const [flexible, setFlexible] = useState(false)
	const [apy, setApy] = useState(0)
	const [totalAmount, setTotalAmount] = useState(0)
	const [totalProfit, setTotalProfit] = useState(0)
 	const maxAmount = 1000000
	const minAmount = 100000
	const [earnData, setEarnData] = useState(null)
	
	
	useEffect(() => {
		businessEarn({coin}).then(r => {
			setEarnData(r)
			if (r[duration] === null) setDuration(r[6] === null ? 12 : 6)
		})
	}, [coin])
	
	useEffect(() => {
		if (earnData) {
			const data = businessEarnCalculator({
				amount, duration, flexible, earnData
			})
			setApy(data.apy)
			setTotalAmount(data.totalAmount)
			setTotalProfit(data.totalProfit)
		}
	}, [amount, duration, flexible, earnData])
	
	const durationArray = [3, 6, 12, 18, 24]
	
	return (
		<Wrapper>
			<div className="item">
				<div className="top">
					<BusinessCoinSelectValue
						value={amount}
						coin={coin}
						changeCoin={setCoin}
						onChange={setAmount}
						title={t.title_coinSelectValue}
						max={maxAmount}
						min={minAmount}
						array={["USDC", "USDT", "BUSD", "BTC", "ETH"]}
					/>
					{
						earnData && (
							<div className="duration_block">
								<p className="duration_information">{t.duration_information}</p>
								<div className="duration_list">
									{
										durationArray.map((item, index) => {
											return (
												<button
													disabled={flexible || earnData[item] === null}
													onClick={() => setDuration(item)}
													className={duration === item ? "active" : ""}
													key={index}>{item} M</button>
											)
										})
									}
								</div>
							</div>
						)
					}
				</div>
				<div className="flexible_block">
					<div className="flexible_heading">
						<p>{t.flexible_heading_1}</p>
						<p>{t.flexible_heading_2}</p>
					</div>
					<span
						onClick={() => setFlexible(!flexible)}
						className={`toggle ${flexible ? "active" : ""}`}/>
				</div>
			</div>
			<div className="item">
				<div className="top">
					<div className="total_item">
						<p className="total_label">{t.total_label_1}</p>
						<div className="total_block">
							<p className="total_value">{numberFormat(totalAmount)} <span className="coin_total">{coin}</span></p>
							<p className="total_percent">{apy}% APY</p>
						</div>
					</div>
					<div className="total_item">
						<p className="total_label">{t.total_label_2}</p>
						<div className="total_block">
							<p className="total_value">{numberFormat(totalProfit)} <span className="coin_total">{coin}</span></p>
						</div>
					</div>
				</div>
				<div className={`link_button ${amount >= minAmount && amount <= maxAmount ? "active" : ""}`}>
					<span/>
					<a
						href="https://business.choise.com/"
						target="_blank"
						rel="noreferrer"
					>{t.link}</a>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background: #272A32;
	border-radius: 30px;
	margin-top: 50px;
	padding: 40px;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 1024px) {
		flex-direction: column;
		justify-content: flex-start;
	}
	@media only screen and (max-width: 600px) {
		padding: 30px 15px;
	}
	.item{
		width: calc(50% - 30px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			width: 100%;
			&:last-child{
				margin-top: 40px;
			}
		}
	}
	.duration_block{
		margin-top: 30px;
	}
	.duration_list{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		button{
			height: 56px;
			background: transparent;
			border-radius: 500px;
			border: 1px solid #454A58;
			width: calc(100% / 5 - 5px);
			cursor: pointer;
			font-weight: 500;
			font-size: 16px;
			line-height: 28px;
			color: #A2A8B7;
			@media only screen and (max-width: 600px) {
				height: 40px;
				font-size: 16px;
				line-height: 28px;
			}
			&:disabled{
				cursor: default;
				opacity: .5;
				&.active{
					color: #A2A8B7;
					background: transparent;
					border: 1px solid #454A58;
				}
			}
			&.active{
				border: 1px solid #fff;
				background: #fff;
				color: #191B20;
			}
		}
	}
	.duration_information{
		font-weight: 450;
		font-size: 14px;
		line-height: 100%;
	}
	.flexible_block{
		margin-top: 30px;
		border: 1px solid #454A58;
		border-radius: 16px;
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.flexible_heading p{
		&:first-child{
			font-weight: 500;
			font-size: 16px;
			line-height: 28px;
		}
		&:last-child{
			font-weight: 450;
			font-size: 14px;
			line-height: 120%;
			color: #A2A8B7;
		}
	}
	.toggle{
		background: #393D49;
		border-radius: 14.5px;
		height: 28px;
		width: 48px;
		cursor: pointer;
		position: relative;
		transition: all .3s ease-in-out;
		&.active{
			background: #28D180;
			transition: all .3s ease-in-out;
			&:before{
				left: 24px;
				background: #FFFFFF;
				transition: all .3s ease-in-out;
			}
		}
		&:before{
			content: "";
			background: #585F71;
			border-radius: 50%;
			width: 20px;
			height: 20px;
			position: absolute;
			left: 4px;
			top: 4px;
			transition: all .3s ease-in-out;
		}
	}
	.link_button{
		margin-top: 100px;
		position: relative;
		@media only screen and (max-width: 1024px) {
			margin-top: 40px;
		}
		span{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 10;
		}
		&.active{
			span{
				display: none;
			}
			a{
				background: #FFFB1F;
				color: #000000;
			}
		}
		a{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #656D81;
			border-radius: 40px;
			padding: 20px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			color: #FFFFFF;
		}
	}
	.total_label{
		font-weight: 450;
		font-size: 14px;
		line-height: 100%;
		color: #A2A8B7;
	}
	.total_block{
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.total_value{
		font-weight: 700;
		font-size: 40px;
		line-height: 48px;
		@media only screen and (max-width: 600px) {
			font-size: 24px;
		}
	}
	.graph_duration{
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		li{
			width: calc(100% / 5 - 5px);
			background: #393D49;
			border-radius: 6px;
			padding: 10px 5px;
			height: 34px;
			font-weight: 450;
			font-size: 12px;
			line-height: 14px;
			text-align: center;
			color: #A2A8B7;
		}
	}
	.graph_block{
		position: relative;
		margin-top: 30px;
	}
	.coin_total{
		color: #393D49;
	}
	.total_percent{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #7EE3B3;
		border-radius: 500px;
		height: 38px;
		padding: 5px 12px;
		font-weight: 700;
		font-size: 20px;
		line-height: 28px;
		color: #191B20;
		text-align: center;
		@media only screen and (max-width: 600px) {
			font-size: 15px;
		}
	}
	.bottom{
		margin-top: 40px;
	}
	.total_item{
		border-top: 1px solid #393D49;
		padding-top: 25px;
		margin-top: 25px;
		&:first-child{
			border-top: none;
			padding-top: 0;
			margin-top: 0;
		}
	}
`