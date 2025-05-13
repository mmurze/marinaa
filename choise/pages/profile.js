import Seo from "helpers/Seo";
import ProfileMain from "layouts/Profile/ProfileMain";
import {useSnapshot} from "valtio";
import {state} from "state";
import NftClaimModal from "components/Nft/NftClaimModal";
import {useEffect, useState} from "react";
import ProfileTabs from "layouts/Profile/ProfileTabs";
import ProfileTokensList from "layouts/Profile/ProfileTokensList";
import ProfileAmbassadorsList from "layouts/Profile/ProfileAmbassadorsList";
import {getFendTokensList} from "utils/fend-nft";
import {getOwnerTokens} from "utils/nft";
import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import LoadingProfile from "components/Nft/LoadingProfile";
import {getCharismBetaTokensList} from "utils/charism-beta-nft";
import {getUserPoints} from "utils/ambassador";
import {useRouter} from "next/router";
import {allowFetchWallet} from "utils/metamask";
import Header from "components/Header";
import Footer from "components/Footer";
import {stateWeb3} from "state/web3";

export default function Profile(){
	const {wallet, walletType, network} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const Router = useRouter()
	const [loading, setLoading] = useState(true)
	const [tab, setTab] = useState("nft")
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 500)
	}, [])
	
	useEffect(() => {
		if (Router.query.tab === "ambassadors") setTab("ambassadors")
	}, [Router])
	
	useEffect(() => {
		if (snap.profileUserId) {
			getUserPoints(snap.profileUserId)
			const timer = setInterval(() => {
				getUserPoints(snap.profileUserId)
			}, 60000);
			return () => clearInterval(timer);
		}
	}, [snap.profileUserId])
	
	useEffect(() => {
		if (wallet && walletType !== "Binance Smart Wallet") {
			if (allowFetchWallet({network: "binance", userNetwork: network})) {
				getOwnerTokens(wallet).then(r => state.ownerLastCallRoundNft = r)
				getFendTokensList("USDT", wallet).then(r => state.ownerFendUSDT = r)
				if (process.env.NODE_ENV === "production") {
					getFendTokensList("USDC", wallet).then(r => state.ownerFendUSDC = r)
					getFendTokensList("DAI", wallet).then(r => state.ownerFendDAI = r)
					getCharismBetaTokensList(wallet).then(r => state.ownerCharismBetaNft = r)
				}
			} else {
				state.ownerLastCallRoundNft = []
				state.ownerFendUSDT = []
				state.ownerFendUSDC = []
				state.ownerFendDAI = []
				state.ownerCharismBetaNft = []
			}
		}
	}, [wallet, network])
	
	return (
		<>
			<Seo
				title="Profile information"
				description="The first ever CeFi token sale embedded into a DeFi NFT collection."
				image="/pic/og/nft.jpg"
			/>
			<Header/>
			<main>
				<NftClaimModal/>
				{
					loading ? (
						<LoadingProfile/>
					) : (
						wallet ? (
							<>
								<ProfileMain/>
								<ProfileTabs onClick={setTab} tab={tab}/>
								{tab === "nft" ? <ProfileTokensList/> : <ProfileAmbassadorsList/>}
							</>
						) : (
							<Wrapper>
								<CenterBlock>
									<h1>One more step</h1>
									<p className="description">Connect any wallet to see the NFT in your Profile</p>
									<div className="connect_block">
										<button className="connect_button" onClick={() => state.walletConnectModal = true}>Connect wallet</button>
									</div>
								</CenterBlock>
							</Wrapper>
						)
					)
				}
			</main>
			<Footer/>
		</>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	h1{
		font-size: 30px;
		line-height: 36px;
		text-align: center;
	}
	.description{
		text-align: center;
		font-size: 14px;
		line-height: 140%;
		color: #7B8199;
		margin-top: 20px;
	}
	.connect_block{
		display: flex;
		justify-content: center;
		margin-top: 60px;
	}
	.connect_button{
		width: auto;
		padding: 8px 50px;
		background: #FFFB1F;
		border-radius: 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		height: 56px;
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
`