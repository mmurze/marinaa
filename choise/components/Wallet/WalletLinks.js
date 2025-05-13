import styled from "styled-components";
import Link from "next/link";
import CenterBlock from "helpers/CenterBlock";
import {useRouter} from "next/router";

export default function WalletLinks({center = false, top = false}) {
	const {locale} = useRouter()
	const {wallet_links} = require(`locale/components/${locale}.json`)
	
	const {asPath} = useRouter()
	const renderNav = () => {
		let prev, next
		const index = wallet_links.array.findIndex(item => item.slug === asPath)
		if (wallet_links.array[index + 1]) {
			next = wallet_links.array[index + 1]
		} else next = wallet_links.array[0]
		if (wallet_links.array[index - 1]) {
			prev = wallet_links.array[index - 1]
		} else prev = wallet_links.array[wallet_links.array.length - 1]
		return (
			<ul>
				<li><Link href={prev.slug} className="back_button">
					<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M5.24264 11.3038L0.469669 6.5308C0.176776 6.23791 0.176776 5.76303 0.469669 5.47014L5.24264 0.697167C5.53553 0.404274 6.01041 0.404274 6.3033 0.697167C6.59619 0.99006 6.59619 1.46493 6.3033 1.75783L2.81066 5.25047L14 5.25047C14.4142 5.25047 14.75 5.58625 14.75 6.00047C14.75 6.41468 14.4142 6.75047 14 6.75047L2.81066 6.75047L6.3033 10.2431C6.59619 10.536 6.59619 11.0109 6.3033 11.3038C6.01041 11.5967 5.53553 11.5967 5.24264 11.3038Z" fill="#191B20"/>
					</svg>
				</Link></li>
				<li>
					<Link href={next.slug} className="next_link">
						{next.title}
						<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M9.75736 0.696232L14.5303 5.4692C14.8232 5.7621 14.8232 6.23697 14.5303 6.52986L9.75736 11.3028C9.46447 11.5957 8.98959 11.5957 8.6967 11.3028C8.40381 11.0099 8.40381 10.5351 8.6967 10.2422L12.1893 6.74953L1 6.74953C0.585787 6.74953 0.250001 6.41375 0.25 5.99953C0.25 5.58532 0.585787 5.24953 1 5.24953L12.1893 5.24953L8.6967 1.75689C8.40381 1.464 8.40381 0.989125 8.6967 0.696232C8.98959 0.403338 9.46447 0.403338 9.75736 0.696232Z" fill="#191B20"/>
						</svg>
					</Link>
				</li>
			</ul>
		)
	}
	return (
		<Wrapper className={`${center ? "center" : ""} ${top ? "top" : ""}`}>
			<CenterBlock>
				<ul className="desktop">
					{
						wallet_links.array.map((item, index) => {
							return (
								<li
									className={asPath === item.slug ? "active" : ""}
									key={index}>
									<Link href={item.slug}>{item.title}</Link>
								</li>
							)
						})
					}
				</ul>
				<div className="mobile_nav">
					{renderNav()}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	position: relative;
	z-index: 10;
	@media only screen and (max-width: 768px) {
		margin-top: 40px;
	}
	&.top{
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	&.center{
		.center_block{
			display: flex;
			justify-content: center;
		}
	}
	a{
		font-size: 14px;
		line-height: 17px;
		color: #7B8199;
	}
	.desktop{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -10px;
		@media only screen and (max-width: 768px) {
			display: none;
		}
		li{
			margin-right: 40px;
			margin-bottom: 10px;
			&.active a{
				color: #0285FD;
			}
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.mobile_nav{
		display: none;
		@media only screen and (max-width: 768px) {
			display: flex;
		}
		ul{
			display: flex;
			align-items: center;
		}
	}
	.back_button{
		background: #F0F0F0;
		width: 56px;
		height: 56px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.next_link{
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 16px 40px;
		background: #FFFB1F;
		border-radius: 40px;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		color: #191B20;
		margin-left: 20px;
		svg{
			margin-left: 10px;
		}
	}
`