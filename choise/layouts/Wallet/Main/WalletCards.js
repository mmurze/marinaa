import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import Link from "next/link";

export default function WalletCards({t}) {
	const renderHeading = () => {
		return (
			<>
				<div className="arrow">
					<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.2929L17.3431 0.928934C16.9526 0.538409 16.3195 0.538409 15.9289 0.928933C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM1 9L23 9L23 7L1 7L1 9Z" fill="#191B20"/>
					</svg>
				</div>
				<h3>{t.head_title}</h3>
			</>
		)
	}
	
	return (
		<Wrapper>
			<CenterBlock>
				<div className="main_mib_header">
					{renderHeading()}
				</div>
				<div className="list">
					<div className="item main_item">
						{renderHeading()}
					</div>
					{
						t.array.map((item, index) => {
							return (
								<div className="item card_item" key={index}>
									<Link href={item.slug}>{item.title}</Link>
									<h2>{item.title}</h2>
									<p className="description">{item.description}</p>
									<div className="count">0{index + 1}</div>
									<div className="image">
										<Image src={item.image} width={item.width} height={item.height} priority={true} alt={item.title}/>
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
	margin-top: -100px;
	@media only screen and (max-width: 600px) {
		margin-top: 0;
	}
	.main_mib_header{
		display: none;
		margin-top: 60px;
		@media only screen and (max-width: 600px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: -20px;
		margin-top: 80px;
		@media only screen and (max-width: 1024px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin-left: -40px;
			margin-right: -40px;
			padding-bottom: 40px;
			margin-bottom: -40px;
		}
		@media only screen and (max-width: 600px) {
			padding-bottom: 20px;
			padding-left: 20px;
			margin: 30px -20px -20px -20px;
		}
	}
	.image{
		position: absolute;
		bottom: 40px;
		right: 0;
		line-height: 0;
		transition: all .3s ease-in-out;
	}
	.main_item{
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.arrow{
		background: #FFFB1F;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		z-index: 10;
		font-weight: 700;
		font-size: 20px;
		line-height: 110%;
		@media only screen and (max-width: 600px) {
			transform: rotate(90deg);
		}
	}
	h3{
		font-size: 32px;
		line-height: 110%;
		color: #7B8199;
		margin-top: 20px;
		@media only screen and (max-width: 600px) {
			text-align: center;
			font-size: 25px;
			line-height: 110%;
			max-width: 253px;
			width: 100%;
		}
	}
	h2{
		font-size: 48px;
		line-height: 110%;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 110%;
		}
	}
	.description{
		font-size: 18px;
		line-height: 120%;
		color: #7B8199;
		margin-top: 20px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 120%;
		}
	}
	.count{
		background: #FFFB1F;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		position: absolute;
		bottom: 50px;
		left: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		z-index: 10;
		font-weight: 700;
		font-size: 20px;
		line-height: 110%;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 600px) {
			left: 30px;
			bottom: 30px;
		}
	}
	.item{
		width: calc(100% / 3 - 20px);
		border-radius: 24px;
		padding: 50px;
		margin-bottom: 20px;
		position: relative;
		overflow: hidden;
		height: 440px;
		@media only screen and (max-width: 1024px) {
			flex: 0 0 auto;
			width: calc(100% / 2 - 40px);
			margin-right: 20px;
			margin-bottom: 0;
		}
		@media only screen and (max-width: 600px) {
			width: calc(100% - 40px);
			padding: 30px;
			height: 400px;
		}
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			font-size: 0;
			z-index: 20;
			top: 0;
			left: 0;
		}
		&:nth-child(2), &:nth-child(5){
			top: -80px;
			@media only screen and (max-width: 1024px) {
				top: 0;
			}
		}
		&.card_item{
			background: #F6F6F6;
			transition: all .3s ease-in-out;
			&:nth-child(3){
				.image{
					bottom: 0;
				}
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
				&:nth-child(3){
					.image{
						bottom: 10px;
					}
				}
				.description {
					color: #191B20;
					transition: all .3s ease-in-out;
				}
			}
			&:active{
				background: #191B20;
				color: #F9F9F9;
				transition: all .1s ease-in-out;
				.description{
					color: #F9F9F9;
					transition: all .1s ease-in-out;
				}
				.count{
					background: #FFFB1F;
					color: #191B20;
					transition: all .1s ease-in-out;
				}
			}
		}
	}
`