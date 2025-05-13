import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import CopyOnClick from "components/CopyOnClick";
import YoutubeVideo from "components/YoutubeVideo";

export default function LeaderboardManual({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<div className="item">
						<h2>{t.title_1}</h2>
						<a className="gradient_link" href="https://info.uniswap.org/#/tokens/0xbba39fd2935d5769116ce38d46a71bde9cf03099" target="_blank" rel="noreferrer nofollow">{t.link_a_1}</a>
						<p className="pair">{t.title_pair}<span>{t.title_span}</span></p>
						<div className="follow">
							<p>{t.title_follow_1}</p>
							<a href="https://dexscreener.com/ethereum/0x2cb162433e0cabac4825e6d198a125829156cc92" target="_blank" rel="noreferrer nofollow">
								<span>
									<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M11.858 0.428942L18.222 6.7929C18.6125 7.18343 18.6125 7.81659 18.222 8.20712L11.858 14.5711C11.4675 14.9616 10.8344 14.9616 10.4438 14.5711C10.0533 14.1806 10.0533 13.5474 10.4438 13.1569L15.1007 8.50001L1.48633 8.50001C0.934043 8.50001 0.486328 8.05229 0.486328 7.50001C0.486328 6.94772 0.934043 6.50001 1.48633 6.50001L15.1007 6.50001L10.4438 1.84316C10.0533 1.45263 10.0533 0.819466 10.4438 0.428942C10.8344 0.0384175 11.4675 0.0384176 11.858 0.428942Z" fill="white"/>
									</svg>
								</span>
								{t.link_a_2}
							</a>
						</div>
						<h2 className="margin">{t.margin}</h2>
						<h3>{t.title_follow_2}</h3>
						<a className="border_link" href="https://choisecom.medium.com/how-to-trade-cho-on-uniswap-dex-exchange-6a76d9d4d615" target="_blank" rel="noreferrer nofollow">{t.link_a_3}</a>
					</div>
					<div className="item">
						<YoutubeVideo embedSrc="https://www.youtube.com/embed/D5yj3jJ3BYA"/>
						<h3>{t.title_smart}</h3>
						<CopyOnClick value="0xBBa39Fd2935d5769116ce38d46a71bde9cf03099"/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.margin{
		margin-top: 30px;
	}
	h2{
		font-size: 30px;
		line-height: 120%;
		@media only screen and (max-width: 600px) {
			font-size: 25px;
		}
	}
	h3{
		font-size: 20px;
		line-height: 120%;
		margin-top: 20px;
		@media only screen and (max-width: 600px) {
			font-size: 18px;
			line-height: 120%;
		}
	}
	.content{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		.item{
			border: 1px solid #C6CAD3;
			border-radius: 50px;
			padding: 50px;
			@media only screen and (max-width: 1024px) {
				padding: 30px;
			}
			@media only screen and (max-width: 768px) {
				border: none;
				padding: 0;
				border-radius: 0;
				text-align: center;
			}
			&:first-child{
				width: 489px;
				@media only screen and (max-width: 1024px) {
					width: calc(50% - 5px);
				}
				@media only screen and (max-width: 768px) {
					width: 100%;
				}
			}
			&:last-child{
				width: calc(100% - 489px);
				margin-left: 10px;
				@media only screen and (max-width: 1024px) {
					width: calc(50% - 5px);
					margin-left: 0;
				}
				@media only screen and (max-width: 768px) {
					width: 100%;
					margin-top: 20px;
				}
				@media only screen and (max-width: 600px) {
					margin-top: 60px;
				}
			}
		}
	}
	.copy_on_click{
		margin-top: 20px;
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
		margin-top: 20px;
		@media only screen and (max-width: 768px) {
			width: 100%;
		}
	}
	.youtube_video{
		@media only screen and (max-width: 768px) {
			margin-bottom: 40px;
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
		@media only screen and (max-width: 768px) {
			width: 100%;
		}
		&:hover{
			background: #0285FD;
			color: #F9F9F9;
		}
	}
	.description {
		font-size: 24px;
		line-height: 120%;
		color: #80889C;
		margin-top: 6px;
	}
	.pair{
		margin-top: 50px;
		font-weight: 700;
		font-size: 20px;
		line-height: 120%;
		@media only screen and (max-width: 768px) {
			margin-top: 30px;
		}
		span{
			font-weight: normal;
			color: #80889C;
		}
	}
	.follow{
		display: flex;
		align-items: center;
		margin-top: 22px;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
			justify-content: center;
			margin-top: 10px;
		}
		p{
			width: 159px;
			font-weight: 700;
			font-size: 20px;
			line-height: 120%;
			@media only screen and (max-width: 768px) {
				width: 100%;
			}
		}
		a{
			display: flex;
			align-items: center;
			font-weight: 500;
			font-size: 18px;
			line-height: 24px;
			color: #0285FD;
			margin-left: 24px;
			@media only screen and (max-width: 768px) {
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
	}
`