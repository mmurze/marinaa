import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function MainChoiseEcosystem({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image">
					<Image src="/pic/ecosystem.png" width={378} height={322} alt="CHO total supply" priority={true}/>
					<p className="total">{t.total}</p>
					<p className="value">{t.value}</p>
				</div>
				<div className="content">
					<div className="title">
						<h2>
							{t.title}
							<span className="icon">
								<img src="/pic/gap-icon.svg" alt="building the choise.com ecosystem to bridge the gap"/>
							</span>
						</h2>
					</div>
					<p className="description">
						{t.description}
					</p>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 190px;
	@media only screen and (max-width: 820px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.image{
		max-width: 463px;
		width: 100%;
		background: linear-gradient(319.51deg, #5CEE9C 3.05%, #FFFB1F 82.44%);
		border-radius: 500px 500px 24px 24px;
		padding: 80px 40px 60px 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		font-weight: bold;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
		.total{
			font-size: 32px;
			line-height: 100%;
			margin-top: -30px;
			@media only screen and (max-width: 600px) {
				font-size: 24px;
				line-height: 100%;
			}
		}
		.value{
			font-size: 90px;
			line-height: 100%;
			margin-top: 20px;
			@media only screen and (max-width: 600px) {
				font-size: 66px;
				line-height: 100%;
			}
		}
	}
	.title{
		h2{
			font-size: 90px;
			line-height: 100%;
			@media only screen and (max-width: 1024px) {
				font-size: 60px;
			}
			@media only screen and (max-width: 820px) {
				font-size: 46px;
				line-height: 100%;
			}
		}
		.icon{
			margin-left: 20px;
			position: relative;
			top: 10px;
			@media only screen and (max-width: 600px) {
				margin-left: 10px;
				width: 45px;
				display: inline-block;
			}
		}
	}
	.content{
		max-width: 600px;
		width: 100%;
		padding-left: 40px;
		@media only screen and (max-width: 600px) {
			padding-left: 0;
			max-width: 100%;
			margin-top: 70px;
		}
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		margin-top: 40px;
	}
`