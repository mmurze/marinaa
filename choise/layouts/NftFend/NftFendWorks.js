import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function NftFendWorks({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<p className="sub_description">{t.sub_description}</p>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="step">{t.step} {index + 1}</div>
									<h3>{item.title}</h3>
									<p className="description">{item.description}</p>
									{item.image && <div className="image"><img src={item.image} alt="Binance Smart Chain"/></div>}
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
	.sub_description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		max-width: 703px;
		width: 100%;
		margin: 20px auto 0 auto;
		text-align: center;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 100px;
		position: relative;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 60px;
		}
		&:before{
			content: "";
			position: absolute;
			width: 100%;
			top: 15px;
			border-bottom: 1px dashed #80889C;
			@media only screen and (max-width: 768px) {
				display: none;
			}
		}
	}
	.step{
		background: #5CEE9C;
		border-radius: 500px;
		padding: 6px 16px;
		font-weight: 500;
		font-size: 16px;
		line-height: 120%;
		display: inline-flex;
		position: relative;
		z-index: 10;
	}
	h3{
		margin-top: 17px;
		font-size: 36px;
		line-height: 100%;
		@media only screen and (max-width: 820px) {
			font-size: 25px;
			line-height: 100%;
		}
	}
	.description{
		margin-top: 20px;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		@media only screen and (max-width: 820px) {
			font-size: 16px;
			line-height: 130%;
			max-width: 320px;
			width: 100%;
		}
	}
	.item{
		width: calc(100% / 4 - 35px);
		@media only screen and (max-width: 820px) {
			width: calc(100% / 4 - 10px);
		}
		@media only screen and (max-width: 768px) {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-bottom: 40px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.image{
		margin-top: 30px;
	}
`