import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import htmlContent from "helpers/htmlContent";
export default function MainBenefits({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="heading">
					<div className="description">
						{
							t.descriptions.map((item, index) => {
								return(
									<p key={index}>{item}</p>
								)
							})
						}
					</div>
					<div className="heading_description">{htmlContent(t.heading_description)}</div>
				</div>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<p className="value">{item.value}</p>
									<p className="item_description">{item.description}</p>
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
	margin-top: 250px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		@media only screen and (max-width: 600px) {
			flex-direction: column-reverse;
			align-items: flex-start;
			justify-content: flex-start;
		}
	}
	.description{
		background: #191B20;
		border-radius: 26px;
		width: 240px;
		padding: 30px;
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-top: 30px;
		}
		p{
			&:first-child{
				font-weight: 700;
				font-size: 20px;
				line-height: 150%;
				color: #F9F9F9;
			}
			&:last-child{
				margin-top: 10px;
				font-size: 14px;
				line-height: 150%;
				color: #80889C;
			}
		}
	}
	.heading_description{
		max-width: 823px;
		width: 100%;
		margin-left: 40px;
		font-weight: 700;
		font-size: 64px;
		line-height: 140%;
		@media only screen and (max-width: 1024px) {
			font-size: 40px;
			margin-left: 0;
			padding-left: 100px;
		}
		@media only screen and (max-width: 820px) {
			padding-left: 40px;
		}
		@media only screen and (max-width: 600px) {
			padding-left: 0;
			font-size: 32px;
			line-height: 120%;
		}
		span{
			background: #FFFB1F;
			border-radius: 100px;
			padding: 6px 20px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		gap: 0 20px;
		margin-top: 90px;
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
		}
		@media only screen and (max-width: 600px) {
			flex-wrap: wrap;
			gap: 0;
			margin-bottom: -20px;
		}
	}
	.item{
		width: calc(100% / 4);
		@media only screen and (max-width: 600px) {
			width: calc(100% / 2 - 20px);
			margin-bottom: 20px;
		}
		.value{
			font-weight: 700;
			font-size: 36px;
			line-height: 150%;
		}
		.item_description{
			font-size: 16px;
			line-height: 150%;
			color: #9E9E9E;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 150%;
			}
		}
	}
`
