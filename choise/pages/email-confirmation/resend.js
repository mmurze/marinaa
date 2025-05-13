import ServicePageWrapper from "components/ServicePageWrapper";
import Seo from "helpers/Seo";
import styled from "styled-components";
import htmlContent from "helpers/htmlContent";
import {useRouter} from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Resend(){
	const {locale} = useRouter()
	const {email_resend} = require(`locale/system-pages/${locale}.json`)
	return (
		<>
			<Seo
				title={email_resend.seo_title}
				description={email_resend.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ServicePageWrapper
					title={email_resend.title}
					description={email_resend.description}
					image="/pic/service/email-confirmation-resend.png"
				>
					<Wrapper>
						{
							email_resend.array.map((item, index) => {
								return (
									<div className="item" key={index}>
										<span>{index + 1}</span>
										<p>{htmlContent(item)}</p>
									</div>
								)
							})
						}
					</Wrapper>
				</ServicePageWrapper>
			</main>
			<Footer/>
		</>
	)
}

const Wrapper = styled.div`
	margin-top: 65px;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		justify-content: flex-start;
		margin-top: 40px;
	}
	.item{
		display: flex;
		align-items: center;
		width: calc(100% / 3 - 20px);
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-bottom: 40px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		&:nth-child(1) span{
			background: #28D180;
		}
		&:nth-child(2) span{
			background: #0285FD;
		}
		&:nth-child(3) span{
			background: #FF5252;
		}
		p{
			width: calc(100% - 42px);
			padding-left: 17px;
			font-weight: 500;
			font-size: 14px;
			line-height: 130%;
			color: #7B8199;
		}
		span{
			width: 42px;
			height: 42px;
			border-radius: 403.846px 403.846px 403.846px 0;
			font-weight: 500;
			font-size: 16px;
			line-height: 100%;
			text-align: center;
			letter-spacing: -0.03em;
			color: #F9F9F9;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`