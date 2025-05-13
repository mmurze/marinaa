import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useState} from "react";
import Modal from "components/Modal";
import Input from "components/Forms/Input";
import SwitchToggle from "components/Forms/SwitchToggle";
import Button from "components/Buttons/Button";
import Image from "next/image";
import successImage from "public/pic/success-coin.png";
import formImage from "public/pic/btc-insurance/form-image.png"
import prizeImage from "public/pic/btc-insurance/prize.png"
import CurrencySelect from "components/CurrencySelect";
import axios from "axios";
import {useSnapshot} from "valtio";
import {state} from "state";
import validator from "email-validator";
import {isValidPhone} from "phone-validation";
import htmlContent from "helpers/htmlContent";

export default function BtcInsuranceMain({t}) {
	const snap = useSnapshot(state)
	const [modal, setModal] = useState(false)
	const [success, setSuccess] = useState(false)
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [currency, setCurrency] = useState(null)
	const [amount, setAmount] = useState("")
	const [registered, setRegistered] = useState(false)
	const [loading, setLoading] = useState(false)
	
	const onHandleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)
		axios.post("/api/btc-insurance/form", {
			choise_user: registered, phone, email, currency, amount, utm: snap.utm
		}).then(r => {
			if (r.data.status) {
				setSuccess(true)
				setLoading(false)
			} else setLoading(false)
		})
	}
	const array = ["BTC", "ETH"]
	return (
		<Wrapper>
			<Modal active={modal} onCallBack={() => {
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
							<h2>{t.submit_title}</h2>
							<form onSubmit={onHandleSubmit}>
								<div className="form_list">
									<Input value={phone} onChange={setPhone} type="tel" required={true} placeholder={t.phone_placeholder}/>
									<Input value={email} onChange={setEmail} type="email" required={true} placeholder={t.email_placeholder}/>
									<CurrencySelect
										placeholder={t.choose_placeholder}
										array={array}
										onClick={setCurrency}
										value={currency}
									/>
									<div className="amount_block">
										<Input value={amount} onChange={setAmount} type="number" required={true} placeholder={t.amount_placeholder}/>
										<p className="amount_label">{t.dollar}</p>
									</div>
								</div>
								<div className="check_block">
									<p>{t.check_block_title}</p>
									<SwitchToggle checked={registered} onClick={setRegistered}/>
								</div>
								<Button disabled={loading || !validator.validate(email) || !isValidPhone(phone) || !amount.length > 0 || !currency} className="submit_button">{loading ? t.button_loading : t.button_continue}</Button>
							</form>
						</>
					)
				}
			</Modal>
			<CenterBlock>
				<div className="content">
					<h1>{t.risk_title}</h1>
					<p className="description">{t.risk_description}</p>
					<p className="label">{t.risk_label}</p>
				</div>
				<div className="form_block">
					<div className="form_banner">
						<div className="form_banner_image">
							<Image src={formImage} width={149} alt="first month for free"/>
						</div>
						<div className="form_banner_content">
							<h3>{t.banner_title}</h3>
							<p>{htmlContent(t.banner_description)}</p>
						</div>
					</div>
					<div className="form_block_item">
						<p className="insurance_heading">{t.insurance_title}</p>
						<div className="insurance_content">
							<p>3%</p>
							<p>
								{
									t.insurance_array.map((item, index) =>{
										return(
											<span key={index}>{item}</span>
										)
									})
								}
							</p>
						</div>
						<Button className="modal_button" onClick={() => setModal(true)}>{t.modal_button}</Button>
					</div>
					<div className="form_block_item">
						<ul className="form_block_list">
							<li><Image width={20} src={prizeImage} alt="First month for free"/>{t.text1}</li>
							<li><img src="/pic/btc-insurance/arrow.svg" alt="0% fee for the 1st purchase"/>{t.text2}</li>
							<li><img src="/pic/btc-insurance/arrow.svg" alt="Coverage paid in USDT"/>{t.text3}</li>
							<li><img src="/pic/btc-insurance/arrow.svg" alt="Feel free to use, invest or withdraw it"/>{t.text4}</li>
						</ul>
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
		align-items: center;
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
		color: #fff;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
		}
	}
	.description{
		margin-top: 30px;
		font-size: 20px;
		line-height: 150%;
		color: #fff;
		@media only screen and (max-width: 600px) {
			font-size: 18px;
		}
	}
	.content{
		max-width: 500px;
		width: 100%;
		margin-right: 40px;
		@media only screen and (max-width: 1024px) {
			max-width: 100%;
			margin-right: 0;
		}
	}
	.form_block{
		max-width: 461px;
		width: 100%;
		background: #272A32;
		border-radius: 30px;
		overflow: hidden;
		padding: 20px;
		@media only screen and (max-width: 1024px) {
			max-width: 100%;
			margin-top: 40px;
		}
	}
	.label{
		font-size: 12px;
		line-height: 150%;
		color: #C6CAD3;
		padding: 20px 30px;
		border: 1px solid #454A58;
		border-radius: 20px;
		margin-top: 70px;
		@media only screen and (max-width: 1024px) {
			margin-top: 40px;
		}
		@media only screen and (max-width: 600px) {
			padding: 20px;
		}
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
	.form_banner{
		background: #191B20;
		border-radius: 20px;
		height: 159px;
		color: #fff;
		padding: 30px 20px;
		position: relative;
	}
	.form_banner_image{
		position: absolute;
		top: 0;
		left: 0;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.form_banner_content{
		width: calc(100% - 149px);
		margin-left: auto;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		h3{
			font-weight: 700;
			font-size: 26px;
			line-height: 120%;
		}
		p{
			font-size: 18px;
			line-height: 150%;
			color: #C6CAD3;
			margin-top: 10px;
			strong{
				display: block;
			}
		}
	}
	.form_block_item{
		margin-top: 10px;
		padding: 30px;
		border: 1px solid #454A58;
		border-radius: 20px;
		@media only screen and (max-width: 600px) {
			padding: 0;
			border: none;
			margin-top: 40px;
		}
	}
	.insurance_heading{
		font-size: 18px;
		line-height: 140%;
		color: #fff;
	}
	.insurance_content{
		display: flex;
		align-items: center;
		color: #fff;
		margin-top: 5px;
		p:first-child{
			font-weight: 700;
			font-size: 64px;
			line-height: 120%;
		}
		p:last-child{
			margin-left: 10px;
		}
		span{
			display: block;
			&:first-child{
				font-weight: 700;
				font-size: 18px;
				line-height: 150%;
			}
			&:last-child{
				font-size: 18px;
				line-height: 150%;
				@media only screen and (max-width: 600px) {
					font-size: 14px;
				}
			}
		}
	}
	.modal_button{
		padding: 0 20px;
		margin-top: 30px;
		@media only screen and (max-width: 600px) {
			padding: 0 10px;
			font-size: 16px;
		}
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
	.close_modal{
		background: #454A58;
		svg{
			fill: #fff;
		}
	}
	form{
		margin-top: 40px;
	}
	.modal{
		background: #272A32 !important;
		border-radius: 30px;
		color: #fff;
	}
	.submit_button{
		margin-top: 35px;
	}
	.form_block_list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: -20px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			margin-bottom: 0;
		}
		li{
			width: calc(50% - 10px);
			margin-bottom: 20px;
			display: flex;
			align-items: center;
			font-size: 12px;
			line-height: 120%;
			color: #fff;
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin-bottom: 15px;
				&:last-child{
					margin-bottom: 0;
				}
			}
		}
		img{
			margin-right: 10px;
		}
	}
	.amount_block{
		position: relative;
		.form_input input{
			padding: 14px 32px 14px 48px;
		}
	}
	.amount_label{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 32px;
	}
`
