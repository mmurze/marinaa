import styled from "styled-components";
import ProfileLastRoundTokens from "layouts/Profile/ProfileLastRoundTokens";
import {useState} from "react";
import CenterBlock from "helpers/CenterBlock";
import numberFormat from "helpers/numberFormat";
import {useSnapshot} from "valtio";
import {state} from "state";
import ProfileInterestAccountsTokens from "layouts/Profile/ProfileInterestAccountsTokens";
import ProfileCharismBetaTokens from "layouts/Profile/ProfileCharismBetaTokens";

export default function ProfileTokensList() {
	const snap = useSnapshot(state);
	const [tab, setTab] = useState("interest-accounts")
	const array = [
		{
			"title": "Interest accounts",
			"value": "interest-accounts",
			"total": snap.ownerFendUSDT.length + snap.ownerFendUSDC.length + snap.ownerFendDAI.length
		},
		{
			"title": "Charism Beta Test NFT",
			"value": "beta-test",
			"disabled": !snap.ownerCharismBetaNft.length,
			"total": snap.ownerCharismBetaNft.length
		},
		{
			"title": "Last call round",
			"value": "last-call-round",
			"total": snap.ownerLastCallRoundNft.length
		}
	]
	
	const renderLists = () => {
		switch (tab) {
			case "interest-accounts": return (
				<ProfileInterestAccountsTokens>
					{renderTabList()}
				</ProfileInterestAccountsTokens>
			)
			case "beta-test": return (
				<ProfileCharismBetaTokens>
					{renderTabList()}
				</ProfileCharismBetaTokens>
			)
			case "last-call-round": return (
				<ProfileLastRoundTokens>
					{renderTabList()}
				</ProfileLastRoundTokens>
			)
		}
	}
	
	const renderTabList = () => {
		return (
			<div className="tab_list">
				{
					array.map((item, index) => {
						return (
							<button
								disabled={item.disabled}
								onClick={() => setTab(item.value)}
								className={tab === item.value ? "active" : ""}
								key={index}
							>
								{item.title} <span>{numberFormat(item.total)}</span>
							</button>
						)
					})
				}
			</div>
		)
	}
	return (
		<Wrapper>
			<CenterBlock width={1140}>
				<h2 className="tab_heading">NFT tokens</h2>
				<p className="tab_description">You’ve just officially entered the first-ever MetaFi universe</p>
				{renderLists()}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 80px;
	@media only screen and (max-width: 600px) {
		margin-top: 40px;
	}
	.tab_heading{
		font-size: 30px;
		line-height: 36px;
	}
	.tab_description{
		font-size: 16px;
		line-height: 120%;
		color: #7B8199;
		margin-top: 10px;
	}
	.tab_list{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -10px;
		button{
			width: auto;
			margin-right: 10px;
			margin-bottom: 10px;
			border: 1px solid #DDDFE4;
			border-radius: 100px;
			font-weight: 500;
			font-size: 16px;
			line-height: 150%;
			padding: 10px 25px;
			&:hover{
				background: #F6F7F8;
			}
			&:disabled{
				opacity: .5;
				&:hover{
					background: transparent;
				}
			}
			span{
				color: #A2A8B7;
				margin-left: 10px;
			}
			&.active{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
`