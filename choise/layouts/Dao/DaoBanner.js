import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import Title from "components/Title";
import Responsive from "helpers/Responsive";
import DecorTubes1 from "components/DecorItems/DecorTubes1";
import DecorTubes2 from "components/DecorItems/DecorTubes2";

export default function DaoBanner({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="slogan"><img src="/pic/dao/dao-slogan.svg" alt="each voice is important"/></div>
				<div className="banner">
					<Responsive width={600}>
						<DecorTubes1/>
					</Responsive>
					<div className="list">
						{
							t.array.map((item, index) => {
								return (
									<div className="item" key={index}>
										{
											item.image ? (
												<Responsive width={820}>
													<Image src="/pic/dao/dao-banner-image.png" width={320} height={404} priority={true} alt="common decision"/>
												</Responsive>
											) : (
												<>
													<Title><h3>{item.title}</h3></Title>
													<p className="description">{item.description}</p>
												</>
											)
										}
									</div>
								)
							})
						}
					</div>
					<Responsive width={820} mobile={
						<div className="image">
							<Responsive width={600} mobile={
								<DecorTubes1/>
							}/>
							<Image src="/pic/dao/dao-banner-image.png" width={320} height={404} priority={true} alt="common decision"/>
						</div>
					}/>
					<DecorTubes2/>
				</div>
				<div className="link">
					<a href="https://dao.choise.com" target="_blank" rel="nofollow">{t.link_a}</a>
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
	.slogan{
		display: flex;
		justify-content: center;
	}
	.decor_tube_1{
		position: absolute;
		top: -100px;
		left: 20%;
		@media only screen and (max-width: 600px) {
			z-index: 10;
			width: 100px;
			top: -20px;
			left: 50%;
			transform: translateX(-50%);
			margin-left: 80px;
		}
	}
	.decor_tube_2{
		position: absolute;
		bottom: -50px;
		right: 15%;
		@media only screen and (max-width: 600px) {
			right: auto;
			left: 130px;
			width: 100px;
			bottom: -30px;
		}
	}
	.banner{
		background: #0285FD;
		border-radius: 24px;
		padding: 105px 50px 0 50px;
		margin-top: 100px;
		color: #F9F9F9;
		position: relative;
		@media only screen and (max-width: 820px) {
			padding: 50px 20px 0 20px;
			border-radius: 24px 24px 0 0;
			margin-left: -20px;
			margin-right: -20px;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 70px;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.item{
		width: calc(100% / 3 - 20px);
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
		&:nth-child(1), &:nth-child(3){
			padding-bottom: 150px;
			@media only screen and (max-width: 820px) {
				padding-bottom: 0;
				margin-bottom: 40px;
			}
		}
		&:nth-child(2){
			display: flex;
			justify-content: center;
			align-items: flex-end;
			padding: 0 20px;
		}
	}
	.description{
		margin-top: 40px;
		font-size: 18px;
		line-height: 150%;
		@media only screen and (max-width: 820px) {
			margin-top: 20px;
		}
	}
	.link{
		display: flex;
		justify-content: center;
		margin-top: 100px;
		@media only screen and (max-width: 600px) {
			margin-top: 60px;
		}
		a{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #FFFB1F;
			border-radius: 40px;
			padding: 16px 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			&:hover{
				background: #0285FD;
				color: #F9F9F9;
			}
		}
	}
	.image{
		display: flex;
		justify-content: center;
		line-height: 0;
		padding: 0 40px;
		position: relative;
	}
`