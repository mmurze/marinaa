import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function WalletCardBenefits({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				{
					t.array.map((item, index) => {
						return (
							<div className="item" key={index}>
								<div className="image">
									<Image src={item.image} width={item.width} height={item.height} alt={item.description} priority={true}/>
								</div>
								<p className="description">{item.description}</p>
							</div>
						)
					})
				}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 140px;
	@media only screen and (max-width: 600px) {
		margin-top: 120px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			flex-wrap: wrap;
			margin-bottom: -60px;
		}
	}
	.item{
		width: calc(100% / 4 - 20px);
		background: #F6F6F6;
		border-radius: 10px;
		padding: 20px;
		position: relative;
		height: 170px;
		display: flex;
		align-items: flex-end;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 600px) {
			width: calc(100% / 2 - 10px);
			margin-bottom: 60px;
			&:nth-child(even){
				top: 20px;
			}
		}
		&:hover{
			background: #FFFB1F;
			cursor: default;
			transition: all .3s ease-in-out;
		}
	}
	.description{
		font-size: 18px;
		line-height: 120%;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 120%;
			text-align: center;
		}
	}
	.image{
		position: absolute;
		top: -40px;
		right: 40px;
		@media only screen and (max-width: 820px) {
			right: 20px;
		}
		@media only screen and (max-width: 600px) {
			right: 0;
			display: flex;
			justify-content: center;
			left: 0;
		}
	}
`