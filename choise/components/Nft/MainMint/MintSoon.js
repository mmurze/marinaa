import styled from "styled-components";
import {state} from "state";
import Link from "next/link";
import ConnectWalletHeader from "components/Nft/ConnectWalletHeader";
import {useSnapshot} from "valtio";
import Image from "next/image";

export default function MintSoon() {
	const snap = useSnapshot(state);
	return (
		<Wrapper>
			<div className="top">
				<h3>Total supply</h3>
				<h2>1 000 CHO NFTs</h2>
				<ul>
					<li>Binance Smart Chain</li>
					<li>Minting cost = 0.3-0.5 BNB</li>
				</ul>
				<div className="background">
					<Image src="/pic/nft/nft-sale-init.png" width={377} height={257} alt="" priority={true}/>
				</div>
			</div>
			<div className="bottom">
				<div className="mint_description"><span>Mint Starts</span></div>
				{
					snap.wallet ? (
						<div className="link">
							<Link href="/profile">Profile</Link>
						</div>
					) : <ConnectWalletHeader/>
				}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	min-height: 540px;
	width: 100%;
	background: #F9F9F9;
	border-radius: 500px 500px 24px 24px;
	padding: 40px;
	position: relative;
	z-index: 10;
	.mint_description{
		display: flex;
		justify-content: flex-end;
		position: relative;
		span{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #5CEE9C;
			border-radius: 500px;
			font-size: 14px;
			line-height: 24px;
			padding: 5px 15px;
			position: absolute;
			transform: rotate(5deg);
			bottom: -30px;
			right: 20px;
			@media only screen and (max-width: 600px) {
				right: 0;
			}
		}
	}
	.background{
		position: absolute;
		top: 0;
		left: auto;
		right: auto;
		width: 100%;
	}
	.link a{
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFFB1F 91.92%);
		border-radius: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 56px;
		font-size: 14px;
		line-height: 24px;
	}
	.top{
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		height: 257px;
		padding-top: 40px;
		position: relative;
		h3{
			font-size: 18px;
			line-height: 120%;
			position: relative;
			z-index: 10;
			font-weight: normal;
		}
		h2{
			max-width: 205px;
			width: 100%;
			font-size: 42px;
			line-height: 100%;
			margin-top: 17px;
			position: relative;
			z-index: 10;
		}
		ul{
			margin-top: 23px;
			position: relative;
			z-index: 10;
		}
		li{
			font-size: 16px;
			line-height: 120%;
			margin-bottom: 5px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.timer{
		margin-top: 40px;
		padding: 0 30px;
		@media only screen and (max-width: 600px) {
			padding: 0;
		}
	}
	.connect_metamask, .link{
		margin-top: 50px;
	}
`
