import Seo from "helpers/Seo";
import styled from "styled-components";
import {directusImage, renderDate, renderFullPost, renderSimilarNews} from "utils/news";
import NewsWrapper from "layouts/News/NewsWrapper";
import NewsCategories from "layouts/News/NewsCategories";
import Title from "components/Title";
import Link from "next/link";
import Image from "next/legacy/image";
import htmlContent from "helpers/htmlContent";
import ShareButtons from "components/ShareButtons";
import {useSnapshot} from "valtio";
import {state} from "state";
import NewsBreadcrumbs from "layouts/News/NewsBreadcrumbs";
import NewsSeoScript from "layouts/News/NewsSeoScript";
import {useEffect, useState} from "react";
import NewsCardItem from "layouts/News/NewsCardItem";
import DirectusImage from "helpers/DirectusImage";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Post({data}) {
	const {locale} = useRouter()
	const {post} = require(`locale/page-news-post/${locale}.json`)
	
	const snap = useSnapshot(state);
	const [array, setArray] = useState([])
	useEffect(() => {
		renderSimilarNews(data.id, data.category.id).then(r => setArray(r))
	}, [])
	const renderLink = () => {
		if (snap.newsBackPage) {
			return `/news/${data.category.slug}?page=${snap.newsBackPage}`
		} else return `/news/${data.category.slug}`
	}
	return (
		<>
			<Seo
				title={`${data.seo_title ? data.seo_title : data.title} | News Blog`}
				description={data.seo_description ? data.seo_description : data.short_description}
				image={data.seo_image ? directusImage(data.seo_image) : data.image ? directusImage(data.image) : data.old_image}
				keywords={data.seo_keywords ? data.seo_keywords.join(", ") : ""}
			/>
			<Header/>
			<main>
				<NewsSeoScript data={data}/>
				<NewsWrapper fullPost={true}>
					<NewsCategories category={data.category} main={false}/>
					<Wrapper className="news_content">
						<div className="heading">
							<Link href={renderLink()}>
								
								<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M6.65685 15.0709L0.292892 8.70692C-0.0976315 8.31639 -0.0976315 7.68323 0.292892 7.2927L6.65685 0.928741C7.04738 0.538216 7.68054 0.538216 8.07107 0.928741C8.46159 1.31926 8.46159 1.95243 8.07107 2.34295L3.41421 6.99981L16 6.99981C16.5523 6.99981 17 7.44752 17 7.99981C17 8.55209 16.5523 8.99981 16 8.99981L3.41421 8.99981L8.07107 13.6567C8.46159 14.0472 8.46159 14.6804 8.07107 15.0709C7.68054 15.4614 7.04738 15.4614 6.65685 15.0709Z"/>
								</svg>{post.link}
							</Link>
							<Title><h1>{data.title}</h1></Title>
						</div>
						<div className="time_date_block">
							<ul className="time_date">
								<li>{renderDate(data.date_created).date}</li>
								<li>{renderDate(data.date_created).time}</li>
								<li>{post.li_3}</li>
								{data.date_updated && renderDate(data.date_created).date !== renderDate(data.date_updated).date && (
									<li>Last Updated {renderDate(data.date_updated).date}</li>
								)}
							</ul>
							<div className="author_block">
								<div className="author_image">
									<Image width={20} height={20} priority={true} src="/pic/authors/choise-team.png" alt="Choise.com team"/>
								</div>
								<div className="author_name">
									<span className="dynamic_author"></span>{post.dynamic_author}
								</div>
							</div>
						</div>
						<div className="content">
							<div className="main_image">
								<DirectusImage data={data} alt={data.title} width={742} height={0}/>
							</div>
							<div className="content_block">
								{htmlContent(data.content)}
							</div>
						</div>
						{
							array.length ? (
								<div className="more_news_list">
									{
										array.map((item, index) => {
											return <NewsCardItem item={item} key={index}/>
										})
									}
								</div>
							) : null
						}
						<NewsBreadcrumbs
							categoryName={data.category.title}
							categorySlug={data.category.slug}
							title={data.title}
						/>
						<ShareButtons title={data.title}/>
					</Wrapper>
				</NewsWrapper>
			</main>
			<Footer/>
		</>
	)
}

