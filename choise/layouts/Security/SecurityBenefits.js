import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Link from "next/link";
import Image from "next/image";

export default function SecurityBenefits({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="item">
					<div className="top">
						<Title><h4>{t.title}</h4></Title>
						<p className="description">{t.description}</p>
						<ul className="description_list">
							<li><img src="/pic/security/eu-licensed.svg" alt="EU licensed"/></li>
							<li>{t.description_link}</li>
						</ul>
						<p className="sub_description">{t.sub_description}</p>
					</div>
					<a className="learn_more" href="https://rekvizitai.vz.lt/imone/stilgeka/juridinis-asmuo/" target="_blank" rel="noreferrer">{t.link_more}</a>
					<Image className="s_sert" src="/pic/security/s-sert.png" alt="full compliance with global and local regulations and standards" width={163} height={163} priority={true}/>
				</div>
				<div className="item">
					<div className="top">
						<Title><h4>{t.item_title}</h4></Title>
						<p className="description">{t.item_description}</p>
						<div className="fintech_logo"><img src="/pic/security/fintech-logo.svg" alt="Fintech"/></div>
					</div>
					<Link className="learn_more" href="/news/updates/choise-com-joins-fintech-alliance">{t.link_more}</Link>
					<Image className="planet" src="/pic/security/s-planet.jpg" alt="Choise.com joins FinTech Alliance" width={180} height={325} priority={true}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 80px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 900px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.item{
		background: #272A32;
		border-radius: 50px;
		padding: 60px 70px;
		color: #fff;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		position: relative;
		@media only screen and (max-width: 1024px) {
			padding: 30px;
			border-radius: 26px;
		}
		&:first-child{
			max-width: 692px;
			margin-right: 20px;
			@media only screen and (max-width: 900px) {
				max-width: 100%;
				margin-right: 0;
			}
			.description{
				border-bottom: 1px solid #393D49;
				padding-bottom: 30px;
			}
		}
		&:last-child{
			max-width: 488px;
			overflow: hidden;
			@media only screen and (max-width: 900px) {
				max-width: 100%;
				margin-top: 20px;
			}
		}
	}
	.top{
		position: relative;
		z-index: 10;
	}
	.description{
		margin-top: 30px;
		font-size: 18px;
		line-height: 140%;
		@media only screen and (max-width: 600px) {
			font-size: 14px;
			line-height: 150%;
		}
	}
	.learn_more{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 16px 40px;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		color: #191B20;
		margin-top: 50px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 1100px) {
			width: 100%;
		}
	}
	.sub_description{
		font-size: 24px;
		line-height: 120%;
		max-width: 299px;
		width: 100%;
		margin-top: 30px;
	}
	.description_list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30px;
		li{
			font-size: 16px;
			line-height: 150%;
			color: #A2A8B7;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 120%;
			}
			&:last-child{
				margin-left: 20px;
			}
		}
	}
	.fintech_logo{
		margin-top: 40px;
	}
	.planet{
		position: absolute;
		bottom: 0;
		right: 0;
		line-height: 0;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.s_sert{
		position: absolute;
		bottom: -50px;
		right: 80px;
		@media only screen and (max-width: 1100px) {
			display: none;
		}
	}
`