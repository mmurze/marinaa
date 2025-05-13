import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Link from "next/link"
import BurgerNavButton from "components/Buttons/BurgerNavButton";
import useScrollPosition from "@react-hook/window-scroll";
import ConnectWalletHeader from "components/Nft/ConnectWalletHeader";
import MainNav from "components/Header/MainNav";
import StoreLinks from "components/Header/StoreLinks";
import Responsive from "helpers/Responsive";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useSnapshot} from "valtio";
import {state} from "state";
import MobileNav from "components/Header/MobileNav";
import {stateWeb3} from "state/web3";

export default function Header({blackTheme = false}) {
	const {locale} = useRouter()
	const t = require(`locale/components/${locale}.json`)
	
	const {wallet} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const scrollY = useScrollPosition(60)
	const [active, setActive] = useState(false)
	const [storeLinks, setStoreLinks] = useState(false)
	
	useEffect(() => {
		if (wallet && window.innerWidth <= 600) {
			setStoreLinks(false)
		} else setStoreLinks(true)
	}, [wallet])
	
	useEffect(() => {
		setActive(scrollY > 40)
	}, [scrollY])
	
	return (
		<>
			<MobileNav/>
			<Wrapper id="header" className={`${blackTheme ? "black" : ""} ${active ? "active" : ""} ${snap.topBanner ? "top_banner" : ""} ${snap.burgerNav ? "mobile_menu_active" : ""}`}>
				<CenterBlock>
					<div className="left_block">
						<div className="logo">
							<Link href="/">
								{blackTheme ? <img src="/pic/logo-white.svg" alt="Choise.com"/> : <img src="/pic/logo.svg" alt="Choise.com"/>}
							</Link>
						</div>
						<MainNav/>
					</div>
					<div className="right_block">
						<div className="buttons">
							<Responsive width={1100}>
								<a href="https://crypterium.onelink.me/jtmZ/choisesiteheader" className="open_wallet" target="_blank" rel="noreferrer nofollow">{t.header.index.get_wallet}</a>
							</Responsive>
						</div>
						{storeLinks && <StoreLinks/>}
						<ConnectWalletHeader/>
						<BurgerNavButton/>
					</div>
				</CenterBlock>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.header`
	position: fixed;
	width: 100%;
	top: 0;
	background: transparent;
	z-index: 9999;
	padding: 25px 0;
	height: 90px;
	box-shadow: 0px -18px 42px rgba(0, 0, 0, 0);
	&.top_banner{
		top: 180px;
	}
	&.hidden{
		display: none;
	}
	&.black{
		.nav_item_title{
			color: #fff;
		}
		.nav {
			svg{
				fill: #fff;
			}
			span{
				border-bottom: 2px solid #fff;
			}
		}
		&.active, &.mobile_menu_active{
			background: #272A32;
			box-shadow: 0px -18px 42px rgba(0, 0, 0, 0.25);
		}
	}
	&.active, &.mobile_menu_active{
		background: #F9F9F9;
		box-shadow: 0px -18px 42px rgba(0, 0, 0, 0.25);
		top: 0;
		.store_links a:hover{
			svg{
				fill: #F6F7F8;
			}
		}
		.open_wallet{
			background: #5CEE9C;
		}
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.left_block{
		display: flex;
		align-items: center;
	}
	.right_block{
		display: flex;
		align-items: center;
	}
	.buttons{
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.install_wallet{
		height: 40px;
	}
	.join{
		margin-left: 10px;
	}
	.logo{
		display: flex;
		align-items: center;
		@media only screen and (max-width: 600px) {
			a{
				width: 120px;
				display: block;
			}
		}
	}
	.documentation {
		a{
			border: 1px solid #EBEBEB;
			border-radius: 40px;
			color: #191B20;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
				border: 1px solid #191B20;
			}
		}
	}
	.main_nav{
		margin-left: 60px;
		@media only screen and (max-width: 1100px) {
			display: none;
		}
	}
	.open_wallet{
		padding: 8px 20px;
		margin-left: 10px;
		height: 40px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		background: #F9F9F9;
		border-radius: 40px;
		&:hover{
			background: #191B20;
			color: #5CEE9C;
		}
	}
`
