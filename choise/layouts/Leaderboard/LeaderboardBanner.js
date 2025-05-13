import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import {Link} from "react-scroll";

export default function LeaderboardBanner({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="image1">
						<Image src="/pic/leaderboard/banner-prize1.png" width={176} height={179} priority={true} alt=""/>
					</div>
					<div className="image2">
						<Image src="/pic/leaderboard/banner-prize2.png" width={225} height={230} priority={true} alt=""/>
					</div>
					<h2>{t.title}</h2>
					<p>{t.description}</p>
					<Link smooth={true} offset={-150} to="form">{t.link}</Link>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 20px;
	@media only screen and (max-width: 820px) {
		margin-top: 80px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 110px;
	}
	.banner{
		background: radial-gradient(70.51% 68.38% at 125% 41.24%, #5CEE9C 0%, #FFFB1F 100%);
		border-radius: 50px;
		padding: 70px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		position: relative;
		@media only screen and (max-width: 820px) {
			padding: 40px;
		}
		@media only screen and (max-width: 600px) {
			border-radius: 30px 30px 0 0;
			margin-left: -20px;
			margin-right: -20px;
		}
	}
	.image1{
		position: absolute;
		top: 70px;
		left: 70px;
		@media only screen and (max-width: 1024px) {
			left: 40px;
		}
		@media only screen and (max-width: 820px) {
			display: none;
		}
	}
	.image2{
		position: absolute;
		bottom: 60px;
		right: 30px;
		@media only screen and (max-width: 1024px) {
			right: 20px;
			bottom: 20px;
		}
		@media only screen and (max-width: 820px) {
			position: relative;
			bottom: 0;
			right: 0;
			margin-top: -100px;
		}
		@media only screen and (max-width: 600px) {
			padding: 0 60px;
		}
	}
	h2{
		font-size: 26px;
		line-height: 120%;
		max-width: 564px;
		width: 100%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			max-width: 250px;
		}
		@media only screen and (max-width: 820px) {
			margin-top: 30px;
		}
	}
	p{
		max-width: 283px;
		width: 100%;
		margin-top: 20px;
		font-size: 18px;
		line-height: 120%;
		position: relative;
		z-index: 10;
	}
	a{
		padding: 16px 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 56px;
		background: #191B20;
		border-radius: 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #F9F9F9;
		margin-top: 40px;
		position: relative;
		z-index: 10;
		cursor: pointer;
		&:hover{
			background: #0285FD;
			color: #F9F9F9;
		}
	}
`