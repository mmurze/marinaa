import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function ChostakingWhy({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						t.list.map((item, index) => {
							return (
								<div className="item" key={index}>
									<h3>{item.title}</h3>
									<p className="description">{item.description}</p>
									<span className="count"><img src="/pic/chostaking/count-arrow.svg" alt={`arrow ${index + 1}`}/></span>
									<Image className="image" src={item.image} alt={item.title} width={item.width} height={item.height} priority={true}/>
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
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.list{
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
		}
	}
	.item{
		width: calc(100% / 3 - 10px);
		background: #F6F7F8;
		border-radius: 15px;
		position: relative;
		padding: 30px 30px 180px 30px;
		@media only screen and (max-width: 820px) {
			width: 320px;
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
			&:last-child {
				margin-right: 0;
			}
		}
		h3{
			font-size: 32px;
			line-height: 120%;
		}
	}
	.description{
		margin-top: 40px;
		font-size: 18px;
		line-height: 130%;
		color: #80889C;
	}
	.count{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 50px;
		height: 50px;
		position: absolute;
		bottom: 30px;
		left: 30px;
		background: #FFFB1F;
		border-radius: 50%;
	}
	.image{
		position: absolute;
		bottom: 0;
		right: 20px;
		line-height: 0;
	}
`