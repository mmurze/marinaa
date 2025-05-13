import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import WalletDeepLink from "components/Wallet/WalletDeepLink";
import {useState} from "react";
import Image from "next/image";

export default function SecurityFeatures({t}) {
	const [active, setActive] = useState(0)
	
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<WalletDeepLink slug="https://crpt.onelink.me/WpQ0/9ttg63v3" link="Get a free wallet"/>
				<div className="slider_block">
					{
						t.array.map((item, index) => {
							return (
								<div className={`item ${active === index ? "active" : ""}`} key={index}>
									<div className="content">
										<div className="top">
											<p className="active_item">0{active + 1}</p>
											<h3>{item.title}</h3>
											<p className="description">{item.description}</p>
										</div>
										<div className="buttons_list">
											<button onClick={() => setActive(active - 1)} disabled={active === 0}>
												<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M5.64322 0.696722L0.870255 5.46969C0.577361 5.76259 0.577361 6.23746 0.870255 6.53035L5.64323 11.3033C5.93612 11.5962 6.41099 11.5962 6.70389 11.3033C6.99678 11.0104 6.99678 10.5356 6.70389 10.2427L3.21124 6.75002L14.6006 6.75002C15.0148 6.75002 15.3506 6.41424 15.3506 6.00002C15.3506 5.58581 15.0148 5.25002 14.6006 5.25002L3.21124 5.25002L6.70389 1.75738C6.99678 1.46449 6.99678 0.989615 6.70389 0.696722C6.41099 0.403829 5.93612 0.403829 5.64322 0.696722Z"/>
												</svg>
											</button>
											<p>0{active + 1}/0{t.array.length}</p>
											<button onClick={() => setActive(active + 1)} disabled={active === t.array.length - 1}>
												<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M10.3578 0.696722L15.1307 5.46969C15.4236 5.76259 15.4236 6.23746 15.1307 6.53035L10.3578 11.3033C10.0649 11.5962 9.58998 11.5962 9.29709 11.3033C9.0042 11.0104 9.0042 10.5356 9.29709 10.2427L12.7897 6.75002L1.40039 6.75002C0.986177 6.75002 0.65039 6.41424 0.65039 6.00002C0.65039 5.58581 0.986177 5.25002 1.40039 5.25002L12.7897 5.25002L9.29709 1.75738C9.0042 1.46449 9.0042 0.989615 9.29709 0.696722C9.58998 0.403829 10.0649 0.403829 10.3578 0.696722Z"/>
												</svg>
											</button>
										</div>
									</div>
									<div className="image">
										<Image src={item.image} width={582} height={479} alt={item.title} priority={true}/>
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
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 80px;
	}
	.title{
		text-align: center;
		margin: 0 auto;
		max-width: 669px;
		width: 100%;
	}
	.wallet_deep_link{
		margin-top: 50px;
	}
	.slider_block{
		margin-top: 65px;
		@media only screen and (max-width: 1024px) {
			display: flex;
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 65px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
		}
	}
	.item{
		display: none;
		justify-content: space-between;
		min-height: 539px;
		background: #F6F7F8;
		border-radius: 50px;
		padding: 60px 80px 0 80px;
		@media only screen and (max-width: 1024px) {
			display: flex;
			width: 400px;
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
			flex-direction: column;
			justify-content: flex-start;
			padding: 30px 30px 0 30px;
			&:last-child {
				margin-right: 0;
			}
		}
		@media only screen and (max-width: 820px) {
			width: 320px;
			border-radius: 26px;
		}
		&.active{
			display: flex;
		}
	}
	.active_item{
		font-size: 14px;
		line-height: 120%;
		color: #656D81;
	}
	h3{
		font-weight: 700;
		font-size: 30px;
		line-height: 120%;
		max-width: 316px;
		width: 100%;
		margin-top: 20px;
	}
	.content{
		width: 378px;
		padding-bottom: 70px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		@media only screen and (max-width: 1024px) {
			width: 100%;
			padding-bottom: 40px;
		}
	}
	.description{
		margin-top: 20px;
		font-size: 16px;
		line-height: 150%;
		color: #80889C;
		@media only screen and (max-width: 820px) {
			font-size: 14px;
			line-height: 150%;
		}
	}
	.buttons_list{
		margin-top: 50px;
		display: flex;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
		p{
			font-size: 14px;
			line-height: 26px;
			margin: 0 20px;
			text-align: center;
			width: 45px;
		}
		button{
			width: 42px;
			height: 42px;
			border-radius: 50%;
			background: #FFFB1F;
			border: 1px solid #FFFB1F;
			&:disabled{
				cursor: default;
				background: transparent;
				border: 1px solid #DDDFE4;
			}
			svg{
				fill: #191B20;
			}
		}
	}
	.image{
		line-height: 0;
		margin-top: auto;
		margin-left: 40px;
		@media only screen and (max-width: 1024px) {
			margin-left: 0;
		}
	}
`