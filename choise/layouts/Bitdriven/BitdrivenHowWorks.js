import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useState} from "react";
import htmlContent from "helpers/htmlContent";
import Image from "next/image";
export default function BitdrivenHowWorks({t}) {
	const [active, setActive] = useState(0)
	const renderArray = (array) => {
		return (
			array.map((item, index) => {
				return <li key={index}>{item}</li>
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="list main_list">
					<div className="item">
						<h3>{t.item_title}</h3>
						<p className="selected_label">{t.portfolio}</p>
						<div className="line"><img src="/pic/bitdriven/selected-line.svg" alt="line"/></div>
						<ul className="selected_values">
							<li><img src="/pic/bitdriven/selected-1.svg" alt="30%"/>30%</li>
							<li><img src="/pic/bitdriven/selected-2.svg" alt="70%"/>70%</li>
						</ul>
						<div className="selected_list">
							<ul>{renderArray(t.selected1Array)}</ul>
							<ul>{renderArray(t.selected2Array)}</ul>
						</div>
					</div>
					<div className="item">
						<h3>{t.portfolio_title}</h3>
						<div className="portfolio_list">
							{
								t.portfolioArray.map((item, index) => {
									return (
										<div className={`portfolio_item ${active === index ? "active" : ""}`} key={index}>
											<div onClick={() => setActive(index)} className="portfolio_heading">
												<h4>{item.title}</h4>
												<button className="portfolio_button">{active === index ? <img src="/pic/bitdriven/close.svg" alt="Close item"/> :
													<img src="/pic/bitdriven/open.svg" alt="Open item"/>}</button>
											</div>
											<p>{htmlContent(item.description)}</p>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
				<div className="list">
					<div className="item">
						<h3>{t.conditions_title}</h3>
						<ul className="strategy_list strategy_information">
							{
								t.conditions_array.map((item, index) =>{
									return(
										<li key={index}>{htmlContent(item)}</li>
									)
								})
							}
						</ul>
					</div>
					<div className="item">
						<h3>{t.terms_title}</h3>
						<div className="strategy_content">
							<ul className="strategy_list">
								{
									t.terms_array.map((item, index) =>{
										return(
											<li key={index}>{htmlContent(item.icon)}{htmlContent(item.title)}</li>
										)
									})
								}
							</ul>
							<div className="strategy_image">
								<Image src="/pic/bitdriven/strategy-terms.jpg" width={189} height={260} priority={true} alt="Strategy terms"/>
							</div>
						</div>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	color: #fff;
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	.title{
		text-align: center;
	}
	.description{
		max-width: 441px;
		width: 100%;
		margin: 30px auto 0 auto;
		text-align: center;
		font-size: 18px;
		line-height: 150%;
		color: #C6CAD3;
	}
	.list{
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		&.main_list{
			margin-top: 50px;
		}
	}
	.main_list{
		h3{
			text-align: center;
		}
	}
	.item{
		width: calc(50% - 10px);
		background: #272A32;
		border-radius: 30px;
		padding: 50px 60px;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 1024px) {
			padding: 40px 30px;
		}
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-bottom: 20px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	h3{
		font-size: 32px;
		line-height: 100%;
		@media only screen and (max-width: 600px) {
			font-size: 20px;
			line-height: 120%;
		}
	}
	.portfolio_list{
		background: #393D49;
		border-radius: 16px;
		padding: 40px;
		margin-top: 30px;
		@media only screen and (max-width: 600px) {
			padding: 0;
			background: transparent;
		}
	}
	.portfolio_heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.portfolio_item {
		border-bottom: 1px solid #656D81;
		padding-bottom: 20px;
		margin-bottom: 20px;
		&.active {
			p{
				display: block;
			}
			.portfolio_button{
				background: #272A32;
				border: 1px solid #272A32;
			}
		}
		&:last-child{
			padding-bottom: 0;
			margin-bottom: 0;
			border-bottom: none;
		}
		h4{
			font-size: 20px;
			line-height: 120%;
			cursor: pointer;
			padding-right: 20px;
			@media only screen and (max-width: 600px) {
				font-size: 18px;
				line-height: 120%;
			}
		}
		p{
			margin-top: 15px;
			font-size: 18px;
			line-height: 150%;
			color: #A2A8B7;
			display: none;
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				line-height: 150%;
			}
			span{
				color: #7EE3B3;
			}
		}
	}
	.portfolio_button{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 1px solid #656D81;
	}
	.selected_list{
		display: flex;
		justify-content: space-between;
		margin-top: 15px;
		ul{
			width: calc(50% - 10px);
		}
		li{
			margin-bottom: 10px;
			background: #393D49;
			border-radius: 16px;
			padding: 15px 20px;
			font-size: 18px;
			line-height: 150%;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 120%;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.selected_label{
		text-align: center;
		margin-top: 30px;
		font-size: 20px;
		line-height: 120%;
		color: #A2A8B7;
	}
	.line{
		display: flex;
		justify-content: center;
		margin-top: 15px;
		@media only screen and (max-width: 600px) {
			padding: 0 40px;
		}
	}
	.selected_values{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		li{
			width: calc(50% - 10px);
			text-align: center;
			font-weight: 700;
			font-size: 32px;
			line-height: 120%;
			display: flex;
			align-items: center;
			justify-content: center;
			@media only screen and (max-width: 600px) {
				font-size: 24px;
				line-height: 120%;
			}
			img{
				margin-right: 10px;
			}
		}
	}
	.strategy_list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 40px;
		margin-bottom: -30px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			&.strategy_information{
				flex-direction: column;
				justify-content: flex-start;
				> li{
					width: 100%;
				}
			}
		}
		> li{
			width: calc(50% - 10px);
			margin-bottom: 30px;
		}
		span{
			display: flex;
			align-items: center;
			font-weight: 700;
			font-size: 32px;
			line-height: 100%;
			color: #7EE3B3;
			@media only screen and (max-width: 600px) {
				font-size: 28px;
				line-height: 100%;
			}
			img{
				margin-right: 10px;
			}
		}
		p{
			margin-top: 8px;
			font-size: 18px;
			line-height: 150%;
			color: #C6CAD3;
			padding-right: 10px;
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				line-height: 150%;
			}
		}
	}
	.strategy_sub_list{
		margin-top: 6px;
		font-size: 14px;
		line-height: 150%;
		color: #C6CAD3;
		list-style-type: disc;
		padding-left: 15px;
	}
	.strategy_content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.strategy_list{
			max-width: 300px;
			width: 100%;
		}
	}
	.strategy_image{
		position: absolute;
		right: 30px;
		@media only screen and (max-width: 1230px) {
			right: -40px;
		}
		@media only screen and (max-width: 820px) {
			right: 30px;
		}
		@media only screen and (max-width: 600px) {
			right: -120px;
			bottom: -100px;
		}
	}
	.cards{
		text-align: right;
		margin-top: 15px;
	}
`