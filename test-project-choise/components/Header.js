import styled from "styled-components";
import a from "next/link";
import {useRouter} from "next/router";
import Link from "next/link";
import CenterBlock from "helpers/CenterBlock";
import {state} from "state"
import Responsive from "helpers/Responsive";

export default function Header() {
	const {locale, asPath} = useRouter()
	const t = require(`locale/components/header/${locale}.json`)
	const array=["en", "ru"]
	
	return (
		<Wrapper>
			<CenterBlock width={1350}>
				<Link href={"/"}>
					<img src="/pic/logo.svg" alt="logo" height={25}/>
				</Link>
				<Responsive width={1060}>
					<div className="links">
						<Link className={`/${asPath.split('/')[1]}` === "/about" ? 'active' : ''} href="/about">{t.about}</Link>
						<a href="#" target="_blank" rel="noreferrer" className="border">{t.documentation}</a>
						<a href="#" target="_blank" rel="noreferrer" className="gradient">{t.open_link}</a>
						<a href="#" target="_blank" rel="noreferrer" className="circle_icon markets">
							<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.10797 0.20738L11.452 5.38426L8.75039 8.0183L0.777565 0.247136C1.07419 -0.0568822 1.5579 -0.0935192 2.10797 0.20738ZM0.000244141 1.60438C0.000244141 1.21773 0.108978 0.919169 0.296866 0.727404L0.343238 0.682192L8.26968 8.40736V8.58978L0.343238 16.3149L0.296866 16.2729C0.108978 16.0811 0.000244141 15.7825 0.000244141 15.3959V1.60438ZM9.22641 8.58954L11.8656 11.1659L11.928 11.1324L15.0573 9.39947C15.9504 8.90369 15.9504 8.09297 15.0573 7.60031L11.928 5.86429L11.8688 5.83077L9.22641 8.40712V8.58954ZM11.452 11.6122L8.75039 8.97819L0.777565 16.7525C1.07419 17.0565 1.5579 17.0931 2.10797 16.7891L11.452 11.6122Z"/>
							</svg>
						</a>
						<a href="#" target="_blank" rel="noreferrer" className="circle_icon markets">
							<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.8464 9.04057C12.8266 6.89287 14.65 5.84801 14.7334 5.79937C13.7007 4.33137 12.1001 4.13079 11.5376 4.1148C10.1933 3.97686 8.88924 4.89911 8.20442 4.89911C7.50593 4.89911 6.45137 4.12813 5.31479 4.15078C3.8522 4.17277 2.48393 4.9984 1.73351 6.28048C0.184806 8.89463 1.33984 12.7362 2.82361 14.8493C3.56584 15.8841 4.43314 17.0396 5.56835 16.999C6.67896 16.9543 7.09381 16.3086 8.43406 16.3086C9.762 16.3086 10.1516 16.999 11.3093 16.973C12.5013 16.9543 13.2517 15.9334 13.968 14.8892C14.8257 13.7031 15.1701 12.535 15.1838 12.475C15.1558 12.4657 12.869 11.6147 12.8464 9.04057Z" />
								<path d="M10.6594 2.72476C11.2567 1.99643 11.6654 1.00554 11.552 0C10.6874 0.0373164 9.60618 0.583069 8.98355 1.29541C8.43269 1.92313 7.94061 2.95199 8.06773 3.91956C9.03891 3.99019 10.0361 3.44177 10.6594 2.72476Z"/>
							</svg>
						</a>
						{
							array.map((item, index) => {
								return(
									<Link
										className={locale === item ? "active_language" : ""}
										href={asPath}
										locale={item}
										key={index}>{item}</Link>
								)
							})
						}
						<a href="#" target="_blank" rel="noreferrer" className="circle_icon border">
							<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14.8333 3.83333H14V3C14 2.33696 13.7366 1.70107 13.2677 1.23223C12.7989 0.763392 12.163 0.5 11.5 0.5H3.16663C2.50358 0.5 1.8677 0.763392 1.39886 1.23223C0.930018 1.70107 0.666626 2.33696 0.666626 3V3V13C0.666626 13.663 0.930018 14.2989 1.39886 14.7678C1.8677 15.2366 2.50358 15.5 3.16663 15.5H14.8333C15.4963 15.5 16.1322 15.2366 16.6011 14.7678C17.0699 14.2989 17.3333 13.663 17.3333 13V6.33333C17.3333 5.67029 17.0699 5.03441 16.6011 4.56557C16.1322 4.09673 15.4963 3.83333 14.8333 3.83333ZM3.16663 2.16667H11.5C11.721 2.16667 11.9329 2.25446 12.0892 2.41074C12.2455 2.56702 12.3333 2.77899 12.3333 3V3.83333H3.16663C2.94561 3.83333 2.73365 3.74554 2.57737 3.58926C2.42109 3.43298 2.33329 3.22101 2.33329 3C2.33329 2.77899 2.42109 2.56702 2.57737 2.41074C2.73365 2.25446 2.94561 2.16667 3.16663 2.16667V2.16667ZM15.6666 10.5H14.8333C14.6123 10.5 14.4003 10.4122 14.244 10.2559C14.0878 10.0996 14 9.88768 14 9.66667C14 9.44565 14.0878 9.23369 14.244 9.07741C14.4003 8.92113 14.6123 8.83333 14.8333 8.83333H15.6666V10.5ZM15.6666 7.16667H14.8333C14.1703 7.16667 13.5344 7.43006 13.0655 7.8989C12.5967 8.36774 12.3333 9.00363 12.3333 9.66667C12.3333 10.3297 12.5967 10.9656 13.0655 11.4344C13.5344 11.9033 14.1703 12.1667 14.8333 12.1667H15.6666V13C15.6666 13.221 15.5788 13.433 15.4225 13.5893C15.2663 13.7455 15.0543 13.8333 14.8333 13.8333H3.16663C2.94561 13.8333 2.73365 13.7455 2.57737 13.5893C2.42109 13.433 2.33329 13.221 2.33329 13V5.35833C2.60102 5.45251 2.88282 5.50042 3.16663 5.5H14.8333C15.0543 5.5 15.2663 5.5878 15.4225 5.74408C15.5788 5.90036 15.6666 6.11232 15.6666 6.33333V7.16667Z" />
							</svg>
						</a>
					</div>
				</Responsive>
				<button className="mobile_nav"
								onClick={() => state.mobNav = !state.mobNav}>
					<span/>
					<span/>
					<span/>
				</button>
			</CenterBlock>
		</Wrapper>
	)
}


