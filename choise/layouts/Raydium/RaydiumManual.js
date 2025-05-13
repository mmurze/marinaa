import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import CopyOnClick from "components/CopyOnClick";
import YoutubeVideo from "components/YoutubeVideo";

export default function RaydiumManual({t}) {
	const renderMoreInfo = (link, label = "More info") => {
		return (
			<a className="more_info" href={link} target="_blank" rel="noreferrer nofollow">
				<span>
					<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M11.858 0.428942L18.222 6.7929C18.6125 7.18343 18.6125 7.81659 18.222 8.20712L11.858 14.5711C11.4675 14.9616 10.8344 14.9616 10.4438 14.5711C10.0533 14.1806 10.0533 13.5474 10.4438 13.1569L15.1007 8.50001L1.48633 8.50001C0.934043 8.50001 0.486328 8.05229 0.486328 7.50001C0.486328 6.94772 0.934043 6.50001 1.48633 6.50001L15.1007 6.50001L10.4438 1.84316C10.0533 1.45263 10.0533 0.819466 10.4438 0.428942C10.8344 0.0384175 11.4675 0.0384176 11.858 0.428942Z" fill="white"/>
					</svg>
				</span>
				{label}
			</a>
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="content">
					<div className="item">
						<h3>{t.item_1_title_1}</h3>
						<div className="links">
							<p>{t.item_1_links}</p>
						</div>
						<h4>{t.item_1_title_2}</h4>
						<CopyOnClick successText="market id copied" value="GScfvqNrEC9UE6vEeqCYQKJtmoGrN5ZAuTzx9uTHVjZs"/>
						<p className="description">{t.item_1_description_2_1}<span>{t.item_1_span}</span>{t.item_1_description_2_2}</p>
						<div className="image mobile">
							<YoutubeVideo embedSrc="https://www.youtube.com/embed/Dt4n818vQ7g"/>
						</div>
						<h4>{t.item_1_title_3}</h4>
						<CopyOnClick successText="market label copied" value="CHO/USDT"/>
						<h4>{t.item_1_title_4}</h4>
						<CopyOnClick successText="base label copied" value="CHO"/>
						<div className="image mobile">
							<Image src="/pic/raydium/manual-2.jpg" width={600} height={358.54} priority={true} alt="Trade here"/>
						</div>
					</div>
					<div className="item">
						<div className="image desktop">
							<YoutubeVideo embedSrc="https://www.youtube.com/embed/Dt4n818vQ7g"/>
						</div>
						<div className="image desktop">
							<Image src="/pic/raydium/manual-2.jpg" width={600} height={358.54} priority={true} alt="Trade here"/>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="item">
						<h2>{t.item_2_title_1}</h2>
						<p className="information">{t.item_2_information_1}</p>
						<a className="border_link" href="https://choisecom.medium.com/how-to-trade-cho-on-raydium-dex-exchange-2dcf543909ad" target="_blank" rel="noreferrer nofollow">{t.item_2_link_a}</a>
						<div className="line"/>
						<p className="pair">{t.item_2_pair}<span>{t.item_2_span}</span></p>
						<div className="line"/>
						<h3>{t.item_2_title_2}</h3>
						<p className="information">{t.item_2_information_2}</p>
						{renderMoreInfo("https://raydium.io/swap/?inputCurrency=59McpTVgyGsSu5eQutvcKLFu7wrFe3ZkE2qdAi3HnvBn&outputCurrency=Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB&outputAmount=0&fixed=in", "Go swap")}
					</div>
					<div className="item">
						<h2>{t.item_3_title_1}</h2>
						<CopyOnClick className="copy_bottom" value="59McpTVgyGsSu5eQutvcKLFu7wrFe3ZkE2qdAi3HnvBn"/>
						{renderMoreInfo("https://explorer.solana.com/address/59McpTVgyGsSu5eQutvcKLFu7wrFe3ZkE2qdAi3HnvBn")}
						<div className="line"/>
						<h2>{t.item_3_title_2}</h2>
						<CopyOnClick successText="mint address copied" className="copy_bottom" value="59McpTVgyGsSu5eQutvcKLFu7wrFe3ZkE2qdAi3HnvBn"/>
						<div className="list_info_token">
							<p>{t.item_3_description_1}<span>{t.item_3_span_1}</span></p>
							<p>{t.item_3_description_2}<span>{t.item_3_span_2}</span></p>
						</div>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 820px) {
		margin-top: 90px;
	}
	.title{
		text-align: center;
	}
	.content{
		display: flex;
		justify-content: space-between;
		margin-top: 70px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	h3{
		font-size: 30px;
		line-height: 120%;
		@media only screen and (max-width: 600px) {
			font-size: 18px;
			line-height: 120%;
		}
	}
	h4{
		font-size: 20px;
		line-height: 120%;
		font-weight: normal;
		margin-top: 50px;
		margin-bottom: 14px;
		text-align: left;
	}
	.description{
		font-size: 20px;
		line-height: 120%;
		color: #80889C;
		margin-top: 20px;
		span{
			color: #EBA352;
		}
	}
	.line{
		border-bottom: 1px solid #DDDFE4;
		margin: 30px 0;
	}
	.gradient_link{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 56px;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		border-radius: 40px;
		padding: 16px 70px;
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.border_link{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 56px;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		border: 1px solid #0285FD;
		border-radius: 40px;
		padding: 16px 70px;
		color: #0285FD;
		margin-top: 20px;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		&:hover{
			background: #0285FD;
			color: #F9F9F9;
		}
	}
	.item{
		width: calc(50% - 60px);
		@media only screen and (max-width: 1024px) {
			width: calc(50% - 30px);
		}
		@media only screen and (max-width: 820px) {
			width: 100%;
			text-align: center;
			&:last-child{
				margin-top: 40px;
			}
		}
	}
	.links{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 15px;
		text-align: left;
		@media only screen and (max-width: 1024px) {
			justify-content: flex-start;
			flex-direction: column;
			align-items: flex-start;
		}
		@media only screen and (max-width: 820px) {
			justify-content: center;
			align-items: center;
		}
		p{
			font-size: 20px;
			line-height: 120%;
			max-width: 225px;
			width: 100%;
			@media only screen and (max-width: 1024px) {
				max-width: 100%;
				margin-bottom: 20px;
			}
			@media only screen and (max-width: 820px) {
				text-align: center;
			}
		}
	}
	.image:last-child{
		margin-top: 20px;
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
		}
	}
	.information{
		font-size: 24px;
		line-height: 120%;
		color: #80889C;
		margin-top: 5px;
		@media only screen and (max-width: 600px) {
			font-size: 18px;
		}
	}
	.pair{
		font-weight: 700;
		font-size: 20px;
		line-height: 120%;
		span{
			font-weight: normal;
			color: #80889C;
		}
	}
	.list_info_token{
		margin-top: 35px;
		p{
			font-size: 24px;
			line-height: 150%;
			span{
				color: #80889C;
			}
		}
	}
	.copy_bottom{
		margin-top: 25px;
	}
	.more_info{
		display: flex;
		align-items: center;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		color: #0285FD;
		margin-top: 30px;
		@media only screen and (max-width: 820px) {
			justify-content: center;
		}
		@media only screen and (max-width: 600px) {
			margin-left: 0;
			margin-top: 20px;
		}
		&:hover{
			span{
				background: #191B20;
				color: #F9F9F9;
				transition: all .3s ease-in-out;
			}
		}
		span{
			background: #0285FD;
			width: 51px;
			height: 51px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 0;
			text-align: center;
			margin-right: 20px;
			transition: all .3s ease-in-out;
		}
	}
	.mobile{
		display: none;
		@media only screen and (max-width: 820px) {
			display: flex;
			justify-content: center;
			margin-top: 40px;
		}
	}
	.desktop{
		display: block;
		@media only screen and (max-width: 820px) {
			display: none;
		}
	}
`