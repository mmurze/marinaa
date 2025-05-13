import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function StepInformationEarn() {
	const array = [
		{
			"percent": 15,
			"apy": "90 days",
			"income": "USDT · USDC",
			"slug": "/interest-accounts"
		},
		{
			"percent": 17,
			"apy": "365 days",
			"income": "CHO",
			"slug": "/interest-accounts"
		},
		{
			"percent": 26,
			"apy": "2 years",
			"income": "CHO",
			"slug": "/earn"
		},
		{
			"percent": 16,
			"apy": "2 years",
			"income": "USDT · USDC",
			"slug": "/earn"
		}
	]
	return (
		<Wrapper className="tab_item_block">
			<div className="item item1">
				<a className="block_link" href="https://crpt.onelink.me/WpQ0/lkjmkm1w" target="_blank" rel="noreferrer">Start earning</a>
				<div className="top">
					<h3>your choise to raise funds</h3>
					<div className="description_list">
						<p>Choise.com is the easiest and safest way to earn on crypto.</p>
						<p>We aggregated trusted products for you to earn up to 30% APY. Start raising your funds faster with Choise.com.</p>
					</div>
				</div>
				<div className="earn_link_block">Start earning</div>
			</div>
			<div className="item">
				<a className="block_link" href="https://app.crypterium.com/dashboard" target="_blank" rel="noreferrer">
					Invest
				</a>
				<div className="top">
					<div className="new">🔥 For new users</div>
					<p className="top_percent">30%</p>
					<p className="top_apy">APY in 8 days</p>
					<p className="top_label">Promo-interest-account</p>
					<p className="tokens_label">Tokens</p>
					<p className="tokens_list">BTC · ETH · USDT · USDC · CHO</p>
				</div>
				<div className="invest_button">Invest</div>
				<div className="earn_pic">
					<Image src="/pic/main-new/earn-tab-pic.png" width={289} height={191} priority={true} alt="For new users"/>
				</div>
			</div>
			{
				array.map((item, index) => {
					return (
						<div className="item dynamic" key={index}>
							<Link href={item.slug} className="block_link">Invest</Link>
							<div className="top">
								<div className="percent_block">
									<p>{item.percent}%</p>
									<p>APY in<br/>{item.apy}</p>
								</div>
							</div>
							<div className="bottom">
								<div className="income_block">
									<p>Fixed income</p>
									<p>{item.income}</p>
								</div>
								<div className="invest_link_button">Invest</div>
							</div>
						</div>
					)
				})
			}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 20px;
	.item{
		padding: 30px;
		border-radius: 20px;
	}
	.item {
		background: #F9F9F9;
		position: relative;
		&.dynamic:hover{
			.invest_link_button{
				background: #191B20;
				transition: .3s ease-in-out;
				color: #F9F9F9;
			}
		}
		&:nth-child(1){
			grid-area: 1 / 1 / 3 / 2;
			min-height: 484px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 484px;
			&:hover .earn_link_block{
				background: #191B20;
				transition: .3s ease-in-out;
			}
		}
		&:nth-child(2){
			grid-area: 1 / 2 / 3 / 3;
			background: #FFFB00;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			overflow: hidden;
			&:hover{
				.earn_pic{
					transform: scale(1.2);
				}
				.invest_button{
					background: #191B20;
					color: #F9F9F9;
					transition: .3s ease-in-out;
				}
			}
		}
		&:nth-child(3){
			grid-area: 1 / 3 / 2 / 4;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&:nth-child(4){
			grid-area: 2 / 3 / 3 / 4;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&:nth-child(5){
			grid-area: 1 / 4 / 2 / 5;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&:nth-child(6){
			grid-area: 2 / 4 / 3 / 5;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}
	h3{
		font-size: 24px;
		line-height: 120%;
		max-width: 200px;
		width: 100%;
	}
	.description_list{
		margin-top: 20px;
		p{
			margin-bottom: 20px;
			font-size: 12px;
			line-height: 150%;
			color: #848484;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.earn_link_block{
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 55px;
		height: 43px;
		padding: 20px;
		background: #191B20;
		color: #F9F9F9;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		text-align: center;
		transition: .3s ease-in-out;
	}
	.percent_block{
		display: flex;
		align-items: center;
		p{
			&:first-child{
				font-weight: 700;
				font-size: 40px;
				line-height: 120%;
			}
			&:last-child{
				font-weight: 700;
				font-size: 14px;
				line-height: 130%;
				margin-left: 20px;
			}
		}
	}
	.income_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		p{
			&:nth-child(1){
				font-weight: 700;
				font-size: 13px;
				line-height: 130%;
			}
			&:nth-child(2){
				font-weight: 700;
				font-size: 14px;
				line-height: 130%;
				text-align: right;
			}
		}
	}
	.invest_link_button{
		background: #F6F7F8;
		border-radius: 55px;
		padding: 20px;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 44px;
		margin-top: 20px;
		transition: .3s ease-in-out;
	}
	.block_link{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		font-size: 0;
	}
	.new{
		background: #F2EF1D;
		border-radius: 100px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 5px 16px;
		font-size: 12px;
		line-height: 130%;
	}
	.top_percent{
		font-weight: 700;
		font-size: 64px;
		line-height: 100%;
		margin-top: 30px;
	}
	.top_apy{
		margin-top: 5px;
		font-weight: 700;
		font-size: 16px;
		line-height: 130%;
	}
	.top_label{
		margin-top: 40px;
		font-weight: 700;
		font-size: 14px;
		line-height: 130%;
	}
	.tokens_label{
		margin-top: 20px;
		font-weight: 500;
		font-size: 12px;
		line-height: 130%;
		color: #959200;
	}
	.tokens_list{
		font-weight: 700;
		font-size: 14px;
		line-height: 130%;
		margin-top: 3px;
	}
	.invest_button{
		background: #F9F9F9;
		border-radius: 55px;
		padding: 20px;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 44px;
		margin-top: 20px;
		transition: .3s ease-in-out;
		position: relative;
		z-index: 10;
	}
	.top{
		position: relative;
		z-index: 10;
	}
	.earn_pic{
		position: absolute;
		bottom: 0;
		left: 0;
		line-height: 0;
		transition: .3s ease-in-out;
	}
`