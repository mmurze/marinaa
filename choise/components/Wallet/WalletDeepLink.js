import styled from "styled-components";
import Responsive from "helpers/Responsive";
import {useRouter} from "next/router";

export default function WalletDeepLink({link, slug = "https://app.crypterium.com"}) {
	const {locale} = useRouter()
	const {wallet_deep_link} = require(`locale/components/${locale}.json`)
	
	return (
		<Wrapper className="wallet_deep_link">
			<Responsive width={600} mobile={
				<>
					<li>
						<a className="round" rel="noreferrer nofollow" target="_blank" href={slug}>
							<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.7879 13.0572C16.7602 10.0504 19.313 8.58761 19.4297 8.51951C17.984 6.46431 15.7431 6.1835 14.9556 6.16111C13.0735 5.968 11.2479 7.25915 10.2891 7.25915C9.31123 7.25915 7.83484 6.17977 6.24363 6.21149C4.19601 6.24227 2.28044 7.39815 1.22984 9.19307C-0.938342 12.8529 0.678703 18.2311 2.75598 21.1894C3.7951 22.6382 5.00932 24.2558 6.59862 24.1989C8.15347 24.1364 8.73426 23.2324 10.6106 23.2324C12.4697 23.2324 13.0151 24.1989 14.636 24.1625C16.3047 24.1364 17.3553 22.7072 18.3581 21.2453C19.5589 19.5848 20.0411 17.9494 20.0603 17.8654C20.021 17.8523 16.8195 16.661 16.7879 13.0572Z"/>
								<path d="M13.7261 4.21506C14.5623 3.19539 15.1345 1.80815 14.9757 0.400391C13.7653 0.452634 12.2516 1.21669 11.3799 2.21397C10.6087 3.09277 9.91978 4.53318 10.0977 5.88777C11.4574 5.98666 12.8534 5.21887 13.7261 4.21506Z"/>
							</svg>
						</a>
					</li>
					<li>
						<a className="round" rel="noreferrer nofollow" target="_blank" href={slug}>
							<svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M3.55006 1.09082L16.6317 8.33845L12.8495 12.0261L1.6875 1.14648C2.10277 0.720854 2.77996 0.669561 3.55006 1.09082ZM0.599609 3.04703C0.599609 2.50572 0.751837 2.08774 1.01488 1.81927L1.0798 1.75597L12.1768 12.5712V12.8266L1.0798 23.6418L1.01488 23.5829C0.751837 23.3144 0.599609 22.8964 0.599609 22.3551V3.04703ZM13.5166 12.8259L17.2115 16.4328L17.2988 16.3859L21.6799 13.9599C22.9302 13.2658 22.9302 12.1308 21.6799 11.441L17.2988 9.0106L17.216 8.96367L13.5166 12.5706V12.8259ZM16.6317 17.058L12.8495 13.3703L1.6875 24.2543C2.10277 24.6799 2.77996 24.7312 3.55006 24.3056L16.6317 17.058Z"/>
							</svg>
						</a>
					</li>
					<li>
						<a className="button_wallet" rel="noreferrer nofollow" target="_blank" href={slug}>
							{link}
						</a>
					</li>
				</>
			}>
				<li className="qr_modal">
					<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.7879 13.0572C16.7602 10.0504 19.313 8.58761 19.4297 8.51951C17.984 6.46431 15.7431 6.1835 14.9556 6.16111C13.0735 5.968 11.2479 7.25915 10.2891 7.25915C9.31123 7.25915 7.83484 6.17977 6.24363 6.21149C4.19601 6.24227 2.28044 7.39815 1.22984 9.19307C-0.938342 12.8529 0.678703 18.2311 2.75598 21.1894C3.7951 22.6382 5.00932 24.2558 6.59862 24.1989C8.15347 24.1364 8.73426 23.2324 10.6106 23.2324C12.4697 23.2324 13.0151 24.1989 14.636 24.1625C16.3047 24.1364 17.3553 22.7072 18.3581 21.2453C19.5589 19.5848 20.0411 17.9494 20.0603 17.8654C20.021 17.8523 16.8195 16.661 16.7879 13.0572Z"/>
						<path d="M13.7261 4.21506C14.5623 3.19539 15.1345 1.80815 14.9757 0.400391C13.7653 0.452634 12.2516 1.21669 11.3799 2.21397C10.6087 3.09277 9.91978 4.53318 10.0977 5.88777C11.4574 5.98666 12.8534 5.21887 13.7261 4.21506Z"/>
					</svg>
					<span className="qr_modal_block">
						<p>
							<img src="/pic/choise-qr.svg" alt="Choise QR Google play"/>
							{wallet_deep_link.scan}
						</p>
					</span>
				</li>
				<li className="qr_modal">
					<svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M3.55006 1.09082L16.6317 8.33845L12.8495 12.0261L1.6875 1.14648C2.10277 0.720854 2.77996 0.669561 3.55006 1.09082ZM0.599609 3.04703C0.599609 2.50572 0.751837 2.08774 1.01488 1.81927L1.0798 1.75597L12.1768 12.5712V12.8266L1.0798 23.6418L1.01488 23.5829C0.751837 23.3144 0.599609 22.8964 0.599609 22.3551V3.04703ZM13.5166 12.8259L17.2115 16.4328L17.2988 16.3859L21.6799 13.9599C22.9302 13.2658 22.9302 12.1308 21.6799 11.441L17.2988 9.0106L17.216 8.96367L13.5166 12.5706V12.8259ZM16.6317 17.058L12.8495 13.3703L1.6875 24.2543C2.10277 24.6799 2.77996 24.7312 3.55006 24.3056L16.6317 17.058Z"/>
					</svg>
					<span className="qr_modal_block">
						<p>
							<img src="/pic/choise-qr.svg" alt="Choise QR Google play"/>
							{wallet_deep_link.scan}
						</p>
					</span>
				</li>
				<li>
					<a className="button_wallet" rel="noreferrer nofollow" target="_blank" href={slug}>
						{link}
					</a>
				</li>
			</Responsive>
		</Wrapper>
	)
}

const Wrapper = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30px;
	position: relative;
	z-index: 10;
	.round, .qr_modal{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 56px;
		height: 56px;
		border: 1px solid #EBEBEB;
		background: #F9F9F9;
		border-radius: 50%;
		margin-right: 10px;
		&:hover{
			svg{
				fill: #0285FD;
				transition: all .3s ease-in-out;
			}
		}
		svg{
			fill: #7B8199;
			transition: all .3s ease-in-out;
		}
	}
	.button_wallet{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 56px;
		padding: 16px 40px;
		background: #FFFB1F;
		border-radius: 40px;
		font-size: 14px;
		line-height: 24px;
		&:hover{
			background: #0285FD;
			color: #F9F9F9;
		}
	}
	.qr_modal{
		position: relative;
		&:hover{
			.qr_modal_block{
				opacity: 1;
				visibility: visible;
				transition: all .3s ease-in-out;
				bottom: 0;
			}
		}
	}
	.qr_modal_block{
		position: absolute;
		bottom: 20px;
		padding-bottom: 70px;
		left: 0;
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