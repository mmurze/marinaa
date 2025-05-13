import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import htmlContent from "helpers/htmlContent";

export default function EarnAccountsList({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="image">
										<Image src={item.image} width={120} height={120} priority={true} alt={`earn list ${index + 1}`}/>
									</div>
									<p className="description">{htmlContent(item.description)}</p>
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
	@media only screen and (max-width: 820px) {
		margin-bottom: 140px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.list{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-wrap: wrap;
			margin-bottom: -20px;
		}
		@media only screen and (max-width: 600px) {
			margin-bottom: -30px;
		}
	}
	.item{
		background: #F6F7F8;
		border-radius: 20px;
		position: relative;
		padding: 30px;
		width: calc(100% / 4 - 10px);
		@media only screen and (max-width: 820px) {
			width: calc(100% / 2 - 10px);
			margin-bottom: 20px;
			&:nth-child(2){
				top: 40px;
			}
			&:nth-child(4){
				top: 60px;
			}
		}
		@media only screen and (max-width: 600px) {
			margin-bottom: 30px;
			padding: 30px 20px;
		}
	}
	.description{
		margin-top: 60px;
		font-size: 18px;
		line-height: 120%;
		@media only screen and (max-width: 820px) {
			margin-top: 100px;
			text-align: center;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 50px;
			font-size: 16px;
			line-height: 120%;
		}
	}
	.image{
		position: absolute;
		top: -50px;
		right: 40px;
		@media only screen and (max-width: 820px) {
			top: -30px;
			right: auto;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`