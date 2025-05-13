import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Link from "next/link";
import Image from "next/image";
export default function MainEcosystem({t}) {
	const renderLink = (slug, target, title) => {
		return (
			target ? (
				<a className="link" href={slug} target="_blank" rel="noreferrer">{title}</a>
			) : (
				<Link href={slug} className="link">{title}</Link>
			)
		)
	}
	const renderLinksArray = (array) => {
		return (
			array.map((item, index) => {
				return (
					<li key={index}>
						{
							item.soon ? (
								<>
									{item.title}
									<span className="soon">soon</span>
								</>
							) : renderLink(item.slug, item.target, item.title)
						}
					</li>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h4>{t.title}</h4></Title>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="heading_block">
										{renderLink(item.header_link, item.target, item.title)}
										<h2>{item.title}</h2>
										<div className="arrow"><img src="/pic/main-new/ecosystem-arrow.svg" alt="Arrow"/></div>
										<div className="image">
											<Image src={item.image} width={item.width} height={item.height} alt={item.title} priority={true}/>
										</div>
									</div>
									<div className="top_block">
										<ul>
											{renderLinksArray(item.top)}
										</ul>
									</div>
									<div className="bottom_block">
										<ul>
											{renderLinksArray(item.bottom)}
										</ul>
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
		margin-top: 70px;
	}
	.list{
		display: flex;
		justify-content: space-between;
		gap: 0 32px;
		margin-top: 40px;
		@media only screen and (max-width: 820px) {
			gap: 0 10px;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			gap: 0;
			justify-content: flex-start;
		}
	}
	.item{
		width: 50%;
		background: #F8F8F8;
		border: 2px solid #F2F2F2;
		border-radius: 26px;
		padding: 30px;
		@media only screen and (max-width: 600px) {
			width: 100%;
			padding: 0;
			border-radius: 0;
			background: transparent;
			border: none;
			&:last-child{
				margin-top: 20px;
			}
		}
		&:nth-child(1) {
			.heading_block {
				background: #FFFB1F;
				height: 173px;
				transition: .3s ease-in-out;
				@media only screen and (max-width: 820px) {
					height: 160px;
				}
				&:hover {
					background: #FFEF21;
					transition: .3s ease-in-out;
					.image{
						transform: scale(1.1);
						transition: .3s ease-in-out;
					}
				}
			}
		}
		&:nth-child(2) {
			.heading_block {
				background: #CFFF0D;
				height: 386px;
				transition: .3s ease-in-out;
				@media only screen and (max-width: 820px) {
					height: 280px;
				}
				&:hover {
					background: #C1EE0C;
					transition: .3s ease-in-out;
					.image{
						transform: scale(1.1);
						transition: .3s ease-in-out;
					}
				}
			}
		}
	}
	.heading_block{
		position: relative;
		border-radius: 20px;
		display: flex;
		align-items: flex-end;
		padding: 30px 40px;
		justify-content: space-between;
		overflow: hidden;
		@media only screen and (max-width: 820px) {
			padding: 20px 30px;
		}
		.arrow{
			background: #191B20;
			width: 35px;
			height: 35px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 0;
			position: relative;
			z-index: 10;
		}
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 10;
			font-size: 0;
		}
		h2{
			font-size: 36px;
			line-height: 100%;
			position: relative;
			z-index: 10;
		}
	}
	.top_block{
		border: 2px solid #EAEAEA;
		border-radius: 0 0 20px 20px;
		padding: 60px 40px 30px 40px;
		margin-top: -30px;
		@media only screen and (max-width: 600px) {
			padding: 60px 20px 30px 20px;
		}
	}
	ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 20px 0;
	}
	li{
		width: 50%;
		font-weight: 500;
		font-size: 18px;
		line-height: 140%;
		color: #9FA0A2;
		padding-right: 10px;
		@media only screen and (max-width: 1024px) {
			width: 100%;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			padding-right: 0;
		}
		a:hover{
			color: #0285FD;
		}
	}
	.soon{
		background: #00A3FF;
		border-radius: 50px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 3px 8px;
		font-size: 12px;
		line-height: 1.1;
		color: #F9F9F9;
		margin-left: 5px;
		position: relative;
		top: -2px;
	}
	.bottom_block{
		border: 2px solid #EAEAEA;
		padding: 30px 40px;
		margin-top: 20px;
		border-radius: 20px;
		@media only screen and (max-width: 600px) {
			padding: 30px 20px;
		}
	}
	.image{
		position: absolute;
		line-height: 0;
		top: 0;
		right: 0;
		transition: .3s ease-in-out;
	}
`