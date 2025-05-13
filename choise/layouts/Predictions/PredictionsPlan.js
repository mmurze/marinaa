import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import htmlContent from "helpers/htmlContent";

export default function PredictionsPlan({t}) {
	const renderList = (array) => {
		return (
			array.map((item, index) => {
				return (
					<li key={index}>{htmlContent(item)}</li>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title center={true}><h2>{t.title}</h2></Title>
				<div className="list_block">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="top">
										<div className="heading">
											<h3>{item.title}</h3>
											<div className="heading_content">
												{item.calendar && <p className="calendar">{item.calendar}</p>}
												{item.percent && <p className="percent">{item.percent}</p>}
											</div>
										</div>
										<p className="description">{item.description}</p>
										<ul className="list">{renderList(item.list)}</ul>
									</div>
									<div className="link">
										{item.slug ? <a href={item.slug} target="_blank" rel="noreferrer nofollow">{t.link}</a> : <span>{t.unlock}</span>}
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
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		h2{
			font-size: 90px;
			line-height: 100%;
			@media only screen and (max-width: 820px) {
				font-size: 60px;
			}
			@media only screen and (max-width: 600px) {
				font-size: 45px;
				line-height: 100%;
			}
		}
	}
	.list_block{
		display: flex;
		justify-content: space-between;
		margin-top: 90px;
		@media only screen and (max-width: 1024px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 90px -40px -40px -40px;
			padding: 0 40px 40px 40px;
			@media only screen and (max-width: 820px) {
				margin: 90px -20px -20px -20px;
				padding: 0 20px 20px 20px;
			}
		}
		@media only screen and (max-width: 600px) {
			margin: 40px -20px -20px -20px;
		}
	}
	.item{
		width: calc(100% / 3 - 10px);
		border-radius: 24px;
		box-shadow: 0 4px 60px rgba(43, 123, 244, 0.07);
		min-height: 462px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			width: 390px;
			margin-right: 20px;
			flex: 0 0 auto;
		}
		@media only screen and (max-width: 600px) {
			width: 310px;
		}
		&:nth-child(1){
			border: 1px solid #C6CAD3;
			background: #F6F7F8;
			h3{
				color: #0285FD;
			}
		}
		&:nth-child(2){
			background: #191B20 url("/pic/predictions/list-background.jpg") center;
			background-size: cover;
			border: 1px solid #C6CAD3;
			color: #F9F9F9;
			li{
				color: #F9F9F9;
			}
		}
		&:nth-child(3){
			border: 1px solid #C6CAD3;
			.calendar{
				background: #191B20;
				color: #F9F9F9;
			}
			h3{
				color: #191B20;
			}
		}
	}
	.heading{
		display: flex;
		align-items: center;
		h3{
			font-size: 48px;
			line-height: 58px;
		}
	}
	.heading_content{
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
	}
	.description{
		margin-top: 8px;
		font-weight: 500;
		font-size: 24px;
		line-height: 29px;
		margin-bottom: -10px;
	}
	.calendar, .percent{
		margin-left: 10px;
		border-radius: 100px;
		font-weight: 500;
		font-size: 20px;
		line-height: 24px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 37px;
		padding: 7px 20px;
		margin-bottom: 10px;
	}
	.percent{
		background: #0285FD;
	}
	.calendar{
		background: #F9F9F9;
		color: #191B20;
	}
	.list{
		margin-top: 40px;
		li{
			margin-bottom: 14px;
			font-size: 18px;
			line-height: 100%;
			color: #585F71;
			position: relative;
			padding-left: 35px;
			&:before{
				content: url("/pic/predictions/prediction-list.svg");
				position: absolute;
				left: 0;
				height: 100%;
				display: flex;
				align-items: center;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.link{
		display: flex;
		justify-content: center;
		a, span{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #FFFB1F;
			border-radius: 40px;
			padding: 16px 80px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			color: #191B20;
		}
		span{
			cursor: default;
		}
		a:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
`