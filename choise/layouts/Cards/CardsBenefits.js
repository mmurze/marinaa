import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import AvailableCountriesModal from "components/AvailableCountriesModal";

export default function CardsBenefits({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="block_list">
					<div className="item">
						<div className="count">50 000+</div>
						<p>{t.description_1}</p>
						<div className="image">
							<Image src="/pic/cards/cards-benefits-1.png" width={232} height={268} priority={true} alt="cards issued and counting..."/>
						</div>
					</div>
					<div className="item">
						<div className="count">2 000 000+</div>
						<p>{t.description_2}</p>
						<div className="image">
							<Image src="/pic/cards/cards-benefits-2.png" width={221} height={268} priority={true} alt="transactions processed monthly"/>
						</div>
					</div>
				</div>
				<div className="countries_block">
					<div className="top">
						<div className="count">30</div>
						<p>{t.description_3}</p>
					</div>
					<div className="button_box">
						<AvailableCountriesModal/>
					</div>
					<div className="globe">
						<Image src="/pic/cards/countries-globe.png" width={386} height={441} priority={true} alt="european countries available for order"/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 1024px) {
		margin-top: 80px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
		}
	}
	.top{
		position: relative;
		z-index: 10;
	}
	.block_list{
		width: 488px;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
		.item{
			background: #F6F7F8;
			border-radius: 50px;
			height: 268px;
			padding: 60px 40px;
			position: relative;
			overflow: hidden;
			@media only screen and (max-width: 600px) {
				height: auto;
				border-radius: 10px;
			}
			&:last-child{
				margin-top: 20px;
			}
			.image{
				position: absolute;
				bottom: 0;
				right: 0;
				line-height: 0;
				@media only screen and (max-width: 600px) {
					right: -60px;
					bottom: -40px;
				}
			}
			.count{
				font-weight: 700;
				font-size: 38px;
				line-height: 110%;
				position: relative;
				z-index: 10;
			}
			p{
				font-size: 16px;
				line-height: 140%;
				margin-top: 20px;
				position: relative;
				z-index: 10;
				@media only screen and (max-width: 820px) {
					font-size: 30px;
				}
				@media only screen and (max-width: 600px) {
					font-size: 16px;
					line-height: 120%;
					margin-top: 10px;
					max-width: 135px;
					width: 100%;
				}
			}
		}
	}
	.globe{
		position: absolute;
		bottom: 60px;
		right: 0;
		@media only screen and (max-width: 1024px) {
			right: -200px;
			bottom: -40px;
		}
		@media only screen and (max-width: 1024px) {
			border-radius: 10px;
		}
	}
	.countries_block{
		width: calc(100% - 488px - 20px);
		background: #191B20 url("/pic/cards/countries-background.jpg");
		background-size: cover;
		border-radius: 50px;
		padding: 50px 40px;
		color: #F9F9F9;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-top: 20px;
		}
		@media only screen and (max-width: 600px) {
			border-radius: 10px;
			padding: 20px;
		}
		.count{
			font-weight: 700;
			font-size: 90px;
			line-height: 110%;
			@media only screen and (max-width: 600px) {
				font-size: 38px;
				line-height: 110%;
			}
		}
		p{
			font-weight: 700;
			font-size: 48px;
			line-height: 100%;
			max-width: 251px;
			width: 100%;
			margin-top: 13px;
			@media only screen and (max-width: 820px) {
				max-width: 600px;
			}
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				line-height: 120%;
				max-width: 200px;
			}
		}
	}
`