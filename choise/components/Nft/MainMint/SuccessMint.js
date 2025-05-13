import styled from "styled-components";
import numberFormat from "helpers/numberFormat";
import Image from "next/image";
import {useRouter} from "next/router";

export default function SuccessMint({total}) {
	const {locale} = useRouter()
	const {success_mint} = require(`locale/components/${locale}.json`)
	
	return (
		<Wrapper>
			<div className="total_heading">
				<h3>{success_mint.title}</h3>
				<div className="total">{numberFormat(total)}<br/>{success_mint.cho}</div>
			</div>
			<ul>
				<li>{success_mint.BNB_chain}</li>
				<li>{success_mint.minting_cost} = {process.env.MINT_PRICE} BNB</li>
			</ul>
			<div className="finish">
				<img src="/pic/nft/mint-finish.svg" alt="BSC minting finished"/>
			</div>
			<div className="background">
				<Image src="/pic/nft/finish-background.png" width={377} height={454} alt="Finish mint" priority={true}/>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	text-align: center;
	letter-spacing: -0.03em;
	position: relative;
	width: 100%;
	margin-bottom: -40px;
	min-height: 540px;
	border-radius: 500px 500px 24px 24px;
	padding: 40px;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	@media only screen and (max-width: 600px) {
		padding: 40px 30px;
	}
	.background{
		width: 100%;
		position: absolute;
		top: 40px;
		left: auto;
		right: auto;
		@media only screen and (max-width: 600px) {
			top: 0;
			padding: 10px;
		}
	}
	.total_heading{
		margin-top: 40px;
	}
	.total_heading, ul, .finish{
		position: relative;
		z-index: 10;
	}
	h3{
		font-size: 18px;
		line-height: 120%;
	}
	.total{
		margin-top: 17px;
		font-weight: 700;
		font-size: 42px;
		line-height: 100%;
	}
	ul{
		margin-top: 86px;
		li{
			font-size: 16px;
			line-height: 120%;
			margin-bottom: 5px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.finish{
		margin-top: 60px;
		@media only screen and (max-width: 600px) {
			margin-top: 70px;
		}
	}
`