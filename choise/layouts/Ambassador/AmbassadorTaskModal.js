import styled from "styled-components";
import Modal from "components/Modal";
import {useEffect, useRef, useState} from "react";
import Title from "components/Title";
import LoadingAnimation from "components/LoadingAnimation";
import Image from "next/image";
import Link from "next/link";
import {useSnapshot} from "valtio";
import {state} from "state";
import {getUserPoints, writeTaskUser} from "utils/ambassador";
import {stateWeb3} from "state/web3";

export default function AmbassadorTaskModal({visible, onCallBack, item}) {
	const {wallet} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const inputRef = useRef(null)
	const [agreeCheck, setAgreeCheck] = useState(false)
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	
	useEffect(() => {
		if (localStorage.getItem("ambassador-task-agree") === "true") {
			setAgreeCheck(true)
			state.ambassadorTasksAgree = true
		}
	}, [])
	
	const onHandleSubmit = async (e) => {
		e?.preventDefault()
		setLoading(true)
		writeTaskUser({
			taskId: item.id,
			userMessage: inputRef.current.value,
			profileUserWallet: wallet
		})
			.then(r => {
				if (r.status) setSuccess(true)
				getUserPoints(snap.profileUserId)
				setLoading(false)
			})
			.catch(error => {
				console.log(error)
				setLoading(false)
			})
	}
	const agreeSubmit = async () => {
		state.ambassadorTasksAgree = true
		localStorage.setItem("ambassador-task-agree", "true")
		if (item.welcome) await onHandleSubmit()
	}
	
	const AgreeBlock = () => {
		return (
			<>
				<div className="modal_image">
					<Image src="/pic/ambassador/agree-check-modal.png" width={116} height={138} priority={true} alt="One step left"/>
				</div>
				<Title><h4>One step left</h4></Title>
				<p className="modal_content">To proceed, accept our Ambassador Program Terms </p>
				<div className="modal_agree">
					<span className={agreeCheck ? "active" : ""} onClick={() => setAgreeCheck(!agreeCheck)}>
						<img src="/pic/ambassador/agree-check.svg" alt="I have read and agree"/>
					</span>
					<p className="agree_content">I have read and agree with <a href="/pdf/ambassador-program-terms.pdf" target="_blank" rel="noreferrer">Ambassador Program Terms</a></p>
				</div>
				<button onClick={agreeSubmit} className="submit_button" disabled={!agreeCheck}>{agreeCheck ? "I have read and agree" : "Confirm"}</button>
			</>
		)
	}
	const InformationBlock = () => {
		return (
			<>
				<div className="modal_content_title">{item.title}</div>
				<Title className="modal_content_subtitle"><h4>Task result</h4></Title>
				<p className="modal_content_description">Enter text result of the task or post a link to result in the field below</p>
				<form onSubmit={onHandleSubmit}>
					<textarea
						ref={inputRef}
						placeholder="Enter your result"
						required={true}
					/>
					<button className="submit_button">Confirm</button>
				</form>
			</>
		)
	}
	const SuccessBlock = () => {
		return (
			<>
				<div className="modal_image">
					<Image src="/pic/ambassador/success-reward-modal.png" width={77} height={82} priority={true} alt="Your request has been sent"/>
				</div>
				<Title className="success_modal_title">
					<h4>Your task result №{item.id} has been sent</h4>
				</Title>
				<p className="modal_success_content">Check your result status at <Link href="/profile?tab=ambassadors">Profile</Link></p>
				<button className="submit_button success_button" onClick={() => {
					onCallBack(false)
					setTimeout(() => {
						setSuccess(false)
					}, 300)
				}}>Take the next task</button>
				<p className="success_information">Choise.com reserves the right to refuse acceptance of substandard task results without giving reasons</p>
			</>
		)
	}
	const renderBlocks = () => {
		if (loading) return <LoadingAnimation/>
		if (!snap.ambassadorTasksAgree) return <AgreeBlock/>
		if (success) return <SuccessBlock/>
		return <InformationBlock/>
	}
	return (
		<Modal background="#ffffff" close={!loading} width={450} active={visible} onCallBack={() => {
			setSuccess(false)
			setLoading(false)
			onCallBack(false)
		}}>
			<Wrapper>
				{renderBlocks()}
			</Wrapper>
		</Modal>
	)
}

const Wrapper = styled.div`
	text-align: center;
	.loading_animation{
		margin: 120px 0;
	}
	.title{
		margin-top: 30px;
		&.modal_content_subtitle{
			text-align: left;
		}
		h3{
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