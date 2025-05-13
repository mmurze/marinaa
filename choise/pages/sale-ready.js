import Seo from "helpers/Seo";
import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useState} from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import axios from "axios";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";
import htmlContent from "helpers/htmlContent";

export default function SaleReady(){
	const {locale} = useRouter()
	const t = require(`locale/page-sale-ready/${locale}.json`)
	const [registered, setRegistered] = useState(t.main.registeredArray[0])
	const [plan, setPlan] = useState("$10-100")
	const [success, setSuccess] = useState(false)

	const onHandleSubmit = async (e) => {
		e.preventDefault()
		const data = (await axios.post("/api/sale-ready", {
			registered, plan
		})).data
		if (data.status) {
			setSuccess(true)
			setTimeout(() => {
				setPlan("$10-100")
				setRegistered(t.main.registeredArray[0])
			}, 300)
		}
	}
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<Wrapper>
					<CenterBlock>
						<h1>{t.main.title}</h1>
						<div className={`form_box ${!success ? "active" : ""}`}>
							<form onSubmit={onHandleSubmit}>
								<div className="image">
									<Image src="/pic/sale-form-rocket.png" width={210} height={295} alt="are you ready for the cho sale?" priority={true}/>
								</div>
								<div className="form_list">
									<div className="item">
										<h2>{t.main.items_title}</h2>
										<div className="list">
											{
												t.main.registeredArray.map((item, index) => {
													return (
														<button
															className={`action_button ${registered === item ? "active" : ""}`}
															onClick={() => setRegistered(item)}
															type="button" key={index}>{item}
														</button>
													)
												})
											}
										</div>
									</div>
									<div className="item">
										<h2>{t.main.item_title}</h2>
										<div className="list">
											{
												t.main.planArray.map((item, index) => {
													return (
														<button
															className={`action_button ${plan === item ? "active" : ""}`}
															onClick={() => setPlan(item)}
															type="button" key={index}>{item}
														</button>
													)
												})
											}
											<button className="send">{t.main.send}</button>
										</div>
									</div>
								</div>
							</form>
							<div className="content">
								<div className="content_list">
									{
										t.main.content_list.map((item, index) =>{
											return(
												<p key={index}>{htmlContent(item)}</p>
											)
										})
									}
								</div>
								<ul className="links">
									<li><a rel="noreferrer nofollow" href="https://app.crypterium.com" target="_blank">{t.main.link}</a></li>
								</ul>
							</div>
						</div>
						<div className={`success_form  ${success ? "active" : ""}`}>
							<h2>{t.main.thank}</h2>
							<div className="image_success">
								<Image src="/pic/sale-form-rocket.png" width={420} height={590} alt="are you ready for the cho sale?" priority={true}/>
							</div>
							<div className="link">
								<Link href="/">{t.main.link_back}</Link>
							</div>
						</div>
					</CenterBlock>
				</Wrapper>
			</main>
			<Footer/>
		</>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	a, .whitelist_button{
		color: #0285FD;
		text-decoration: underline;
		font-size: 16px;
		line-height: 150%;
	}
	.image{
		position: absolute;
		right: -80px;
		top: 40px;
		@media only screen and (max-width: 1140px) {
			display: none;
		}
	}
	h1{
		font-size: 40px;
		line-height: 120%;
		letter-spacing: -0.03em;
		text-align: center;
	}
	h2{
		font-size: 40px;
		line-height: 100%;
		letter-spacing: -0.03em;
		max-width: 495px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			text-align: center;
			font-size: 30px;
			line-height: 100%;
		}
	}
	.link{
		@media only screen and (max-width: 1024px) {
			width: 100%;
			margin-top: -80px;
			a{
				width: 100%;
				height: 44px;
			}
		}
		@media only screen and (max-width: 600px) {
			margin-top: -180px;
		}
	}
	.success_form{
		margin-top: 50px;
		background: #5CEE9C;
		border-radius: 40px;
		min-height: 474px;
		padding: 60px 40px;
		position: relative;
		flex-direction: column;
		justify-content: space-between;
		display: none;
		@media only screen and (max-width: 600px) {
			margin-left: -20px;
			margin-right: -20px;
			width: calc(100% + 40px);
		}
		&.active{
			display: flex;
		}
		a{
			background: #191B20;
			border-radius: 40px;
			height: 44px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 10px 30px;
			font-size: 16px;
			line-height: 24px;
			color: #F9F9F9;
			text-decoration: none;
			&:hover{
				background: #41454E;
			}
			&:active{
				background: #0285FD;
			}
		}
		h2{
			font-size: 90px;
			line-height: 100%;
			letter-spacing: -0.03em;
			max-width: 495px;
			width: 100%;
			@media only screen and (max-width: 1024px) {
				max-width: 100%;
				text-align: center;
			}
			@media only screen and (max-width: 600px) {
				font-size: 40px;
				line-height: 120%;
				text-align: left;
			}
		}
	}
	.image_success{
		position: absolute;
		right: 115px;
		top: 50%;
		transform: translateY(-50%);
		@media only screen and (max-width: 1150px) {
			transform: translateY(-50%) scale(.7);
			transform-origin: right center;
		}
		@media only screen and (max-width: 1024px) {
			position: relative;
			top: -100px;
			right: auto;
			transform: rotate(40deg) scale(.8);
			transform-origin: center center;
			margin-top: 30px;
			display: flex;
			justify-content: center;
		}
		@media only screen and (max-width: 600px) {
			transform: rotate(40deg) scale(.6);
			top: -140px;
		}
	}
	.form_box{
		justify-content: space-between;
		align-items: center;
		margin-top: 50px;
		display: none;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		@media only screen and (max-width: 600px) {
			margin-left: -20px;
			margin-right: -20px;
			margin-top: 25px;
		}
		&.active{
			display: flex;
		}
	}
	.whitelist_button{
		width: auto;
		display: inline-flex;
	}
	.content{
		width: calc(100% - 660px);
		padding-left: 135px;
		@media only screen and (max-width: 1140px) {
			padding-left: 40px;
		}
		@media only screen and (max-width: 1024px) {
			width: 100%;
			padding-left: 0;
			margin-top: 40px;
		}
		@media only screen and (max-width: 600px) {
			padding: 0 20px;
			margin-top: 25px;
		}
		p{
			font-size: 16px;
			line-height: 150%;
			margin-bottom: 25px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	form{
		background: #5CEE9C;
		border-radius: 40px;
		padding: 60px 40px;
		max-width: 660px;
		width: 100%;
		@media only screen and (max-width: 1024px) {
			max-width: 100%;
		}
		@media only screen and (max-width: 600px) {
			padding: 25px 30px;
		}
	}
	.item{
		margin-bottom: 46px;
		&:first-child{
			@media only screen and (max-width: 600px) {
				.action_button{
					padding: 10px 30px;
				}
			}
		}
		&:last-child{
			margin-bottom: 0;
			@media only screen and (max-width: 600px) {
				.action_button{
					width: calc(100% / 3 - 10px);
					padding: 10px;
				}
			}
		}
	}
	.list{
		display: flex;
		align-items: center;
		margin-top: 30px;
		@media only screen and (max-width: 600px) {
			justify-content: center;
			flex-wrap: wrap;
		}
		button{
			width: auto;
			border-radius: 40px;
			height: 44px;
			font-size: 16px;
			line-height: 24px;
			padding: 10px 30px;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
			}
		}
		.action_button{
			margin-right: 10px;
			background: #F9F9F9;
			border: 1px solid #F9F9F9;
			&:hover{
				border: 1px solid #191B20;
			}
			&.active{
				background: #FFFB1F;
				border: 1px solid #FFFB1F;
				&:hover{
					border: 1px solid #FFFB1F;
				}
			}
		}
		.send{
			background: #191B20;
			color: #F9F9F9;
			margin-left: auto;
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin-top: 30px;
			}
			&:disabled{
				cursor: default;
				opacity: .6;
				&:hover{
					background: #191B20;
				}
			}
			&:hover{
				background: #41454E;
			}
			&:active{
				background: #0285FD;
			}
		}
	}
	.links{
		margin-top: 45px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			margin-top: 20px;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			li{
				width: 100%;
			}
			a{
				height: 44px;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				background: #0285FD;
				border-radius: 40px;
				font-size: 16px;
				line-height: 24px;
				color: #F9F9F9;
				text-decoration: none;
				width: 100%;
			}
		}
	}
`
