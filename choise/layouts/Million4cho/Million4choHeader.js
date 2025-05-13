import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import NavLink from "next/link";
import { Link } from "react-scroll";
import Million4choDayLeft from "layouts/Million4cho/Million4choDayLeft";
import {state} from "state";
import Responsive from "helpers/Responsive";
import htmlContent from "helpers/htmlContent";

export default function Million4choHeader({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="logo_block">
					<NavLink href="/"><img src="/pic/million4cho/logo-black.svg" alt="Choise.com"/></NavLink>
					<Responsive width={600}>
						<Million4choDayLeft/>
					</Responsive>
				</div>
				<div className="right_block">
					<ul className="anchor_nav">
						{
							t.array.map((item, index) => {
								return (
									<li key={index}>
										<Link smooth={true} offset={-150} to={item.anchor}>{item.title}</Link>
									</li>
								)
							})
						}
					</ul>
					<a href="https://twitter.com/hashtag/CHOprediction?src=hashtag_click" target="_blank" rel="noreferrer" className="check_tweets_button">
						{htmlContent(t.link)}
					</a>
					<button onClick={() => state.million4choMobile = true} className="mobile_nav">
						<img src="/pic/million4cho/mobile-nav.svg" alt="Mobile Nav"/>
					</button>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #F9F9F9;
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999;
	.center_block{
		height: 86px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 0;
	}
	.right_block{
		display: flex;
		align-items: center;
	}
	.anchor_nav{
		display: flex;
		margin-right: 30px;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
		li{
			margin-right: 30px;
			a{
				font-weight: 700;
				font-size: 13px;
				line-height: 130%;
				text-transform: uppercase;
			}
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.check_tweets_button{
		height: 40px;
		display: flex;
		align-items: center;
		padding: 0 0 0 20px;
		border: 1px solid #EEEFF2;
		border-radius: 40px;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
		span{
			background: #101010;
			border-radius: 40px;
			height: 38px;
			padding: 8px 20px;
			color: #F9F9F9;
			margin-left: 10px;
		}
	}
	.logo_block{
		display: flex;
		align-items: center;
	}
	.mobile_nav{
		width: 24px;
		height: 24px;
		display: none;
		@media only screen and (max-width: 1024px) {
			display: flex;
		}
	}
`