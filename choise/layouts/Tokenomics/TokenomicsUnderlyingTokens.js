import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import numberFormat from "helpers/numberFormat";
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function TokenomicsUnderlyingTokens({t}) {
	const descriptionCrpt = () => {
		return (
			<div className="description_list_item crpt">
				<p>{t.description_crpt}</p>
				<div className="description_heading">{t.description_crpt_heading}</div>
				<ul className="description_list">
					<li>{t.description_crpt_1}</li>
					<li>{t.description_crpt_2}</li>
					<li>{t.description_crpt_3}</li>
				</ul>
			</div>
		)
	}
	const descriptionCho = () => {
		return (
			<div className="description_list_item cho">
				<p>{t.description_cho}</p>
				<div className="description_heading">{t.description_cho_heading}</div>
				<ul className="description_list">
					<li>{t.description_cho_1}</li>
					<li>{t.description_cho_2}</li>
					<li>{t.description_cho_3}</li>
				</ul>
			</div>
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="list">
					<div className="item crpt">
						<div className="top">
							<div className="heading">
								<img width={50} height={50} src="/pic/tokenomics/crpt-main-coin.svg" alt="CRPT"/>
								<p>CRPT</p>
							</div>
							<ul className="list_items">
								<li>{t.list_1_1}<span>ERC20</span></li>
								<li>{t.list_1_2}<br/><span>0x80A7E048F37A50500351C204<wbr/>Cb407766fA3baE7f</span></li>
								<li>{t.list_1_3}<span>{numberFormat(96035536)}{t.list_1_3_span}</span></li>
								<li>{t.list_1_4}<span>{t.list_1_4_span}</span></li>
							</ul>
						</div>
						<a href="https://crypterium.onelink.me/jtmZ/buycho?app_screen=buy-crypto/crpt" className="link_button" target="_blank" rel="noreferrer">{t.link_a_1}</a>
						<span className="glow"/>
						<div className="image left_top">
							<Image src="/pic/tokenomics/underlying-tokens-left-top.png" width={168} height={101} priority={true} alt="Buy CRPT top"/>
						</div>
						<div className="image left_bottom">
							<Image src="/pic/tokenomics/underlying-tokens-left-bottom.png" width={263} height={170} priority={true} alt="Buy CRPT"/>
						</div>
					</div>
					<Responsive width={820} mobile={descriptionCrpt()}/>
					<div className="item cho">
						<div className="top">
							<div className="heading">
								<img width={50} height={50} src="/pic/tokenomics/cho-main-coin.svg" alt="CHO"/>
								<p>CHO</p>
							</div>
							<ul className="list_items">
								<li>{t.list_2_1}<span>ERC20, SPL(Solana)</span></li>
								<li>{t.list_2_2}<br/><span>0xBBa39Fd2935d5769116ce38d46a7<wbr/>1bde9cf03099</span></li>
								<li>{t.list_2_3}<br/><span>59McpTVgyGsSu5eQutvcKLFu7wrFe3<wbr/>ZkE2qdAi3HnvBn</span></li>
								<li>{t.list_2_4}<span>{numberFormat(1000000000)}{t.list_2_4_span}</span></li>
								<li>{t.list_2_5}<span>{t.list_2_5_span}</span></li>
							</ul>
						</div>
						<a href="https://crypterium.onelink.me/jtmZ/buycho?app_screen=buy-crypto/cho" className="link_button" target="_blank" rel="noreferrer">{t.link_a_2}</a>
						<span className="glow"/>
						<Responsive width={600}>
							<div className="image right_top">
								<Image src="/pic/tokenomics/underlying-tokens-right-top.png" width={214} height={143} priority={true} alt="Buy CHO top"/>
							</div>
						</Responsive>
						<Responsive width={600}>
							<div className="image right_bottom">
								<Image src="/pic/tokenomics/underlying-tokens-right-bottom.png" width={193} height={151} priority={true} alt="Buy CHO"/>
							</div>
						</Responsive>
					</div>
				</div>
				<div className="description_block">
					<Responsive width={820}>
						{descriptionCrpt()}
					</Responsive>
					{descriptionCho()}
				</div>
				<div className="link_button">
					<a href="https://docs.choise.com/more/token-and-tokenomics" target="_blank" rel="noreferrer">{t.link_a_3}</a>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #F6F7F8;
	margin-top: 150px;
	padding: 80px 0;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.description{
		text-align: center;
		max-width: 460px;
		width: 100%;
		font-size: 18px;
		line-height: 150%;
		margin: 20px auto 0 auto;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		.item{
			width: calc(50% - 10px);
			background: #272A32;
			border-radius: 20px;
			position: relative;
			overflow: hidden;
			padding: 30px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			color: #F9F9F9;
			@media only screen and (max-width: 820px) {
				width: 100%;
			}
			&.crpt{
				@media only screen and (max-width: 820px) {
					margin-bottom: 45px;
				}
				li span{
					color: #359DFD;
				}
				.link_button{
					background: #0285FD;
					color: #F9F9F9;
				}
				.glow{
					top: -100px;
					right: -100px;
					background: #0285FD;
				}
			}
			&.cho{
				@media only screen and (max-width: 820px) {
					margin-top: 60px;
				}
				li span{
					background: linear-gradient(90deg, #FFFB1F 0%, #5CEE9C 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				.link_button{
					background: linear-gradient(90deg, #FFFB1F 0%, #5CEE9C 100%);
				}
				.glow{
					background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFFB1F 91.92%);
					bottom: -100px;
					right: -100px;
				}
			}
		}
	}
	.heading{
		display: flex;
		align-items: center;
		p{
			margin-left: 15px;
			font-weight: 700;
			font-size: 30px;
			line-height: 120%;
		}
	}
	.list_items{
		margin-top: 30px;
		li{
			margin-bottom: 20px;
			font-size: 16px;
			line-height: 150%;
			@media only screen and (max-width: 600px) {
				word-wrap: break-word;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.top{
		position: relative;
		z-index: 10;
	}
	.link_button{
		min-width: 149px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 16px 40px;
		height: 56px;
		border-radius: 40px;
		margin-top: 50px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.glow{
		position: absolute;
		width: 282.58px;
		height: 174.4px;
		filter: blur(150px);
		transform: rotate(-117.48deg);
	}
	.image{
		position: absolute;
		line-height: 0;
		&.left_top{
			top: 0;
			right: 70px;
			@media only screen and (max-width: 1024px) {
				right: -20px;
			}
			@media only screen and (max-width: 600px) {
				right: -10px;
				width: 110px;
			}
		}
		&.left_bottom{
			bottom: 0;
			right: 50px;
			@media only screen and (max-width: 1024px) {
				right: -10px;
			}
			@media only screen and (max-width: 600px) {
				display: none;
			}
		}
		&.right_top{
			top: 16px;
			right: 30px;
			@media only screen and (max-width: 1024px) {
				right: -30px;
				top: -20px;
			}
		}
		&.right_bottom{
			bottom: 0;
			right: 50px;
			@media only screen and (max-width: 1024px) {
				right: -20px;
			}
		}
	}
	.description_block{
		display: flex;
		justify-content: space-between;
		margin-top: 45px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.description_list_item{
		width: calc(50% - 10px);
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
		&.crpt{
			.description_list li:before{
				background: #0285FD;
			}
		}
		&.cho{
			.description_list li:before{
				background: linear-gradient(90deg, #FFFB1F 0%, #5CEE9C 100%);
			}
		}
		p{
			font-size: 18px;
			line-height: 150%;
			color: #656D81;
		}
	}
	.description_heading{
		margin-top: 40px;
		font-weight: 700;
		font-size: 28px;
		line-height: 120%;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 120%;
		}
	}
	.description_list{
		margin-top: 20px;
		li{
			margin-bottom: 5px;
			position: relative;
			padding-left: 20px;
			font-size: 18px;
			line-height: 150%;
			color: #191B20;
			&:before{
				content: "";
				width: 8px;
				height: 8px;
				border-radius: 50%;
				position: absolute;
				left: 0;
				top: 9px;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.link_button{
		display: flex;
		justify-content: center;
		margin-top: 100px;
		a{
			background: #FFFB1F;
			border-radius: 40px;
			height: 56px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			padding: 16px 40px;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
`