import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function BusinessRegulations({t}) {
	return (
		<Wrapper>
			<CenterBlock width={990}>
				<h2>{t.title}</h2>
				<p className="description">{t.description}</p>
				<div className="list_block">
					<div className="item">
						<p className="label">{t.label_1}</p>
						<div className="icons">
							<div className="icon_item">
								<img src="/pic/business/bitgo.svg" alt="bitgo"/>
							</div>
						</div>
					</div>
					<div className="item">
						<p className="label">{t.label_2}</p>
						<h3>{t.description_label_2}</h3>
					</div>
					<div className="item">
						<div className="logotype">
							<img src="/pic/business/eur.svg" alt="Euroopa Liit Euroopa Sotsiaalfond"/>
							<p>{t.description_img}</p>
						</div>
						<h3 className="license">{t.title_license}</h3>
						<a className="link" href="https://rekvizitai.vz.lt/imone/stilgeka/juridinis-asmuo/" target="_blank" rel="noreferrer">{t.link_1}</a>
						<h3>{t.title_registered}<span>{t.title_span}</span></h3>
						<p className="item_description">{t.description_item}</p>
						<a className="link" href="https://register.fca.org.uk/s/firm?id=0014G00002UyCuqQAF" target="_blank" rel="noreferrer">{t.link_2}</a>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	color: #fff;
	@media only screen and (max-width: 820px) {
		margin-top: 80px;
	}
	h2{
		margin: 0 auto;
		text-align: center;
		font-weight: 500;
		font-size: 48px;
		line-height: 120%;
		max-width: 873px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			text-align: left;
			font-size: 32px;
			line-height: 110%;
		}
	}
	.logotype{
		display: flex;
		p{
			font-size: 10px;
			line-height: 120%;
			color: #A2A8B7;
			margin-left: 15px;
			max-width: 58px;
			width: 100%;
			margin-top: 5px;
		}
	}
	.description{
		margin: 40px auto 0 auto;
		font-size: 18px;
		line-height: 150%;
		text-align: center;
		max-width: 833px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			text-align: left;
			font-size: 14px;
			line-height: 150%;
			margin-top: 20px;
			color: #C6CAD3;
		}
	}
	.list_block{
		margin-top: 50px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 10px;
		@media only screen and (max-width: 820px) {
			display: flex;
			flex-direction: column;
		}
	}
	.item{
		background: #272A32;
		border-radius: 30px;
		padding: 30px;
		overflow: hidden;
		position: relative;
		&:nth-child(1) {
			grid-area: 1 / 1 / 2 / 2;
			background-image: url("/pic/business/custodians.png");
			background-position: top right;
			background-repeat: no-repeat;
			@media only screen and (max-width: 1024px) {
				background-image: none;
			}
		}
		&:nth-child(2) {
			grid-area: 2 / 1 / 3 / 2;
			background-image: url("/pic/business/protection.png");
			background-position: bottom right;
			background-repeat: no-repeat;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			@media only screen and (max-width: 1024px) {
				background-image: none;
			}
			h3{
				margin-top: 20px;
			}
		}
		&:nth-child(3) {
			grid-area: 1 / 2 / 3 / 3;
			h3{
				margin-top: 30px;
			}
		}
	}
	.label{
		font-size: 20px;
		line-height: 120%;
		color: #80889C;
	}
	.icons{
		margin-top: 40px;
		display: flex;
		align-items: center;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
	}
	.icon_item{
		margin-right: 25px;
		&:last-child{
			margin-right: 0;
		}
		@media only screen and (max-width: 600px) {
			width: 50%;
		}
	}
	h3{
		font-weight: 700;
		font-size: 24px;
		line-height: 120%;
		span{
			font-weight: 450;
			font-size: 20px;
			line-height: 120%;
		}
	}
	.link{
		margin-top: 15px;
		font-weight: 400;
		font-size: 16px;
		line-height: 132%;
		text-decoration-line: underline;
		color: #5CEE9C;
		display: inline-block;
	}
	.item_description{
		margin-top: 5px;
		font-size: 15px;
		line-height: 120%;
	}
	.license{
		max-width: 320px;
		width: 100%;
	}
`