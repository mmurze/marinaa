import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import WalletDeepLink from "components/Wallet/WalletDeepLink";
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function WalletMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h1>{t.title}</h1></Title>
				<p className="description">{t.description}</p>
				<WalletDeepLink slug="https://crpt.onelink.me/WpQ0/9ttg63v3" link="Get a free wallet"/>
				<div className="image">
					<Responsive width={600} mobile={
						<Image src="/pic/wallet/wallet-main-mob.jpg" width={375} height={460} alt="ultimate multi crypto wallet" priority={true}/>
					}>
						<Image src="/pic/wallet/wallet-main.jpg" width={1205} height={741.48} alt="ultimate multi crypto wallet" priority={true}/>
					</Responsive>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 70px;
	@media only screen and (max-width: 768px) {
		margin-top: 100px;
	}
	.title{
		text-align: center;
		position: relative;
		z-index: 10;
	}
	.image{
		margin-top: -120px;
		@media only screen and (max-width: 1024px) {
			margin-top: -60px;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
			display: flex;
			justify-content: center;
		}
	}
	.description{
		max-width: 865px;
		width: 100%;
		text-align: center;
		margin: 40px auto 0 auto;
		font-size: 18px;
		line-height: 150%;
		color: #7B8199;
		position: relative;
		z-index: 10;
	}
`