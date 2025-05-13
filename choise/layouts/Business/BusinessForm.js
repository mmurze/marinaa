import styled from "styled-components";
import {useEffect, useState} from "react";
import validator from "email-validator";
import {isValidPhone} from "phone-validation"
import Image from "next/image";
import {writeBusinessForm} from "utils/business";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useRouter} from "next/router";

export default function BusinessForm({modal = false}) {
	const {locale} = useRouter()
	const {businessform} = require(`locale/components/${locale}.json`)
	
	const snap = useSnapshot(state);
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [success, setSuccess] = useState(false)
	const [validate, setValidate] = useState(false)
	
	useEffect(() => {
		if (modal && !snap.businessFormModal) {
			setName("")
			setPhone("")
			setEmail("")
			setSuccess(false)
		}
	}, [snap.businessFormModal])
	
	const onHandleSubmit = (e) => {
		e.preventDefault()
		writeBusinessForm({name, phone, email, utm: snap.utm}).then(r => {
			if (r.status) {
				setSuccess(true)
				setName("")
				setPhone("")
				setEmail("")
			}
		})
	}
	
	useEffect(() => {
		if (validator.validate(email) && isValidPhone(phone) && name.length > 1) {
			setValidate(true)
		} else setValidate(false)
	}, [email, phone])
	
	return (
		<Wrapper>
			{success ? (
				<div className="success_block">
					<div className="success_content">
						<Image src="/pic/business/success-icon.png" width={122} height={121} priority={true} alt="Your application has been sent successfully, thank you."/>
						<h3>{businessform.title}</h3>
						<p className="success_description">{businessform.description}</p>
						<button onClick={() => {
							setSuccess(false)
							state.businessFormModal = false
						}} className="submit_button">{businessform.title_button_1}</button>
					</div>
				</div>
			) : (
				<div className="form_block">
					<div className="content">
						<img className="logo" src="/pic/logo-white.svg" alt="Choise.com form"/>
						<h2>{businessform.title_1}<span>{businessform.title_span}</span>{businessform.title_2}</h2>
						<p className="description">{businessform.description_form}</p>
					</div>
					<form onSubmit={onHandleSubmit}>
						<p className="form_heading">{businessform.form_heading}</p>
						<input type="text" value={name} onChange={(e) => setName(e.target.value)} required={true} placeholder="Name"/>
						<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required={true} placeholder="Business phone"/>
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} placeholder="Business email"/>
						<button
							disabled={!validate}
							className="submit_button">{businessform.title_button_2}</button>
					</form>
				</div>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.form_block{
		background: #272A32;
		border-radius: 24px;
		padding: 50px 60px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		@media only screen and (max-width: 600px) {
			padding: 30px;
		}
	}
	.success_block{
		background: #272A32;
		border-radius: 24px;
		padding: 50px 60px;
		position: relative;
		@media only screen and (max-width: 600px) {
			padding: 30px 10px;
		}
		.submit_button{
			margin-top: 40px;
		}
	}
	.success_content{
		max-width: 302px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
		h3{
			font-weight: 700;
			font-size: 22px;
			line-height: 130%;
			margin-top: 40px;
		}
	}
	.success_description{
		margin-top: 10px;
		font-weight: 450;
		font-size: 18px;
		line-height: 130%;
		color: #A2A8B7;
	}
	.content{
		max-width: 384px;
		width: 100%;
		padding-right: 40px;
		@media only screen and (max-width: 820px) {
			padding-right: 0;
			max-width: 100%;
		}
	}
	form{
		max-width: 388px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
			margin-top: 40px;
		}
	}
	h2{
		margin-top: 50px;
		font-weight: 700;
		font-size: 48px;
		line-height: 110%;
		@media only screen and (max-width: 600px) {
			font-size: 24px;
			line-height: 110%;
			margin-top: 0;
		}
		span{
			color: #FFFB1F;
		}
	}
	.description{
		margin-top: 30px;
		font-size: 18px;
		line-height: 140%;
		color: #80889C;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
			font-size: 14px;
			line-height: 140%;
		}
	}
	input{
		background: #1A1C21;
		border-radius: 500px;
		height: 56px;
		font-size: 16px;
		line-height: 28px;
		padding: 14px 30px;
		color: #fff;
		margin-bottom: 15px;
	}
	.submit_button{
		margin-top: 25px;
		height: 56px;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 8px 24px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		&:disabled{
			background: #656D81;
			color: #FFFFFF;
		}
	}
	.form_heading{
		text-align: center;
		font-size: 18px;
		line-height: 110%;
		color: #80889C;
		margin-bottom: 40px;
		@media only screen and (max-width: 600px) {
			text-align: left;
			color: #FFFFFF;
			margin-bottom: 20px;
		}
	}
	.logo{
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
`