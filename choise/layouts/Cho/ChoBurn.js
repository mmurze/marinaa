import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function ChoBurn({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}<img src="/pic/cho/burn-icon.svg" alt="burn"/></h2></Title>
				<div className="stage_block">
					<div className="list">
						{
							t.stageArray.map((item, index) => {
								return (
									<div className="item" key={index}>
										<h3>{item.title}</h3>
										<p className="description">{item.description}</p>
									</div>
								)
							})
						}
					</div>
					<div className="burn_block">
						<div className="burn_background">
							<ul className="heading">
								<li>
									<span>{t.title_span_1}</span>
									<p>{t.description_span_1}</p>
								</li>
								<li>
									<span>{t.title_span_2}</span>
									<p>{t.description_span_2}</p>
								</li>
							</ul>
							<div className="burn_graph"><img src="/pic/cho/burn-graph.svg" alt="Volume - Revenue"/></div>
						</div>
						<p className="sub_description">{t.sub_description}</p>
					</div>
				</div>
				<div className="stage_price">
					<div className="price_content">
						<div className="top">
							<h3>{t.title_price_1}<br/>{t.title_price_2}</h3>
							<p className="price_description">{t.description_price}</p>
						</div>
						<a className="submit_button" href="https://crypterium.onelink.me/jtmZ/choisesiteheader" target="_blank" rel="noreferrer">{t.link_a}</a>
					</div>
					<div className="price_graph">
						<img src="/pic/cho/burn-price-graph.svg" alt="CHO price grown up 35x"/>
					</div>
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
	.title{
		text-align: center;
		display: flex;
		justify-content: center;
		h2{
			display: flex;
			align-items: center;
		}
		img{
			margin-left: 10px;
			@media only screen and (max-width: 600px) {
				width: 30px;
			}
		}
	}
	.burn_block{
		width: calc(100% - 286px - 20px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-top: 20px;
		}
	}
	.burn_background{
		background: #F9F9F9;
		border-radius: 15px;
		padding: 40px 20px;
		@media only screen and (max-width: 600px) {
			padding: 20px;
		}
	}
	.heading{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		li{
			width: calc(50% - 20px);
			display: flex;
			align-items: flex-start;
			@media only screen and (max-width: 1024px) {
				width: 100%;
				flex-direction: column;
				align-items: flex-start;
				margin-bottom: 20px;
				&:last-child{
					margin-bottom: 0;
				}
			}
			&:nth-child(1) {
				padding-left: 20px;
				@media only screen and (max-width: 1024px) {
					padding-left: 0;
				}
				span:before{
					background: #FF6464;
				}
			}
			&:nth-child(2) span:before{
				background: #28D180;
			}
			span{
				margin-right: 10px;
				font-weight: 500;
				font-size: 15px;
				line-height: 140%;
				display: flex;
				align-items: center;
				&:before{
					content: "";
					width: 15px;
					height: 15px;
					display: block;
					border-radius: 50%;
					margin-right: 5px;
				}
			}
			p{
				font-size: 14px;
				line-height: 130%;
				color: #656D81;
				position: relative;
				top: 2.5px;
				@media only screen and (max-width: 1024px) {
					top: 0;
					margin-top: 10px;
				}
			}
		}
	}
	.stage_block{
		background: #F6F7F8;
		border-radius: 15px;
		padding: 30px;
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			padding: 20px;
			margin-top: 30px;
		}
		.list{
			width: 286px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			@media only screen and (max-width: 820px) {
				width: 100%;
			}
		}
		.item{
			padding: 20px 30px;
			border-radius: 15px;
			margin-bottom: 20px;
			@media only screen and (max-width: 600px) {
				padding: 20px;
			}
			&:nth-child(1){
				background: #FFFFDE;
			}
			&:nth-child(2){
				background: #DEFFDF;
			}
			&:nth-child(3){
				background: #DEF3FF;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	h3{
		font-weight: 700;
		font-size: 24px;
		line-height: 150%;
	}
	.description{
		margin-top: 10px;
		font-size: 16px;
		line-height: 140%;
		color: #474946;
	}
	.sub_description{
		padding-left: 40px;
		font-size: 14px;
		line-height: 140%;
		color: #45474B;
		max-width: 539px;
		width: 100%;
		margin-top: 20px;
		@media only screen and (max-width: 1024px) {
			padding-left: 0;
		}
	}
	.burn_graph{
		margin-top: 15px;
	}
	.stage_price{
		background: #F6F7F8;
		border-radius: 15px;
		margin-top: 40px;
		padding: 30px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
			padding: 20px;
		}
	}
	.price_content{
		width: 286px;
		background: #F9F9F9;
		border-radius: 15px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
		@media only screen and (max-width: 600px) {
			padding: 20px;
		}
	}
	.price_graph{
		width: calc(100% - 286px - 20px);
		background: #F9F9F9;
		border-radius: 15px;
		padding: 40px 20px;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-top: 20px;
			padding: 20px;
		}
	}
	.price_description{
		color: #848484;
		margin-top: 20px;
		font-size: 16px;
		line-height: 150%;
	}
	.submit_button{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		margin-top: 40px;
		background: #191B20;
		padding: 10px 20px;
		color: #F9F9F9;
		border-radius: 55px;
		&:hover{
			background: #FFFB20;
			color: #191B20;
		}
	}
`