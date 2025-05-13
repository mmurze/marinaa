import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import ChoExchangesStoreButtons from "layouts/ChoExchanges/ChoExchangesStoreButtons";
import Responsive from "helpers/Responsive";
export default function ChoExchangesStoreList({t}) {
	const renderSubList = (array) => {
		return (
			array.map((item, index) => {
				return (
					<div className="sub_item" key={index}>
						<p className="sub_value">{item.value}</p>
						<p className="sub_description">{item.description}</p>
						{item.sub_content && <p className="sub_content">{item.sub_content}</p>}
					</div>
				)
			})
		)
	}
	const renderBanner = () => {
		return (
			<div className="item banner">
				<div className="top">
					<h2>{t.title_banner}</h2>
					<p className="banner_description">{t.description_banner}</p>
				</div>
				<ChoExchangesStoreButtons/>
				<div className="banner_image">
					<Image src="/pic/cho-exchanges/store-banner-image.png" width={316} height={402} priority={true} alt="make it easier"/>
				</div>
			</div>
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="heading">
										<img src={item.icon} alt={item.title}/>
										<Responsive width={820}>
											<a className="link" href={item.slug} target="_blank" rel="noreferrer">{t.link_a}</a>
										</Responsive>
									</div>
									<p className="description">{item.description}</p>
									<div className="sub_list">{renderSubList(item.list)}</div>
									<Responsive width={820} mobile={
										<a className="link" href={item.slug} target="_blank" rel="noreferrer">{t.link_a}</a>
									}/>
								</div>
							)
						})
					}
					<Responsive width={600}>
						{renderBanner()}
					</Responsive>
				</div>
				<Responsive width={600} mobile={renderBanner()}/>
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
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: -20px;
		@media only screen and (max-width: 600px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 0 -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
		}
	}
	.item{
		width: calc(50% - 10px);
		margin-bottom: 20px;
		border-radius: 24px;
		padding: 40px;
		@media only screen and (max-width: 820px) {
			padding: 20px;
		}
		@media only screen and (max-width: 600px) {
			width: 300px;
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
			&:last-child{
				margin-right: 0;
			}
		}
		&:nth-child(1){
			background: #F1F6FE;
			.sub_value, .sub_description{
				color: #0051D2;
			}
		}
		&:nth-child(2){
			background: #FFF1F8;
			.sub_value, .sub_description {
				color: #FE007A;
			}
		}
		&:nth-child(3){
			background: #F0FCFA;
			.sub_value, .sub_description {
				color: #00B897;
			}
		}
		&:nth-child(4){
			background: #FDF6F8;
			.sub_value, .sub_description {
				background: linear-gradient(143.56deg, #DA396C 14.68%, #D23B70 18.29%, #7C5E94 49.92%, #3B78AE 77.04%, #2088BC 95.12%, #1B8EC1 105.06%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.description{
		font-size: 18px;
		line-height: 130%;
		color: #80889C;
		margin-top: 50px;
	}
	.sub_list{
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.sub_item{
		width: calc(50% - 10px);
		background: #F9F9F9;
		border: 1px solid #EBEBEB;
		border-radius: 24px;
		padding: 35px 30px;
		@media only screen and (max-width: 1024px) {
			width: 100%;
			margin-bottom: 10px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.sub_value{
		font-weight: 700;
		font-size: 38px;
		line-height: 100%;
	}
	.sub_description{
		font-weight: 700;
		font-size: 18px;
		line-height: 130%;
	}
	.sub_content{
		font-size: 18px;
		line-height: 130%;
		color: #80889C;
		margin-top: 30px;
	}
	.banner{
		width: 100%;
		background: #202423;
		border-radius: 24px;
		color: #F9F9F9;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 490px;
		h2{
			font-weight: 700;
			font-size: 90px;
			line-height: 100%;
			max-width: 315px;
			width: 100%;
			@media only screen and (max-width: 600px) {
				font-size: 60px;
				line-height: 100%;
				max-width: 100%;
				margin-top: 40px;
			}
		}
		@media only screen and (max-width: 600px) {
			width: calc(100% + 40px);
			display: block;
			background: #191B20 !important;
			height: 655px;
			margin-left: -20px;
			margin-right: -20px;
			border-radius: 0;
		}
	}
	.banner_image{
		position: absolute;
		bottom: 0;
		right: 0;
		line-height: 0;
	}
	.top{
		position: relative;
		z-index: 10;
	}
	.banner_description{
		font-size: 18px;
		line-height: 130%;
		margin-top: 40px;
		max-width: 257px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			margin-top: 20px;
		}
	}
	.link{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 56px;
		background: #191B20;
		border-radius: 40px;
		color: #F9F9F9;
		padding: 16px 40px;
		@media only screen and (max-width: 820px) {
			display: flex;
			margin-top: 20px;
		}
		&:hover{
			background: #FFFB1F;
			color: #191B20;
		}
	}
	.store_list{
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
	}
`
