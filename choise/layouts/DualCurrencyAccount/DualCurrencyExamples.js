import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import htmlContent from "helpers/htmlContent";

export default function DualCurrencyExamples({t}) {
	const renderList = (array) => {
		return (
			array.map((item, index) => {
				return (
					<li key={index}>
						<p>{item.title}</p>
						<p>{item.value}</p>
					</li>
				)
			})
		)
	}
	const renderDescription = (array) => {
		return (
			array.map((item, index) => {
				return <p key={index}>{htmlContent(item)}</p>
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="list_item" key={index}>
									<div className="item">
										<div className="heading">
											<h3>{item.title}</h3>
											<div className="label">{item.label}</div>
										</div>
										<ul className="list_array">{renderList(item.list)}</ul>
									</div>
									<div className="item">
										<div className="heading">
											<h3>{item.content_title}</h3>
											<div className="label">{item.label}</div>
										</div>
										<div className="description_list">{renderDescription(item.content_description)}</div>
										<p className="sub_description">{item.content_sub_description}</p>
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
		text-align: center;
	}
	.list{
		margin-top: 40px;
	}
	.list_item{
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
		}
		&:first-child{
			.label{
				background: #0285FD;
				color: #F9F9F9;
			}
		}
		&:last-child{
			margin-bottom: 0;
			.label{
				background: #5CEE9C;
			}
		}
		.item{
			background: #F6F7F8;
			border-radius: 24px;
			padding: 30px 50px;
			@media only screen and (max-width: 600px) {
				background: transparent;
				padding: 0;
				border-radius: 0;
			}
			&:first-child{
				width: 437px;
				@media only screen and (max-width: 820px) {
					width: 100%;
				}
			}
			&:last-child{
				width: calc(100% - 437px);
				margin-left: 20px;
				@media only screen and (max-width: 820px) {
					width: 100%;
					margin-left: 0;
					margin-top: 20px;
				}
				@media only screen and (max-width: 600px) {
					margin: 40px 0;
				}
			}
		}
	}
	.list_array{
		margin-top: 30px;
		li{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 20px;
			margin-bottom: 20px;
			border-bottom: 1px solid #DDDFE4;
			&:last-child{
				padding-bottom: 0;
				margin-bottom: 0;
				border-bottom: none;
			}
			p{
				font-size: 18px;
				line-height: 150%;
				&:first-child{
					color: #80889C;
				}
				&:last-child{
					font-weight: 700;
				}
			}
		}
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		h3{
			letter-spacing: -0.03em;
			max-width: 220px;
			width: 100%;
			font-weight: 700;
			font-size: 25px;
			line-height: 110%;
		}
		.label{
			border-radius: 500px;
			height: 26px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 500;
			font-size: 16px;
			line-height: 120%;
			padding: 3px 16px;
		}
	}
	.description_list{
		margin-top: 30px;
		p{
			margin-bottom: 20px;
			font-size: 18px;
			line-height: 150%;
			color: #80889C;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.sub_description{
		margin-top: 50px;
		padding-top: 15px;
		border-top: 1px solid #DDDFE4;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
	}
`