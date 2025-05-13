import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function ChoExchangesTokenomics({t}) {
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
									<p>{item.description}</p>
									<div className="image">
										<Image src={item.image} width={296} height={189} priority={true} alt={`tokenomics ${index + 1}`}/>
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
	.description{
		text-align: center;
		margin-top: 10px;
		font-size: 20px;
		line-height: 130%;
		color: #80889C;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
		@media only screen and (max-width: 820px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
			justify-content: flex-start;
		}
	}
	.item{
		width: calc(100% / 3 - 20px);
		border-radius: 24px;
		padding: 50px 50px 0 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			width: 400px;
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
		}
		@media only screen and (max-width: 600px) {
			width: 300px;
			padding: 30px 30px 0 30px;
		}
		&:nth-child(1) {
			background: #CFF3E0;
		}
		&:nth-child(2) {
			background: #E1FFAF;
		}
		&:nth-child(3) {
			background: #FFFB1F;
		}
		p{
			font-size: 20px;
			line-height: 150%;
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				line-height: 140%;
			}
		}
	}
	.image{
		display: flex;
		justify-content: center;
		margin-top: 10px;
		line-height: 0;
	}
`