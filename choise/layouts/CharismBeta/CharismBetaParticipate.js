import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import Input from "components/Forms/Input";
import {useEffect, useState} from "react";
import validator from "email-validator"
import moment from "moment/moment";
import {useSnapshot} from "valtio";
import {state} from "state";
import axios from "axios";

export default function CharismBetaParticipate({t}) {
	const snap = useSnapshot(state);
	const [email, setEmail] = useState("")
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (success) {
			setTimeout(() => {
				setSuccess(false)
				setEmail("")
				setLoading(false)
			}, 3000)
		}
	}, [success])

	const onHandleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)
		axios.post("/api/charism", {email, date: moment().format('DD.MM.YYYY HH:mm'), utm: snap.utm}).then(r => {
			setSuccess(r.status)
		})
	}
	return (
		<Wrapper>
			<div className={`success_block ${success ? "success" : ""}`}>
				<div className="success_title">{t.success_title}</div>
				<p className="success_description">{t.success_description}</p>
			</div>
			<CenterBlock>
				<Title center={true}><h2>{t.title}</h2></Title>
				<div className="list" id="email_form">
					{
						t.list.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="top">
										<div className="step">step {index + 1}</div>
										<div className="step_title">{item.title}</div>
										<p className="description">{item.description}</p>
									</div>
									<div className="bottom">
										{item.image && (
											<div className="image">
												<Image src={item.image} width={item.width} height={item.height} priority={true} alt={item.title}/>
											</div>
										)}
										{item.form && (
											<div className="form_block">
												<form onSubmit={onHandleSubmit}>
													<Input value={email} type="email" required={true} placeholder="E-mail address" onChange={setEmail}/>
													<button className="submit_button" disabled={!validator.validate(email) || loading}>{loading ? "Loading" : "Send!"}</button>
												</form>
											</div>
										)}
									</div>
								</div>
							)
						})
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
	.title{
		max-width: 427px;
		width: 100%;
		margin: 0 auto;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 60px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.item{
		width: calc(100% / 3 - 20px);
		border-radius: 24px;
		min-height: 490px;
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			width: 100%;
			min-height: auto;
			margin-bottom: 40px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		@media only screen and (max-width: 600px) {
			padding: 30px 20px;
		}
		&:nth-child(1) {
			background: #CFF3E0;
		}
		&:nth-child(2) {
			background: #E1FFAF;
		}
		&:nth-child(3) {
			background: #FFFEA1;
		}
	}
	.step{
		background: #191B20;
		border-radius: 500px;
		display: inline-flex;
		padding: 5px 9px;
		font-weight: 700;
		font-size: 20px;
		line-height: 100%;
		color: #F9F9F9;
	}
	.step_title{
		margin-top: 40px;
		font-weight: 700;
		font-size: 26px;
		line-height: 120%;
	}
	.description{
		margin-top: 50px;
		font-size: 18px;
		line-height: 140%;
		@media only screen and (max-width: 600px) {
			margin-top: 10px;
		}
	}
	.image{
		margin-top: 20px;
		display: flex;
		justify-content: flex-end;
		@media only screen and (max-width: 820px) {
			justify-content: center;
		}
	}
	.form_block{
		margin-top: 20px;
	}
	.submit_button{
		margin-top: 10px;
		height: 56px;
		background: #0285FD;
		border-radius: 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #F9F9F9;
		&:hover{
			background: #191B20;
		}
		&:disabled{
			cursor: default;
			background: #DDDFE4 !important;
		}
	}
	.success_block{
		position: fixed;
		bottom: -130px;
		left: 0;
		width: 100%;
		background: linear-gradient(74.34deg, #5CEE9C -29.37%, #FFEF21 82.66%);
		padding: 40px 20px;
		text-align: center;
		z-index: 9999;
		font-size: 24px;
		line-height: 120%;
		height: 130px;
		transition: all .3s ease-in-out;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			font-size: 14px;
			height: 90px;
		}
		&.success{
			bottom: 0;
			transition: all .3s ease-in-out;
		}
		.success_title{
			font-weight: 700;
		}
		.success_description{
			margin-top: 5px;
		}
	}
`
