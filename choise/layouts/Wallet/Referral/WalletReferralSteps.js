import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function WalletReferralSteps({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list_block">
					<div className="line"/>
					<div className="list">
						{
							t.array.map((item, index) => {
								return (
									<div className="item" key={index}>
										<div className="step">{t.step} {index + 1}</div>
										<h3>{item.title}</h3>
										<p className="description">{item.description}</p>
										{item.image && (
											<div className="image">
												{item.width ? (
													<Image src={item.image} width={item.width} height={item.height} alt={item.title} priority={true}/>
												) : <img src={item.image} alt={item.title}/>}
											</div>
										)}
										{index === 0 && <div className="more">{t.more} +</div>}
									</div>
								)
							})
						}
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.list_block{
		position: relative;
	}
	.line{
		position: absolute;
		width: 70%;
		border-top: 1px dashed #80889C;
		top: 15px;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	.list{
		display: flex;
		@media only screen and (max-width: 820px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			padding-bottom: 20px;
			margin-bottom: -20px;
			margin-left: -20px;
			margin-right: -20px;
			padding-left: 20px;
		}
	}
	.item{
		padding-right: 120px;
		position: relative;
		width: calc(100% / 3);
		@media only screen and (max-width: 820px) {
			width: calc(100% / 2 - 40px);
			margin-right: 40px;
			padding-right: 40px;
			flex: 0 0 auto;
		}
		@media only screen and (max-width: 600px) {
			width: calc(100% - 80px);
			padding-right: 20px;
		}
		&:last-child{
			padding-right: 0;
			
		}
	}
	.more{
		margin-top: 20px;
		background: #FFFB1F;
		border-radius: 500px;
		height: 32px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 16px;
		line-height: 120%;
		padding: 0 16px;
		font-weight: 500;
	}
	h3{
		font-size: 36px;
		line-height: 100%;
		margin-top: 17px;
	}
	.image{
		margin-top: 20px;
	}
	.step{
		background: #5CEE9C;
		border-radius: 500px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 32px;
		font-size: 16px;
		line-height: 120%;
		padding: 0 15px;
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		margin-top: 20px;
	}
`