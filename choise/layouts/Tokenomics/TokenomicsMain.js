import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
export default function TokenomicsMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image left">
					<Image src="/pic/tokenomics/crpt-coins.png" width={400.84} height={531.71} priority={true} alt="CRPT coins"/>
				</div>
				<Title><h1>{t.title}</h1></Title>
				<div className="list">
					<p><img src="/pic/tokenomics/crpt-main-coin.svg" alt="CRPT"/>{t.description_img_1}</p>
					<p><img src="/pic/tokenomics/cho-main-coin.svg" alt="CHO"/>{t.description_img_2}</p>
				</div>
				<div className="image right">
					<Image src="/pic/tokenomics/cho-coins.png" width={466.69} height={572.25} priority={true} alt="CHO coins"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	position: relative;
	padding: 160px 0 130px 0;
	overflow: hidden;
	@media only screen and (max-width: 1110px) {
		padding: 120px 0 140px 0;
	}
	@media only screen and (max-width: 820px) {
		padding: 120px 0 80px 0;
	}
	@media only screen and (max-width: 600px) {
		padding: 100px 0 30px 0;
	}
	.title{
		text-align: center;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 1110px) {
			max-width: 800px;
			width: 100%;
			margin: 0 auto;
		}
		@media only screen and (max-width: 1024px) {
			max-width: 500px;
		}
	}
	.center_block{
		position: initial;
	}
	.image{
		position: absolute;
		top: -70px;
		@media only screen and (max-width: 820px) {
			top: -20px;
		}
		&.left{
			left: -100px;
			@media only screen and (max-width: 900px) {
				left: -200px;
			}
			@media only screen and (max-width: 820px) {
				width: 200px;
				left: -100px;
			}
			@media only screen and (max-width: 600px) {
				display: none;
			}
		}
		&.right{
			right: -100px;
			@media only screen and (max-width: 900px) {
				right: -200px;
			}
			@media only screen and (max-width: 820px) {
				width: 200px;
				right: -100px;
			}
			@media only screen and (max-width: 600px) {
				display: none;
			}
		}
	}
	.list{
		position: relative;
		z-index: 10;
		display: flex;
		justify-content: center;
		margin-top: 60px;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
		p{
			display: flex;
			align-items: center;
			font-weight: 700;
			font-size: 30px;
			line-height: 120%;
			margin-right: 80px;
			@media only screen and (max-width: 600px) {
				margin-right: 20px;
				font-size: 20px;
				line-height: 120%;
			}
			&:last-child{
				margin-right: 0;
			}
			img{
				margin-right: 15px;
				@media only screen and (max-width: 600px) {
					width: 35px;
					height: 35px;
				}
			}
		}
	}
`