import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import {Link} from "react-scroll";

export default function NftFendMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<h1>{t.title}</h1>
					<Link className="anchor" to="calculator" smooth={true} offset={-150}>{t.link_name}</Link>
				</div>
				<div className="image">
					<Image src="/pic/fend/fend-main.png" width={550.56} height={535.7} priority={true} alt="first ever NFT with 25% APR"/>
				</div>
				<div className="blur">
					<img src="/pic/fend/fend-blur.svg" alt={t.alt_pic}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 100px;
	overflow: hidden;
	padding-bottom: 200px;
	margin-bottom: -200px;
	h1{
		font-size: 60px;
		line-height: 120%;
		@media only screen and (max-width: 1000px) {
			font-size: 50px;
		}
		@media only screen and (max-width: 820px) {
			font-size: 40px;
		}
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	.content{
		max-width: 591px;
		width: 100%;
		position: relative;
		z-index: 10;
	}
	.image{
		padding-left: 40px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			padding-left: 0;
			margin-top: 40px;
		}
	}
	.blur{
		position: absolute;
		top: -300px;
		right: -300px;
		@media only screen and (max-width: 600px) {
			top: auto;
			bottom: -100px;
		}
	}
	.anchor{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 16px 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
`