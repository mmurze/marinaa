import {useEffect} from "react";
import Router from 'next/router'
import CenterBlock from "helpers/CenterBlock";
import Seo from "helpers/Seo";
import Title from "components/Title";
import styled from "styled-components";
import Header from "components/Header";
import Footer from "components/Footer";

export default function ClientNumber({data, message}){

	useEffect(() => {
		if (data !== false) Router.push(data)
	}, [])

	return (
		data === false ? (
			<>
				<Seo
					title="The Crypto Wallet with Unlimited Possibilities"
					description="Get your free Bitcoin wallet or for any of our other 24 cryptocurrencies. Simply buy BTC, ETH, and any other crypto with your bank card, or apply for a FREE Visa card instantly and withdraw worldwide. Web3 Interest Account interest, exchange with the best rates, and be at ease with bank-level security."
				/>
				<Header/>
				<main>
					<Wrapper>
						<CenterBlock>
							<Title><h2>{message}</h2></Title>
							<p className="description">Please check URL, which has been sent to your email or SMS text message.</p>
						</CenterBlock>
					</Wrapper>
				</main>
				<Footer/>
			</>
		) : null
	)
}

const Wrapper = styled.section`
	text-align: center;
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	.description{
		max-width: 400px;
		width: 100%;
		margin: 20px auto 0 auto;
		color: #80889C;
		font-weight: 450;
		font-size: 18px;
		line-height: 150%;
	}
`

export async function getServerSideProps(ctx) {
	const data = await fetch(`https://crpt-backend.prod.testessential.net/v1/card0/kyc/code/${ctx.query.id}`)
	if (data.status === 400) {
		const json = await data.json()
		return {props: {data: false, message: json.message}}
	} else return {props: {data: data.url}}
}
