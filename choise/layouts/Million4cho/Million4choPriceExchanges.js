import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import array from "public/data/crypterium-markets.json"
import media from "public/data/featured-media.json"
import htmlContent from "helpers/htmlContent";
export default function Million4choPriceExchanges({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list">
					<div className="item x3_block">
						<h3>{htmlContent(t.title)}</h3>
						<div className="x3_image">
							<img src="/pic/million4cho/x3.svg" alt="x3"/>
						</div>
					</div>
					<div className="item choise_exchanges">
						<h3>{t.exchanges_title}</h3>
						<ul className="list_icons">
							{
								array.choise.map((item, index) => {
									return (
										<li key={index}><a href={item.slug} target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{__html: `${item.icon}`}}/></li>
									)
								})
							}
						</ul>
					</div>
				</div>
				<div className="list">
					<div className="item media_block">
						<h3>{htmlContent(t.media_title)}</h3>
						<ul className="list_media">
							{
								media.map((item, index) => {
									return (
										<li key={index}><a href={item.slug} target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{__html: `${item.icon}`}}/></li>
									)
								})
							}
						</ul>
					</div>
					<div className="item graph_block">
						<h3>{htmlContent(t.markets)}</h3>
						<div className="graph">
							<img src="/pic/million4cho/graph.svg" alt="For 6 years on the market"/>
						</div>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #111111;
	color: #F9F9F9;
	padding-top: 100px;
	padding-bottom: 100px;
	margin-top: -1px;
	@media only screen and (max-width: 600px) {
		padding-top: 40px;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			margin-bottom: 25px;
		}
		&:last-child{
			margin-bottom: 0;
		}
		.item{
			width: 100%;
			padding: 50px 60px;
			@media only screen and (max-width: 600px) {
				padding: 50px 40px;
			}
			&:nth-child(1){
				max-width: 768px;
				margin-right: 30px;
				@media only screen and (max-width: 600px) {
					max-width: 100%;
					margin-right: 0;
				}
			}
			&:nth-child(2){
				max-width: 400px;
				@media only screen and (max-width: 600px) {
					max-width: 100%;
					margin-top: 25px;
				}
			}
		}
	}
	.item{
		background: #161616;
		border-radius: 30px;
		overflow: hidden;
	}
	h3{
		font-weight: 700;
		font-size: 32px;
		line-height: 130%;
		text-transform: uppercase;
		@media only screen and (max-width: 600px) {
			font-size: 24px;
			line-height: 130%;
		}
	}
	.x3_block{
		position: relative;
		min-height: 650px;
		@media only screen and (max-width: 600px) {
			min-height: 450px;
		}
	}
	.x3_image{
		position: absolute;
		bottom: 0;
		right: 0;
		line-height: 0;
	}
	.list_media{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -20px;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			margin-top: 25px;
			flex-direction: column;
		}
		li{
			width: calc(100% / 5);
			margin-right: 30px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			margin-bottom: 20px;
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin-bottom: 40px;
			}
			a{
				svg {
					width: 100%;
					fill: #8C8C8C;
				}
				&:hover svg{
					fill: #00FF66;
				}
			}
		}
	}
	.list_icons{
		margin-top: 40px;
		li{
			margin-bottom: 40px;
			&:last-child{
				margin-bottom: 0;
			}
			a{
				svg {
					fill: #8C8C8C;
				}
				&:hover svg{
					fill: #00FF66;
				}
			}
		}
	}
	.choise_exchanges, .graph_block, .media_block{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.graph{
		display: flex;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			margin-top: 90px;
		}
	}
	.media_block{
		min-height: 402px;
	}
`