import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import CenterBlock from "helpers/CenterBlock";
import Link from "next/link";
import MobileNavFooter from "components/Header/MobileNavFooter";

export default function MobileNav() {
	const {locale, asPath} = useRouter()
	const t = require(`locale/main-nav/${locale}.json`)
	const snap = useSnapshot(state);
	const [visible, setVisible] = useState(null)
	const [subNav, setSubNav] = useState(null)
	const [animation, setAnimation] = useState(false)
	
	useEffect(() => {
		if (subNav) setAnimation(true)
	}, [subNav])
	
	useEffect(() => {
		if (!snap.burgerNav) {
			setTimeout(() => {
				setVisible(false)
				closeSubNav()
			}, 300)
		}
	}, [snap.burgerNav])
	
	const closeSubNav = () => {
		setAnimation(false)
		setTimeout(() => {
			setSubNav(null)
		}, 300)
	}
	
	useEffect(() => {
		state.burgerNav = false
		setTimeout(() => {
			setVisible(false)
			closeSubNav()
		}, 300)
	}, [asPath])
	
	const checkDropElement = (array) => {
		if (array.find(item => item.slug === asPath)) {
			return "active"
		} else return  ""
	}
	
	const openMenu = (index) => {
		if (visible !== index) {
			setVisible(index)
		} else setVisible(null)
	}
	
	const renderArray = (array, index) => {
		return (
			<ul className={`drop_block ${visible === index ? "visible" : ""}`}>
				{
					array.map((item, index) => {
						return (
							item.slug !== "#" ? (
								<li
									className={`drop_link ${asPath === item.slug ? "active" : ""}`}
									key={index}>
									{
										item.slug ? (
											<Link href={item.slug}>
												{item.title} {item.label && (
												<span className={`label_heading ${item.label_color ? item.label_color : ""}`}>{item.label}</span>
											)}
												{item.description && <p className="description">{item.description}</p>}
											</Link>
										) : (
											<>
												<span onClick={() => setSubNav(item)} className={`link_title_sub ${checkDropElement(item.array)}`}>
													{item.title}
													<img className="drop_arrow sub" src="/pic/main-nav-drop-arrow.svg" alt={item.title}/>
												</span>
												{item.description && <p onClick={() => setSubNav(item)} className="description">{item.description}</p>}
											</>
										)
									}
								</li>
							) : null
						)
					})
				}
			</ul>
		)
	}
	
	return (
		<Wrapper className={snap.burgerNav ? "active" : ""} id="mobile_nav">
			{
				subNav && (
					<div className={`sub_nav ${animation ? "animated" : ""}`}>
						<div className="sub_nav_title">
							<button onClick={closeSubNav} className="close_nav_button">
								<img src="/pic/back-mobile-nav.svg" alt={subNav.title}/>
							</button>
							{subNav.title}
						</div>
						<ul className="sub_list">
							{
								subNav.array.map((item, index) => {
									return (
										item.slug !== "#" && (
											<li className={asPath === item.slug ? "active" : ""} key={index}>
												<Link href={item.slug}>
													{item.title}
													{item.description && <p className="description">{item.description}</p>}
												</Link>
											</li>
										)
									)
								})
							}
						</ul>
					</div>
				)
			}
			<CenterBlock>
				<ul className="mobile_nav">
					{
						t.map((item, index) => {
							return (
								item.slug !== "#" ? (
									<li onClick={() => openMenu(index)} className="top_links" key={index}>
										{
											item.slug ? (
												<Link href={item.slug}>
													{item.title}
													{item.description && <p className="description">{item.description}</p>}
												</Link>
											) : (
												<>
													<span className={`link_title ${visible === index ? "visible" : ""}`}>
														<p>
															{item.title}
															{item.label && <span className={`label_heading ${item.label_color ? item.label_color : ""}`}>{item.label}</span>}
														</p>
														<img className="drop_arrow" src="/pic/mobile-drop.svg" alt={item.title}/>
													</span>
													{item.description && <p className="description">{item.description}</p>}
													{item.array && (
														<div className={`sub_drop ${visible === index ? "visible" : ""}`}>{renderArray(item.array, index)}</div>
													)}
												</>
											)
										}
									</li>
								) : null
							)
						})
					}
				</ul>
				<MobileNavFooter/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: calc(100% - 90px);
	bottom: 0;
	left: 0;
	background: #F9F9F9;
	opacity: 0;
	visibility: hidden;
	z-index: 9999;
	transition: all .3s ease-in-out;
	overflow-y: auto;
	padding: 20px 0;
	display: none;
	&.hidden{
		display: none;
	}
	@media only screen and (max-width: 1130px) {
		display: block;
	}
	.center_block{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}
	&.active {
		opacity: 1;
		visibility: visible;
		transition: all .3s ease-in-out;
	}
	.top_links, .drop_block{
		margin-bottom: 20px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		position: relative;
		&:last-child{
			margin-bottom: 0;
		}
	}
	.drop_block{
		//margin-top: 20px;
		margin-bottom: 0;
		display: none;
		&.visible{
			display: block;
		}
		li{
			margin-bottom: 20px;
		}
	}
	.link_title, .link_title_sub{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.link_title{
		img{
			transition: all .3s ease-in-out;
		}
	}
	.link_title.visible{
		img{
			transform: rotate(-180deg);
			transition: all .3s ease-in-out;
		}
	}
	.drop_arrow{
		line-height: 0;
		&.sub{
			margin-right: 2px;
		}
	}
	.description{
		font-weight: 500;
		font-size: 12px;
		line-height: 14px;
		color: #80889C;
		margin-top: 5px;
	}
	.drop_link{
		&:last-child{
			margin-bottom: 0;
		}
		&.active{
			a{
				color: #28D180;
			}
		}
	}
	.link_title.active, .link_title_sub.active, .link_title.visible{
		color: #28D180;
	}
	.heading_drop, .drop_link{
		cursor: default;
	}
	.sub_nav{
		position: absolute;
		width: 100%;
		height: 100%;
		background: #F9F9F9;
		z-index: 20;
		right: -100%;
		transition: all .3s ease-in-out;
		overflow: hidden;
		margin-top: -20px;
		padding-top: 20px;
		&.animated{
			right: 0;
			transition: all .3s ease-in-out;
		}
	}
	.sub_nav_title{
		height: 64px;
		background: #F6F7F8;
		padding: 20px;
		margin-top: -20px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		button{
			width: auto;
			position: absolute;
			left: 20px;
		}
	}
	.sub_list{
		padding: 20px;
		max-height: calc(100vh - 90px - 90px);
		overflow-y: auto;
		li{
			margin-bottom: 20px;
			&.active a{
				color: #28D180;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.sub_drop{
		background: #F6F7F8;
		&.visible{
			padding: 20px 20px;
			margin: 10px -20px;
		}
	}
	.label_heading{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 40px;
		background: #191B20;
		font-weight: 500;
		font-size: 11px;
		line-height: 14px;
		color: #F9F9F9;
		padding: 2px 5px;
		height: 20px;
		margin-left: 5px;
		&.yellow{
			background: #FFFB1F;
			color: #191B20;
		}
	}
`
