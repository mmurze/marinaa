import styled from "styled-components";
import {useEffect, useState} from "react";
import numberFormat from "helpers/numberFormat";
import CustomCheckBox from "components/Forms/CustomCheckBox";
import {useSnapshot} from "valtio";
import {state} from "state";
import ConnectWalletHeader from "components/Nft/ConnectWalletHeader";
import Image from "next/image";
import {getMintTotal, getTotalMintTokens, mintTokens, writeMintTotal} from "utils/nft";
import Modal from "components/Modal";
import ModalNftSuccess from "components/Nft/ModalNftSuccess";
import ModalNftError from "components/Nft/ModalNftError";
import MintBalance from "components/Nft/MintBalance";
import {getBalance} from "utils/metamask";
import MintButtons from "components/Nft/MintButtons";
import {stateWeb3} from "state/web3";

export default function MintStart() {
	const {wallet} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const [value, setValue] = useState(1)
	const [total, setTotal] = useState(0)
	const [agree, setAgree] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(null)
	const [transaction, setTransaction] = useState(null)
	const [disabled, setDisabled] = useState(false)
	
	useEffect(() => {
		getData()
	}, [])
	
	useEffect(() => {
		const timer = setInterval( async () => {
			await getData()
			if (wallet && snap.mint && total !== process.env.TOTAL_MINT) await writeMintTotal(await getTotalMintTokens())
		}, 7000);
		return () => clearInterval(timer);
	})
	
	const getData = async () => {
		setTotal(parseInt(await getMintTotal()))
	}
	
	const onHandleClick = async () => {
		setDisabled(true)
		try {
			const transaction = await mintTokens(wallet, value)
			if (transaction) state.loading = true
			const status = await transaction.wait(5)
			if (status && status.status === 1) {
				setTransaction(transaction.hash)
				setSuccess(true)
				await writeMintTotal(await getTotalMintTokens())
			} else {
				setError(transaction.hash)
				setSuccess(false)
			}
			state.loading = false
			setDisabled(false)
			await getBalance(wallet)
			await getData()
		} catch (error) {
			state.loading = false
			setSuccess(false)
			setError(error.data ? error.data.message : error.message)
			setDisabled(false)
		}
	}
	
	return (
		<Wrapper>
			<Modal active={success} onCallBack={setSuccess}>
				<ModalNftSuccess amount={2} transaction={transaction} onClick={setSuccess}/>
			</Modal>
			<Modal active={error} onCallBack={setError}>
				<ModalNftError transaction={transaction} onClick={setError} error={error}/>
			</Modal>
			<div className="top">
				<div className="mint_heading">
					<h3>CHO NFTs left</h3>
					<div className="minted">{numberFormat(process.env.TOTAL_MINT - total)}</div>
					<div className="total_mint">
						<span>of {numberFormat(process.env.TOTAL_MINT)}</span>
					</div>
					<div className="description">
						<p>Binance Smart Chain</p>
						<p>Minting cost = {process.env.MINT_PRICE} BNB</p>
					</div>
					<div className="background">
						<Image src="/pic/nft/nft-sale-mint.png" width={377} height={257} alt="" priority={true}/>
					</div>
				</div>
				{
					snap.wallet ? (
						<>
							<MintButtons value={value} total={total} onClick={setValue}/>
							<div className="custom_check_block">
								<CustomCheckBox checked={agree} onClick={setAgree}>
									I have read and agree the <a rel="noreferrer nofollow" href="/pdf/terms-of-cho-token-sale.pdf" target="_blank">Terms of Use</a>
								</CustomCheckBox>
							</div>
						</>
					) : (
						<div className="how_to_mint">
							<p>Use the Binance Smart Chain Mainnet</p>
							<a rel="noreferrer nofollow" href="https://www.youtube.com/watch?v=vLZblFUcf00&t=1s" target="_blank">How to Mint</a>
						</div>
					)
				}
			</div>
			<div className="bottom">
				{
					snap.wallet ? (
						<button
							onClick={onHandleClick}
							disabled={snap.balance < process.env.MINT_PRICE || !agree || disabled}
							className="mint_button">{disabled ? "Checking your Wallet" : "Mint"}</button>
					) : <ConnectWalletHeader/>
				}
				{snap.balance ? <MintBalance amount={value}/> : null}
			</div>
			{snap.balance && snap.balance < process.env.MINT_PRICE ? (
				<p className="error">Insufficient funds for minting CHO NFT. Please top up your balance.</p>
			) : null}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	min-height: 540px;
	width: 100%;
	border-radius: 500px 500px 24px 24px;
	padding: 40px;
	position: relative;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	@media only screen and (max-width: 600px) {
		padding: 40px 30px;
	}
	.balance{
		margin-top: 10px;
	}
	.error{
		position: absolute;
		bottom: -46px;
		background: #FFEBEE;
		left: -2px;
		width: calc(100% + 4px);
		padding: 15px 80px;
		text-align: center;
		font-size: 16px;
		line-height: 100%;
		color: #FF5252;
		border-radius: 0 0 8px 8px;
		@media only screen and (max-width: 600px) {
			padding: 15px 20px;
		}
		&:before{
			content: url("/pic/error-rib.svg");
			position: absolute;
			top: -13px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.how_to_mint{
		margin-top: 24px;
		letter-spacing: -0.03em;
		a{
			display: block;
			margin-top: 15px;
			color: #0285FD;
			text-decoration: underline;
			font-size: 16px;
			line-height: 120%;
		}
		p{
			font-weight: 700;
			font-size: 20px;
			line-height: 120%;
			text-align: center;
			letter-spacing: -0.03em;
			max-width: 209px;
			width: 100%;
			margin: 0 auto;
		}
	}
	.top{
		width: 100%;
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}
	.background{
		position: absolute;
		top: 0;
		left: auto;
		right: auto;
		width: 100%;
	}
	.mint_heading{
		width: 100%;
		height: 257px;
		position: relative;
		padding-top: 40px;
	}
	.bottom{
		width: 100%;
	}
	h3{
		font-size: 18px;
		line-height: 120%;
		font-weight: normal;
		position: relative;
		z-index: 10;
	}
	.minted{
		position: relative;
		width: 100%;
		font-weight: 700;
		font-size: 90px;
		line-height: 100%;
		letter-spacing: -0.03em;
		z-index: 10;
	}
	.total_mint{
		display: flex;
		justify-content: center;
		width: 100%;
		position: relative;
		margin-top: -20px;
		z-index: 10;
		span{
			margin-left: 80px;
			transform: rotate(-5deg);
			height: 33px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 18px;
			line-height: 150%;
			letter-spacing: -0.015em;
			background: #FFFB1F;
			border-radius: 500px;
			padding: 0 14px;
			width: 100px;
		}
	}
	.description{
		margin-top: 30px;
		font-size: 16px;
		line-height: 120%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			margin-top: 50px;
		}
		p{
			margin-bottom: 5px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.custom_check_block{
		margin-top: 25px;
		display: flex;
		justify-content: center;
	}
	.connect_metamask{
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 35px;
	}
	.connect_wallet_button{
		max-width: 310px;
		width: 100%;
		.front{
			background: #F9F9F9;
		}
		.back{
			background: #191B20;
		}
	}
	.mint_button{
		background: #FFFB1F;
		border-radius: 40px;
		height: 56px;
		padding: 8px 24px;
		font-size: 14px;
		line-height: 24px;
		margin-top: 20px;
		&:disabled{
			cursor: default;
			opacity: .7;
		}
	}
`