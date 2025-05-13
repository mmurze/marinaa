import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import ChoExchangesStoreButtons from "layouts/ChoExchanges/ChoExchangesStoreButtons";
import Responsive from "helpers/Responsive";
export default function ChoExchangesBanner({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="content">
						<h2>{t.title}</h2>
						<ChoExchangesStoreButtons/>
					</div>
					<div className="image">
						<Responsive width={820} mobile={
							<Image src="/pic/cho-exchanges/banner-image-mob.png" width={800} height={800} priority={true} alt="buy cho with zero fee"/>
						}>
							<Image src="/pic/cho-exchanges/banner-image.jpg" layout="fill" objectFit="contain" objectPosition="center right" priority={true} alt="buy cho with zero fee"/>
						</Responsive>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 30px;
	@media only screen and (max-width: 600px) {
		margin-top: 0;
	}
	.banner{
		background: #202423;
		border-radius: 24px;
		position: relative;
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		padding: 60px 100px;
		@media only screen and (max-width: 1024px) {
			padding: 60px 40px;
			margin-left: -40px;
			margin-right: -40px;
			border-radius: 0;
		}
		@media only screen and (max-width: 820px) {
			margin-left: -20px;
			margin-right: -20px;
			flex-direction: column;
			justify-content: flex-start;
			padding: 60px 40px 0 40px;
		}
		@media only screen and (max-width: 600px) {
			padding: 50px 20px 0 20px;
		}
	}
	.content{
		width: 410px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	h2{
		font-size: 90px;
		line-height: 100%;
		color: #F9F9F9;
		@media only screen and (max-width: 600px) {
			font-size: 46px;
			line-height: 100%;
		}
	}
	.image{
		line-height: 0;
	}
	.store_list{
		margin-top: 70px;
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
	}
`