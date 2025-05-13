import styled from "styled-components";
import numberFormat from "helpers/numberFormat";
import moment from "moment/moment";
import {state} from "state";
import {useSnapshot} from "valtio";
import {useEffect, useState} from "react";
import {fendApprove, fendMint, getFendTokensList, writeFendData} from "utils/fend-nft";
import {getUserBalance} from "utils/metamask";
import NftFendSuccessMint from "layouts/NftFend/NftFendSuccessMint";
import NftFendVerifyModal from "layouts/NftFend/NftFendVerifyModal";
import NftFendLoadingModal from "layouts/NftFend/NftFendLoadingModal";
import NftFendErrorModal from "layouts/NftFend/NftFendErrorModal";
import {filter} from "smart-array-filter";
import WalletActionButton from "components/Buttons/WalletActionButton";
import {stateWeb3} from "state/web3";
export default function NftFendCalculatorTotal({amountTotal, amount, apy, period, coin, t}) {
	const {wallet, network, walletInstall, hexChainId} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const [firstMint, setFirstMint] = useState(false)
	const [agree, setAgree] = useState(false)
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [transaction, setTransaction] = useState("")
	const [mintToken, setMintToken] = useState("")
	const [visible, setVisible] = useState(false)
	const [loadingStep, setLoadingStep] = useState(1)
	const [error, setError] = useState(null)

	const onHandleClick = async () => {
		setVisible(false)
		try {
			const transaction = await fendApprove(coin, amount)
			setLoading(true)
			setLoadingStep(1)
			const approveStatus = await stateWeb3.checkTransaction(transaction)
			if (approveStatus.status) {
				setLoadingStep(2)
				const depositTransaction = await fendMint(coin, amount, period)
				const depositStatus = await stateWeb3.checkTransaction(depositTransaction)
				if (depositStatus.status) {
					const tokens = await getFendTokensList(coin, wallet)
					setMintToken(tokens[tokens.length - 1])
					setLoading(false)
					setFirstMint(true)
					setSuccess(true)
					setTransaction(depositStatus.hash)
					await writeFendData({
						utm: snap.utm,
						transaction: depositStatus.hash,
						wallet: wallet,
						amountTotal,
						coin,
						period
					})
					getUserBalance({
						wallet: wallet,
						chainId: hexChainId,
						full: false
					}).then(r => state.balanceArray = r)
				}
			} else {
				setMintToken("")
				setSuccess(false)
				setLoading(false)
				setTransaction(null)
				setLoadingStep(1)
			}
		} catch (error) {
			console.log(error)
			setMintToken("")
			setSuccess(false)
			setLoading(false)
			setTransaction(null)
			setVisible(false)
			setLoadingStep(1)
			setError(error.data ? error.data.message : t.error)
		}
	}

	useEffect(() => {
		setSuccess(false)
		setTransaction(null)
		setMintToken("")
		setVisible(false)
		setLoadingStep(1)
		if (!wallet) {
			setFirstMint(false)
			setAgree(false)
		}
	}, [wallet, amount, apy, period])

	const checkAmountValue = () => {
		const coinBalanceData = filter(snap.balanceArray, {
			limit: 1,
			keywords: `symbol:${coin}`
		})
		if (coinBalanceData.length) {
			return coinBalanceData[0].balanceUi >= amount;
		} else {
			return false
		}
	}

	return (
		<Wrapper>
			<NftFendErrorModal t={t.error_modal} error={error} onClick={() => setError(null)}/>
			<NftFendVerifyModal t={t.verify_modal} coin={coin} apy={apy} period={period} amount={amount} active={visible} onCallBack={setVisible} onSubmit={onHandleClick}/>
			<NftFendLoadingModal
				t={t.loading_modal}
				loading={loading}
				loadingStep={loadingStep}
			/>
			<NftFendSuccessMint
				t={t.success_mint}
				mintToken={mintToken}
				success={success}
				coin={coin}
				apy={apy}
				period={period}
				amountTotal={amountTotal}
				transaction={transaction}
				onCallBack={() => {
					setSuccess(false)
					setTransaction("")
				}}
			/>
			<div className="top">
				<div className="total_label">{t.label}</div>
				<div className="total_value">
					{amountTotal ? <span>{numberFormat(amountTotal, " ", ",", "2")} {coin}</span> : <span>{t.loading}</span>}
				</div>
				<div className="total_apy">{apy}% {t.APY}</div>
				<div className="total_label">{t.period}</div>
				<div className="total_months">{period} {t.months}</div>
				<p className="total_expires">{t.expires} {moment(new Date()).add(period, "months").format("DD.MM.YYYY")}</p>
			</div>
			<div className="bottom">
				{
					!firstMint && wallet && coin !== "CHO" && (
						<div className="terms">
							<span className={agree ? "active" : ""} onClick={() => setAgree(!agree)}>
								<img src="/pic/fend/agree-check.svg" alt="Terms of Use"/>
							</span>
							{t.agree} <a href="/pdf/nft-depositing-fend.pdf" target="_blank" rel="noreferrer">{t.terms}</a>
						</div>
					)
				}
				{
					wallet ? (
						coin !== "CHO" ? (
							<>
								<WalletActionButton
									defaultNetwork="binance"
									onClick={() => setVisible(true)}
									disabled={!checkAmountValue() || !agree}
									className="earn_button"
								>
									{t.earn} {numberFormat(amountTotal, " ", ",", "2")} {coin}
								</WalletActionButton>
								{/*<button*/}
								{/*	onClick={() => setVisible(true)}*/}
								{/*	disabled={!checkAmountValue() || !agree}*/}
								{/*	className="earn_button"*/}
								{/*>Earn {numberFormat(amountTotal, " ", ",", "2")} {coin}</button>*/}
								{!checkAmountValue() && (
									<p className="no_funds">{t.no_funds}</p>
								)}
							</>
						) : (
							<div className="coming_soon">{t.soon}</div>
						)
					) : (
						walletInstall ? (
							<button onClick={() => state.walletConnectModal = true} className="connect_metamask">
								{t.connect_wallet}
							</button>
							) : (
							<a className="install_wallet" rel="noreferrer nofollow" href="https://metamask.app.link/dapp/choise.com/">{t.connect_wallet}</a>
						)
					)
				}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background: radial-gradient(165.35% 143.07% at -69.57% 192.98%, #5CEE9C 0%, #FFFB1F 100%), radial-gradient(97.18% 116.74% at 78.59% 128.92%, #5CEE9C 0%, #FFFB1F 100%);
	border-radius: 40px;
	width: 390px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 60px 40px;
	text-align: center;
	@media only screen and (max-width: 820px) {
		width: 100%;
		margin-top: 20px;
	}
	@media only screen and (max-width: 600px) {
		padding: 40px 20px;
	}
	.total_label{
		font-size: 18px;
		line-height: 100%;
		color: #80889C;
		display: flex;
		align-items: center;
		width: 100%;
		text-align: center;
		justify-content: center;
	}
	.connect_metamask, .install_wallet{
		background: #F9F9F9;
		border-radius: 40px;
		height: 68px;
		border: none;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
	.bottom, .top{
		width: 100%;
	}
	.bottom{
		margin-top: 40px;
	}
	.total_value{
		font-weight: 700;
		font-size: 40px;
		line-height: 100%;
		margin-top: 20px;
	}
	.total_apy{
		background: #191B20;
		border-radius: 100px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 5px 20px;
		height: 40px;
		font-weight: 700;
		font-size: 30px;
		line-height: 100%;
		color: #FFFC20;
		margin-top: 10px;
		margin-bottom: 40px;
	}
	.total_months{
		margin-top: 20px;
		font-weight: 700;
		font-size: 40px;
		line-height: 100%;
	}
	.total_expires{
		font-size: 18px;
		line-height: 100%;
		color: #80889C;
		margin-top: 5px;
	}
	.how_to_connect{
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		margin-top: 20px;
		img{
			margin-right: 10px;
		}
	}
	.earn_button{
		background: #F9F9F9;
		border-radius: 40px;
		height: 68px;
		border: none;
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
		&:disabled{
			opacity: 0.5;
			cursor: default;
			&:hover{
				background: #F9F9F9;
				color: #191B20;
			}
		}
	}
	.terms{
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		font-size: 16px;
		line-height: 150%;
		height: 62px;
		border: 1.5px solid #000000;
		border-radius: 31px;
		padding: 0 30px;
		span{
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 0;
			border: 1.5px solid #000000;
			border-radius: 6px;
			width: 20px;
			height: 20px;
			margin-right: 10px;
			cursor: pointer;
			transition: .3s ease-in-out;
			img{
				opacity: 0;
				transition: .3s ease-in-out;
			}
			&.active{
				background: #000000;
				transition: .3s ease-in-out;
				img{
					opacity: 1;
					transition: .3s ease-in-out;
				}
			}
		}
		a{
			margin-left: 3px;
			text-decoration: underline;
		}
	}
	.coming_soon{
		border-radius: 40px;
		height: 68px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		background: #191B20;
		color: #F9F9F9;
		cursor: default;
	}
	.no_funds{
		margin-top: 20px;
		font-size: 14px;
	}
`
