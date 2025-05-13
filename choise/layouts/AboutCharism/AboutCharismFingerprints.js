import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function AboutCharismFingerprints({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list_block">
					<div className="item">
						<h3>{t.title_first}</h3>
						<div className="list">
							<p>{t.description_1_1}</p>
							<p>{t.description_1_2}</p>
						</div>
						<div className="graph">
							<div className="graph_image">
								<Image className="graph_image" src="/pic/charism/about-graph.png" width={631} height={175} priority={true} alt="find the best earning product that suits you"/>
							</div>
						</div>
					</div>
					<div className="item position">
						<div className="content">
							<h3>{t.title_second}</h3>
							<p>{t.description_2}</p>
						</div>
						<div className="chains">
							<Responsive width={600} mobile={
								<Image src="/pic/charism/about-chains-mob.png" width={286} height={90} priority={true} alt="earn on all chains"/>
							}>
								<Image src="/pic/charism/about-chains.png" width={167} height={140} priority={true} alt="earn on all chains"/>
							</Responsive>
						</div>
					</div>
					<div className="item">
						<div className="content">
							<h3>{t.title_third}</h3>
							<p>{t.description_3}</p>
						</div>
						<div className="coins">
							<Responsive width={600} mobile={
								<Image src="/pic/charism/about-coins-mob.png" width={212} height={142.16} priority={true} alt="earn with ease"/>
							}>
								<Image src="/pic/charism/about-coins.png" width={143} height={253} priority={true} alt="earn with ease"/>
							</Responsive>
						</div>
					</div>
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
	.title{
		text-align: center;
	}
	.list_block{
		display: grid;
		grid-template-columns: repeat(692px, 1fr);
		grid-template-rows: repeat(692px, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		margin-top: 70px;
		@media only screen and (max-width: 820px) {
			display: flex;
			flex-direction: column;
		}
	}
	.coins{
		position: absolute;
		top: 0;
		right: 0;
		@media only screen and (max-width: 600px) {
			position: relative;
			margin-bottom: -30px;
			line-height: 0;
			display: flex;
			justify-content: center;
			margin-top: 30px;
		}
	}
	p{
		font-size: 16px;
		line-height: 150%;
		color: #80889C;
	}
	.item:nth-child(1) { grid-area: 1 / 1 / 3 / 2; }
	.item:nth-child(2) {
		grid-area: 1 / 2 / 2 / 3;
		.content{
			max-width: 237px;
			width: 100%;
			@media only screen and (max-width: 820px) {
				max-width: 100%;
			}
		}
	}
	.item:nth-child(3) {
		grid-area: 2 / 2 / 3 / 3;
		.content{
			max-width: 284px;
			width: 100%;
			@media only screen and (max-width: 820px) {
				max-width: 100%;
				padding-right: 180px;
			}
			@media only screen and (max-width: 600px) {
				padding-right: 0;
			}
		}
	}
	.chains{
		margin-left: 20px;
		@media only screen and (max-width: 600px) {
			margin-left: 0;
			margin-top: 20px;
		}
	}
	.item{
		background: #F6F7F8;
		border-radius: 24px;
		padding: 30px;
		position: relative;
		overflow: hidden;
		&.position{
			display: flex;
			justify-content: space-between;
			@media only screen and (max-width: 600px) {
				flex-direction: column;
				justify-content: flex-start;
			}
		}
	}
	h3{
		font-size: 26px;
		line-height: 110%;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		p{
			width: calc(100% / 2 - 10px);
			@media only screen and (max-width: 1024px) {
				width: 100%;
				&:last-child{
					margin-top: 20px;
				}
			}
		}
	}
	.content {
		p{
			margin-top: 20px;
		}
	}
	.graph{
		margin-top: 70px;
		@media only screen and (max-width: 600px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -30px -20px -30px;
			padding: 0 30px 20px 30px;
			.graph_image{
				width: 631px;
				flex: 0 0 auto;
			}
		}
	}
`