import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function NftBenefits({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="main_block">
					<h2>{t.title}</h2>
					<p>{t.description}</p>
					<div className="main_block_image">
						<Image src="/pic/nft/benefits-main.jpg" width={656} height={556} alt="CHO MetaFi Collection" priority={true}/>
					</div>
				</div>
				<div className="list">
					<div className="item">
						<h3>{t.cefi.title}</h3>
						<p>{t.cefi.description}</p>
						<div className="image">
							<Image src="/pic/nft/benefits-item-1.png" width={91} height={105} alt="CeFi inside DeFi" priority={true}/>
						</div>
					</div>
					<div className="item">
						<h3><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M14.9997 6.78045L9.17373 12.6063L5.78389 9.2163L14.9997 0L24.2187 9.2193L20.8287 12.6093L14.9997 6.78045ZM3.39009 11.6094L0 14.9995L3.3899 18.3894L6.77996 14.9993L3.39009 11.6094ZM14.9997 23.2195L9.17373 17.3937L5.77879 20.7792L5.78359 20.784L14.9997 30L24.2187 20.7808L24.2203 20.779L20.8285 17.3909L14.9997 23.2195ZM26.6101 11.6113L23.22 15.0014L26.6099 18.3913L30 15.0012L26.6101 11.6113ZM18.9494 14.9974H18.9477L18.9513 14.9993L18.9494 15.0016L14.9998 18.9512L11.0539 15.005L11.0483 14.9993L11.0539 14.994L11.7455 14.3022L12.0808 13.9667H12.081L14.9998 11.0479L18.9494 14.9974Z" fill="#191B20"/>
						</svg>
							{t.bnb.title}</h3>
						<p>{t.bnb.description}</p>
						<div className="image_top">
							<Image src="/pic/nft/benefits-item-2-1.png" width={77} height={46} alt="NFT CHO Collection is built on the BSC" priority={true}/>
						</div>
						<div className="image">
							<Image src="/pic/nft/benefits-item-2-2.png" width={192} height={191} alt="Binance Smart Chain" priority={true}/>
						</div>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.main_block, .item{
		border-radius: 50px;
		padding: 50px 40px;
		letter-spacing: -0.03em;
		position: relative;
	}
	.main_block{
		padding: 50px 40px 0 40px;
		overflow: hidden;
	}
	.main_block_image{
		margin-left: -40px;
		margin-right: -40px;
		line-height: 0;
		position: absolute;
		bottom: 0;
		@media only screen and (max-width: 600px) {
			position: relative;
			margin-top: -100px;
		}
	}
	h2{
		font-size: 48px;
		line-height: 110%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 110%;
		}
	}
	h3{
		font-size: 38px;
		line-height: 110%;
		position: relative;
		z-index: 10;
		display: flex;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 110%;
		}
		svg{
			margin-right: 10px;
			position: relative;
			top: 5px;
		}
	}
	p{
		margin-top: 30px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
			font-size: 16px;
			line-height: 130%;
		}
	}
	.main_block{
		max-width: 656px;
		width: 100%;
		background: #191B20;
		color: #F9F9F9;
		@media only screen and (max-width: 1140px) {
			max-width: 50%;
		}
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
		p{
			font-size: 24px;
			line-height: 130%;
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				line-height: 130%;
			}
		}
	}
	.list{
		width: calc(100% - 656px);
		padding-left: 20px;
		@media only screen and (max-width: 1140px) {
			width: 50%;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			padding-left: 0;
			margin-top: 20px;
		}
	}
	.image{
		line-height: 0;
	}
	.item{
		background: #F7F7F7;
		margin-bottom: 20px;
		min-height: 268px;
		&:first-child{
			.image{
				position: absolute;
				top: 70px;
				right: 0;
			}
		}
		&:last-child{
			margin-bottom: 0;
			.image_top{
				position: absolute;
				top: 0;
				right: 80px;
			}
			.image{
				position: absolute;
				bottom: 0;
				right: 0;
			}
		}
		p{
			max-width: 309px;
			width: 100%;
			font-size: 16px;
			line-height: 140%;
		}
	}
`