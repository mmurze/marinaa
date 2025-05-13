import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function TokenomicsCeFiEcosystem({t}) {
	const renderList = (array) => {
		return (
			array.map((item, index) => {
				return (
					<li key={index}>
						<Image src={item.icon} width={40} height={40} priority={true} alt={item.title}/>
						<p>{item.title}</p>
					</li>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="image_description">
					<Responsive width={600} mobile={
						<img width={600} src="/pic/tokenomics/t-ecosystem-description-mob.svg" alt="Сhoise.com today. MetaFi ecosystem"/>
					}>
						<img src="/pic/tokenomics/t-ecosystem-description.svg" alt="Сhoise.com today. MetaFi ecosystem"/>
					</Responsive>
				</div>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="heading">
										<img className="t_logo" width={110} height={18.51} src="/pic/logo.svg" alt={`Choise.com ${item.title}`}/>
										<p>{item.title}</p>
									</div>
									<ul className="list_items">{renderList(item.list)}</ul>
								</div>
							)
						})
					}
				</div>
				<ul className="links">
					<li>
						<a href="https://choise.com/link" target="_blank" rel="noreferrer">
							<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M2.14436 0.208016L11.6504 5.38469L8.90196 8.01863L0.790894 0.24777C1.09266 -0.0562358 1.58476 -0.0928714 2.14436 0.208016ZM0 1.60539C0 1.21876 0.11062 0.920206 0.301765 0.728448L0.348941 0.683238L8.41283 8.40811V8.59051L0.348941 16.3154L0.301765 16.2733C0.11062 16.0815 0 15.783 0 15.3963V1.60539ZM9.38657 8.58996L12.0715 11.1662L12.135 11.1327L15.3186 9.39986C16.2271 8.90409 16.2271 8.09341 15.3186 7.60077L12.135 5.86482L12.0748 5.8313L9.38657 8.40755V8.58996ZM11.6504 11.613L8.90193 8.97904L0.790863 16.753C1.09263 17.057 1.58473 17.0937 2.14433 16.7896L11.6504 11.613Z"/>
							</svg>
							{t.link_a_1}
						</a>
					</li>
					<li>
						<a href="https://choise.com/link" target="_blank" rel="noreferrer">
							<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.5284 9.57236C12.5075 7.29834 14.4356 6.19202 14.5238 6.14051C13.4318 4.58616 11.7393 4.37378 11.1445 4.35685C9.723 4.2108 8.34412 5.18729 7.62 5.18729C6.88142 5.18729 5.76633 4.37096 4.56451 4.39495C3.01798 4.41823 1.57117 5.29242 0.777672 6.64993C-0.859919 9.41785 0.361409 13.4854 1.93035 15.7228C2.71518 16.8185 3.63225 18.0419 4.83263 17.9989C6.00698 17.9516 6.44565 17.2679 7.86282 17.2679C9.26699 17.2679 9.67891 17.9989 10.9031 17.9714C12.1635 17.9516 12.957 16.8707 13.7144 15.7651C14.6213 14.5092 14.9855 13.2723 15 13.2088C14.9704 13.199 12.5523 12.298 12.5284 9.57236Z"/>
								<path d="M10.2159 2.88504C10.8475 2.11386 11.2796 1.06469 11.1597 0C10.2455 0.0395115 9.10221 0.617367 8.44385 1.37161C7.86137 2.03625 7.34104 3.12564 7.47546 4.15012C8.50239 4.22491 9.55678 3.64423 10.2159 2.88504Z"/>
							</svg>
							{t.link_a_2}
						</a>
					</li>
				</ul>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 85px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		@media only screen and (max-width: 600px) {
			margin-left: -20px;
			margin-right: -20px;
			padding: 0 20px;
		}
	}
	.item{
		width: calc(50% - 10px);
		padding: 40px 30px;
		background: #F6F7F8;
		border-radius: 20px;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-bottom: 25px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		@media only screen and (max-width: 600px) {
			padding: 0;
			border-radius: 0;
			background: transparent;
			&:first-child{
				border-bottom: 1px solid #DDDFE4;
				padding-bottom: 25px;
			}
		}
	}
	.list_items{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: -15px;
		margin-top: 70px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			margin-top: 30px;
		}
		li{
			width: calc(50% - 20px);
			display: flex;
			align-items: center;
			margin-bottom: 15px;
			font-size: 18px;
			line-height: 100%;
			@media only screen and (max-width: 1024px) {
				width: calc(50% - 10px);
				font-size: 16px;
				line-height: 120%;
			}
			p{
				width: calc(100% - 40px);
				padding-left: 20px;
			}
		}
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			justify-content: center;
		}
		.t_logo{
			@media only screen and (max-width: 600px) {
				display: none;
			}
		}
		p{
			text-align: right;
			font-weight: 700;
			font-size: 28.246px;
			line-height: 120%;
			color: #656D81;
			@media only screen and (max-width: 600px) {
				text-align: center;
			}
		}
	}
	.links{
		display: flex;
		justify-content: center;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			justify-content: space-between;
		}
		li{
			margin: 0 10px;
			@media only screen and (max-width: 600px) {
				margin: 0;
				width: calc(50% - 10px);
			}
		}
		a{
			min-width: 183px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			border: 1px solid #191B20;
			border-radius: 57.0414px;
			height: 51px;
			padding: 16px 20px;
			font-size: 16px;
			line-height: 100%;
			color: #191B20;
			transition: .3s ease-in-out;
			@media only screen and (max-width: 600px) {
				min-width: 100%;
			}
			&:hover{
				background: #191B20;
				color: #F9F9F9;
				transition: .3s ease-in-out;
				svg{
					fill: #F9F9F9;
					transition: .3s ease-in-out;
				}
			}
			svg{
				fill: #191B20;
				margin-right: 10px;
				transition: .3s ease-in-out;
			}
		}
	}
	.image_description{
		margin-top: 50px;
	}
`