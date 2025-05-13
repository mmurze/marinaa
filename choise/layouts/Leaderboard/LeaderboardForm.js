import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useEffect, useState} from "react";
import Input from "components/Forms/Input";
import {isValidPhone} from "phone-validation"
import validator from "email-validator"
import Image from "next/image";
import axios from "axios";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function LeaderboardForm({t}) {
	const snap = useSnapshot(state);
	const [address, setAddress] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [success, setSuccess] = useState(false)
	const [validatorForm, setValidatorForm] = useState(false)

	useEffect(() => {
		if ((address.indexOf(" ") === -1 && address.length !== 0) && isValidPhone(phone) && validator.validate(email)) {
			setValidatorForm(true)
		} else setValidatorForm(false)
	}, [email, phone, address])

	const onHandleSubmit = (e) => {
		e.preventDefault()
		axios.post("/api/leaderboard", {
			address,
			phone,
			email,
			utm: snap.utm
		}).then(r => setSuccess(r.data.status))
	}

	return (
		<Wrapper id="form">
			<CenterBlock>
				<Title><h2>{t.title_1}<span>{t.title_span}</span>{t.title_2}</h2></Title>
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
									<a href={snap.uniswapLink} target="_blank" rel="noreferrer nofollow">{t.link_a_1}</a>
								</div>
								<div className="how_to">
									<a href="https://choisecom.medium.com/how-to-trade-cho-on-uniswap-dex-exchange-6a76d9d4d615" target="_blank" rel="noreferrer nofollow">{t.link_a_2}</a>
								</div>
							</div>
						) : (
							<form onSubmit={onHandleSubmit}>
								<h3>{t.title_form}</h3>
								<div className="list">
									<Input className="uniswap_image" value={address} onChange={setAddress} placeholder="Wallet address connected to Uniswap" required={true}>
										<div className="icon"><img src="/pic/leaderboard/un-icon.svg" alt="Wallet address connected to Uniswap"/></div>
									</Input>
									<Input value={phone} onChange={setPhone} type="tel" placeholder="Phone number connected to the Crypterium App" required={true}/>
									<Input value={email} onChange={setEmail} type="email" placeholder="E-mail connected to the Crypterium App" required={true}/>
								</div>
								<button disabled={!validatorForm} className="submit">{t.title_button}</button>
								<div className="link">
									<a href="https://choisecom.medium.com/choise-com-trading-competition-on-uniswap-share-150-000-cho-prize-pool-4a8209e633e5" target="_blank" rel="noreferrer nofollow">{t.title_a_3}</a>
								</div>
								<div className="trade_link">
									{t.trade_link}
									<a href={snap.uniswapLink} target="_blank" rel="noreferrer nofollow">{t.link_a_4}</a>
								</div>
								<div className="how_to">
									<a href="https://choisecom.medium.com/how-to-trade-cho-on-uniswap-dex-exchange-6a76d9d4d615" target="_blank" rel="noreferrer nofollow">{t.link_a_5}</a>
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
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
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
	.title {
		text-align: center;
		max-width: 1000px;
		width: 100%;
		margin: 0 auto;
		span {
			color: #0285FD;
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
	.form_box {
		max-width: 996px;
		width: 100%;
		margin: 100px auto 0 auto;
		padding: 100px 256px;
		background: #191B20 url("/pic/leaderboard/form-glow.svg");
		background-size: cover;
		border-radius: 50px;
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
	.uniswap_image {
		input {
			padding: 14px 70px 14px 32px;
			@media only screen and (max-width: 600px) {
				padding: 14px 32px;
			}
		}
	}
	.icon {
		position: absolute;
		top: 0;
		right: 25px;
		height: 100%;
		display: flex;
		align-items: center;
		line-height: 0;
		@media only screen and (max-width: 600px) {
			display: none;
		}
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
	h3{
		font-size: 30px;
		line-height: 100%;
		text-align: center;
		color: #F9F9F9;
		margin-bottom: 50px;
	}
	.coin {
		display: flex;
		justify-content: center;
	}
`
