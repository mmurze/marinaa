import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function Apy15Terms({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="icon">
										<Image src={item.icon} width={35} height={35} alt={item.description} priority={true}/>
									</div>
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
		margin-top: 70px;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		margin-right: -20px;
		margin-bottom: -20px;
		@media only screen and (max-width: 768px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
	}
	.item{
		width: calc(100% / 4 - 20px);
		margin-right: 20px;
		padding: 20px;
		min-height: 187px;
		background: #EEEFF2;
		border-radius: 24px;
		margin-bottom: 20px;
		display: flex;
		@media only screen and (max-width: 1024px) {
			width: calc(100% / 3 - 20px);
		}
		@media only screen and (max-width: 768px) {
			width: 285px;
			margin-right: 20px;
			flex: 0 0 auto;
		}
		p{
			width: calc(100% - 60px);
			font-size: 16px;
			line-height: 120%;
			padding-left: 20px;
		}
	}
	.icon{
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
		border-radius: 50%;
		background: #F9F9F9;
	}
`