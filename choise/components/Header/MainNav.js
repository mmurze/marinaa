import styled from "styled-components";
import Link from "next/link";
import {useRouter} from "next/router";
export default function MainNav() {
	const {locale, asPath} = useRouter()
	const t = require(`locale/main-nav/${locale}.json`)
	const renderArray = (array) => {
		return (
			array.map((item, index) => {
				return (
					<li className={`drop_item ${asPath === item.slug ? "active" : ""}`} key={index}>
						{
							item.array ? (
								<>
									<p className="drop_title drop_title_item">{item.title} {item.label && <span className={`label ${item.label_color ? item.label_color : ""}`}>{item.label}</span>}</p>
									<span className="drop_description">{item.description}</span>
									<div className="sub_drop_menu">
										<ul className="sub_drop_list">{renderArray(item.array)}</ul>
									</div>
									<div className="drop_arrow">
										<img src="/pic/main-nav-arrow.svg" alt={item.title}/>
									</div>
								</>
							) : (
								<Link href={item.slug}>
									<p className="drop_title drop_title_sub">{item.title} {item.label && <span className={`label ${item.label_color ? item.label_color : ""}`}>{item.label}</span>}</p>
									<span className="drop_description">{item.description}</span>
								</Link>
							)
						}
					</li>
				)
			})
		)
	}
	return (
		<Wrapper className="main_nav">
			{
				t.map((item, index) => {
					return (
						<li className="nav_item" key={index}>
							{
								item.array ? (
									<>
										<p className="nav_item_title">
											{item.title} {item.label && <span className={`label ${item.label_color ? item.label_color : ""}`}>{item.label}</span>}
										</p>
										<div className="drop_menu">
											<ul className="main_drop_list">{renderArray(item.array)}</ul>
										</div>
									</>
								) : (
									<Link href={item.slug} className="nav_item_title">
										{item.title} {item.label && <span className={`label ${item.label_color ? item.label_color : ""}`}>{item.label}</span>}
									</Link>
								)
							}
						</li>
					)
				})
			}
		</Wrapper>
	)
}

const Wrapper = styled.ul`
	display: flex;
	align-items: center;
	.nav_item{
		position: relative;
		margin-right: 30px;
		cursor: pointer;
		&:nth-child(1) {
			.main_drop_list{
				width: 450px;
			}
			.sub_drop_menu{
				left: 330px;
			}
		}
		&:hover{
			.nav_item_title{
				color: #28D180;
			}
			.drop_menu{
				opacity: 1;
				visibility: visible;
				transition: .1s ease-in-out;
			}
		}
	}
	.nav_item_title{
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
	}
	.drop_menu, .sub_drop_menu{
		position: absolute;
		top: 0;
		left: -30px;
		opacity: 0;
		visibility: hidden;
		padding-top: 30px;
		transition: .1s ease-in-out;
	}
	.sub_drop_menu{
		padding-top: 0;
		top: -30px;
		left: 310px;
		z-index: 20;
	}
	ul{
		width: 350px;
		background: #F9F9F9;
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
		border-radius: 16px;
		padding: 20px;
		&.sub_drop_list{
			width: 350px;
		}
	}
	.drop_title_sub:hover{
		color: #28D180;
	}
	.drop_item{
		background: transparent;
		border-radius: 8px;
		padding: 5px 20px;
		height: 60px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		margin-bottom: 3px;
		&:last-child{
			margin-bottom: 0;
		}
		&.active{
			background: #F9FAFD;
		}
		&:hover{
			background: #F9FAFD;
			.drop_title_item{
				color: #28D180;
			}
			.sub_drop_menu{
				opacity: 1;
				visibility: visible;
				transition: .1s ease-in-out;
			}
		}
	}
	.drop_title{
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
	}
	.drop_description{
		font-weight: 500;
		font-size: 12px;
		line-height: 14px;
		color: #80889C;
		margin-top: 5px;
	}
	.drop_arrow{
		position: absolute;
		top: 0;
		height: 100%;
		display: flex;
		align-items: center;
		right: 20px;
		line-height: 0;
	}
	.label{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 40px;
		background: #191B20;
		font-weight: 500;
		font-size: 12px;
		line-height: 14px;
		color: #F9F9F9;
		padding: 4px 7px;
		height: 22px;
		margin-left: 10px;
		&.yellow{
			background: #FFFB1F;
			color: #191B20;
		}
	}
`
