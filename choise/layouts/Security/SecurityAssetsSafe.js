import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import htmlContent from "helpers/htmlContent";

export default function SecurityAssetsSafe({t}) {
	const logos = [
		{
			"image": "/pic/security/assets-safe-logo-1.jpg",
			"width": 193.52,
			"height": 20.76
		},
		{
			"image": "/pic/security/assets-safe-logo-2.jpg",
			"width": 152,
			"height": 26.91
		},
		{
			"image": "/pic/security/assets-safe-logo-3.jpg",
			"width": 258.98,
			"height": 31
		}
	]
	const renderArray = (array) => {
		return (
			array.map((item, index) => {
				return <p key={index}>{item}</p>
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title className="main_title"><h2>{htmlContent(t.title)}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="image">
										<Image src={item.image} alt={item.title} width={183} height={183} priority={true}/>
										<div className="logos">
											<Image src={logos[index].image} alt={`${item.title} safe`} width={logos[index].width} height={logos[index].height} priority={true}/>
										</div>
									</div>
									<div className="content">
										<Title className="item_title"><h2><img src="/pic/security/s-arrow-right.svg" alt={`${item.title} arrow`}/>{item.title}</h2></Title>
										<div className="item_description">{renderArray(item.description)}</div>
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
		margin-top: 110px;
	}
	.main_title{
		text-align: center;
		max-width: 600px;
		width: 100%;
		margin: 0 auto;
		span{
			background: #FFFB1F;
			border-radius: 100px;
			padding: 5px 10px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
	}
	.description{
		text-align: center;
		max-width: 410px;
		width: 100%;
		margin: 25px auto 0 auto;
		font-size: 18px;
		line-height: 140%;
		color: #80889C;
	}
	.list{
		margin-top: 110px;
		@media only screen and (max-width: 600px) {
			margin-top: 70px;
		}
	}
	.item{
		display: flex;
		justify-content: space-between;
		padding-bottom: 70px;
		border-bottom: 1px solid #DDDFE4;
		margin-top: 70px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		@media only screen and (max-width: 600px) {
			padding-bottom: 30px;
			margin-top: 30px;
		}
		&:last-child{
			border-bottom: none;
			padding-bottom: 0;
		}
		&:first-child{
			margin-top: 0;
			.item_description{
				max-width: 610px;
				@media only screen and (max-width: 820px) {
					max-width: 100%;
				}
			}
		}
		&:nth-child(2){
			.item_description{
				max-width: 610px;
				@media only screen and (max-width: 820px) {
					max-width: 100%;
				}
			}
		}
		&:nth-child(3){
			.item_description{
				max-width: 100%;
			}
		}
	}
	.item_title h2{
		display: inline-flex;
		align-items: flex-start;
		img{
			margin-right: 10px;
			@media only screen and (max-width: 1024px) {
				display: none;
			}
		}
	}
	.image{
		width: 400px;
		@media only screen and (max-width: 1024px) {
			width: 350px;
		}
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	.content{
		width: calc(100% - 400px);
		@media only screen and (max-width: 1024px) {
			width: calc(100% - 350px);
		}
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-top: 30px;
		}
	}
	.item_description{
		width: 100%;
		margin-top: 50px;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
		p{
			margin-bottom: 20px;
			font-size: 18px;
			line-height: 140%;
			color: #191B20;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 140%;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.logos{
		margin-top: 30px;
	}
`
