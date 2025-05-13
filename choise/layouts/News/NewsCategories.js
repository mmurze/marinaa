import styled from "styled-components";
import Link from "next/link";
import Router, {useRouter} from "next/router";
import array from "public/data/news-categories.json"

export default function NewsCategories({main = true, category}) {
	const {locale} = useRouter()
	const {newsCategories} = require(`locale/components/${locale}.json`)
	
	const {asPath} = useRouter()
	const checkActive = (slug) => {
		if (!main) {
			const splitPath = asPath.split("/")
			return `/news/${splitPath[2]}` === slug;
		}
		const checkPage = asPath.split("?")
		if (checkPage.length === 2) {
			return checkPage[0] === slug;
		} else return asPath === slug
	}
	const onHandleChange = (e) => {
		Router.push(e.target.value)
	}
	return (
		<Wrapper className="categories">
			<div className="label">{newsCategories.label}</div>
			<select className="mobile_select" value={`/news/${category}`} onChange={onHandleChange}>
				{
					array.map((item, index) => {
						return (
							<option value={item.slug} key={index}>{item.label}</option>
						)
					})
				}
			</select>
			<ul className="desktop_nav">
				{
					array.map((item, index) => {
						return (
							<li className={checkActive(item.slug) ? "active" : ""} key={index}>
								<Link href={item.slug}>
									{item.fav && (
										<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 0L10.6803 4.31088L15.6085 5.52786L12.3368 9.40912L12.7023 14.4721L8 12.56L3.29772 14.4721L3.66318 9.40912L0.391548 5.52786L5.3197 4.31088L8 0Z"/>
										</svg>
									)}
									{item.label}
								</Link>
							</li>
						)
					})
				}
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.label{
		font-weight: 450;
		font-size: 18px;
		line-height: 100%;
		color: #80889C;
	}
	.desktop_nav{
		margin-top: 20px;
		@media only screen and (max-width: 820px) {
			display: none;
		}
		a{
			font-weight: 500;
			font-size: 16px;
			padding: 10px 0;
			display: flex;
			align-items: center;
			&:hover{
				color: #0285FD;
				svg{
					fill: #0285FD;
					transition: all .3s ease-in-out;
				}
			}
		}
		li{
			border-bottom: 1px solid #EEEFF2;
			svg{
				margin-right: 10px;
				fill: #C6CAD3;
				transition: all .3s ease-in-out;
			}
			&.active a{
				color: #0285FD;
				svg{
					fill: #0285FD;
					transition: all .3s ease-in-out;
				}
			}
			&:last-child{
				border-bottom: none;
			}
		}
	}
	.mobile_select{
		width: 100%;
		margin-top: 20px;
		padding: 20px;
		background: #FFFB1F;
		border-radius: 30px;
		border: none;
		font-size: 18px;
		line-height: 100%;
		text-align: center;
		color: #191B20;
		display: none;
		@media only screen and (max-width: 820px) {
			display: block;
		}
	}
`