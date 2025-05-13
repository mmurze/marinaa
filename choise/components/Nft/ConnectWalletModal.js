import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useEffect} from "react";
import Link from "next/link";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {getUserBalance} from "utils/metamask";
import {ethers} from "ethers";
import {stateWeb3} from "state/web3";

export default function ConnectWalletModal({t}) {
	const {wallet, network, walletInstall, hexChainId} = useSnapshot(stateWeb3)
	
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				state.walletConnectModal = false
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);
	
	const snap = useSnapshot(state);

	
	useEffect(() => {
		if (wallet && network) refreshWalletData()
	}, [wallet, network])
	
	const refreshWalletData = () => {
		getUserBalance({
			wallet: wallet,
			chainId: hexChainId,
			full: false
		}).then(r => state.balanceArray = r)
	}
	
	useEffect(() => {
		if (wallet && network) {
			const timer = setInterval(() => {
				refreshWalletData()
			}, 180000);
			return () => clearInterval(timer);
		}
	}, [wallet, network])
	
	const getUserData = async ({provider, walletType}) => {
		localStorage.setItem("wallet_connected", walletType)
		await stateWeb3.initWallet({provider, walletType})
		state.walletConnectModal = false
	}
	
	useEffect(() => {
		if (localStorage.getItem("wallet_connected")) {
			onHandleClick(localStorage.getItem("wallet_connected"))
		}
	}, [])
	
	const onHandleClick = async (wallet) => {
		switch (wallet) {
			case "WalletConnect": {
				try {
					const providerSettings = new WalletConnectProvider({
						rpc: {
							56: "https://bsc-dataseed.binance.org",
							97: "https://data-testnet.binance.org"
						},
						pollingInterval: 15000
					})
					await providerSettings.enable()
					const provider = new ethers.BrowserProvider(providerSettings)
					await getUserData({ provider, walletType: wallet });
					console.log('WalletConnect connected!');
				} catch (error) {
					console.log(error);
				}
				break
			}
			case "Binance Smart Wallet": {
				if (window.BinanceChain) {
					const provider = new ethers.BrowserProvider(window.BinanceChain);
					await getUserData({ provider, walletType: wallet });
					console.log('Binance Smart Wallet connected!');
				} else {
					console.error('Binance Smart Wallet not detected');
				}
				break
			}
			case "Coinbase Wallet": {
				if (window.ethereum) {
					try {
						const provider = new ethers.BrowserProvider(window.web3.currentProvider, 'any');
						provider.pollingInterval = 10000;
						provider.chainId = 56;
						await provider.send('eth_requestAccounts', []);
						await getUserData({ provider, walletType: wallet });
					} catch (error) {
						console.log(error)
						console.error('Metamask connection failed:', error);
					}
				} else {
					console.error('Metamask not detected');
				}
				break
			}
			case "MetaMask": {
				if (window.ethereum) {
					try {
						const provider = new ethers.BrowserProvider(window.ethereum);
						await window.ethereum.request({ method: 'eth_requestAccounts' });
						await getUserData({ provider, walletType: wallet });
					} catch (error) {
						console.log(error)
						console.error('Metamask connection failed:', error);
					}
				} else {
					console.error('Metamask not detected');
				}
				break
			}
			default: state.walletConnectModal = false
		}
	}
	
	return (
		<Wrapper className={snap.walletConnectModal ? "visible" : ""}>
			<div className="modal">
				<button onClick={() => state.walletConnectModal = false} className="close_button">
					<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.98119 5.2L10.2242 0.957001C10.6147 0.566536 11.2477 0.566535 11.6382 0.957C12.0287 1.34747 12.0287 1.98053 11.6382 2.371L7.39519 6.614L11.6382 10.857C12.0287 11.2475 12.0287 11.8805 11.6382 12.271C11.2477 12.6615 10.6147 12.6615 10.2242 12.271L5.98119 8.028L1.73819 12.271C1.34772 12.6615 0.714653 12.6615 0.324188 12.271C-0.0662779 11.8805 -0.0662777 11.2475 0.324188 10.857L4.56719 6.614L0.324188 2.371C-0.066277 1.98054 -0.0662779 1.34747 0.324188 0.957C0.714653 0.566535 1.34772 0.566535 1.73819 0.957L5.98119 5.2Z"/>
					</svg>
				</button>
				<h2>{t.connect}</h2>
				<p className="description">{t.description}</p>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="list_item" key={index}>
									{
										item.title === "MetaMask" ? (
											<>
												{
													walletInstall ? (
														<button className="button_item" onClick={() => onHandleClick(item.title)}>
															<span className="icon"><img src={item.icon} alt={item.title}/>{item.title}</span>
															{item.popular && <span className="popular">{t.title_span}</span>}
														</button>
													) : (
														<a
															target="_blank"
															className="button_item"
															rel="noreferrer nofollow"
															href={`https://metamask.app.link/dapp/choise.com?${snap.utm}`}
														>
															<span className="icon"><img src={item.icon} alt={item.title}/>{item.title}</span>
															{item.popular && <span className="popular">{t.title_span}</span>}
														</a>
													)
												}
												<p className="how_to_install">{t.description_link}<Link href="/news/tutorials/how-to-install-metamask">{t.link}</Link></p>
											</>
										) : (
											<button className="button_item" onClick={() => onHandleClick(item.title)}>
												<span className="icon"><img src={item.icon} alt={item.title}/>{item.title}</span>
												{item.popular && <span className="popular">{t.title_span}</span>}
											</button>
										)
									}
								</div>
							)
						})
					}
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 99999;
	display: none;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.6);
	&.visible{
		display: flex;
	}
	.modal{
		position: relative;
		z-index: 10;
		background: #FFFFFF;
		border-radius: 40px;
		padding: 50px;
		max-width: 530px;
		width: calc(100% - 20px);
	}
	h2{
		font-size: 30px;
		line-height: 110%;
	}
	.description{
		margin-top: 5px;
		font-size: 14px;
		line-height: 130%;
		color: #80889C;
	}
	.list{
		margin-top: 50px;
		.list_item{
			margin-bottom: 10px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		.button_item{
			height: 52px;
			background: #F6F7F8;
			border-radius: 100px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 15px 10px 25px;
			font-weight: 500;
			font-size: 16px;
			line-height: 130%;
		}
	}
	.icon{
		display: flex;
		align-items: center;
		img{
			margin-right: 10px;
		}
	}
	.popular{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		border-radius: 40px;
		height: 24px;
		padding: 4px 10px;
		font-weight: 500;
		font-size: 12px;
		line-height: 130%;
	}
	.close_button{
		position: absolute;
		width: 30px;
		height: 30px;
		background: #EEEFF2;
		border-radius: 50%;
		top: 30px;
		right: 30px;
		&:hover{
			background: #191B20;
			svg{
				fill: #F8F8FA;
			}
		}
		svg{
			fill: #A2A8B7;
		}
	}
	.how_to_install{
		margin-top: 10px;
		font-size: 14px;
		line-height: 130%;
		a{
			color: #0285FD;
			text-decoration: underline;
		}
	}
`