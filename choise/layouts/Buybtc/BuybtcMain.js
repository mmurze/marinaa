import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Button from "components/Buttons/Button";
import {useState} from "react";
import Modal from "components/Modal";
import Input from "components/Forms/Input";
import SwitchToggle from "components/Forms/SwitchToggle";
import successImage from "public/pic/success-coin.png"
import Image from "next/image";
import axios from "axios";
import {useSnapshot} from "valtio";
import {state} from "state";
import validator from "email-validator"
import {isValidPhone} from "phone-validation"
import htmlContent from "helpers/htmlContent";

export default function BuybtcMain({t}) {
	const snap = useSnapshot(state)
	const [modal, setModal] = useState(false)
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [amount, setAmount] = useState("")
	const [registered, setRegistered] = useState(false)
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)
	const onHandleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)
		axios.post("/api/buybtc/form", {
			choise_user: registered, phone, email, amount, utm: snap.utm
		}).then(r => {
			if (r.data.status) {
				setSuccess(e)
				setLoading(false)
			} else setLoading(false)
		})
	}
	return (
		<Wrapper>
			<Modal width={460} active={modal} onCallBack={() => {
				setModal(false)
				setSuccess(false)
			}}>
				{
					success ? (
						<div className="success_block">
							<div className="success_icon">
								<Image width={148} src={successImage} alt="Confirmed"/>
							</div>
							<div className="success_content">
								<p className="success_title">{t.success_title}</p>
								<p className="success_description">{t.success_description}</p>
								<a onClick={() => {
									setModal(false)
									setSuccess(false)
								}} className="follow_link" href="https://t.me/+ENTdxo0JpvpmNDQy" target="_blank" rel="noreferrer">
									<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M14.8427 0.0957783C15.0394 0.0109717 15.2547 -0.0182775 15.4662 0.0110747C15.6777 0.0404268 15.8777 0.127308 16.0453 0.262674C16.2129 0.39804 16.342 0.576943 16.4192 0.780762C16.4964 0.984581 16.5188 1.20587 16.4842 1.42158L14.6787 12.6387C14.5035 13.7207 13.3445 14.3412 12.3757 13.8023C11.5653 13.3514 10.3616 12.6567 9.27895 11.9318C8.73763 11.5689 7.07942 10.407 7.28321 9.58024C7.45834 8.87331 10.2446 6.21681 11.8367 4.63743C12.4616 4.01693 12.1766 3.65898 11.4387 4.22974C9.60534 5.64686 6.66387 7.80191 5.69107 8.40855C4.83291 8.94343 4.38552 9.03476 3.85056 8.94343C2.87458 8.7771 1.96945 8.51944 1.2307 8.20552C0.232432 7.78152 0.280992 6.37581 1.22991 5.96649L14.8427 0.0957783Z"/>
									</svg>
									{t.link}
								</a>
							</div>
						</div>
					) : (
						<>
							<h2>{t.form_title}</h2>
							<form onSubmit={onHandleSubmit}>
								<div className="form_list">
									<Input value={phone} onChange={setPhone} type="tel" required={true} placeholder={t.phone_placeholder}/>
									<Input value={email} onChange={setEmail} type="email" required={true} placeholder={t.email_placeholder}/>
									<Input value={amount} onChange={setAmount} type="number" required={true} placeholder={t.amount_placeholder}/>
								</div>
								<p className="form_description">{t.form_description}</p>
								<div className="check_block">
									<p>{t.check_description}</p>
									<SwitchToggle checked={registered} onClick={setRegistered}/>
								</div>
								<Button disabled={loading || !validator.validate(email) || !isValidPhone(phone) || !amount.length > 0}>{t.button_check}</Button>
							</form>
						</>
					)
				}
			</Modal>
			<CenterBlock>
				<div className="content">
					<div className="top">
						<h1>{t.modal_title}</h1>
						<div className="description">
							{
								t.modal_description.map((item, index) =>{
									return(
										<p key={index}>{htmlContent(item)}</p>
									)
								})
							}
						</div>
					</div>
					<p className="label">{t.modal_label}</p>
				</div>
				<div className="form_block">
					<div className="top_block">
						<img src="/pic/buybtc/btc-logo.svg" alt="BTC"/>
					</div>
					<div className="price_block">
						<p className="price_label">{t.price_label}</p>
						<p className="price_value">{t.price_value}</p>
						<Button onClick={() => setModal(true)}>{t.button_buy}</Button>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 170px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	h1{
		font-weight: 500;
		font-size: 50px;
		line-height: 110%;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
		}
	}
	.content{
		color: #fff;
		max-width: 500px;
		width: 100%;
		margin-right: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			max-width: none;
			margin-right: 0;
		}
	}
	.form_block{
		max-width: 461px;
		width: 100%;
		background: #272A32;
		border-radius: 30px;
		min-height: 635px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		@media only screen and (max-width: 1024px) {
			max-width: 100%;
			margin-top: 40px;
		}
		@media only screen and (max-width: 600px) {
			min-height: auto;
		}
	}
	.label{
		font-size: 12px;
		line-height: 150%;
		color: #C6CAD3;
		padding: 20px 30px;
		border: 1px solid #454A58;
		border-radius: 20px;
		margin-top: 20px;
		@media only screen and (max-width: 1024px) {
			margin-top: 40px;
		}
		@media only screen and (max-width: 600px) {
			padding: 20px;
		}
	}
	.description{
		margin-top: 40px;
		span{
			color: #FFFB1F;
		}
		p{
			font-size: 20px;
			line-height: 150%;
			margin-bottom: 25px;
			@media only screen and (max-width: 600px) {
				font-size: 18px;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.price_block{
		padding: 30px 20px;
		border: 1px solid #454A58;
		border-radius: 20px;
		margin: 20px;
		@media only screen and (max-width: 600px) {
			margin: 0 20px 20px 20px;
		}
	}
	.price_label{
		font-size: 18px;
		line-height: 140%;
		color: #FFFFFF;
	}
	.price_value{
		margin-top: 5px;
		font-weight: 700;
		font-size: 64px;
		line-height: 120%;
		color: #FFFFFF;
	}
	.button{
		margin-top: 30px;
	}
	.top_block{
		position: relative;
		padding: 40px 20px 0 20px;
		text-align: center;
		height: 335px;
		background: url("/pic/buybtc/btc-background.jpg") no-repeat center;
		background-size: cover;
		@media only screen and (max-width: 600px) {
			height: 200px;
		}
	}
	.modal{
		background: #272A32 !important;
		border-radius: 30px;
		color: #fff;
	}
	h2{
		text-align: center;
		font-weight: 700;
		font-size: 24px;
		line-height: 120%;
	}
	.close_modal{
		background: #454A58;
		svg{
			fill: #fff;
		}
	}
	form{
		margin-top: 40px;
	}
	.form_input{
		input{
			background: #1A1C21;
			border-radius: 500px;
			height: 56px;
			border: none;
			font-weight: 450;
			font-size: 16px;
			line-height: 28px;
			color: #fff;
		}
	}
	.form_description{
		margin-top: 25px;
		font-size: 12px;
		line-height: 150%;
		color: #FFFB1F;
	}
	.check_block{
		margin-top: 20px;
		border: 1px solid #454A58;
		border-radius: 16px;
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		p{
			font-weight: 500;
			font-size: 16px;
			line-height: 28px;
			max-width: 182px;
			width: 100%;
		}
	}
	.success_block{
		min-height: 540px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-top: 60px;
	}
	.success_title{
		font-weight: 700;
		font-size: 24px;
		line-height: 120%;
	}
	.success_description{
		font-size: 18px;
		line-height: 150%;
		color: #C6CAD3;
		margin: 20px auto 0 auto;
		max-width: 252px;
		width: 100%;
	}
	.follow_link{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 90px;
		background: #0285FD;
		border-radius: 40px;
		padding: 0 20px;
		height: 56px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #fff;
		&:hover{
			background: #FFFB1F;
			color: #191B20;
			svg{
				fill: #191B20;
			}
		}
		svg{
			fill: #fff;
			margin-right: 10px;
		}
	}
`