const Wrapper = styled.section`
	.title {
		width: calc(100% - 200px);
		padding-right: 40px;
		@media only screen and (max-width: 600px) {
			width: 100%;
			padding-right: 0;
			margin-top: 20px;
		}
		h1{
			font-size: 32px;
			line-height: 120%;
			@media only screen and (max-width: 600px) {
				font-size: 25px;
			}
		}
	}
	.heading{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		.title{
			margin-top: 40px;
			@media only screen and (max-width: 600px) {
				margin-top: 30px;
			}
		}
		a{
			width: auto;
			display: inline-flex;
			border: 1px solid #EBEBEB;
			border-radius: 40px;
			align-items: center;
			justify-content: center;
			padding: 16px 40px;
			height: 56px;
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
			&:hover{
				background: #191B20;
				border: 1px solid #191B20;
				color: #F9F9F9;
				svg{
					fill: #F9F9F9;
					transition: all .3s ease-in-out;
				}
			}
			svg{
				margin-right: 10px;
				fill: #191B20;
				transition: all .3s ease-in-out;
			}
		}
	}
	.time_date{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: -10px;
		li{
			font-size: 16px;
			line-height: 16px;
			color: #7B8199;
			display: flex;
			margin-bottom: 10px;
			align-items: center;
			&:last-child:after{
				display: none;
			}
			&:after{
				content: "";
				width: 2px;
				height: 2px;
				margin: 0 10px;
				background: #7B8199;
				border-radius: 3px;
				display: block;
			}
		}
	}
	table{
		td, th{
			padding: 5px 10px;
			border: 1px solid #ebebeb;
			font-size: 18px;
			line-height: 1.5;
			@media only screen and (max-width: 600px) {
				font-size: 15px;
			}
		}
	}
	.content_block{
		table{
			border-spacing: 2px;
			border-collapse: separate;
			width: 100% !important;
			margin: 20px 0 !important;
			td{
				margin: 0 !important;
				padding: 10px 15px !important;
				font-size: 16px !important;
				border-radius: 5px !important;
				@media only screen and (max-width: 600px) {
					font-size: 14px !important;
				}
			}
			p{
				margin: 5px 0;
				@media only screen and (max-width: 600px) {
					line-height: 1.2;
				}
			}
		}
		p, h2, h3, h4, h5{
			margin: 30px 0;
			line-height: 1.5;
		}
		hr{
			margin: 50px 0;
			padding: 0;
			height: 0;
			border: none;
			border-top: 1px solid #42D78E;
		}
		table{
			width: 100%;
		}
		ul, ol{
			margin-left: 30px;
			li{
				margin-bottom: 10px;
				font-size: 18px;
				line-height: 1.5;
				@media only screen and (max-width: 600px) {
					font-size: 15px;
				}
				&:last-child{
					margin-bottom: 0;
				}
			}
		}
		ul{
			list-style: disc;
		}
	}
	.content{
		max-width: 742px;
		width: 100%;
		margin-top: 40px;
		font-size: 18px;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
		}
		@media only screen and (max-width: 600px) {
			font-size: 15px;
		}
		a{
			color: #0285FD;
			text-decoration: underline;
		}
	}
	iframe{
		max-width: 100%;
		width: 100%;
	}
	.main_image{
		position: relative;
		width: 100%;
		height: 400px;
		margin-bottom: 40px;
		@media only screen and (max-width: 600px) {
			height: 220px;
		}
		img{
			object-fit: cover;
			object-position: center;
			border-radius: 20px;
			@media only screen and (max-width: 600px) {
				border-radius: 10px;
			}
		}
	}
	.time_date_block{
		max-width: 742px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
		@media only screen and (max-width: 820px) {
			max-width: 820px;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.link_button{
		background: #FFFB1F;
		border-radius: 40px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 56px;
		padding: 16px 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		text-decoration: none !important;
		color: #191B20 !important;
		&:hover{
			background: #0285FD;
			color: #ffffff !important;
		}
	}
	.more_news_list{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		.item{
			width: calc(100% / 3 - 15px);
			margin-bottom: 30px;
			@media only screen and (max-width: 1024px) {
				width: calc(100% / 2 - 15px);
				&:last-child{
					display: none;
				}
			}
			@media only screen and (max-width: 600px) {
				width: 100%;
				&:last-child{
					display: block;
				}
			}
		}
	}
	.content_block {
		div, iframe, video{
			max-width: 100% !important;
			width: 100% !important;
		}
	}
	.author_block{
		display: flex;
		align-items: center;
		font-size: 16px;
		line-height: 16px;
		color: #7B8199;
		@media only screen and (max-width: 600px) {
			margin-top: 15px;
		}
	}
	.author_image{
		border-radius: 50%;
		overflow: hidden;
		line-height: 0;
		margin-right: 5px;
	}
`

export async function getServerSideProps(ctx) {
	const data = await renderFullPost(ctx.query.slug)
	return {props: {data}}
}
