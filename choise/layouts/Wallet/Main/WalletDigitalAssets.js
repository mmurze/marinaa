import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import FeaturedMedia from "components/FeaturedMedia";
import {useRouter} from "next/router";
import htmlContent from "helpers/htmlContent";

export default function WalletDigitalAssets({featuredMedia = true}) {
	const {locale} = useRouter()
	const {wallet_digital_assets} = require(`locale/components/${locale}.json`)
	
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h2>{wallet_digital_assets.title}</h2></Title>
					<p className="description">{wallet_digital_assets.description}</p>
				</div>
				<div className="image">
					<Image src="/pic/wallet/digital-assets.jpg" width={555} height={330} alt="1,000,000 clients entrust their digital assets to us" priority={true}/>
					<ul className="eu_list">
						{
							wallet_digital_assets.array.map((item ,index) =>{
								return(
									<li key={index}>{htmlContent(item.image)}{item.title}</li>
								)
							})
						}
					</ul>
				</div>
			</CenterBlock>
			{featuredMedia && <FeaturedMedia/>}
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
		}
	}
	.content{
		width: 407px;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	.image{
		width: calc(100% - 407px);
		padding-left: 60px;
		display: flex;
		align-items: flex-end;
		position: relative;
		@media only screen and (max-width: 820px) {
			width: 100%;
			padding-left: 0;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			margin-top: 40px;
		}
	}
	.description{
		font-size: 16px;
		line-height: 150%;
		color: #7B8199;
		margin-top: 60px;
		@media only screen and (max-width: 820px) {
			max-width: 500px;
			width: 100%;
			margin: 60px auto 0 auto;
			text-align: center;
		}
		@media only screen and (max-width: 600px) {
			text-align: left;
		}
	}
	.title{
		@media only screen and (max-width: 820px) {
			text-align: center;
			max-width: 500px;
			width: 100%;
			margin: 0 auto;
		}
	}
	.eu_list{
		position: absolute;
		right: 0;
		@media only screen and (max-width: 820px) {
			position: relative;
			margin-top: 40px;
			display: flex;
		}
		li{
			display: flex;
			align-items: center;
			margin-bottom: 10px;
			@media only screen and (max-width: 820px) {
				margin: 0 10px;
			}
			img{
				margin-right: 10px;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.featured_media{
		margin-top: 100px;
	}
`