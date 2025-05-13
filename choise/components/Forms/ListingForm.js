import styled from "styled-components";
import Image from "next/image";
import DecorTubes3 from "components/DecorItems/DecorTubes3";
import DecorTubes4 from "components/DecorItems/DecorTubes4";
import {useSnapshot} from "valtio";
import {state} from "state";
import Link from "next/link";

export default function ListingForm() {
	const snap = useSnapshot(state);
	
	return (
		<Wrapper>
			<div className="decor_user">
				<Image src="/pic/listing-form-dex-image.png" width={233} height={245} alt="CHO listed on biggest DEXs" priority={true}/>
			</div>
			<DecorTubes3/>
			<DecorTubes4/>
			<div className="content">
				<h2>CHO listed<br/>on biggest DEXs</h2>
				<p>Join competitions and win 100 000 $</p>
			</div>
			<div className="links_block">
				<div className="links">
					<Link href="/leaderboard">Uniswap</Link>
					<Link href="/raydium">Raydium</Link>
				</div>
				<div className="how_to">
					<a href="/pdf/trade-cho-on-dexs.pdf" target="_blank" rel="noreferrer nofollow">How to trade?</a>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: 460px;
	width: 100%;
	background: #0285FD;
	border-radius: 40px;
	padding: 40px 50px;
	color: #F9F9F9;
	min-height: 500px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		padding: 30px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 40px;
		max-width: 100%;
		padding: 40px 50px;
	}
	@media only screen and (max-width: 500px) {
		padding: 30px 20px;
	}
	.content{
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
		h2{
			font-weight: 700;
			font-size: 40px;
			line-height: 100%;
		}
		p{
			text-align: center;
			font-weight: 450;
			font-size: 18px;
			line-height: 140%;
			max-width: 230px;
			width: 100%;
			margin-top: 10px;
		}
	}
	.decor_user{
		display: flex;
		justify-content: center;
		margin-top: -100px;
		@media only screen and (max-width: 600px) {
			margin-top: -50px;
		}
	}
	.decor_tube_3{
		position: absolute;
		left: -100px;
		top: 0;
		@media only screen and (max-width: 1100px) {
			left: -50px;
		}
		@media only screen and (max-width: 930px) {
			display: none;
		}
	}
	.decor_tube_4{
		position: absolute;
		right: -110px;
		top: 50%;
		transform: translateY(-50%);
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.links{
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		a{
			width: calc(100% / 2 - 10px);
			border-radius: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			height: 56px;
			background: #F9F9F9;
			color: #191B20;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
			@media only screen and (max-width: 600px) {
				width: 100%;
				&:last-child{
					margin-top: 15px;
				}
			}
		}
	}
	.how_to{
		text-align: center;
		margin-top: 20px;
		a{
			color: #F9F9F9;
			text-decoration: underline;
		}
	}
`
