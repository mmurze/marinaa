import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useState} from "react";
import numberFormat from "helpers/numberFormat";

export default function DepositsCalculateProfit() {
	const [currency, setCurrency] = useState("Bitcoin")
	const [duration, setDuration] = useState(1)
	const currencyArray = ["Bitcoin"]
	const yearsArray = ["1 year", "3 years", "10 years", "25 years", "40 years"]
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>calculate your profit <img src="/pic/decor/round-arrow-right-bottom.svg" alt="calculate your profit"/></h2></Title>
				<div className="calculator">
					<div className="currency">
						<div className="select_box">
							<div className="item">
								<p className="label">Сurrency</p>
							</div>
							<div className="item">
								<p className="label">Duration</p>
							</div>
						</div>
						<div className="bottom">
							<button className="start_earning">Start earning</button>
							<div className="list">
								<p>Return on investment as of February 22, 2022.</p>
								<p>Values can change any time before or after the account is opened. Calculator only demonstrates the possible profitability. The annual interest rate can be changed. </p>
							</div>
						</div>
					</div>
					<div className="graph">
						<ul className="total">
							<li>
								<span>${numberFormat(1200)}</span>
								<span>monthly earnings with choise.com</span>
							</li>
							<li>
								<span className="apy_percent">5.7%</span>
								<span>APY</span>
							</li>
							<li>
								<span>${numberFormat(100)}</span>
								<span>monthly traditional high yield</span>
							</li>
							<li>
								<span>0.60%</span>
								<span>APY</span>
							</li>
						</ul>
						<div className="deposits_graph">
							<img src="/pic/deposits/deposits-graph.svg" alt="monthly earnings with choise.com"/>
							<Line/>
							<ul className="years">
								{
									yearsArray.map((item, index) => {
										return (
											<li key={index}>{item}</li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Line = styled.div`
	position: absolute;
	width: 2px;
	height: 100px;
	background: #F9F9F9;
	bottom: 74px;
	left: 40%;
`

const Wrapper = styled.section`
	margin-top: 70px;
	.title{
		img{
			top: 10px;
			margin-left: 8px;
		}
	}
	.apy_percent{
		width: 140px;
		background: #FFFB1F;
		border-radius: 65.3708px;
		height: 58px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0 15px;
		color: #191B20;
	}
	.calculator{
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		background: #F7F7F7;
		border-radius: 24px;
		height: 556px;
	}
	.currency{
		width: calc(100% - 664px);
		padding: 60px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.graph{
		width: 664px;
		background: #191B20 url("/pic/deposits/calc-background.jpg") left top no-repeat;
		border-radius: 24px;
		padding: 60px 60px 45px 60px;
		position: relative;
		color: #F9F9F9;
	}
	.start_earning{
		width: auto;
		height: 60px;
		padding: 17px 60px;
		background: #191B20;
		border-radius: 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #F9F9F9;
		margin-top: 50px;
		&:hover{
			background: #0285FD;
		}
	}
	.list{
		margin-top: 35px;
		font-size: 14px;
		line-height: 140%;
		color: #A8A8A8;
	}
	.item{
		margin-bottom: 30px;
		&:last-child{
			margin-bottom: 0;
		}
	}
	.total{
		padding-right: 50px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: -30px;
		position: relative;
		z-index: 10;
		li{
			width: calc(50% - 40px);
			margin-bottom: 30px;
			span{
				display: block;
				&:first-child{
					font-weight: 700;
					font-size: 48px;
					line-height: 58px;
				}
				&:last-child{
					font-size: 14px;
					line-height: 17px;
					margin-top: 10px;
				}
			}
		}
	}
	.deposits_graph{
		position: absolute;
		bottom: 45px;
	}
	.years{
		display: flex;
		justify-content: space-between;
		margin-top: 37px;
		li{
			width: 85px;
			background: #454A58;
			border-radius: 31px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 32px;
			font-weight: 700;
			font-size: 12px;
			line-height: 14px;
		}
	}
`