const Wrapper = styled.header`
	position: fixed;
	width: 100%;
	background: #fff;
	z-index: 999;
	.center_block{
		display: flex;
		justify-content: space-between;
		margin: 10px auto;
		align-items: center;
	}
	.links {
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 10px;
		a{
			border-radius: 30px;
			min-height: 40px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 0 20px;
			font-weight: 500;
			font-size: 16px;
			line-height: 120%;
			letter-spacing: -0.03em;
			&.active{
				color: #325ABE;
			}
			&.active_language{
				background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
			}
			&.circle_icon{
				position: relative;
				width: 40px;
				height: 40px;
				svg{
					position: absolute;
					fill: #80889C;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					&:hover{
						fill: aquamarine;
					}
				}
				&:hover{
					background: coral;
				}
				&:last-child{
					margin-left: 30px;
				}
			}
			&.markets{
				background: #F6F7F8;
			}
			&.border {
				border: 2px solid #F6F7F8;
				svg {
					fill: #000000;
				}
			}
			&.gradient{
				background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
			}
		}
	}
	.mobile_nav{
		width: 34px;
		height: 40px;
		flex-direction: column;
		gap: 10px;
		display: none;
		@media only screen and (max-width: 1060px) {
			display: flex;
		}
		span{
			width: 100%;
			height: 2px;
			background: #5CEE9C;
			border-radius: 2px;
			&:nth-child(even){
				background: #FFEF21;
			}
		}
	}
`