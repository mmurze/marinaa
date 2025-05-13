import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function CardsLists({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				{
					t.list.map((item, index) => {
						return (
							<div className="item" key={index}>
								<div className="image">
									<Image src={item.image} width={120} height={120} priority={true} alt={item.title}/>
								</div>
								<p>{item.title}</p>
							</div>
						)
					})
				}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 180px;
	@media only screen and (max-width: 1024px) {
		margin-top: 100px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			flex-wrap: wrap;
		}
	}
	.image{
		position: absolute;
		top: -34px;
		right: 48px;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 600px) {
			display: flex;
			justify-content: center;
			width: 100%;
			right: 0;
			padding: 0 25px;
		}
	}
	.item{
		width: calc(100% / 4 - 10px);
		background: #F6F7F8;
		border-radius: 10px;
		padding: 20px;
		position: relative;
		font-size: 18px;
		line-height: 120%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		min-height: 170px;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 1024px) {
			font-size: 16px;
		}
		@media only screen and (max-width: 600px) {
			width: calc(100% / 2 - 10px);
			margin-bottom: 40px;
			text-align: center;
			&:nth-child(2), &:nth-child(4){
				top: 30px;
			}
		}
		&:hover{
			background: #FFFB1F;
			transition: all .3s ease-in-out;
			.image{
				top: -30px;
				transition: all .3s ease-in-out;
			}
		}
	}
`