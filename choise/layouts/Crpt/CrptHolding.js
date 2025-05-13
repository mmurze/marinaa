import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function CrptHolding({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<Title><h3>{item.title}</h3></Title>
									<p>{item.description}</p>
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
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 35px;
		grid-row-gap: 36px;
		margin-top: 50px;
		@media only screen and (max-width: 820px) {
			display: flex;
			flex-direction: column;
		}
		.title{
			text-align: left;
		}
	}
	.item{
		background: #F6F7F8;
		border-radius: 24px;
		padding: 35px 40px;
		p{
			font-size: 18px;
			line-height: 150%;
			color: #80889C;
			margin-top: 40px;
		}
		&:nth-child(1) {
			grid-area: 1 / 1 / 3 / 2;
			background-image: url("/pic/crpt/holding-crpt.jpg");
			background-size: contain;
			background-position: bottom right;
			background-repeat: no-repeat;
			@media only screen and (max-width: 600px) {
				height: 450px;
			}
			.title, p{
				max-width: 412px;
				width: 100%;
			}
		}
		&:nth-child(2) {
			background-image: url("/pic/crpt/demand.jpg");
			background-size: contain;
			background-position: top right;
			background-repeat: no-repeat;
			grid-area: 1 / 2 / 2 / 3;
		}
		&:nth-child(3) {
			background-image: url("/pic/crpt/supply.jpg");
			background-size: contain;
			background-position: top right;
			background-repeat: no-repeat;
			grid-area: 2 / 2 / 3 / 3;
			@media only screen and (max-width: 600px) {
				background-position: bottom right;
			}
		}
	}
`