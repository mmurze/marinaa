import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function CardsSteps({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						t.list.map((item, index) => {
							return (
								<div className="item" key={index}>
									<span>step {index + 1}</span>
									<p className="content">{item.content}</p>
									{item.description && <p className="description">{item.description}</p>}
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
	@media only screen and (max-width: 820px) {
		margin-top: 80px;
	}
	.title{
		text-align: center;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 70px;
		position: relative;
		@media only screen and (max-width: 820px) {
			flex-wrap: wrap;
			margin-bottom: -40px;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
		&:before{
			content: '';
			width: 100%;
			position: absolute;
			border-bottom: 1px dashed #80889C;
			top: 15px;
			@media only screen and (max-width: 820px) {
				display: none;
			}
		}
	}
	.item{
		position: relative;
		z-index: 10;
		padding-right: 40px;
		@media only screen and (max-width: 820px) {
			width: calc(100% / 2 - 20px);
			padding-right: 0;
			margin-bottom: 40px;
		}
		@media only screen and (max-width: 600px) {
			margin-bottom: 30px;
		}
		.content{
			font-weight: 500;
			font-size: 18px;
			line-height: 120%;
			margin-top: 20px;
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				line-height: 120%;
			}
		}
		.description{
			font-size: 14px;
			line-height: 140%;
			color: #80889C;
			margin-top: 2px;
		}
	}
	span{
		font-weight: 500;
		font-size: 16px;
		line-height: 120%;
		background: #5CEE9C;
		border-radius: 500px;
		height: 32px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0 16px;
	}
`