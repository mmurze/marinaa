import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";
import ProfileInterestAccountItem from "layouts/Profile/ProfileInterestAccountItem";
import {useEffect, useState} from "react";
import axios from "axios";
import NftLoadingNotFound from "components/NftLoadingNotFound";
import CustomSelectValues from "components/CustomSelectValues";
import CheckWalletNetwork from "components/CheckWalletNetwork";

export default function ProfileInterestAccountsTokens({children}) {
	const snap = useSnapshot(state);
	const [coin, setCoin] = useState("All")
	const [array, setArray] = useState(null)
	useEffect(() => {
		setArray(null)
		if (coin !== "All") {
			const renderWalletCoins = () => {
				switch (coin) {
					case "USDT": return snap.ownerFendUSDT.join(", ")
					case "USDC": return snap.ownerFendUSDC.join(", ")
					case "DAI": return snap.ownerFendDAI.join(", ")
				}
			}
			axios.get("/api/fend/list", {
				params: {coin, tokens: renderWalletCoins()}
			}).then(r => setArray(r.data.data))
		} else {
			axios.get("/api/fend/all", {
				params: {
					usdt: snap.ownerFendUSDT.join(", "),
					usdc: snap.ownerFendUSDC.join(", "),
					dai: snap.ownerFendDAI.join(", ")
				}
			}).then(r => setArray(r.data.data))
		}
	}, [coin, snap.ownerFendUSDT, snap.ownerFendUSDC, snap.ownerFendDAI])
	
	const coinsArray = [
		{
			"title": "All",
			"value": "All"
		},
		{
			"title": "USDT",
			"value": "USDT"
		},
		{
			"title": "USDC",
			"value": "USDC"
		},
		{
			"title": "DAI",
			"value": "DAI"
		}
	]
	return (
		<Wrapper>
			<div className="top_filters">
				{children}
				<CustomSelectValues
					width={150}
					label="Currency"
					array={coinsArray}
					onClick={setCoin}
					value={coin}
				/>
			</div>
			<CheckWalletNetwork defaultNetwork="binance">
				{
					array ? (
						array.length > 0 ? (
							<div className="list">
								{
									array.map((item, index) => {
										return <ProfileInterestAccountItem item={item} key={index}/>
									})
								}
							</div>
						) : <NftLoadingNotFound loading={false}/>
					) : <NftLoadingNotFound loading={true}/>
				}
			</CheckWalletNetwork>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 40px;
	.top_filters{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		position: relative;
		z-index: 20;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.list{
		margin-top: 80px;
		display: flex;
		flex-wrap: wrap;
		margin-right: -30px;
		margin-bottom: -30px;
		@media only screen and (max-width: 600px) {
			margin-right: 0;
		}
	}
	.interest_account_item{
		width: calc(100% / 4 - 30px);
		margin-right: 30px;
		margin-bottom: 30px;
		@media only screen and (max-width: 1024px) {
			width: calc(100% / 3 - 30px);
		}
		@media only screen and (max-width: 820px) {
			width: calc(100% / 2 - 30px);
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-right: 0;
		}
	}
	.custom_select_values{
		@media only screen and (max-width: 820px) {
			margin-top: 30px;
			max-width: 100%;
		}
	}
`