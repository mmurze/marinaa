import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function WalletSimpleSteps({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div key={index} className="item">
									{item.link ? <a rel="noreferrer nofollow" target="_blank" href="https://app.crypterium.com">{item.title}</a> : null}
									<h3>{item.title}</h3>
									<div className="image">
										<Image src={item.icon} width={item.width} height={item.height} alt={item.title} priority={true}/>
									</div>
									<div className="count">0{index + 1}</div>
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
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
		@media only screen and (max-width: 600px) {
			max-width: 250px;
			width: 100%;
			margin: 0 auto;
		}
	}
	.description{
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		line-height: 120%;
		color: #7B8199;
	}
	.list{
		margin-top: 70px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			justify-content: flex-start;
			margin-left: -20px;
			margin-right: -20px;
			padding-left: 20px;
			padding-bottom: 20px;
			margin-bottom: -20px;
		}
	}
	.item{
		position: relative;
		width: calc(100% / 3 - 20px);
		height: 440px;
		background: #F6F6F6;
		border-radius: 24px;
		padding: 50px;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 1024px) {
			padding: 30px;
			height: 400px;
		}
		@media only screen and (max-width: 820px) {
			height: 350px;
		}
		@media only screen and (max-width: 600px) {
			flex: 0 0 auto;
			width: calc(100% - 60px);
			margin-right: 20px;
		}
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 30;
			font-size: 0;
		}
		&:hover{
			background: #FFFB1F;
			transition: all .3s ease-in-out;
			.image{
				bottom: 50px;
				transition: all .3s ease-in-out;
			}
			.count{
				background: #F9F9F9;
				transition: all .3s ease-in-out;
			}
		}
	}
	h3{
		font-size: 48px;
		line-height: 110%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 1024px) {
			font-size: 40px;
		}
		@media only screen and (max-width: 820px) {
			font-size: 30px;
			line-height: 110%;
		}
	}
	.count{
		position: absolute;
		bottom: 50px;
		left: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 70px;
		height: 70px;
		background: #FFFB1F;
		border-radius: 40px;
		font-weight: 700;
		font-size: 20px;
		line-height: 110%;
		transition: all .3s ease-in-out;
		z-index: 10;
		@media only screen and (max-width: 1024px) {
			left: 30px;
			bottom: 30px;
		}
	}
	.image{
		position: absolute;
		bottom: 40px;
		right: 0;
		transition: all .3s ease-in-out;
	}
`