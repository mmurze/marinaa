import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useEffect, useState} from "react";
import {isValidPhone} from "phone-validation";
import validator from "email-validator";
import axios from "axios";
import {useSnapshot} from "valtio";
import {state} from "state";
import Image from "next/image";
import Input from "components/Forms/Input";
import Title from "components/Title";

export default function RaydiumForm({t}) {
	const snap = useSnapshot(state);
	const [success, setSuccess] = useState(false)
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")
	const [email, setEmail] = useState("")
	const [validatorForm, setValidatorForm] = useState(false)

	const onHandleSubmit = (e) => {
		e.preventDefault()
		axios.post("/api/raydium", {
			address,
			phone,
			email,
			utm: snap.utm
		}).then(r => setSuccess(r.data.status))
	}

	useEffect(() => {
		if ((address.indexOf(" ") === -1 && address.length !== 0) && isValidPhone(phone) && validator.validate(email)) {
			setValidatorForm(true)
		} else setValidatorForm(false)
	}, [email, phone, address])

	return (
		<Wrapper id="form">
			<CenterBlock>
				<div className="form_box">
					<div className="form_left">
						<Image src="/pic/leaderboard/form-left.png" width={182} height={167} alt="Form Left" priority={true}/>
					</div>
					<div className="form_right">
						<Image src="/pic/leaderboard/form-right.png" width={217} height={199.5} alt="Form right" priority={true}/>
					</div>
					{
						success ? (
							<div className="success">
								<div className="coin">
									<Image src="/pic/leaderboard/form-coin.png" width={120} height={120} alt="you are in!" priority={true}/>
								</div>
								<Title><h2>{t.title_success}</h2></Title>
								<p className="success_description">{t.description_success}</p>
								<div className="link">
									<a href={snap.raydiumLink} target="_blank" rel="noreferrer nofollow">{t.link_a_success_1}</a>
								</div>
								<div className="how_to">
									<a href="https://choisecom.medium.com/how-to-trade-cho-on-raydium-dex-exchange-2dcf543909ad" target="_blank" rel="noreferrer nofollow">{t.link_a_success_2}</a>
								</div>
							</div>
						) : (
							<form onSubmit={onHandleSubmit}>
								<h3>{t.title}</h3>
								<div className="list">
									<Input value={address} onChange={setAddress} placeholder="Wallet address connected to Raydium" required={true}/>
									<Input value={phone} onChange={setPhone} type="tel" placeholder="Phone number connected to the Crypterium App" required={true}/>
									<Input value={email} onChange={setEmail} type="email" placeholder="E-mail connected to the Crypterium App" required={true}/>
								</div>
								<button disabled={!validatorForm} className="submit">{t.title_button}</button>
								<div className="link">
									<a href="https://choisecom.medium.com/cho-airdrop-7c2518324a5a" target="_blank" rel="noreferrer nofollow">{t.link_a_1}</a>
								</div>
								<div className="trade_link">{t.trade_link}
									<a href={snap.raydiumLink} target="_blank" rel="noreferrer nofollow">{t.link_a_2}</a>
								</div>
								<div className="how_to">
									<a href="https://choisecom.medium.com/how-to-trade-cho-on-raydium-dex-exchange-2dcf543909ad" target="_blank" rel="noreferrer nofollow">{t.link_a_3}</a>
								</div>
							</form>
						)
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 110px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.trade_link{
		text-align: center;
		margin-top: 20px;
		color: #F9F9F9;
		font-size: 20px;
		span{
			opacity: 0.4;
			text-decoration: underline;
			margin-left: 5px;
		}
		a{
			text-decoration: underline;
			color: #F9F9F9;
			font-weight: bold;
			margin-left: 5px;
		}
	}
	.how_to{
		text-align: center;
		margin-top: 15px;
		a{
			color: #F9F9F9;
			text-decoration: underline;
			font-size: 15px;
		}
	}
	.form_box {
		margin: 100px auto 0 auto;
		padding: 100px 256px;
		background: #191B20 url("/pic/leaderboard/form-glow.svg") center right;
		border-radius: 50px;
		background-size: cover;
		position: relative;
		@media only screen and (max-width: 820px) {
			padding: 100px;
		}
		@media only screen and (max-width: 600px) {
			padding: 40px 20px;
			margin-left: -20px;
			margin-right: -20px;
			width: calc(100% + 40px);
			border-radius: 30px 30px 0 0;
			margin-top: 70px;
		}
	}
	.form_left {
		position: absolute;
		top: -40px;
		left: -40px;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.form_right {
		position: absolute;
		bottom: -40px;
		right: 10px;
		@media only screen and (max-width: 820px) {
			right: 0;
			bottom: -80px;
		}
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	form {
		position: relative;
		z-index: 10;
		max-width: 488px;
		width: 100%;
		margin: 0 auto;
		.link {
			margin-top: 20px;
			text-align: center;
			a {
				font-size: 16px;
				line-height: 24px;
				color: #4EAAFE;
			}
		}
	}
	h3{
		font-size: 30px;
		line-height: 100%;
		text-align: center;
		color: #F9F9F9;
		margin-bottom: 50px;
	}
	.submit {
		margin-top: 40px;
		height: 56px;
		background: #FFFB1F;
		border-radius: 40px;
		font-size: 16px;
		line-height: 24px;
		&:hover{
			background: #0285FD;
			color: #F9F9F9;
			&:disabled{
				background: rgba(255, 255, 255, 0.2);
				color: #191B20;
			}
		}
		&:disabled {
			background: rgba(255, 255, 255, 0.2);
			cursor: default;
		}
	}
	.success {
		color: #F9F9F9;
		text-align: center;
		.success_description {
			max-width: 402px;
			width: 100%;
			margin: 20px auto 0 auto;
			font-size: 24px;
			line-height: 130%;
			text-align: center;
		}
		.title {
			margin-top: 30px;
		}
		.link {
			display: flex;
			justify-content: center;
			margin-top: 60px;
			a {
				height: 56px;
				background: #FFFB1F;
				border-radius: 40px;
				padding: 16px 40px;
				cursor: pointer;
			}
		}
	}
	.link_disabled{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 40px;
		p{
			margin-top: 10px;
			font-size: 18px;
			line-height: 150%;
		}
		span{
			min-width: 255px;
			height: 56px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #191B20;
			border-radius: 40px;
			padding: 16px 40px;
			font-weight: 700;
			font-size: 16px;
			line-height: 24px;
			color: #F9F9F9;
			opacity: .4;
			cursor: default;
		}
	}
`
