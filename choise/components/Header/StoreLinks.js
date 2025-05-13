import styled from "styled-components";
import Responsive from "helpers/Responsive";
import {useRouter} from "next/router";

export default function StoreLinks() {
	const {locale} = useRouter()
	const t = require(`locale/components/${locale}.json`)
	
	return (
		<Wrapper className="store_links">
			<Responsive width={600} mobile={
				<>
					<li>
						<a href="https://crypterium.onelink.me/jtmZ/choisesiteheader" target="_blank" rel="noreferrer">
							<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M11.4517 11.6126L8.75017 8.97856L0.777344 16.7528C1.07397 17.0569 1.55768 17.0935 2.10775 16.7895L11.4517 11.6126ZM0 1.60437C0 1.21772 0.108734 0.919163 0.296622 0.727398L0.342994 0.682185L8.26944 8.40736V8.58977L0.342994 16.3149L0.296622 16.2728C0.108734 16.0811 0 15.7825 0 15.3959V1.60437ZM9.22656 8.58966L11.8658 11.166L11.9281 11.1325L15.0575 9.39959C15.9505 8.90381 15.9505 8.0931 15.0575 7.60043L11.9281 5.86441L11.869 5.83089L9.22656 8.40725V8.58966ZM2.10775 0.207636L11.4517 5.38451L8.75017 8.01855L0.777344 0.247392C1.07397 -0.0566261 1.55768 -0.0932627 2.10775 0.207636Z"/>
							</svg>
						</a>
					</li>
					<li>
						<a href="https://crypterium.onelink.me/jtmZ/choisesiteheader" target="_blank" rel="noreferrer">
							<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.8464 9.04057C12.8266 6.89287 14.65 5.84801 14.7334 5.79937C13.7007 4.33137 12.1001 4.13079 11.5376 4.1148C10.1933 3.97686 8.88924 4.89911 8.20442 4.89911C7.50593 4.89911 6.45137 4.12813 5.31479 4.15078C3.8522 4.17277 2.48393 4.9984 1.73351 6.28048C0.184806 8.89463 1.33984 12.7362 2.82361 14.8493C3.56584 15.8841 4.43314 17.0396 5.56835 16.999C6.67896 16.9543 7.09381 16.3086 8.43406 16.3086C9.762 16.3086 10.1516 16.999 11.3093 16.973C12.5013 16.9543 13.2517 15.9334 13.968 14.8892C14.8257 13.7031 15.1701 12.535 15.1838 12.475C15.1558 12.4657 12.869 11.6147 12.8464 9.04057Z"/>
								<path d="M10.6594 2.72476C11.2567 1.99643 11.6654 1.00554 11.552 0C10.6874 0.0373164 9.60618 0.583069 8.98355 1.29541C8.43269 1.92313 7.94061 2.95199 8.06773 3.91956C9.03891 3.99019 10.0361 3.44177 10.6594 2.72476Z"/>
							</svg>
						</a>
					</li>
				</>
			}>
				<li className="qr_modal">
					<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M11.4517 11.6126L8.75017 8.97856L0.777344 16.7528C1.07397 17.0569 1.55768 17.0935 2.10775 16.7895L11.4517 11.6126ZM0 1.60437C0 1.21772 0.108734 0.919163 0.296622 0.727398L0.342994 0.682185L8.26944 8.40736V8.58977L0.342994 16.3149L0.296622 16.2728C0.108734 16.0811 0 15.7825 0 15.3959V1.60437ZM9.22656 8.58966L11.8658 11.166L11.9281 11.1325L15.0575 9.39959C15.9505 8.90381 15.9505 8.0931 15.0575 7.60043L11.9281 5.86441L11.869 5.83089L9.22656 8.40725V8.58966ZM2.10775 0.207636L11.4517 5.38451L8.75017 8.01855L0.777344 0.247392C1.07397 -0.0566261 1.55768 -0.0932627 2.10775 0.207636Z"/>
					</svg>
					<span className="qr_modal_block">
						<p>
							<img src="/pic/choise-qr.svg" alt="Choise QR Google play"/>
							{t.header.store_links.qr_madal}
						</p>
					</span>
				</li>
				<li className="qr_modal">
					<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.8464 9.04057C12.8266 6.89287 14.65 5.84801 14.7334 5.79937C13.7007 4.33137 12.1001 4.13079 11.5376 4.1148C10.1933 3.97686 8.88924 4.89911 8.20442 4.89911C7.50593 4.89911 6.45137 4.12813 5.31479 4.15078C3.8522 4.17277 2.48393 4.9984 1.73351 6.28048C0.184806 8.89463 1.33984 12.7362 2.82361 14.8493C3.56584 15.8841 4.43314 17.0396 5.56835 16.999C6.67896 16.9543 7.09381 16.3086 8.43406 16.3086C9.762 16.3086 10.1516 16.999 11.3093 16.973C12.5013 16.9543 13.2517 15.9334 13.968 14.8892C14.8257 13.7031 15.1701 12.535 15.1838 12.475C15.1558 12.4657 12.869 11.6147 12.8464 9.04057Z"/>
						<path d="M10.6594 2.72476C11.2567 1.99643 11.6654 1.00554 11.552 0C10.6874 0.0373164 9.60618 0.583069 8.98355 1.29541C8.43269 1.92313 7.94061 2.95199 8.06773 3.91956C9.03891 3.99019 10.0361 3.44177 10.6594 2.72476Z"/>
					</svg>
					<span className="qr_modal_block">
						<p>
							<img src="/pic/choise-qr.svg" alt="Choise QR Apple store"/>
							{t.header.store_links.qr_madal}
						</p>
					</span>
				</li>
			</Responsive>
		</Wrapper>
	)
}

const Wrapper = styled.ul`
	display: flex;
	align-items: center;
	li{
		margin-left: 10px;
	}
	a, .qr_modal{
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
		background: #F6F7F8;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		&:hover{
			background: #191B20;
			svg{
				fill: #F9F9F9;
				transition: all .3s ease-in-out;
			}
		}
		svg{
			fill: #191B20;
			transition: all .3s ease-in-out;
		}
	}
	.qr_modal{
		position: relative;
		&:hover{
			.qr_modal_block{
				opacity: 1;
				visibility: visible;
				transition: all .3s ease-in-out;
				top: 0;
			}
		}
	}
	.qr_modal_block{
		position: absolute;
		top: 20px;
		padding-top: 50px;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
		visibility: hidden;
		transition: all .3s ease-in-out;
		z-index: -10;
		p{
			width: 168px;
			height: 195px;
			padding: 16px 16px 20px 16px;
			background: #F9F9F9;
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
			border-radius: 16px;
			font-size: 12px;
			line-height: 140%;
			color: #656D81;
			text-align: center;
			img{
				margin-bottom: 7px;
			}
		}
	}
`