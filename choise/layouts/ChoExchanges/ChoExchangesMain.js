import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
export default function ChoExchangesMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="left">
					<Image src="/pic/cho-exchanges/main-left.png" width={358.53} height={515.11} priority={true} alt="CHO on TOP"/>
				</div>
				<h1>{t.title_1}<span>{t.title_span}</span>{t.title_2}</h1>
				<p className="description">{t.description}</p>
				<ul className="list">
					{
						t.array.map((item, index) => {
							return (
								<li key={index}>{item}</li>
							)
						})
					}
				</ul>
				<div className="right">
					<Image src="/pic/cho-exchanges/main-right.png" width={402.21} height={669.45} priority={true} alt="exchanges"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	position: relative;
	padding-top: 120px;
	z-index: 10;
	overflow: hidden;
	padding-bottom: 400px;
	margin-bottom: -400px;
	@media only screen and (max-width: 600px) {
		padding-top: 100px;
	}
	h1{
		text-align: center;
		font-size: 110px;
		line-height: 90%;
		max-width: 750px;
		width: 100%;
		margin: 0 auto;
		@media only screen and (max-width: 600px) {
			font-size: 46px;
			line-height: 100%;
		}
		span{
			position: relative;
			&:before{
				content: url("/pic/cho-exchanges/title-line.svg");
				position: absolute;
				bottom: -10px;
				left: 50%;
				transform: translateX(-50%);
				@media only screen and (max-width: 600px) {
					content: url("/pic/cho-exchanges/title-line-mob.svg");
				}
			}
		}
	}
	.description{
		text-align: center;
		margin: 50px auto 0 auto;
		font-size: 16px;
		line-height: 150%;
		color: #80889C;
		max-width: 590px;
		width: 100%;
	}
	.list{
		margin: 20px auto -10px auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 523px;
		width: 100%;
		li{
			border: 1px solid #DDDFE4;
			border-radius: 17px;
			padding: 4px 15px;
			margin-right: 10px;
			margin-bottom: 10px;
			font-size: 16px;
			line-height: 150%;
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.left{
		position: absolute;
		left: -200px;
		top: 0;
		@media only screen and (max-width: 1290px) {
			left: -100px;
		}
		@media only screen and (max-width: 1024px) {
			left: -150px;
		}
		@media only screen and (max-width: 820px) {
			width: 200px;
			left: -80px;
		}
		@media only screen and (max-width: 600px) {
			left: -80px;
			width: 120px;
		}
	}
	.right{
		position: absolute;
		right: -200px;
		top: 0;
		@media only screen and (max-width: 1290px) {
			right: -180px;
		}
		@media only screen and (max-width: 1024px) {
			right: -200px;
		}
		@media only screen and (max-width: 820px) {
			width: 200px;
			right: -80px;
		}
		@media only screen and (max-width: 600px) {
			width: 120px;
		}
	}
`