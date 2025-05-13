import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import htmlContent from "helpers/htmlContent";

export default function DualCurrencyBenefits({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<Image src={item.image} width={100} height={100} priority={true} alt={item.description}/>
									<p>{htmlContent(item.description)}</p>
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
	.list{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			justify-content: center;
			flex-wrap: wrap;
			margin-bottom: -40px;
		}
	}
	.item{
		width: calc(100% / 5 - 20px);
		text-align: center;
		@media only screen and (max-width: 820px) {
			width: calc(100% / 3 - 20px);
			margin-bottom: 40px;
		}
		@media only screen and (max-width: 600px) {
			width: calc(100% / 2);
		}
		p{
			margin-top: 30px;
			font-weight: 500;
			font-size: 18px;
			line-height: 120%;
			letter-spacing: -0.03em;
		}
	}
`