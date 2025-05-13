import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function ChoTeam({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="value">{item.value}</div>
									<p className="description">{item.description}</p>
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
	margin-top: 180px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.title{
		max-width: 422px;
		width: 100%;
		@media only screen and (max-width: 1024px) {
			max-width: 600px;
			text-align: center;
			margin: 0 auto;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			margin-top: 40px;
			justify-content: center;
		}
		@media only screen and (max-width: 600px) {
			flex-wrap: wrap;
		}
	}
	.item{
		border: 1px solid #7B8199;
		width: 230px;
		height: 230px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		@media only screen and (max-width: 600px) {
			width: 150px;
			height: 150px;
			&:last-child{
				margin-top: -22px;
			}
		}
	}
	.value{
		font-weight: 700;
		font-size: 50px;
		line-height: 100%;
		margin-top: 20px;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 100%;
		}
	}
	.description{
		font-size: 20px;
		line-height: 100%;
		color: #80889C;
		margin-top: 5px;
		padding: 0 20px;
		min-height: 40px;
		@media only screen and (max-width: 600px) {
			font-size: 15px;
			line-height: 100%;
		}
	}
`