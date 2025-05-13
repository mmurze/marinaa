import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useEffect, useState} from "react";
import numberFormat from "helpers/numberFormat";
import Responsive from "helpers/Responsive";
import NftFendCalculatorTotal from "layouts/NftFend/NftFendCalculatorTotal";

export default function NftFendCalculator({t}) {
	const [active, setActive] = useState(1)
	const [coin, setCoin] = useState("USDT")
	const [amount, setAmount] = useState(10000)
	const [period, setPeriod] = useState(12)
	const [apy, setApy] = useState(15)
	const [amountTotal, setAmountTotal] = useState(null)
	const coinsArray = [
		{
			"icon": "/pic/fend/cho.svg",
			"title": "CHO",
			"apy": [
				{
					"period": 12,
					"apy": 20
				},
				{
					"period": 24,
					"apy": 25
				}
			]
		},
		{
			"svg": "<svg width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.6364 11.2886C12.517 11.2984 11.9006 11.3383 10.5253 11.3383C9.43157 11.3383 8.65492 11.3026 8.3825 11.2886C4.15543 11.0868 1.00033 10.2879 1.00033 9.33141C1.00033 8.37492 4.15543 7.57717 8.3825 7.37211V10.493C8.65888 10.5146 9.45047 10.5653 10.5442 10.5653C11.8568 10.5653 12.5141 10.5059 12.6324 10.4941V7.37421C16.8505 7.57828 19.9987 8.37715 19.9987 9.33141C19.9987 10.2857 16.8515 11.0845 12.6324 11.2875L12.6364 11.2886ZM12.6364 7.05143V4.25868H18.523V0H2.49586V4.25868H8.38145V7.05032C3.59765 7.28898 0 8.31773 0 9.55055C0 10.7834 3.59765 11.8111 8.38145 12.0508V21H12.6353V12.0475C17.4083 11.8089 21 10.7813 21 9.54944C21 8.31773 17.4113 7.29009 12.6353 7.05032L12.6364 7.05143Z\"/></svg>",
			"title": "USDT",
			"apy": [
				{
					"period": 12,
					"apy": 15
				},
				{
					"period": 24,
					"apy": 16
				}
			]
		},
		{
			"svg": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.04144 21.0929C8.83242 20.8648 8.54397 20.7346 8.26183 20.6072L8.25331 20.6034C3.56795 18.4881 1.40053 13.0376 3.30973 8.32821C4.0959 6.19434 5.65151 4.54138 7.64709 3.45171C7.81144 3.36197 7.99038 3.28252 8.16974 3.20288C8.72611 2.95585 9.28653 2.70703 9.42793 2.14366C9.45818 2.02314 9.47331 1.89718 9.47331 1.77121V1.50893C9.47331 1.24665 9.21103 0.984375 8.94875 0.984375C8.86189 0.984375 8.7752 0.998256 8.69312 1.02667C4.04133 2.6367 0.949219 7.05958 0.949219 11.869C0.949219 16.8083 4.04131 21.1035 8.69308 22.7113C8.77518 22.7397 8.86189 22.7536 8.94875 22.7536C9.21103 22.7536 9.60445 22.4913 9.60445 22.229C9.60445 22.0565 9.56596 21.8855 9.48307 21.7342C9.34704 21.486 9.20572 21.2722 9.04144 21.0929ZM16.6865 14.229C16.6865 12.5242 15.7685 11.6062 13.408 11.0817L12.0966 10.8194C10.7852 10.5571 10.1295 10.0326 10.1295 9.37687C10.1295 8.91811 10.5147 8.33095 11.1952 8.01964C11.8384 7.72537 12.6157 7.67607 13.265 7.95675C13.3285 7.9842 13.391 8.01452 13.4522 8.04741C13.7444 8.20465 13.9652 8.48336 14.1808 8.75547C14.4841 9.13828 14.777 9.50801 15.2439 9.50801H15.3021C15.695 9.50801 16.215 9.4611 16.3164 9.08144C16.3506 8.9536 16.3035 8.83269 16.2555 8.70942C16.243 8.6774 16.2305 8.64522 16.2193 8.61272C15.8621 7.57497 15.0827 6.77072 14.0425 6.41517C13.5515 6.24735 13.1457 5.8304 13.1457 5.31153C13.1457 4.78697 12.7523 4.39355 12.2277 4.39355C11.7032 4.39355 11.3097 4.78697 11.3097 5.31153C11.3097 5.82953 10.903 6.24637 10.4129 6.41391C9.12407 6.85445 8.13857 8.00559 8.03125 9.50801C8.03125 11.0817 8.94923 12.1308 11.0475 12.5242L12.49 12.9176C13.9325 13.1799 14.4571 13.7045 14.4571 14.4913C14.4571 15.2782 13.408 16.065 12.0966 16.065C11.3097 16.065 10.3918 15.6716 9.99835 14.8847C9.86721 14.6225 9.60493 14.3602 9.21151 14.3602H8.42467C8.34553 14.3602 8.27833 14.3841 8.22307 14.4246C7.94667 14.6275 8.06213 15.0576 8.19221 15.3748C8.59804 16.3644 9.42871 17.1407 10.4101 17.4688C10.9597 17.6524 11.4409 18.1084 11.4409 18.6878C11.4409 19.2124 11.8343 19.6058 12.3589 19.6058C12.8834 19.6058 13.2768 19.2124 13.2768 18.6878C13.2768 18.0967 13.7438 17.6221 14.3004 17.4231C15.6613 16.9365 16.6865 15.7109 16.6865 14.229ZM15.8979 0.984375C15.9847 0.984375 16.0712 0.998572 16.153 1.02769C20.6778 2.6386 23.8974 7.06297 23.8974 12.1313C23.8974 16.9407 20.8053 21.3635 16.1535 22.9736C16.0714 23.002 15.9847 23.0159 15.8979 23.0159C15.5045 23.0159 15.2422 22.7536 15.2422 22.3602V22.0979C15.2422 21.5733 15.5045 21.1799 16.029 20.9176C18.5207 19.8685 20.4878 17.9014 21.4058 15.5409C23.3729 10.5576 21.0123 4.91857 16.029 2.95147C15.5045 2.68919 15.2422 2.29577 15.2422 1.77121V1.64007C15.2422 1.24665 15.5045 0.984375 15.8979 0.984375Z\"/></svg>",
			"title": "USDC",
			"apy": [
				{
					"period": 12,
					"apy": 15
				},
				{
					"period": 24,
					"apy": 16
				}
			]
		},
		{
			"svg": "<svg width=\"23\" height=\"19\" viewBox=\"0 0 23 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.7747 10.6761H18.4591C18.6016 10.6761 18.6689 10.6761 18.6792 10.4952C18.7338 9.83673 18.7338 9.17446 18.6792 8.51526C18.6792 8.38725 18.6135 8.33436 18.4702 8.33436H5.16695C5.00229 8.33436 4.95796 8.38725 4.95796 8.53672V10.4316C4.95796 10.6761 4.95796 10.6761 5.22157 10.6761H11.7747V10.6761ZM17.9327 6.11989C17.9517 6.07159 17.9517 6.0187 17.9327 5.97118C17.8211 5.73586 17.6889 5.51127 17.5353 5.30048C17.3042 4.94021 17.0318 4.60831 16.7215 4.31013C16.5751 4.13 16.4057 3.96827 16.2157 3.83106C15.2641 3.04691 14.1329 2.49195 12.917 2.21294C12.3035 2.07957 11.6765 2.01594 11.0479 2.02131H5.14399C4.97933 2.02131 4.95716 2.08493 4.95716 2.22367V6.00261C4.95716 6.16204 4.95716 6.20497 5.16615 6.20497H17.8536C17.8536 6.20497 17.9636 6.18351 17.9858 6.11989H17.9319H17.9327ZM17.9327 12.8905C17.7459 12.8706 17.5575 12.8706 17.3707 12.8905H5.17803C5.01337 12.8905 4.95796 12.8905 4.95796 13.1036V16.7983C4.95796 16.9684 4.95796 17.0113 5.17803 17.0113H10.8073C11.0764 17.0313 11.3456 17.0129 11.6092 16.9585C12.4262 16.9017 13.2297 16.73 13.996 16.4472C14.2746 16.3537 14.5438 16.2318 14.7979 16.0854H14.8747C16.1943 15.4208 17.2662 14.3768 17.9422 13.0952C17.9422 13.0952 18.019 12.9342 17.9327 12.8921V12.8905ZM2.74853 18.9269V18.8633V16.3828V15.5419V13.04C2.74853 12.9013 2.74853 12.8806 2.57279 12.8806H0.186824C0.0546223 12.8806 0 12.8806 0 12.7104V10.6876H2.55062C2.69311 10.6876 2.74853 10.6876 2.74853 10.5067V8.50529C2.74853 8.37728 2.74853 8.34585 2.57279 8.34585H0.186824C0.0546223 8.34585 0 8.34585 0 8.17569V6.30232C0 6.18504 9.43692e-08 6.15361 0.175741 6.15361H2.53954C2.7042 6.15361 2.74853 6.15361 2.74853 5.95125V0.213093C2.74853 0.0429255 2.74853 0 2.9686 0H11.2142C11.8126 0.0229956 12.4072 0.0866166 12.9953 0.19163C14.2073 0.408554 15.3718 0.82784 16.4365 1.42649C17.1427 1.82891 17.7926 2.31489 18.3713 2.87445C18.8067 3.31213 19.1993 3.78584 19.5476 4.29021C19.8936 4.80147 20.1809 5.348 20.4065 5.91906C20.4343 6.06776 20.5815 6.16818 20.7351 6.14288H22.7031C22.9556 6.14288 22.9556 6.14288 22.9667 6.37744V8.12356C22.9667 8.29373 22.901 8.33666 22.7244 8.33666H21.2069C21.0533 8.33666 21.009 8.33666 21.0201 8.52829C21.0802 9.17676 21.0802 9.82754 21.0201 10.476C21.0201 10.6569 21.0201 10.6784 21.2298 10.6784H22.9659C23.0427 10.7742 22.9659 10.87 22.9659 10.9666C22.977 11.09 22.977 11.2149 22.9659 11.3383V12.6269C22.9659 12.8078 22.9113 12.8614 22.7458 12.8614H20.6678C20.5229 12.8346 20.382 12.9243 20.3488 13.0638C19.854 14.3094 19.0624 15.4262 18.0396 16.3215C17.6659 16.6473 17.2733 16.9539 16.8632 17.2367C16.4231 17.482 15.9948 17.7372 15.5436 17.9396C14.7132 18.3014 13.8424 18.5681 12.9486 18.7375C12.1 18.8847 11.2395 18.9514 10.3758 18.9399H2.74536V18.9292L2.74853 18.9269Z\"/></svg>",
			"title": "DAI",
			"apy": [
				{
					"period": 12,
					"apy": 15
				}
			]
		}
	]
	const amountArray = [100, 250, 500, 1000, 1500, 2000, 5000, 10000, 15000, 25000, 50000, 100000, 250000, 500000]

	const onHandleClick = (coin, index) => {
		setCoin(coin.title)
		setActive(index)
		if (coin.title === "DAI") {
			setPeriod(12)
			setApy(15)
		} else setApy(coin.apy.find(item => item.period === period).apy)
	}

	useEffect(() => {
		if (period === 12) {
			setAmountTotal(apy * amount / 100)
		} else setAmountTotal((apy * amount / 100) * 2)
	}, [coin, apy, period, amount])

	return (
		<Wrapper id="calculator">
			<CenterBlock width={1000}>
				<Title><h2>{t.title}</h2></Title>
				<p className="sub_description">{t.description}</p>
				<div className="calculator">
					<div className="currency_block">
						<div className="item">
							<div className="label">{t.label}</div>
							<div className="list coins_list">
								{
									coinsArray.map((item, index) => {
										return (
											<button
												onClick={() => onHandleClick(item, index)}
												className={`coin_button ${coin === item.title ? "active" : ""}`}
												key={index}>
												{item.icon && <img src={item.icon} alt={item.title}/>}
												{item.svg && <i dangerouslySetInnerHTML = {{ __html: `${item.svg}` }}/>}
												{item.title}
											</button>
										)
									})
								}
							</div>
						</div>
						<div className="item">
							<div className="label amount_list">
								<p>{t.amount}</p>
								<p className="label_description">{t.fixed}</p>
							</div>
							<Responsive width={600} mobile={
								<select value={amount} className="amount_select_mob" onChange={(e) => setAmount(+e.target.value.replace(/\s/g, ""))}>
									{
										amountArray.map((item, index) => {
											return (
												<option value={item} key={index}>{numberFormat(item)}</option>
											)
										})
									}
								</select>
							}>
								<div className="list">
									{
										amountArray.map((item, index) => {
											return (
												<button
													className={`${amount === item ? "active" : ""} select_button`}
													onClick={() => setAmount(item)}
													key={index}
												>
													{numberFormat(item)}
												</button>
											)
										})
									}
								</div>
							</Responsive>
						</div>
						<div className="item">
							<div className="label">
								<p>{t.lock}</p>
								<p className="label_description">{t.lock_description}</p>
							</div>
							<div className="list period_list">
								{
									coinsArray[active].apy.map((item, index) => {
										return (
											<button
												onClick={() => {
													setPeriod(item.period)
													setApy(item.apy)
												}}
												className={`${period === item.period ? "active" : ""} period_button`}
												key={index}
											>
												<span className="months">{item.period} {t.months}</span>
												<span className="apy">{item.apy}% <Responsive width={600}>{t.APY}</Responsive></span>
											</button>
										)
									})
								}
							</div>
						</div>
					</div>
					<NftFendCalculatorTotal
						amount={amount}
						amountTotal={amountTotal}
						apy={apy}
						period={period}
						coin={coin}
						t={t.total}
					/>
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
	.sub_description{
		text-align: center;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		max-width: 616px;
		width: 100%;
		margin: 20px auto 0 auto;
	}
	.calculator{
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.currency_block{
		background: #F9F9F9;
		border: 1px solid #DDDFE4;
		border-radius: 40px;
		padding: 40px;
		width: calc(100% - 390px);
		margin-right: 20px;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-right: 0;
		}
		@media only screen and (max-width: 600px) {
			padding: 40px 20px;
		}
	}
	.item{
		margin-top: 40px;
		&:first-child{
			margin-top: 0;
		}
	}
	.label{
		font-size: 18px;
		line-height: 100%;
		color: #80889C;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
		&.coins_list{
			justify-content: space-between;
			@media only screen and (max-width: 600px) {
				flex-wrap: nowrap;
				overflow-x: auto;
				margin: 20px -20px -20px -20px;
				padding: 0 20px 20px 20px;
				scroll-snap-type: x mandatory;
				scroll-padding: 20px;
			}
		}
		&.period_list{
			justify-content: space-between;
			@media only screen and (max-width: 600px) {
				flex-direction: column;
				justify-content: flex-start;
			}
		}
		&.amount_list{
			margin-bottom: -10px;
		}
	}
	.coin_button{
		width: calc(100% / 4 - 10px);
		height: 52px;
		@media only screen and (max-width: 600px) {
			width: 120px;
			margin-right: 10px;
			flex: 0 0 auto;
			scroll-snap-align: start;
			&:last-child{
				margin-right: 0;
			}
		}
		i{
			line-height: 0;
		}
		img, svg{
			margin-right: 10px;
		}
		&:nth-child(1) {
			&.active{
				transition: .3s ease-in-out;
				background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
			}
		}
		&:nth-child(2) {
			svg{
				fill: #1BA27A;
				transition: .3s ease-in-out;
			}
			&.active{
				background: #1BA27A;
				color: #F9F9F9;
				transition: .3s ease-in-out;
				svg{
					fill: #F9F9F9;
					transition: .3s ease-in-out;
				}
			}
		}
		&:nth-child(3) {
			svg{
				fill: #005FBB;
				transition: .3s ease-in-out;
			}
			&.active{
				background: #005FBB;
				color: #F9F9F9;
				transition: .3s ease-in-out;
				svg{
					fill: #F9F9F9;
					transition: .3s ease-in-out;
				}
			}
		}
		&:nth-child(4) {
			svg{
				fill: #F5AC37;
				transition: .3s ease-in-out;
			}
			&.active{
				background: #F5AC37;
				color: #F9F9F9;
				transition: .3s ease-in-out;
				svg{
					fill: #F9F9F9;
					transition: .3s ease-in-out;
				}
			}
		}
		&.active{
			border: none;
		}
	}
	button{
		border: 1.5px solid #EBEBEB;
		filter: drop-shadow(0px 0px 40px rgba(214, 214, 214, 0.1));
		border-radius: 100px;
		font-weight: 500;
		font-size: 16px;
		line-height: 28px;
		img{
			margin-right: 10px;
		}
	}
	.select_button{
		width: auto;
		height: 56px;
		padding: 14px 20px;
		margin-bottom: 10px;
		margin-right: 10px;
		&:hover{
			background: #F6F7F8;
		}
		&.active{
			background: #191B20;
			border: 1.5px solid #191B20;
			color: #F9F9F9;
		}
		&:last-child{
			margin-right: 0;
		}
	}
	.period_button{
		width: calc(50% - 10px);
		height: 56px;
		justify-content: space-between;
		padding: 14px 30px;
		@media only screen and (max-width: 600px) {
			padding: 14px 20px;
			width: 100%;
			margin-bottom: 10px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		&:hover{
			background: #F6F7F8;
		}
		&.active{
			background: #191B20;
			border: 1.5px solid #191B20;
			.months{
				color: #F9F9F9;
				transition: .3s ease-in-out;
			}
		}
		.months{
			transition: .3s ease-in-out;
		}
		.apy{
			color: #24BE74;
		}
	}
	.amount_select_mob{
		background: #191B20;
		border-radius: 100px;
		height: 56px;
		padding: 14px 15px;
		font-weight: 500;
		font-size: 16px;
		line-height: 28px;
		color: #F9F9F9;
		width: 100%;
		margin-top: 20px;
		text-align: center;
	}
	.label_description{
		font-size: 14px;
		line-height: 100%;
		text-align: right;
	}
`
