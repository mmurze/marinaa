import styled from "styled-components";

export default function CpaHeading({title, subTitle, description}) {
	return (
		<Wrapper>
			<h2>{title}</h2>
			<div className="content">
				{subTitle && <p className="subtitle">{subTitle}</p>}
				{description && <p className="sub_description">{description}</p>}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 820px) {
		flex-direction: column;
	}
	h2{
		font-size: 36px;
		line-height: 130%;
		max-width: 350px;
		width: 100%;
		padding-right: 40px;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			text-align: center;
			padding: 0 20px;
			margin: 0 auto;
		}
	}
	.content{
		max-width: 673px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			text-align: center;
		}
	}
	.subtitle{
		font-size: 24px;
		line-height: 140%;
		letter-spacing: -0.03em;
		@media only screen and (max-width: 820px) {
			margin-top: 20px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 20px;
		}
	}
	.sub_description{
		font-size: 16px;
		line-height: 140%;
		letter-spacing: -0.03em;
		color: #A3A3A3;
		margin-top: 35px;
	}
`