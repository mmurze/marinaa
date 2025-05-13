import styled from "styled-components";
import Modal from "components/Modal";
import {useSnapshot} from "valtio";
import {state} from "state";
import Title from "components/Title";
import {useEffect, useState} from "react";
import {isValidPhone} from "phone-validation"
import LoadingAnimation from "components/LoadingAnimation";
import {check2Fa, loginChoiseUser} from "utils/profile";
import Image from "next/image";
import DisconnectWallet from "components/Wallet/DisconnectWallet";
import {stateWeb3} from "state/web3";

export default function VerificatedProfile({t}) {
	const {wallet} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const [phone, setPhone] = useState("")
	const [password, setPassword] = useState("")
	const [code, setCode] = useState("")
	const [step, setStep] = useState(1)
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null)
	const [sessionId, setSessionId] = useState("")

	const onHandleSubmit = async (e) => {
		e.preventDefault()
		if (wallet) {
			setLoading(true)
			const check = await check2Fa({
				phone: +phone, wallet: wallet, password, sessionId, code
			})
			if (check.status) {
				setSuccess(true)
				state.verificatedUser = true
			} else {
				setStep(1)
				setErrorMessage(check.message)
			}
			setLoading(false)
		}
	}
	const checkUser = async () => {
		if (wallet) {
			setLoading(true)
			const check = await loginChoiseUser({phone: +phone, password, wallet: wallet})
			if (check.status) {
				if (check.activated2FA) {
					setCode("")
					setStep(2)
					setSessionId(check.sessionId)
				} else {
					setSuccess(true)
					state.verificatedUser = true
				}
			} else setErrorMessage(check.message)
			setLoading(false)
		}
	}

	useEffect(() => {
		setErrorMessage(null)
	}, [phone, password])

	const initModal = () => {
		state.verificatedProfileModal = false
		setPhone("")
		setPassword("")
		setCode("")
	}

	return (
		<Modal
			background="#ffffff"
			width={450}
			active={snap.verificatedProfileModal}
			close={true}
			padding={50}
			onCallBack={initModal}
		>
			<Wrapper>
				{
					loading ? (
						<div className="loading_block">
							<LoadingAnimation/>
						</div>
					) : (
						success ? (
							<>
								<div className="success_image">
									<Image src="/pic/success-modal.png" width={458.5} height={295.5} priority={true} alt="You have successfully passed verification!"/>
								</div>
								<Title className="success_title"><h6>{t.title_success}</h6></Title>
								<p className="success_description">{t.description_success}</p>
								<button onClick={initModal} className="success_button">{t.title_button}</button>
							</>
						) : (
							<>
								<Title><h6>{t.title}</h6></Title>
								<p className="description">{t.description}</p>
								<form onSubmit={onHandleSubmit}>
									{
										step === 1 ? (
											<>
												<div className="item">
													<p className="label">{t.label_1}<sup>*</sup></p>
													<div className={`phone_block ${phone.length ? "active" : ""}`}>
														<p>+</p>
														<input className="input_element" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter choise.com app phone number"/>
													</div>
												</div>
												<div className="item">
													<p className="label">{t.label_2}<sup>*</sup></p>
													<input className="input_element" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter choise.com app password"/>
												</div>
												{errorMessage && (
													<p className="error_message">
														<img src="/pic/error-message-icon.svg" alt="Error message"/>
														{errorMessage}
													</p>
												)}
											</>
										) : (
											<div className="item">
												<p className="code_label">{t.label_3}<sup>*</sup></p>
												<input className="code_sms" value={code} onChange={(e) => setCode(e.target.value)} required={true}/>
											</div>
										)
									}
									{
										step === 1 ? (
											<button className="submit_button" disabled={!isValidPhone(phone) || !password.length} type="button" onClick={checkUser}>{t.submit_button_1}</button>
										) : (
											<>
												<button className="submit_button" disabled={!code.length}>{t.submit_button_2}</button>
												<button onClick={() => setStep(1)} type="button" className="back_button">{t.back_button}</button>
											</>
										)
									}
								</form>
								<p className="description sub_description">{t.sub_description_1}<a href="https://app.crypterium.com/" target="_blank" rel="noreferrer">{t.link_a}</a>{t.sub_description_2}</p>
								<DisconnectWallet/>
							</>
						)
					)
				}
			</Wrapper>
		</Modal>
	)
}

