import styled from "styled-components";
import Modal from "components/Modal";
import Title from "components/Title";
import Image from "next/image";
import Link from "next/link";
import {useSnapshot} from "valtio";
import {state} from "state";
import {getUserPoints, writeTaskUserWelcome} from "utils/ambassador";
import {useEffect} from "react";
import {stateWeb3} from "state/web3";

export default function AmbassadorTaskModalWelcome({visible, onCallBack, item}) {
	const {wallet} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	
	useEffect(() => {
		if (visible) onHandleSubmit()
	}, [visible])
	
	const onHandleSubmit = () => {
		writeTaskUserWelcome({
			taskId: item.id,
			userMessage: "Welcome task complete",
			profileUserWallet: wallet
		})
			.then(() => {
				getUserPoints(snap.profileUserId)
			})
			.catch(error => {
				console.log(error)
			})
	}
	
	return (
		<Modal background="#ffffff" close={true} width={450} active={visible} onCallBack={() => {
			onCallBack(false)
		}}>
			<Wrapper>
				<div className="modal_image">
					<Image src="/pic/ambassador/success-reward-modal.png" width={77} height={82} priority={true} alt="Your request has been sent"/>
				</div>
				<Title className="success_modal_title">
					<h4>Welcome task completed. You have successfully claimed the reward.</h4>
				</Title>
				<p className="modal_success_content">Check your result status at <Link href="/profile?tab=ambassadors">Profile</Link></p>
				<button className="submit_button success_button" onClick={() => {
					onCallBack(false)
				}}>Take the next task</button>
				<p className="success_information">Choise.com reserves the right to refuse acceptance of substandard task results without giving reasons</p>
			</Wrapper>
		</Modal>
	)
}

const Wrapper = styled.div`
	text-align: center;
	.title{
		margin-top: 30px;
		&.modal_content_subtitle{
			text-align: left;
		}
		h4{
			margin-top: 0;
			min-height: auto;
			font-size: 21px;
			line-height: 120%;
		}
		&.modal_success{
			margin-top: 20px;
		}
	}
	.modal_content{
		margin-top: 14px;
		font-size: 14px;
		line-height: 140%;
		color: #80889C;
	}
	.modal_agree{
		margin-top: 60px;
		background: #F6F7F8;
		border-radius: 16px;
		padding: 25px 20px;
		position: relative;
		display: flex;
		span{
			width: 15px;
			height: 15px;
			border: 1.2px solid #2992FA;
			border-radius: 4px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			line-height: 0;
			position: relative;
			top: 3px;
			cursor: pointer;
			transition: .3s ease-in-out;
			img{
				opacity: 0;
				visibility: hidden;
				transition: .3s ease-in-out;
			}
			&.active{
				background: #2992FA;
				transition: .3s ease-in-out;
				img{
					opacity: 1;
					visibility: visible;
					transition: .3s ease-in-out;
				}
			}
		}
		.agree_content{
			width: calc(100% - 15px);
			text-align: left;
			font-size: 14px;
			line-height: 140%;
			color: #80889C;
			padding-left: 15px;
			a{
				color: #0285FD;
			}
		}
	}
	.submit_button{
		margin-top: 20px;
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
		border-radius: 40px;
		height: 52px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		transition: .3s ease-in-out;
		&.success_button{
			margin-top: 100px;
		}
		&:disabled{
			opacity: 0.3;
			transition: .3s ease-in-out;
		}
	}
	.modal_image{
		line-height: 0;
	}
	.modal_content_title{
		text-align: left;
		font-weight: 700;
		font-size: 14px;
		line-height: 120%;
		color: #C6CAD3;
		margin-top: 10px;
		padding-right: 30px;
	}
	.modal_content_description{
		margin-top: 10px;
		text-align: left;
		font-size: 14px;
		line-height: 130%;
		color: #80889C;
	}
	form{
		margin-top: 30px;
		width: 100%;
		textarea{
			background: #F9F9F9;
			border: 1px solid #C6CAD3;
			border-radius: 12px;
			padding: 15px;
			font-size: 16px;
			line-height: 140%;
			resize: none;
			height: 100px;
		}
	}
	.success_information{
		font-size: 14px;
		line-height: 130%;
		color: #80889C;
		margin-top: 20px;
	}
	.modal_success_content{
		margin-top: 30px;
		font-size: 18px;
		line-height: 130%;
		color: #80889C;
		a{
			color: #0285FD;
		}
	}
	.success_modal_title{
		padding: 0 60px;
	}
`