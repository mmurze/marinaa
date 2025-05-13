import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function DepositsBenefits({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="top">
										<p className="description">{item.description}</p>
										<div className="image">
											<Image src={item.image} width={item.width} height={item.height} priority={true} alt={item.title}/>
										</div>
									</div>
									<div className="bottom">
										<h3>{item.title}</h3>
										<p className="content">{item.content}</p>
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
	margin-top: 60px;
	.list{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 0 -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
	}
	.item{
		width: calc(100% / 3 - 13px);
		background: #F7F7F7;
		border-radius: 24px;
		padding: 40px;
		min-height: 607px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			width: calc(100% / 2 - 40px);
			margin-right: 20px;
			flex: 0 0 auto;
			min-height: auto;
			&:last-child{
				margin-bottom: 0;
			}
		}
		@media only screen and (max-width: 600px) {
			width: 320px;
			padding: 40px 30px;
		}
		&:nth-child(1){
			background: #CFF3E0;
		}
		&:nth-child(2){
			background: #E1FFAF;
		}
		&:nth-child(3){
			background: #FFFEA1;
		}
	}
	h3{
		font-size: 36px;
		line-height: 110%;
		margin-top: 20px;
		min-height: 120px;
		@media only screen and (max-width: 1024px) {
			font-size: 28px;
			min-height: auto;
		}
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 110%;
		}
	}
	.description{
		font-size: 16px;
		line-height: 140%;
		min-height: 70px;
		@media only screen and (max-width: 600px) {
			font-size: 14px;
			line-height: 140%;
		}
	}
	.content{
		font-size: 16px;
		line-height: 140%;
		font-weight: 500;
		margin-top: 18px;
		min-height: 110px;
		@media only screen and (max-width: 820px) {
			min-height: auto;
		}
	}
	.image{
		margin-top: 30px;
	}
`