const Wrapper = styled.div`
	.description{
		font-size: 14px;
		line-height: 130%;
		color: #80889C;
		margin-top: 5px;
		&.sub_description{
			margin-top: 15px;
			font-size: 14px;
			line-height: 17px;
			text-align: center;
		}
		a{
			color: #0285FD;
			text-decoration: underline;
		}
	}
	form{
		width: 100%;
		margin-top: 20px;
		.input_element{
			height: 52px;
			font-size: 16px;
			line-height: 28px;
			border: 1px solid #DDDFE4;
			border-radius: 100px;
			padding: 12px 30px;
		}
	}
	sup{
		color: #FF6464;
		margin-left: 3px;
	}
	.item{
		margin-bottom: 10px;
		&:last-child{
			margin-bottom: 0;
		}
	}
	.label{
		font-size: 12px;
		line-height: 28px;
		color: #656D81;
		margin-left: 30px;
	}
	.phone_block{
		position: relative;
		p{
			display: none;
		}
		&.active{
			.input_element{
				padding: 12px 30px 12px 40px;
			}
			p{
				position: absolute;
				left: 30px;
				top: 0;
				height: 100%;
				display: flex;
				align-items: center;
			}
		}
	}
	.back_button{
		margin-top: 15px;
		font-weight: 700;
		font-size: 14px;
		line-height: 17px;
		color: #191B20;
	}
	.submit_button{
		padding: 8px 24px;
		background: #FFFB1F;
		border-radius: 40px;
		height: 52px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #191B20;
		margin-top: 50px;
		&:hover{
			background: #0285FD;
			color: #F9F9F9;
		}
		&:disabled{
			background: #FFFEB4;
			color: #75765B;
			&:hover{
				background: #FFFEB4;
				color: #75765B;
			}
		}
	}
	.disconnect_wallet{
		margin-top: 50px;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		border: 1px solid #656D81;
		border-radius: 40px;
		height: 52px;
		color: #191B20;
		&:hover{
			background: #191B20;
			color: #F9F9F9;
			border: 1px solid #191B20;
		}
	}
	.loading_block{
		display: flex;
		justify-content: center;
		padding: 80px 0;
		.loading_animation{
			margin: 0;
		}
	}
	.title{
		padding-right: 50px;
		h6{
			font-weight: 700;
			font-size: 30px;
			line-height: 110%;
		}
	}
	.error_message{
		background: rgba(255, 100, 100, 0.05);
		border: 1px solid rgba(255, 100, 100, 0.3);
		border-radius: 20px;
		padding: 20px;
		font-size: 16px;
		line-height: 130%;
		display: inline-flex;
		align-items: center;
		width: 100%;
		text-align: left;
		margin-top: 10px;
		img{
			margin-right: 10px;
		}
	}
	.success_title{
		text-align: center;
		padding-right: 0;
		max-width: 273px;
		width: 100%;
		margin: -50px auto 0 auto;
	}
	.success_description{
		text-align: center;
		max-width: 202px;
		width: 100%;
		margin: 20px auto 0 auto;
		font-size: 14px;
		line-height: 130%;
		color: #80889C;
	}
	.success_button{
		margin-top: 90px;
		background: #FFFB1F;
		border-radius: 40px;
		height: 52px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		&:hover{
			background: #0285FD;
			color: #F9F9F9;
		}
	}
	.code_label{
		font-size: 12px;
		line-height: 28px;
		color: #656D81;
		margin-top: 30px;
	}
	.code_sms{
    width: 100%;
    height: 63px;
    background: #F9F9F9;
    border: 1px solid #C6CAD3;
    border-radius: 12px;
    font-size: 20px;
    line-height: 140%;
    color: #191B20;
		padding: 20px;
    &:focus{
      border: 1px solid #0285FD;
    }
	}
`
