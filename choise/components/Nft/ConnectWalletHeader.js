import styled from "styled-components";
import {state} from "state";
import Link from "next/link";
import {checkAdmin} from "utils/admin-panel";
import DisconnectWallet from "components/Wallet/DisconnectWallet";
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";

export default function ConnectWalletHeader() {
	const {wallet, walletType} = useSnapshot(stateWeb3)
	const renderWalletType = () => {
		switch (walletType) {
			case "MetaMask": return <img src="/pic/nft/connect-wallet-icons/metamask.svg" alt="Metamask"/>
			case "WalletConnect": return <img src="/pic/nft/connect-wallet-icons/wallet-connect.svg" alt="WalletConnect"/>
			case "Binance Smart Wallet": return <img src="/pic/nft/connect-wallet-icons/binance-smart-wallet.svg" alt="Binance Wallet"/>
			case "Coinbase Wallet": return <img src="/pic/nft/connect-wallet-icons/coinbase-wallet.svg" alt="Coinbase Wallet"/>
		}
	}
	return (
		<Wrapper className="connect_metamask">
			{
				wallet ? (
					<div id="gtm_profile" className="metamask_profile">
						<Link href="/profile" className="profile_link">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.99996 0.833344C8.22207 0.836721 6.48352 1.35705 4.99609 2.33094C3.50866 3.30483 2.33653 4.69026 1.62249 6.31846C0.908451 7.94667 0.683308 9.74739 0.974488 11.5013C1.26567 13.2552 2.0606 14.8865 3.26246 16.1967V16.1967C4.12085 17.1271 5.16266 17.8697 6.32224 18.3776C7.48182 18.8855 8.73403 19.1477 9.99996 19.1477C11.2659 19.1477 12.5181 18.8855 13.6777 18.3776C14.8373 17.8697 15.8791 17.1271 16.7375 16.1967V16.1967C17.9393 14.8865 18.7343 13.2552 19.0254 11.5013C19.3166 9.74739 19.0915 7.94667 18.3774 6.31846C17.6634 4.69026 16.4913 3.30483 15.0038 2.33094C13.5164 1.35705 11.7779 0.836721 9.99996 0.833344V0.833344ZM9.99996 17.3333C8.10106 17.3305 6.2773 16.5911 4.91246 15.2708C5.32684 14.2621 6.03174 13.3993 6.93761 12.7921C7.84348 12.1849 8.90941 11.8607 9.99996 11.8607C11.0905 11.8607 12.1564 12.1849 13.0623 12.7921C13.9682 13.3993 14.6731 14.2621 15.0875 15.2708C13.7226 16.5911 11.8989 17.3305 9.99996 17.3333ZM8.16663 8.16668C8.16663 7.80408 8.27415 7.44962 8.4756 7.14813C8.67705 6.84664 8.96338 6.61166 9.29838 6.4729C9.63338 6.33414 10.002 6.29783 10.3576 6.36857C10.7133 6.43931 11.0399 6.61392 11.2963 6.87031C11.5527 7.12671 11.7273 7.45338 11.7981 7.80901C11.8688 8.16464 11.8325 8.53326 11.6937 8.86826C11.555 9.20326 11.32 9.48959 11.0185 9.69104C10.717 9.89249 10.3626 10 9.99996 10C9.51373 10 9.04742 9.80685 8.7036 9.46304C8.35979 9.11922 8.16663 8.65291 8.16663 8.16668ZM16.3341 13.6667C15.5151 12.2658 14.2546 11.1761 12.75 10.5683C13.2167 10.0391 13.5208 9.38645 13.6258 8.68866C13.7308 7.99087 13.6322 7.27761 13.3419 6.63447C13.0516 5.99132 12.5818 5.44561 11.989 5.06281C11.3963 4.68002 10.7056 4.4764 9.99996 4.4764C9.29432 4.4764 8.60367 4.68002 8.01088 5.06281C7.41809 5.44561 6.94835 5.99132 6.65803 6.63447C6.3677 7.27761 6.26912 7.99087 6.37412 8.68866C6.47911 9.38645 6.78323 10.0391 7.24996 10.5683C5.74535 11.1761 4.48481 12.2658 3.6658 13.6667C3.01308 12.5549 2.66821 11.2893 2.66663 10C2.66663 8.05509 3.43925 6.18983 4.81451 4.81456C6.18978 3.43929 8.05504 2.66668 9.99996 2.66668C11.9449 2.66668 13.8101 3.43929 15.1854 4.81456C16.5607 6.18983 17.3333 8.05509 17.3333 10C17.3317 11.2893 16.9869 12.5549 16.3341 13.6667V13.6667Z"/>
							</svg>
						</Link>
							<div className="wallet_block_drop">
								{renderWalletType()}
								<div className={`wallet_drop_list ${checkAdmin(wallet) ? "full_list" : ""}`}>
									{checkAdmin(wallet) ? (
										<Link href="/admin-panel" className="admin_panel_link">
											Admin panel
										</Link>
									) : null}
									<DisconnectWallet/>
								</div>
							</div>
					</div>
				) : (
					<button
						className="connect_wallet_button"
						onClick={() => state.walletConnectModal = true}
					>
						<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.8333 3.83333H14V3C14 2.33696 13.7366 1.70107 13.2677 1.23223C12.7989 0.763392 12.163 0.5 11.5 0.5H3.16663C2.50358 0.5 1.8677 0.763392 1.39886 1.23223C0.930018 1.70107 0.666626 2.33696 0.666626 3V3V13C0.666626 13.663 0.930018 14.2989 1.39886 14.7678C1.8677 15.2366 2.50358 15.5 3.16663 15.5H14.8333C15.4963 15.5 16.1322 15.2366 16.6011 14.7678C17.0699 14.2989 17.3333 13.663 17.3333 13V6.33333C17.3333 5.67029 17.0699 5.03441 16.6011 4.56557C16.1322 4.09673 15.4963 3.83333 14.8333 3.83333ZM3.16663 2.16667H11.5C11.721 2.16667 11.9329 2.25446 12.0892 2.41074C12.2455 2.56702 12.3333 2.77899 12.3333 3V3.83333H3.16663C2.94561 3.83333 2.73365 3.74554 2.57737 3.58926C2.42109 3.43298 2.33329 3.22101 2.33329 3C2.33329 2.77899 2.42109 2.56702 2.57737 2.41074C2.73365 2.25446 2.94561 2.16667 3.16663 2.16667V2.16667ZM15.6666 10.5H14.8333C14.6123 10.5 14.4003 10.4122 14.244 10.2559C14.0878 10.0996 14 9.88768 14 9.66667C14 9.44565 14.0878 9.23369 14.244 9.07741C14.4003 8.92113 14.6123 8.83333 14.8333 8.83333H15.6666V10.5ZM15.6666 7.16667H14.8333C14.1703 7.16667 13.5344 7.43006 13.0655 7.8989C12.5967 8.36774 12.3333 9.00363 12.3333 9.66667C12.3333 10.3297 12.5967 10.9656 13.0655 11.4344C13.5344 11.9033 14.1703 12.1667 14.8333 12.1667H15.6666V13C15.6666 13.221 15.5788 13.433 15.4225 13.5893C15.2663 13.7455 15.0543 13.8333 14.8333 13.8333H3.16663C2.94561 13.8333 2.73365 13.7455 2.57737 13.5893C2.42109 13.433 2.33329 13.221 2.33329 13V5.35833C2.60102 5.45251 2.88282 5.50042 3.16663 5.5H14.8333C15.0543 5.5 15.2663 5.5878 15.4225 5.74408C15.5788 5.90036 15.6666 6.11232 15.6666 6.33333V7.16667Z"/>
						</svg>
					</button>
				)
			}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.metamask_profile{
		margin-left: 15px;
		position: relative;
		display: flex;
		align-items: center;
		@media only screen and (max-width: 600px) {
			margin-right: 15px;
		}
		a{
			font-size: 16px;
			line-height: 24px;
			letter-spacing: -0.03em;
			display: flex;
			align-items: center;
		}
		.wallet_drop_list{
			position: absolute;
			bottom: -80px;
			right: 0;
			background: #F9F9F9;
			box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
			border-radius: 16px;
			visibility: hidden;
			opacity: 0;
			height: 70px;
			width: 180px;
			transition: .3s ease-in-out;
			padding: 15px 25px;
			display: flex;
			align-items: center;
			&.full_list{
				bottom: -90px;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				height: auto;
			}
		}
		.admin_panel_link{
			margin-bottom: 10px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-weight: 500;
			font-size: 16px;
			line-height: 19px;
			width: 100%;
			padding: 0 3px;
			&:hover{
				color: #28D180;
			}
		}
		button{
			font-weight: 500;
			font-size: 16px;
			line-height: 19px;
			border: none;
			width: 100%;
			&:hover{
				color: #28D180;
			}
		}
		.wallet_block_drop{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			background: #F6F7F8;
			cursor: pointer;
			padding: 8px;
			&:hover{
				.wallet_drop_list{
					visibility: visible;
					opacity: 1;
					transition: .3s ease-in-out;
				}
			}
		}
	}
	.profile_link{
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		line-height: 0;
		background: #F9F9F9;
		border-radius: 50%;
		margin-right: 10px;
		&:hover{
			background: #191B20;
			color: #F9F9F9;
			svg{
				fill: #F9F9F9;
				transition: .3s ease-in-out;
			}
		}
		svg{
			fill: #191B20;
			transition: .3s ease-in-out;
		}
	}
	.connect_wallet_button, .install_wallet{
		width: 40px;
		height: 40px;
		background: #F9F9F9;
		border-radius: 50%;
		line-height: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-left: 25px;
		@media only screen and (max-width: 600px) {
			margin-right: 15px;
			margin-left: 15px;
		}
		&:hover{
			background: #191B20;
			svg{
				fill: #F9F9F9;
				transition: .3s ease-in-out;
			}
		}
		svg{
			fill: #191B20;
			transition: .3s ease-in-out;
		}
	}
`