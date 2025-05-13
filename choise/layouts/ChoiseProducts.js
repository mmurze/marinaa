import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import Link from "next/link";
import Responsive from "helpers/Responsive";
import {useRouter} from "next/router";

export default function ChoiseProducts() {
	const {locale} = useRouter()
	const {choiseProducts} = require(`locale/components/${locale}.json`)
	
	return (
		<Wrapper>
			<CenterBlock>
				<div className="heading">
					<Title><h2>{choiseProducts.title}</h2></Title>
					<p>{choiseProducts.description}</p>
				</div>
				<div className="list">
					{
						choiseProducts.list.map((item, index) => {
							return (
								<div className="item" key={index}>
									<Link href={item.slug}>{item.title}</Link>
									<h3>{item.title}</h3>
									<p className="description">{item.description}</p>
									<div className="image">
										{
											item.image_mob ? (
												<Responsive width={600} mobile={
													<Image src={item.image_mob} width={item.width_mob} height={item.height_mob} alt={item.title} priority={true}/>
												}>
													<Image src={item.image} width={item.width} height={item.height} alt={item.title} priority={true}/>
												</Responsive>
											) : (
												<Image src={item.image} width={item.width} height={item.height} alt={item.title} priority={true}/>
											)
										}
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

const Wrapper = styled.div`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.list{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		margin-top: 60px;
		@media only screen and (max-width: 600px) {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			margin-top: 40px;
		}
	}
	.item{
		background: #F6F7F8;
		border-radius: 24px;
		padding: 50px;
		overflow: hidden;
		position: relative;
		min-height: 268px;
		transition: .3s ease-in-out;
		@media only screen and (max-width: 1024px) {
			padding: 30px;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			min-height: 300px;
		}
		&:hover{
			background: #FFFB1F;
			transition: .3s ease-in-out;
		}
		&:active{
			background: #191B20;
			color: #F9F9F9;
			transition: .1s ease-in-out;
		}
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 40;
			font-size: 0;
		}
		&:nth-child(1) {
			grid-area: 1 / 1 / 3 / 2;
			@media only screen and (max-width: 600px) {
				.image{
					bottom: auto;
					top: 20px;
				}
			}
		}
		&:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
		&:nth-child(3) { grid-area: 2 / 2 / 3 / 3; }
		&:nth-child(4) { grid-area: 3 / 1 / 4 / 2; }
		&:nth-child(5) { grid-area: 3 / 2 / 4 / 3; }
	}
	.image{
		position: absolute;
		bottom: 0;
		right: 0;
		line-height: 0;
	}
	h3{
		font-size: 48px;
		line-height: 1;
		position: relative;
		z-index: 10;
		max-width: 250px;
		width: 100%;
		@media only screen and (max-width: 1024px) {
			font-size: 35px;
		}
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}
	.description{
		font-size: 16px;
		line-height: 140%;
		max-width: 186px;
		width: 100%;
		margin-top: 20px;
		position: relative;
		z-index: 10;
	}
	.heading{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		.title{
			max-width: 305px;
			width: 100%;
			@media only screen and (max-width: 768px) {
				max-width: 100%;
			}
		}
		p{
			max-width: 292px;
			width: 100%;
			font-size: 16px;
			line-height: 140%;
			@media only screen and (max-width: 768px) {
				max-width: 100%;
				margin-top: 20px;
			}
		}
	}
`