import ServicePageWrapper from "components/ServicePageWrapper";
import Seo from "helpers/Seo";
import styled from "styled-components";
import {useRouter} from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Blocked(){
	const {locale} = useRouter()
	const {kyc_blocked} = require(`locale/system-pages/${locale}.json`)
	return (
		<>
			<Seo
				title={kyc_blocked.seo_title}
				description={kyc_blocked.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ServicePageWrapper
					title={kyc_blocked.title}
					description={kyc_blocked.description}
					image="/pic/service/kyc-ondato-blocked.png"
				>
					<Wrapper>
						<li className="chat"><a href="#" target="_blank">{kyc_blocked.chat}</a></li>
						<li className="email"><a href="#" target="_blank">{kyc_blocked.email}</a></li>
					</Wrapper>
				</ServicePageWrapper>
			</main>
			<Footer/>
		</>
	)
}

const Wrapper = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 420px;
	width: 100%;
	margin: 40px auto 0 auto;
	.chat, .email{
		width: calc(100% / 2 - 10px);
		a{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 40px;
			padding: 0 30px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			border-radius: 40px;
		}
	}
	.chat a{
		color: #0285FD;
		border: 1px solid #0285FD;
	}
	.email a{
		color: #191B20;
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFFB1F 91.92%);
	}
`