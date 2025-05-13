import styled from "styled-components";
import Image from "next/image";
import {useEffect, useState} from "react";
import {useSnapshot} from "valtio";
import {state} from "state";
import Responsive from "helpers/Responsive";
import {getProfileData} from "utils/profile";
import {splitWalletAddress} from "utils/nft";
import {stateWeb3} from "state/web3";

export default function ProfileForm() {
	const {wallet, walletType} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const [phone, setPhone] = useState("")
	
	useEffect(() => {
		if (wallet && snap.verificatedUser) makeRequest()
	}, [wallet, snap.verificatedUser])
	
	const makeRequest = () => {
		getProfileData(wallet).then(r => {
			setPhone(r.phone)
		})
	}
	
	return (
		<Wrapper>
			<Responsive width={1024}>
				<div className="profile_image">
					<Image src="/pic/profile/profile-icon.png" width={101} height={104} priority={true} alt="Profile information"/>
				</div>
			</Responsive>
			<h1>Profile information</h1>
			<div className="profile_list">
				<div className="profile_item">
					<div className="profile_label">{snap.verificatedUser ? "Phone" : "Verify your profile"}</div>
					{
						snap.verificatedUser ? (
							<div className="profile_value">{phone ? "+" : ""}{phone}</div>
						) : (
							<div className="profile_value">
								<button onClick={() => state.verificatedProfileModal = true} className="verificated_user_button">Start profile verification</button>
							</div>
						)
					}
				</div>
				<div className="profile_item">
					<div className="profile_label">Wallet address</div>
					<div className="profile_value">{splitWalletAddress(wallet, 6)}</div>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #F6F7F8;
	border-radius: 36px;
	padding: 50px 50px 50px 115px;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 1024px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 50px;
	}
	@media only screen and (max-width: 600px) {
		padding: 30px;
		margin-bottom: 30px;
	}
	.profile_image{
		position: absolute;
		bottom: 0;
		left: 0;
		line-height: 0;
	}
	h1{
		font-size: 30px;
		line-height: 130%;
		max-width: 159px;
		width: 100%;
		@media only screen and (max-width: 1024px) {
			max-width: 100%;
		}
	}
	.profile_list{
		display: flex;
		justify-content: space-between;
		margin-left: 40px;
		width: 100%;
		@media only screen and (max-width: 1024px) {
			margin-left: 0;
			margin-top: 20px;
		}
		@media only screen and (max-width: 768px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.profile_item{
		width: calc(50% - 10px);
		background: #F9F9F9;
		border-radius: 20px;
		padding: 20px;
		cursor: default;
		@media only screen and (max-width: 768px) {
			width: 100%;
			margin-bottom: 20px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.profile_label{
		font-size: 12px;
		line-height: 14px;
		color: #7B8199;
	}
	.profile_value{
		font-weight: 700;
		font-size: 24px;
		line-height: 100%;
		margin-top: 15px;
	}
	.verificated_user_button{
		background: #FFFB1F;
		border-radius: 64px;
		height: 54px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
	}
`