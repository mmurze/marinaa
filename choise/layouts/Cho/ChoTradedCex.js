import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function ChoTradedCex() {
	return (
		<Wrapper>
			<CenterBlock>
				<Title center={true}><h2>CHO traded on CEXs</h2></Title>
				<div className="list_box">
					<div className="item lbank">
						<a href="https://lbank.info/exchange/cho/usdt/#innovation" target="_blank" rel="noreferrer nofollow">lbank</a>
						<img src="/pic/cho/lbank-logo.svg" alt="lbank"/>
					</div>
					<div className="item mexc">
						<a href="https://mexc.com/exchange/CHO_USDT" target="_blank" rel="noreferrer nofollow">mexc</a>
						<img src="/pic/cho/mexc-logo.svg" alt="mexc"/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 80px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.list_box{
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	.item{
		width: calc(50% - 5px);
		height: 190px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 24px;
		background-size: cover;
		position: relative;
		padding: 40px;
		@media only screen and (max-width: 820px) {
			padding: 90px;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			height: 108px;
			padding: 20px 80px;
		}
		&.lbank{
			background-image: url("/pic/cho/lbank-bg.jpg");
		}
		&.mexc{
			background-image: url("/pic/cho/mexc-bg.jpg");
			@media only screen and (max-width: 600px) {
				margin-top: 20px;
			}
		}
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 10;
			font-size: 0;
		}
		img{
			transition: all .3s ease-in-out;
		}
		&:hover{
			img{
				transform: scale(1.05);
				transition: all .3s ease-in-out;
			}
		}
	}
`