import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import htmlContent from "helpers/htmlContent";
import Image from "next/image";

export default function AmbassadorRewards({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="image">
										<Image src={item.image} width={120} height={120} priority={true} alt={`rewards ${index + 1}`}/>
									</div>
									<div className="step"><p>{t.step} {index + 1}</p></div>
									<p className="item_description">{htmlContent(item.description)}</p>
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
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		max-width: 455px;
		width: 100%;
		margin: 10px auto 0 auto;
		text-align: center;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 75px;
		@media only screen and (max-width: 820px) {
			flex-wrap: wrap;
			margin-bottom: -45px;
		}
	}
	.item{
		width: calc(100% / 4 - 10px);
		position: relative;
		background: #F6F7F8;
		border-radius: 20px;
		padding: 20px;
		min-height: 170px;
		@media only screen and (max-width: 820px) {
			width: calc(100% / 2 - 10px);
			margin-bottom: 45px;
			&:nth-child(2), &:nth-child(4){
				position: relative;
				top: 45px;
			}
		}
	}
	.image{
		position: absolute;
		top: -40px;
		right: 40px;
		@media only screen and (max-width: 1024px) {
			right: -10px;
		}
		@media only screen and (max-width: 820px) {
			right: auto;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.item_description{
		font-size: 18px;
		line-height: 120%;
		max-width: 200px;
		width: 100%;
		margin-top: 80px;
		@media only screen and (max-width: 820px) {
			text-align: center;
			margin: 20px auto 0 auto;
		}
		@media only screen and (max-width: 600px) {
			font-size: 14px;
			line-height: 120%;
		}
		a{
			color: #0285FD;
			text-decoration: underline;
			@media only screen and (max-width: 600px) {
				display: block;
			}
		}
	}
	.step{
		p{
			font-size: 16px;
			line-height: 120%;
			background: #0285FD;
			border-radius: 20px;
			height: 23px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			color: #F9F9F9;
			padding: 2px 12px;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 120%;
			}
		}
		@media only screen and (max-width: 820px) {
			display: flex;
			justify-content: center;
			margin-top: 80px;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 60px;
		}
	}
`