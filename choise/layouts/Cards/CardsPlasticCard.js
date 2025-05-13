import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function CardsPlasticCard({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="heading">
					<Title><h2>{t.title}</h2></Title>
					<div className="image">
						<Image src="/pic/cards/plastic-card.png" width={498.52} height={331.22} priority={true} alt="crypterium plastic card"/>
					</div>
				</div>
				<div className="content">
					{
						t.list.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="title_box">{item.title}</div>
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
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
		}
	}
	.content{
		width: 406px;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-top: 60px;
		}
	}
	.title{
		max-width: 305px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
			text-align: center;
		}
	}
	.image{
		margin-top: 90px;
		@media only screen and (max-width: 820px) {
			display: flex;
			justify-content: center;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	.heading{
		width: calc(100% - 406px);
		padding-right: 130px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			width: 100%;
			padding-right: 0;
		}
	}
	.item{
		margin-bottom: 45px;
		@media only screen and (max-width: 820px) {
			max-width: 600px;
			width: 100%;
			text-align: center;
			margin: 0 auto 45px auto;
		}
		@media only screen and (max-width: 600px) {
			text-align: left;
		}
		&:last-child{
			margin-bottom: 0;
		}
		.title_box{
			position: relative;
			font-weight: 700;
			font-size: 30px;
			line-height: 110%;
			background: #5CEE9C;
			border-radius: 500px;
			transform: rotate(2.93deg);
			padding: 3px 13px;
			display: inline-flex;
			@media only screen and (max-width: 600px) {
				font-size: 24px;
				line-height: 110%;
			}
		}
		p{
			font-size: 16px;
			line-height: 150%;
			color: #191B20;
			margin-top: 10px;
			@media only screen and (max-width: 820px) {
				margin-top: 20px;
			}
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				line-height: 150%;
			}
		}
	}
`