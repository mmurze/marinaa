import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useState} from "react";
import Router, {useRouter} from "next/router";
import Responsive from "helpers/Responsive";

export default function NewsSearch({searchValue = ""}) {
	const {locale} = useRouter()
	const {newsSearch} = require(`locale/components/${locale}.json`)
	
	const [search, setSearch] = useState(searchValue)
	const onHandleSubmit = (e) => {
		e.preventDefault()
		Router.push(`/news/search?s=${search}`)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<div className="title">{newsSearch.title_1}<img src="/pic/decor/round-arrow-right.svg" alt="all to know about crypto"/>{newsSearch.title_2}</div>
				<form onSubmit={onHandleSubmit}>
					<Responsive width={600}>
						<span className="search"><img src="/pic/news/search-icon.svg" alt="search"/></span>
					</Responsive>
					<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter articles title" required={true}/>
					<button disabled={!search.length}>
						<Responsive width={600} mobile={
							<img src="/pic/news/search-icon.svg" alt="search"/>
						}>
							{newsSearch.title_button}
						</Responsive>
					</button>
				</form>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.title{
		font-weight: 700;
		font-size: 48px;
		line-height: 100%;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			font-size: 25px;
		}
		img{
			line-height: 0;
			margin: 0 10px;
			@media only screen and (max-width: 600px) {
				display: none;
			}
		}
	}
	form{
		max-width: 780px;
		width: 100%;
		margin: 40px auto 0 auto;
		position: relative;
	}
	button{
		width: auto;
		position: absolute;
		top: 5px;
		right: 5px;
		height: 50px;
		background: #FFFB1F;
		border-radius: 30px;
		font-size: 18px;
		line-height: 100%;
		padding: 0 50px;
		@media only screen and (max-width: 600px) {
			padding: 0;
			width: 50px;
			height: 50px;
		}
		&:disabled{
			opacity: .5;
			cursor: default;
		}
	}
	input{
		height: 60px;
		border: 1px solid #DDDFE4;
		border-radius: 30px;
		padding: 20px 180px 20px 60px;
		font-size: 18px;
		line-height: 100%;
		@media only screen and (max-width: 600px) {
			padding: 20px 70px 20px 20px;
			font-size: 16px;
		}
	}
	.search{
		position: absolute;
		left: 30px;
		top: 0;
		height: 100%;
		display: flex;
		align-items: center;
	}
`