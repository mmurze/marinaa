import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function NftFendList({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="image">
										{item.soon && (
											<div className="soon">
												<Image src="/pic/fend/fend-soon.png" width={274} height={419} priority={true} alt={item.description}/>
											</div>
										)}
										<Image src={item.image} width={274} height={419} priority={true} alt={item.value}/>
									</div>
									<h2>{item.value}</h2>
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
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 0;
	}
	.list{
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
	.image{
		position: relative;
	}
	.soon{
		z-index: 10;
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(100%, 100%, 100%, .5);
	}
	.item{
		width: calc(100% / 4 - 10px);
		text-align: center;
		@media only screen and (max-width: 820px) {
			width: 220px;
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
		}
	}
	h2{
		font-size: 30px;
		line-height: 36px;
		letter-spacing: -0.03em;
		margin-top: 30px;
		@media only screen and (max-width: 820px) {
			font-size: 30px;
			line-height: 36px;
		}
	}
	p{
		font-size: 18px;
		line-height: 150%;
		color: #A2A8B7;
		margin-top: 5px;
	}
`