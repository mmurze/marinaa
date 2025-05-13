import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function EarnChooseCoin({t}) {
	const array = [
		{
			"title": "USDC",
			"icon": "/pic/earn/earn-usdc.svg",
			"apy": [5.5, 7, 8.6, 9.8, 10.7]
		},
		{
			"title": "USDT",
			"icon": "/pic/earn/earn-usdt.svg",
			"apy": [5.5, 7, 8.6, 9.8, 10.7]
		}
	]
	const monthsArray = [3, 6, 12, 18, 24]
	const renderArray = (array) => {
		return (
			array.map((item, index) => {
				return (
					<li key={index}>
						<p className="month_value">{monthsArray[index]} {t.months}</p>
						<p className="apy_value">{item}% {t.APY}</p>
					</li>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list_block">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="heading">
										<p className="coin_title"><img src={item.icon} alt={item.title}/>{item.title}</p>
										<a href="https://defi.choise.com/earn" className="deposit_link" target="_blank" rel="noreferrer">{t.deposit}</a>
									</div>
									<ul className="list">{renderArray(item.apy)}</ul>
								</div>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.list_block{
		margin-top: 60px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.item{
		width: calc(50% - 10px);
		background: #191B20;
		border-radius: 30px;
		padding: 30px;
		@media only screen and (max-width: 820px) {
			margin-bottom: 20px;
			width: 100%;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.deposit_link{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		border-radius: 64px;
		padding: 5px 35px;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		height: 40px;
	}
	.coin_title{
		display: flex;
		align-items: center;
		font-weight: 700;
		font-size: 28px;
		line-height: 110%;
		color: #fff;
		img{
			margin-right: 15px;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		@media only screen and (max-width: 1140px) {
			flex-wrap: wrap;
			margin-bottom: -10px;
		}
		@media only screen and (max-width: 820px) {
			margin-bottom: 0;
		}
		@media only screen and (max-width: 600px) {
			margin-bottom: -10px;
		}
	}
	li{
		width: calc(100% / 5 - 4px);
		background: #25262C;
		border-radius: 17px;
		padding: 16px 8px 12px 8px;
		@media only screen and (max-width: 1140px) {
			width: calc(100% / 3 - 4px);
			margin-bottom: 10px;
			&:nth-child(4), &:nth-child(5){
				width: calc(100% / 2 - 4px);
			}
		}
		@media only screen and (max-width: 820px) {
			width: calc(100% / 5 - 4px);
			margin-bottom: 0;
			&:nth-child(4), &:nth-child(5){
				width: calc(100% / 5 - 4px);
			}
		}
		@media only screen and (max-width: 600px) {
			width: calc(100% / 3 - 4px);
			margin-bottom: 10px;
			&:nth-child(4), &:nth-child(5){
				width: calc(100% / 2 - 4px);
			}
		}
	}
	.month_value{
		font-size: 14px;
		line-height: 100%;
		text-align: center;
		color: #A2A8B7;
	}
	.apy_value{
		background: #5CEE9C;
		border-radius: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 7px 5px;
		font-weight: 500;
		font-size: 13px;
		line-height: 100%;
		margin-top: 15px;
	}
`