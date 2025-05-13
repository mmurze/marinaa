import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import htmlContent from "helpers/htmlContent";

export default function Million4choFaq({t}) {
	
	return (
		<Wrapper id="faq">
			<CenterBlock>
				<h2>{t.title}</h2>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<h3>{index + 1}. {item.title}</h3>
									<p className="description">{htmlContent(item.description)}</p>
								</div>
							)
						})
					}
				</div>
				<div className="link_block">
					<a href="https://twitter.com" target="_blank" rel="noreferrer" className="link_button">
						<p className="twitter_icon">
							<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M17.0291 4.7283C17.0291 4.90397 17.0291 5.07476 17.0291 5.24555C17.0291 10.54 13.3313 16.6397 6.57592 16.6397C4.58235 16.642 2.63033 16.0186 0.953125 14.8439C1.25044 14.8798 1.54934 14.8977 1.84847 14.8976C3.50221 14.9001 5.10876 14.2969 6.41028 13.1848C4.83854 13.1511 3.45957 12.0341 2.97661 10.4034C3.20546 10.4502 3.43767 10.4747 3.67051 10.4766C3.99721 10.4771 4.32248 10.4295 4.63749 10.3351C2.93042 9.96011 1.69994 8.32943 1.69179 6.43132V6.38252C2.20189 6.68697 2.77129 6.85426 3.35266 6.87049C1.73908 5.69581 1.2412 3.35625 2.21557 1.52722C4.08126 4.01758 6.82641 5.53143 9.77231 5.69449C9.38916 3.92549 10.1466 2.09698 11.6174 1.24044C13.0881 0.383895 14.9036 0.713972 16.0398 2.04447C16.8638 1.86575 17.654 1.53574 18.3766 1.06852C18.0992 1.99439 17.5256 2.78066 16.7605 3.28391C17.4854 3.19046 18.1933 2.97824 18.8601 2.65443C18.3687 3.45972 17.7485 4.16217 17.0291 4.7283Z" fill="#4200FF"/>
							</svg>
						</p>
						<p className="link_title">{t.link_title}</p>
						<div className="span_list">
							<span/>
							<span/>
							<span/>
							<span/>
						</div>
					</a>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #111111;
	h2{
		font-weight: 500;
		font-size: 76px;
		line-height: 130%;
		text-transform: uppercase;
		text-align: center;
		font-family: "Tusker Grotesk", sans-serif;
		color: #F9F9F9;
		@media only screen and (max-width: 600px) {
			font-size: 36px;
			line-height: 130%;
		}
	}
	.center_block{
		background: url("/pic/million4cho/dark-grid.svg");
		border-bottom: 1px solid #292828;
		border-right: 1px solid #292828;
		padding: 150px 0 150px 0;
		@media only screen and (max-width: 600px) {
			background: url("/pic/million4cho/dark-grid-mobile.svg");
			padding: 70px 0;
		}
	}
	.list{
		display: flex;
		flex-direction: column;
		align-items: center;
		@media only screen and (max-width: 600px) {
			margin-top: 60px;
		}
	}
	.item{
		text-align: center;
		max-width: 600px;
		width: 100%;
		margin-bottom: 50px;
		&:last-child{
			margin-bottom: 0;
		}
	}
	h3{
		font-weight: 500;
		font-size: 32px;
		line-height: 150%;
		color: #F9F9F9;
		@media only screen and (max-width: 600px) {
			font-size: 24px;
			line-height: 130%;
			text-align: center;
		}
	}
	.description{
		margin-top: 10px;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		color: #8D8D8D;
		@media only screen and (max-width: 600px) {
			margin-top: 17px;
		}
		a{
			color: #00FF66;
			text-decoration: underline;
		}
	}
	.link_block{
		display: flex;
		justify-content: center;
		margin-top: 110px;
		@media only screen and (max-width: 600px) {
			margin-top: 70px;
		}
		a{
			display: inline-flex;
			align-items: center;
			justify-content: space-between;
			text-align: center;
			background: #4200FF;
			border-radius: 150px;
			width: 199px;
			height: 49px;
			position: relative;
			padding: 0 20px 0 10px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			text-transform: uppercase;
			color: #F9F9F9;
			@media only screen and (max-width: 600px) {
				width: 210px;
				height: 60px;
			}
			&:before{
				content: "";
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				background: #4200FF;
				opacity: 0.4;
				filter: blur(25px);
				@media only screen and (max-width: 600px) {
					display: none;
				}
			}
		}
		span{
			border: 1px solid #F9F9F9;
			border-radius: 150px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			@media only screen and (max-width: 600px) {
				display: none;
			}
			&:nth-child(1){
				width: 217px;
				height: 61px;
				opacity: 0.15;
			}
			&:nth-child(2){
				width: 245px;
				height: 77px;
				opacity: 0.15;
			}
			&:nth-child(3){
				width: 285px;
				height: 113px;
				opacity: 0.14;
			}
			&:nth-child(4){
				width: 327px;
				height: 149px;
				opacity: 0.11;
			}
		}
	}
	.twitter_icon{
		width: 35px;
		height: 35px;
		background: #F9F9F9;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
		position: relative;
		z-index: 10;
	}
	.link_title{
		position: relative;
		z-index: 10;
		margin-left: 20px;
	}
`