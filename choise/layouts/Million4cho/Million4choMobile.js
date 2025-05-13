import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import NavLink from "next/link";
import {Link} from "react-scroll";
import {useSnapshot} from "valtio";
import {state} from "state";
import htmlContent from "helpers/htmlContent";

export default function Million4choMobile({t}) {
	const snap = useSnapshot(state);
	return (
		<Wrapper className={snap.million4choMobile ? "active" : ""}>
			<CenterBlock>
				<div className="mobile_heading">
					<NavLink href="/"><img src="/pic/million4cho/logo-black.svg" alt="Choise.com"/></NavLink>
					<button onClick={() => state.million4choMobile = false} className="close_mobile">
						<img src="/pic/million4cho/close-nav.svg" alt="Close Nav"/>
					</button>
				</div>
				<ul className="anchor_nav">
					{
						t.array.map((item, index) => {
							return (
								<li key={index}>
									<Link onClick={() => state.million4choMobile = false} smooth={true} offset={-150} to={item.anchor}>{item.title}</Link>
								</li>
							)
						})
					}
				</ul>
				<div className="check_tweets_block">
					<Link smooth={true} offset={-150} to="check_tweets" className="check_tweets_button">
						{htmlContent(t.link)}
					</Link>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: #F9F9F9;
	z-index: 99999;
	padding: 30px 0;
	opacity: 0;
	visibility: hidden;
	transition: .3s ease-in-out;
	&.active{
		opacity: 1;
		visibility: visible;
		transition: .3s ease-in-out;
	}
	.mobile_heading{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.close_mobile{
		width: 28px;
		height: 28px;
	}
	.center_block{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}
	.anchor_nav{
		li{
			text-align: center;
			margin-bottom: 20px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		a{
			font-weight: 700;
			font-size: 18px;
			line-height: 130%;
			text-transform: uppercase;
		}
	}
	.check_tweets_block{
		display: flex;
		justify-content: center;
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
		span{
			background: #101010;
			border-radius: 40px;
			height: 38px;
			padding: 8px 20px;
			color: #F9F9F9;
			margin-left: 10px;
		}
	}
`