import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useEffect, useState} from "react";
import {state} from "state";
import ChoSwapModal from "components/Modals/ChoSwapModal";
import {useSnapshot} from "valtio";
import ChoSwapGasModal from "components/Modals/ChoSwapGasModal";
import WalletActionButton from "components/Buttons/WalletActionButton";
import Image from "next/image";
import numberFormat from "helpers/numberFormat";
import {filter} from "smart-array-filter";
import { useDebounce } from 'use-debounce';
import axios from "axios";
import {stateWeb3} from "state/web3";

export default function ChoSwap() {
	const {hexChainId} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const [coinModal, setCoinModal] = useState(false)
	const [gasModal, setGasModal] = useState(false)
	const [coin, setCoin] = useState(null)
	const [gweiValue, setGweiValue] = useState({title: "", value: ""})
	const [gasValue, setGasValue] = useState(0)
	const [value, setValue] = useState("")
	const [debounceValue] = useDebounce(value, 1000);
	const [error, setError] = useState(false)
	
	useEffect(() => {
		if (value.length === 0) setError(false)
		if (coin && value > coin.balanceUi) {
			setError(true)
		} else setError(false)
 	}, [value])
	
	useEffect(() => {
		if (debounceValue > 0 && debounceValue <= coin.balanceUi) {
			axios.get("/api/swap/swap-total", {params: {
					chainId: hexChainId,
					fromWallet: "0x8af1d58526aaedeee9bb47d0afd0cb3c066a4058",
					toWallet: "0x28ea054cb54228a82684fd452a3d1d801c15350e",
					fromCoinId: coin.id,
					toCoinId: "0x10xbba39fd2935d5769116ce38d46a71bde9cf03099",
					value,
					slippage: 1
			}})
				.then(r => console.log(r.data))
				.catch(e => console.log(e))
		}
	}, [debounceValue])
	
	useEffect(() => {
		setValue("")
	}, [coin])
	
	const renderChoBalance = () => {
		const choData = filter(snap.balanceArray, {
			limit: 1,
			keywords: 'name:Choise',
		})
		if (choData.length) {
			return (
				<>
					<p>${numberFormat(choData[0].balanceUi ? choData[0].balanceUi * choData[0].price : 0, "", ",", "2")}</p>
					<p>Balance: {numberFormat(choData[0].balanceUi ? choData[0].balanceUi : 0, "", ",", "4")}</p>
				</>
			)
		} else {
			return <><p>$0</p><p>Balance: 0</p></>
		}
	}
	
	return (
		<Wrapper>
			<ChoSwapModal
				value={coin}
				active={coinModal}
				closeModal={() => setCoinModal(false)}
				onClick={(e) => setCoin(e)}
			/>
			<ChoSwapGasModal
				gwei={gweiValue}
				active={gasModal}
				onClick={setGweiValue}
				closeModal={setGasModal}
			/>
			<CenterBlock>
				<div className="box">
					<Title><h2>get CHO token now</h2></Title>
					<p className="description">CHO token is available on many of the leading centralized and decentralized exchanges around the world. You can also swap CHO token right here.</p>
					<div className="swap_block">
						
						<div className="swap_item">
							<div className="label_heading">
								<div className="form_label">You send</div>
								{error && <div className="form_error_label">Insufficient ETH balance</div>}
							</div>
							<div className={`form_input_send ${error ? "error" : ""}`}>
								<div className="send_block">
									<input
										className="input_value"
										disabled={!coin}
										type="number"
										value={value}
										onChange={(e) => setValue(e.target.value)}
										placeholder="0"
										onWheel={e => e.currentTarget.blur()}
									/>
									<button className="select_coin_modal" onClick={() => setCoinModal(true)}>
										<p>{coin ? (
											<>
												<Image
													width={24}
													height={24}
													src={`https://defi.choise.com${coin.icon}`}
													alt={coin.name}
													className="send_icon"
												/>
												{coin.symbol}
											</>
										) : "Select Token"}</p>
										<img className="select_icon" src="/pic/cho/swap/swap-select.svg" alt="select icon"/>
									</button>
								</div>
								<div className="value_balance_block">
									<p>${coin ? numberFormat(coin.balanceUi * coin.price, "", ",", "2") : 0}</p>
									<div className="max_balance">
										Balance: <span>{numberFormat(coin ? coin.balanceUi : 0, "", ",", "4")}</span>
										{coin && coin.balanceUi ? (
											<button onClick={() => setValue(coin ? coin.balanceUi : 0)} className="max_button">Max</button>
										) : null}
									</div>
								</div>
							</div>
						</div>
						
						<div className="swap_item">
							<div className="form_label">You receive</div>
							<div className="form_input_receive">
								<div className="receive_block">
									<p>0</p>
									<p className="cho_icon_block"><img src="/pic/cho/swap/cho-icon.svg" alt="CHO"/>CHO</p>
								</div>
								{snap.balanceArray && <div className="value_balance_block">{renderChoBalance()}</div>}
							</div>
						</div>
						
						<div className="swap_item">
							<div className="total_block">
								<p className="total_information">{coin ? `${numberFormat(value, "", ",", "4")} ${coin.symbol} = 1649.49 CHO` : ""}</p>
								<button onClick={() => setGasModal(true)} className="gas_button">
									<img src="/pic/cho/swap/swap-gas.svg" alt="Gas"/>
									${gasValue}
								</button>
							</div>
							<WalletActionButton disabled={error || !value.length} defaultNetwork="ethereum" className="submit_button">
								Swap {coin?.symbol} → CHO
							</WalletActionButton>
						</div>
					</div>
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
	.box{
		background: #F9F9F9;
		border-radius: 40px;
		padding: 60px;
	}
	.title{
		text-align: center;
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		text-align: center;
		max-width: 734px;
		width: 100%;
		margin: 30px auto 0 auto;
	}
	.swap_block{
		background: #191B20;
		border-radius: 41px;
		padding: 40px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-top: 60px;
	}
	.swap_item{
		width: calc(100% / 3 - 20px);
	}
	.form_label{
		font-size: 14px;
		line-height: 17px;
		color: #80889C;
	}
	.form_input_send{
		border: 1px solid #454A58;
		border-radius: 14px;
		padding: 10px 20px;
		height: 91px;
		margin-top: 10px;
		&.error{
			border: 1px solid #FF6464;
		}
	}
	.form_input_receive{
		border-radius: 14px;
		background: #272A32;
		height: 91px;
		padding: 10px 20px;
		margin-top: 10px;
	}
	.total_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.total_information{
		font-size: 14px;
		line-height: 17px;
		color: #F9F9F9;
	}
	.gas_button{
		width: auto;
		background: #272A32;
		border-radius: 6px;
		padding: 4px 5px;
		font-size: 14px;
		line-height: 17px;
		color: #7F7F83;
		&:hover{
			color: #F9F9F9;
			img{
				opacity: 1;
				transition: all .3s ease-in-out;
			}
		}
		img{
			opacity: .4;
			margin-right: 3px;
			transition: all .3s ease-in-out;
		}
	}
	.send_block, .receive_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.receive_block{
		p{
			color: #F9F9F9;
			cursor: default;
		}
	}
	.input_value{
		background: transparent;
		font-size: 16px;
		line-height: 28px;
		color: #F9F9F9;
		width: calc(100% - 140px);
		padding-right: 20px;
		&:disabled{
			color: #7E889E;
		}
	}
	.select_coin_modal{
		background: #272A32;
		border-radius: 12px;
		max-width: 140px;
		width: auto;
		height: 38px;
		font-size: 16px;
		line-height: 19px;
		color: #F9F9F9;
		padding: 15px 10px;
		display: inline-flex;
		p{
			display: flex;
			align-items: center;
			img{
				margin-right: 8px;
			}
		}
		.select_icon{
			margin-left: 8px;
		}
	}
	.submit_button{
		background: #FFFB1F;
		border-radius: 40px;
		padding: 8px 20px;
		height: 52px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		margin-top: 22px;
	}
	.label_heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.form_error_label{
		font-size: 14px;
		line-height: 17px;
		color: #FF6464;
	}
	.value_balance_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #7E889E;
		margin-top: 10px;
		span{
			color: #F9F9F9;
			margin-left: 5px;
		}
	}
	.max_balance{
		display: flex;
		align-items: center;
	}
	.max_button{
		width: auto;
		background: #14344E;
		border-radius: 5px;
		font-size: 12px;
		line-height: 14px;
		color: #2992FA;
		margin-left: 5px;
		padding: 2px 5px;
	}
	.cho_icon_block{
		display: inline-flex;
		align-items: center;
		text-align: right;
		height: 38px;
		img{
			margin-right: 8px;
		}
	}
`