import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function Million4choBenefits({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<h2>{t.title}</h2>
				<div className="image_block">
					<div className="win_image">
						<Image src="/pic/million4cho/win-main.png" width={581} height={196} priority={true} alt="the 1st place gets $1,000,000, and $500,000 is divided among the other 300 winners."/>
					</div>
					<div className="lines">
						<img src="/pic/million4cho/win-lines.svg" alt="Win lines"/>
					</div>
					<div className="list">
						<div className="item">
							<Image src="/pic/million4cho/win-1000.png" width={522} height={144} priority={true} alt="1,000,000"/>
							<div className="label">
								<span>{t.label1}</span>
							</div>
						</div>
						<div className="item">
							<Image src="/pic/million4cho/win-500.png" width={433} height={144} priority={true} alt="500,00"/>
							<div className="label">
								<span>{t.label2}</span>
							</div>
						</div>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #111111;
	border-radius: 40px 40px 0 0;
	padding-top: 180px;
	margin-top: 230px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
		padding-top: 100px;
	}
	h2{
		max-width: 680px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
		font-weight: 700;
		font-size: 32px;
		line-height: 130%;
		color: #F9F9F9;
		text-transform: uppercase;
		@media only screen and (max-width: 600px) {
			font-size: 28px;
			line-height: 140%;
		}
	}
	.image_block{
		background: url("/pic/million4cho/dark-grid.svg");
		border-bottom: 1px solid #292828;
		border-right: 1px solid #292828;
		padding: 120px 0 130px 0;
		margin-top: 84px;
		@media only screen and (max-width: 600px) {
			background: url("/pic/million4cho/dark-grid-mobile.svg");
			margin-top: 60px;
			padding: 70px 0;
		}
	}
	.win_image{
		display: flex;
		justify-content: center;
	}
	.lines{
		display: flex;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.item{
			@media only screen and (max-width: 600px) {
				&:before{
					content: url("/pic/million4cho/benefits-arrow.svg");
					margin: 20px 0;
					width: 100%;
					display: flex;
					justify-content: center;
				}
			}
			.label{
				display: flex;
				justify-content: center;
			}
			span{
				font-weight: 500;
				font-size: 14px;
				line-height: 150%;
				color: #191B20;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				height: 37px;
				padding: 8px 16px;
				border-radius: 21px;
				margin-top: 24px;
			}
			&:first-child{
				padding: 0 20px 0 50px;
				@media only screen and (max-width: 600px) {
					padding: 0;
				}
				span{
					background: #FFFB1F;
				}
			}
			&:last-child{
				padding: 0 50px 0 20px;
				@media only screen and (max-width: 600px) {
					padding: 0;
				}
				span{
					background: #FFA654;
				}
			}
		}
	}
`