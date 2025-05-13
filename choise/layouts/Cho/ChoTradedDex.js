import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function ChoTradedDex() {
	return (
		<Wrapper>
			<CenterBlock>
				<Title center={true}><h2>CHO traded on DEXs</h2></Title>
				<div className="list_box">
					<div className="list">
						<div className="item uniswap">
							<a href="https://info.uniswap.org/#/tokens/0xbba39fd2935d5769116ce38d46a71bde9cf03099" target="_blank" rel="noreferrer nofollow">uniswap</a>
							<img src="/pic/cho/cho-uniswap.svg" alt="uniswap"/>
						</div>
						<div className="item raydium">
							<a href="https://choisecom.medium.com/how-to-trade-cho-on-raydium-dex-exchange-2dcf543909ad" target="_blank" rel="noreferrer nofollow">raydium</a>
							<img src="/pic/cho/cho-raydium.svg" alt="raydium"/>
						</div>
					</div>
					<div className="icon">
						<Image src="/pic/cho/cho-traded.png" width={147} height={144} priority={true} alt="CHO traded on DEXs"/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.list{
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	.list_box{
		position: relative;
	}
	.item{
		width: calc(50% - 5px);
		height: 190px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 24px;
		background-size: cover;
		position: relative;
		padding: 40px;
		@media only screen and (max-width: 820px) {
			padding: 90px;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			height: 108px;
			padding: 20px 80px;
		}
		&.uniswap{
			background-image: url("/pic/cho/cho-uniswap-bg.jpg");
		}
		&.raydium{
			background-image: url("/pic/cho/cho-raydium-bg.jpg");
			@media only screen and (max-width: 600px) {
				margin-top: 20px;
			}
		}
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 10;
			font-size: 0;
		}
		img{
			transition: all .3s ease-in-out;
		}
		&:hover{
			img{
				transform: scale(1.05);
				transition: all .3s ease-in-out;
			}
		}
	}
	.icon{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
`