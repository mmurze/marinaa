import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useEffect, useState} from "react";
import {claimToken, renderNftImage, renderTransactionLink} from "utils/nft";
import Image from "next/image";
import NftTraits from "components/Nft/NftTraits";
import axios from "axios";
import ClaimLoading from "components/Nft/ClaimLoading";
import {stateWeb3} from "state/web3";

export default function NftClaimModal() {
	const {wallet} = useSnapshot(stateWeb3)
	const [transaction, setTransaction] = useState("")
	const [status, setStatus] = useState(null)
	const [visible, setVisible] = useState(false)
	const [animation, setAnimation] = useState(false)
	const [loading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null)
	const snap = useSnapshot(state);
	
	useEffect(() => {
		if (snap.claimModalData) {
			setVisible(true)
			setTimeout(() => {
				setAnimation(true)
			}, 300)
		}
	}, [snap.claimModalData])
	
	const sendEmailMessage = async (transaction) => {
		if (process.env.NODE_ENV === "development") {
			setStatus("success")
		} else {
			axios.post("/api/nft/claim-message", {
				transaction,
				tokenId: snap.claimModalData.tokenId,
				bonus: snap.claimModalData.traits.bonus ? snap.claimModalData.traits.bonus : 0,
				lockUp: snap.claimModalData.traits.lockup ? snap.claimModalData.traits.lockup : "",
				linearRelease: snap.claimModalData.traits.vesting ? snap.claimModalData.traits.vesting : "",
				phone: snap.phone,
				tokenType: snap.claimModalData.tokenType
			}).then(r => {
				if (r.data.status) setStatus("success")
			})
		}
	}
	
	const onHandleClick = async () => {
		setStatus(null)
		setTransaction("")
		setErrorMessage(null)
		try {
			const transaction = await claimToken(wallet, snap.claimModalData?.tokenId)
			if (transaction) setLoading(true)
			const check = await stateWeb3.checkTransaction(transaction)
			if (check.status) {
				setTransaction(transaction)
				await sendEmailMessage(transaction)
			} else {
				setTransaction(transaction)
				await setStatus("error")
			}
			state.refreshNftList = true
			setLoading(false)
		} catch (error) {
			setStatus("error")
			setErrorMessage(error.data ? error.data.message : error.message)
		}
	}
	
	const closeModal = () => {
		setAnimation(false)
		setTimeout(() => {
			setVisible(false)
			state.claimModalData = false
			setStatus(null)
		}, 300)
	}
	
	const renderModal = () => {
		switch (status) {
			case "error": return (
				<div className="modal">
					<h3>Token #{snap.claimModalData.tokenId} - {snap.claimModalData.traits.token_category.toLowerCase()}</h3>
					<div className="information">
						<div className="image">
							<Image src="/pic/nft/claim-error-small.png" priority={true} width={132} height={140} alt="Success"/>
						</div>
						<div className="title error">Something went wrong</div>
						<p>{errorMessage ? errorMessage : renderTransactionLink(transaction)}</p>
						<span>try again in a few minutes</span>
					</div>
					<div className="buttons">
						<button onClick={closeModal} className="cancel">Cancel</button>
						<button disabled={loading} className="submit" onClick={onHandleClick}>Try again</button>
					</div>
				</div>
			)
			case "success": return  (
				<div className="modal">
					<h3>Token #{snap.claimModalData.tokenId} - {snap.claimModalData.traits.token_category.toLowerCase()}</h3>
					<div className="information">
						<div className="title">Success</div>
						<div className="image">
							<Image src="/pic/nft/claim-success-small.png" priority={true} width={109} height={122} alt="Success"/>
						</div>
						<span>Your token has been claimed to</span>
						<p>{renderTransactionLink(transaction)}</p>
					</div>
					<p className="success_description">In the next 72h, your allocation will be deposited into your Crypterium account.</p>
					<button onClick={closeModal} className="success_button">Done</button>
				</div>
			)
			default: return (
				<div className="modal">
					<ClaimLoading loading={loading}/>
					<h3>Token #{snap.claimModalData.tokenId} - {snap.claimModalData.traits.token_category.toLowerCase()}</h3>
					<div className="image">
						<Image src={renderNftImage(snap.claimModalData.tokenType)} width={600} height={576.18} alt={`${snap.claimModalData.traits.token_category} ${snap.claimModalData.pieces}`}/>
					</div>
					<NftTraits item={snap.claimModalData}/>
					<div className="buttons">
						<button disabled={loading} onClick={closeModal} className="cancel">Cancel</button>
						<button disabled={loading} className="submit" onClick={onHandleClick}>Claim</button>
					</div>
				</div>
			)
		}
	}
	
	return (
		visible && snap.claimModalData ? (
			<Wrapper className={animation ? "active" : ""}>
				{renderModal()}
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9999;
	background: rgba(0, 0, 0, 0.8);
	opacity: 0;
	visibility: hidden;
	transition: all .3s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	&.active{
		opacity: 1;
		visibility: visible;
		transition: all .3s ease-in-out;
	}
	.modal{
		max-width: 420px;
		width: calc(100% - 40px);
		padding: 40px 60px;
		border-radius: 40px;
		background: #F9F9F9;
		position: relative;
		max-height: 80vh;
		overflow-y: auto;
		@media only screen and (max-width: 600px) {
			padding: 20px;
		}
	}
	h3{
		font-size: 24px;
		line-height: 120%;
		text-align: center;
	}
	.image{
		margin-top: 20px;
		display: flex;
		justify-content: center;
	}
	.buttons{
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		button{
			width: calc(100% / 2 - 10px);
			height: 56px;
			border-radius: 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			&:disabled{
				opacity: .4;
				cursor: default;
			}
			&.cancel{
				border: 1px solid #191B20;
			}
			&.submit{
				background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
			}
		}
	}
	.success_button{
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
		border-radius: 40px;
		height: 56px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		margin-top: 20px;
	}
	.success_description{
		font-size: 12px;
		line-height: 140%;
		color: #7B8199;
		text-align: center;
		margin-top: 35px;
	}
	.information{
		text-align: center;
		margin-top: 20px;
		.title{
			font-weight: 700;
			font-size: 24px;
			line-height: 120%;
			&.error{
				margin-top: 10px;
			}
		}
		.image{
			width: 100%;
		}
		span{
			font-size: 16px;
			line-height: 140%;
			color: #7B8199;
			display: block;
			margin-top: 10px;
		}
		p{
			font-weight: 700;
			font-size: 16px;
			line-height: 140%;
			margin-top: 5px;
		}
	}
`