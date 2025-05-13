import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function DualCurrencyAdvantages({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title className="main_tile"><h2>{t.title}</h2></Title>
				<p className="main_description">{t.description}</p>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="image">
										<Image src={item.image} width={item.width} height={item.height} priority={true} alt={item.title}/>
									</div>
									<h3>{item.title}</h3>
									<p className="description">{item.description}</p>
								</div>
							)
						})
					}
				</div>
				<div className="link">
					<a href="https://crypterium.onelink.me/jtmZ/deposits?app_screen=deposits" target="_blank" rel="noreferrer">{t.link_a}</a>
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
	.main_tile{
		text-align: center;
		max-width: 641px;
		width: 100%;
		margin: 0 auto;
	}
	.main_description{
		max-width: 349px;
		width: 100%;
		margin: 20px auto 0 auto;
		text-align: center;
		font-weight: 450;
		font-size: 20px;
		line-height: 120%;
		color: #7B8199;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
		@media only screen and (max-width: 1110px) {
			display: flex;
			flex-wrap: nowrap;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
			margin: 50px -40px -20px -40px;
			padding: 0 40px 20px 40px;
			grid-gap: 0;
		}
		@media only screen and (max-width: 820px) {
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
	}
	.image{
		position: absolute;
		line-height: 0;
	}
	.item{
		background: #F6F7F8;
		border-radius: 24px;
		padding: 50px 50px 200px 50px;
		position: relative;
		overflow: hidden;
		width: calc(100% / 3 - 20px);
		@media only screen and (max-width: 1110px) {
			width: 320px;
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
		}
		@media only screen and (max-width: 600px) {
			width: 300px;
			padding: 30px;
		}
		&:nth-child(1) {
			@media only screen and (max-width: 1110px) {
				padding-bottom: 200px;
			}
			@media only screen and (max-width: 600px) {
				padding-bottom: 150px;
			}
			.image{
				bottom: 0;
				right: 40px;
				@media only screen and (max-width: 600px) {
					right: 0;
				}
			}
		}
		&:nth-child(2) {
			.image{
				bottom: 0;
				right: 40px;
				@media only screen and (max-width: 600px) {
					right: 0;
				}
			}
		}
		&:nth-child(3) {
			h3{
				padding-right: 60px;
			}
			.image{
				top: 0;
				right: 0;
				@media only screen and (max-width: 600px) {
					width: 70px;
				}
			}
		}
		&:nth-child(4) {
			h3{
				padding-right: 60px;
			}
			.image{
				top: 0;
				right: 0;
				@media only screen and (max-width: 600px) {
					width: 70px;
				}
			}
		}
	}
	h3{
		font-weight: 700;
		font-size: 25px;
		line-height: 110%;
		letter-spacing: -0.03em;
	}
	.description{
		font-size: 16px;
		line-height: 150%;
		color: #80889C;
		margin-top: 20px;
	}
	.link{
		margin-top: 60px;
		display: flex;
		justify-content: center;
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #FFFB1F;
			border-radius: 40px;
			height: 56px;
			padding: 16px 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
`