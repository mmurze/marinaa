import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Link from "next/link";
import socialArray from "public/data/social.json"
import Responsive from "helpers/Responsive";
import RenderInPage from "components/RenderInPage";
import {useRouter} from "next/router";
import htmlContent from "helpers/htmlContent";
export default function Footer({blackTheme = false}) {
	const {locale} = useRouter()
	const t = require(`locale/components/${locale}.json`)
	
	return (
		<Wrapper id="footer" className={blackTheme ? "black" : ""}>
			<Responsive width={1024} mobile={
				<CenterBlock>
					<div className="logo">
						<Link href="/">
							{blackTheme ? <img src="/pic/logo-white.svg" alt="Choise.com"/> : <img src="/pic/logo.svg" alt="Choise.com"/>}
						</Link>
					</div>
				</CenterBlock>
			}/>
			<CenterBlock>
				<div className="top_block">
					<Responsive width={1024}>
						<div className="logo">
							{blackTheme ? <img src="/pic/logo-white.svg" alt="Choise.com"/> : <img src="/pic/logo.svg" alt="Choise.com"/>}
						</div>
					</Responsive>
					<div className="content">
						<div className="description">
							<RenderInPage slugArray={["/business"]}>
								<div className="business_description">
									<p>{t.footer.business_description}</p>
									<p>{t.footer.first_description}</p>
								</div>
							</RenderInPage>
							<p>{htmlContent(t.footer.descriptions)}</p>
						</div>
						<div className="links_block_wrapper">
							<ul className="links">
								{
									t.footer.links.map((item, index) => {
										return (
											<li key={index}>
												{
													item.target ? (
														<a className="link" href={item.slug} target="_blank" rel="noreferrer">{item.title}</a>
													) : (
														<Link className="link" href={item.slug}>{item.title}</Link>
													)
												}
											</li>
										)
									})
								}
							</ul>
							<ul className="cards_links">
								<li><a href="https://www.merchantsignage.visa.com/brand_guidelines" target="_blank" rel="noreferrer">
									<svg width="59" height="20" viewBox="0 0 59 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M38.7598 0.428467L39.1484 0.45874C40.3652 0.535156 41.5391 0.80835 42.6855 1.22363C42.7578 1.25024 42.7676 1.28003 42.752 1.35352L41.9492 5.16504L41.9355 5.20337L41.668 5.08618C40.7266 4.68164 39.7461 4.43213 38.7266 4.35278C38.1152 4.30518 37.5059 4.30811 36.9043 4.43994C36.4902 4.53052 36.1016 4.68164 35.7734 4.96045C35.6797 5.03955 35.5938 5.12988 35.5195 5.22729C35.1621 5.69385 35.1699 6.23633 35.5371 6.69434C35.7539 6.96338 36.0195 7.17554 36.3105 7.34741C36.832 7.65381 37.3594 7.94824 37.8906 8.23877C38.5293 8.58984 39.168 8.94458 39.7559 9.38306C39.9082 9.49707 40.0586 9.61597 40.2012 9.74097L40.3535 9.87671C40.5625 10.0706 40.7598 10.2783 40.9395 10.5044C41.5664 11.2937 41.8809 12.199 41.8965 13.2107C41.9102 14.1318 41.7461 15.0176 41.3535 15.854C40.8945 16.835 40.1992 17.604 39.3164 18.2051C38.418 18.8171 37.4258 19.197 36.377 19.4292C35.2734 19.6729 34.1582 19.7527 33.0332 19.6941C31.7461 19.6267 30.4766 19.4385 29.2402 19.0481C28.9688 18.9624 28.707 18.8496 28.4395 18.75C28.418 18.7415 28.4004 18.7322 28.3926 18.7158C28.3867 18.7039 28.3848 18.688 28.3887 18.6658L29.2324 14.6677L29.2422 14.6426L29.334 14.6843C29.7266 14.8728 30.123 15.0532 30.5273 15.2092C30.791 15.3105 31.0586 15.4016 31.332 15.4773C32.3535 15.7612 33.3945 15.8677 34.4512 15.7971C35.041 15.7576 35.6094 15.6194 36.125 15.3074C36.3496 15.1714 36.5449 15.0078 36.6895 14.8013C36.7754 14.6782 36.8418 14.54 36.8848 14.3835C37.0332 13.8479 36.9004 13.3806 36.5234 12.9819C36.2246 12.666 35.8711 12.4231 35.4961 12.2151C35.1855 12.0422 34.8691 11.8772 34.5527 11.7122L34.0254 11.4343C33.2617 11.0269 32.5312 10.5657 31.8926 9.96851C31.3008 9.41479 30.8281 8.7771 30.5566 7.9978C30.3535 7.41211 30.3047 6.80859 30.3516 6.19287C30.3906 5.6875 30.4922 5.20459 30.6582 4.74487C30.8066 4.32861 31.0078 3.93115 31.2637 3.55273C31.457 3.26611 31.6719 3.00317 31.9062 2.76147C32.0938 2.56665 32.2949 2.38599 32.5059 2.21777C32.7637 2.01343 33.0371 1.82788 33.3262 1.65869C33.7871 1.38818 34.2676 1.17114 34.7637 0.998291C35.2148 0.841064 35.6777 0.720459 36.1523 0.630127C36.7051 0.524658 37.2637 0.462402 37.8262 0.442627L37.8828 0.434082L37.9121 0.428467H38.7598ZM0.09375 0.856934C0.0703125 0.997314 0.03125 1.13525 0 1.27417V1.30737L0.046875 1.32129C0.326172 1.38379 0.603516 1.4502 0.878906 1.521C1.10352 1.57886 1.32812 1.6394 1.55078 1.70312C2.02344 1.83789 2.49219 1.98682 2.95703 2.1521C3.33594 2.28735 3.71289 2.43164 4.07812 2.59814C4.3125 2.70508 4.54297 2.82104 4.76758 2.94946C4.95312 3.0542 5.12109 3.17554 5.26172 3.32373C5.38281 3.45093 5.48242 3.5979 5.55273 3.77173C5.63672 3.97705 5.71094 4.18921 5.76562 4.40454C6.3125 6.54175 6.85352 8.68018 7.39453 10.8184L7.41211 10.8828L7.42969 10.948L7.44727 11.0139L9.55469 19.3232C9.57227 19.3982 9.60156 19.4224 9.67773 19.4224L14.5 19.4216C14.5684 19.4219 14.5996 19.4014 14.625 19.3379L15.291 17.7188L22.2246 0.87085L22.2617 0.77124H22.1582L17.3848 0.769287C17.3145 0.769287 17.2812 0.790039 17.2539 0.85791L12.4004 13.3569L12.3574 13.4553L12.3457 13.3989L12.1582 12.3987L11.5488 9.09546L10.9707 5.97144L10.377 2.74976C10.2812 2.23462 10.082 1.77393 9.71094 1.40332C9.60742 1.2998 9.49805 1.20996 9.38477 1.13306C9.21484 1.01855 9.0332 0.932861 8.8418 0.873535C8.61133 0.802246 8.36719 0.769043 8.10938 0.769531L2.53711 0.770508L0.199219 0.768799L0.158203 0.771729C0.140625 0.775391 0.126953 0.782959 0.117188 0.795898L0.105469 0.814941L0.09375 0.856934ZM52.9121 12.8103H48.9785L51.4648 5.83276L51.4824 5.83447L52.9121 12.8103ZM57.7402 19.418L58.6523 19.4158V19.3828L58.6426 19.3582L58.6328 19.3313L57.918 15.8645L56.8359 10.5823L55.834 5.69751L54.8438 0.869141C54.834 0.819092 54.8203 0.792236 54.7891 0.780273C54.7734 0.774414 54.7539 0.771973 54.7305 0.771973L53.1719 0.772949L50.8281 0.776367C50.6348 0.7771 50.4355 0.793701 50.248 0.841064C49.5156 1.02588 49.0273 1.49878 48.7383 2.2019L41.8477 18.9514L41.6562 19.4192H41.7559L46.5371 19.4202C46.6055 19.4204 46.6367 19.4006 46.6602 19.334L47.584 16.7178C47.6074 16.6509 47.6387 16.6313 47.7051 16.6313L53.6113 16.6309C53.6777 16.6306 53.7051 16.6497 53.7188 16.7175L54.248 19.3186C54.2656 19.4036 54.2988 19.4199 54.375 19.4197L57.7402 19.418ZM28.8945 1.45972L29.0371 0.771484H28.9355L24.3984 0.769531C24.3242 0.769531 24.2969 0.791748 24.2832 0.865479L23.3984 5.08325L22.3965 9.85107L21.4922 14.1492L20.5391 18.6902L20.3867 19.4138L20.457 19.4199L25.0508 19.4209C25.1055 19.4209 25.127 19.4028 25.1367 19.3496L25.8867 15.7712L26.873 11.0845L27.8906 6.2356L28.8945 1.45972Z"/>
									</svg>
								</a></li>
								<li><a href="https://brand.mastercard.com/brandcenter/artwork/other-marks.html" target="_blank" rel="noreferrer">
									<svg width="43" height="26" viewBox="0 0 43 26" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M22.3698 23.0292C24.9509 20.4861 26.5539 16.9324 26.5539 13C26.5539 8.9861 24.8838 5.36671 22.208 2.81397C24.3831 1.05306 27.1428 0 30.1456 0C37.1661 0 42.8574 5.75634 42.8574 12.8571C42.8574 19.9579 37.1661 25.7143 30.1456 25.7143C27.2167 25.7143 24.5193 24.7125 22.3698 23.0292ZM21.2951 22.2166C23.7547 19.872 25.2902 16.5465 25.2902 12.8583C25.2902 9.17007 23.7547 5.84456 21.2951 3.5C18.8355 5.84456 17.3 9.17007 17.3 12.8583C17.3 16.5465 18.8355 19.872 21.2951 22.2166ZM12.7119 0.142883C15.6142 0.142883 18.2893 1.12664 20.4291 2.78244C17.7032 5.33686 16 8.96953 16 13C16 17.0305 17.7032 20.6632 20.4291 23.2176C18.2893 24.8734 15.6142 25.8572 12.7119 25.8572C5.6913 25.8572 0 20.1008 0 13C0 5.89922 5.6913 0.142883 12.7119 0.142883Z"/>
									</svg>
								</a></li>
							</ul>
						</div>

					</div>
				</div>
				<div className="bottom_block">
					<ul className="social">
						{
							socialArray.map((item, index) => {
								return (
									<li key={index}>
										<a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
									</li>
								)
							})
						}
					</ul>
					<ul className="stores">
						<li>
							<a href="https://crypterium.onelink.me/jtmZ/choisesiteheader" target="_blank" rel="noreferrer">
								<svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.8484 9.04057C11.8285 6.89287 13.652 5.84801 13.7354 5.79937C12.7027 4.33137 11.102 4.13079 10.5396 4.1148C9.19521 3.97686 7.89119 4.89911 7.20637 4.89911C6.50788 4.89911 5.45332 4.12813 4.31674 4.15078C2.85416 4.17277 1.48589 4.9984 0.735458 6.28048C-0.813241 8.89463 0.341791 12.7362 1.82556 14.8493C2.56779 15.8841 3.43509 17.0396 4.5703 16.999C5.68091 16.9543 6.09576 16.3086 7.43601 16.3086C8.76396 16.3086 9.15352 16.999 10.3113 16.973C11.5032 16.9543 12.2537 15.9334 12.9699 14.8892C13.8276 13.7031 14.1721 12.535 14.1858 12.475C14.1577 12.4657 11.8709 11.6147 11.8484 9.04057Z"/>
									<path d="M9.66133 2.72476C10.2587 1.99643 10.6674 1.00554 10.5539 0C9.68935 0.0373164 8.60813 0.583069 7.9855 1.29541C7.43464 1.92313 6.94256 2.95199 7.06968 3.91956C8.04086 3.99019 9.03802 3.44177 9.66133 2.72476Z"/>
								</svg>
								App Store
							</a>
						</li>
						<li>
							<a href="https://crypterium.onelink.me/jtmZ/choisesiteheader" target="_blank" rel="noreferrer">
								<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.296622 0.727884C0.108734 0.91965 0 1.21821 0 1.60486V15.3964C0 15.783 0.108734 16.0816 0.296622 16.2733L0.342994 16.3154L8.26944 8.59026V8.40785L0.342994 0.682673L0.296622 0.727884Z"/>
									<path d="M11.8658 11.166L9.22656 8.58966V8.40725L11.869 5.83089L11.9281 5.86441L15.0575 7.60043C15.9505 8.0931 15.9505 8.90381 15.0575 9.39959L11.9281 11.1325L11.8658 11.166Z"/>
									<path d="M11.4517 11.6126L8.75017 8.97856L0.777344 16.7528C1.07397 17.0569 1.55768 17.0935 2.10775 16.7895L11.4517 11.6126Z"/>
									<path d="M11.4517 5.38451L2.10775 0.207637C1.55768 -0.0932631 1.07397 -0.056626 0.777344 0.247392L8.75017 8.01855L11.4517 5.38451Z"/>
								</svg>
								Google Play
							</a>
						</li>
						<li className="open_wallet"><a href="https://crypterium.onelink.me/jtmZ/choisesiteheader" target="_blank" rel="noreferrer">{t.footer.get_wallet}</a></li>
					</ul>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.footer`
	margin-top: 70px;
	padding-bottom: 40px;
	@media only screen and (max-width: 600px) {
		margin-top: 50px;
	}
	&.hidden{
		display: none;
	}
	&.black{
		background: #191B20;
		margin-top: 0;
		.logo{
			@media only screen and (max-width: 1024px) {
				border-top: 1px solid #454A58;
			}
		}
		.cards_links svg{
			fill: #80889C;
		}
		.top_block{
			border-top: none;
		}
		.bottom_block{
			border-top: 1px solid #454A58;
			@media only screen and (max-width: 1024px) {
				border-top: none;
			}
		}
		.links a{
			color: #FFFFFF;
		}
		.description a{
			color: #fff;
		}
		.social a{
			color: #FFFFFF;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
				border: 1.5px solid #ffffff;
			}
		}
		.stores a{
			color: #fff;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
				border: 1.5px solid #ffffff;
			}
			svg{
				fill: #fff;
			}
		}
	}
	.top_block, .bottom_block{
		border-top: 1px solid #EEEEEE;
		padding-top: 70px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			border-top: none;
			padding-top: 0;
		}
	}
	.center_block{
		@media only screen and (max-width: 1024px) {
			display: flex;
			flex-direction: column-reverse;
		}
	}
	.bottom_block{
		margin-top: 40px;
		@media only screen and (max-width: 1024px) {
			flex-direction: column-reverse;
			align-items: center;
			margin-top: 0;
		}
	}
	.content{
		max-width: 895px;
		width: 100%;
		margin-left: 40px;
		@media only screen and (max-width: 1024px) {
			margin-left: 0;
			max-width: 100%;
			display: flex;
			flex-direction: column-reverse;
		}
	}
	.logo{
		@media only screen and (max-width: 1024px) {
			display: flex;
			justify-content: center;
			border-top: 1px solid #EEEEEE;
			padding-top: 40px;
		}
		@media only screen and (max-width: 600px) {
			justify-content: flex-start;
		}
	}
	.description{
		font-size: 12px;
		line-height: 150%;
		color: #A2A8B7;
		@media only screen and (max-width: 1024px) {
			margin-top: 30px;
		}
		p{
			margin-bottom: 5px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		a{
			color: #191B20;
			&:hover{
				color: #0285FD;
			}
		}
	}
	.links_block_wrapper{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	.cards_links{
		display: flex;
		align-items: center;
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
		li{
			margin-right: 20px;
			&:last-child{
				margin-right: 0;
			}
		}
		svg{
			fill: #393D49;
		}
	}
	.links{
		display: flex;
		@media only screen and (max-width: 1024px) {
			justify-content: center;
			flex-wrap: wrap;
		}
		@media only screen and (max-width: 600px) {
			justify-content: space-between;
		}
		li{
			margin-right: 40px;
			@media only screen and (max-width: 600px) {
				margin-right: 20px;
				&:last-child{
					margin-right: 0;
				}
			}
		}
		a{
			font-size: 12px;
			line-height: 150%;
			&:hover {
				color: #0285FD;
			}
		}
	}
	.social{
		display: flex;
		margin-bottom: -10px;
		@media only screen and (max-width: 1024px) {
			margin-top: 20px;
			flex-wrap: wrap;
		}
		@media only screen and (max-width: 600px) {
			justify-content: space-between;
			margin-top: 50px;
		}
		a{
			border: 1.5px solid #EBEBEB;
			border-radius: 120px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 8px 24px;
			height: 47px;
			font-weight: 500;
			font-size: 16px;
			line-height: 120%;
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
			&:hover{
				background: #191B20;
				color: #F9F9F9;
				border: 1.5px solid #191B20;
			}
		}
		li{
			margin-right: 7px;
			margin-bottom: 10px;
			@media only screen and (max-width: 600px) {
				margin-right: 0;
				width: calc(50% - 5px);
			}
		}
	}
	.stores{
		display: flex;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			margin-top: 20px;
		}
		@media only screen and (max-width: 600px) {
			flex-wrap: wrap;
			justify-content: space-between;
			margin-top: 50px;
		}
		li{
			margin-left: 7px;
			@media only screen and (max-width: 600px) {
				&:nth-child(1), &:nth-child(2){
					width: calc(50% - 5px);
					margin-left: 0;
				}
				&:nth-child(3){
					width: 100%;
					margin-top: 10px;
				}
			}
			&.open_wallet a{
				background: #191B20;
				color: #F9F9F9;
				@media only screen and (max-width: 600px) {
					width: 100%;
				}
				&:hover{
					background: #FFFB1F;
					border: 1.5px solid #FFFB1F;
					color: #191B20;
				}
			}
			a{
				border: 1.5px solid #EBEBEB;
				border-radius: 120px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				padding: 8px 24px;
				height: 47px;
				font-weight: 500;
				font-size: 16px;
				line-height: 120%;
				@media only screen and (max-width: 600px) {
					width: 100%;
				}
				&:hover{
					background: #191B20;
					color: #F9F9F9;
					border: 1.5px solid #191B20;
					svg {
						fill: #F9F9F9;
					}
				}
				svg{
					margin-right: 7px;
					fill: #191B20;
				}
			}
		}
	}
	.business_description{
		margin-bottom: 15px;
		p{
			margin-bottom: 15px;
		}
	}
`
