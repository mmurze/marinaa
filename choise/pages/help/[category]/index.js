import Seo from "helpers/Seo";
import {getCatalogPostsList, getCatalogPostsTitle} from "utils/help-zendesk";
import {useEffect, useState} from "react";
import Title from "components/Title";
import HelpCategoryList from "layouts/Help/HelpCategoryList";
import Link from "next/link";
import HelpSearch from "layouts/Help/HelpSearch";
import HelpBreadCrumbs from "layouts/Help/HelpBreadCrumbs";
import HelpKnowMore from "layouts/Help/HelpKnowMore";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

export default function HelpCategory({category}) {
	const [page, setPage] = useState(1)
	const [data, setData] = useState(null)
	const [array, setArray] = useState([])
	const [total, setTotal] = useState(null)
	useEffect(() => {
		getCatalogPostsTitle(category).then(r => setData(r))
	}, [])
	useEffect(() => {
		if (data) {
			getCatalogPostsList(data.id).then(r => {
				setArray(r.array)
				setTotal(r.total)
			})
		}
	}, [data])
	return (
		<>
			<Seo
				title={data ? data.name : "Support"}
				description=""
				image="/pic/og/help.jpg"
			/>
			<Head>
				<script defer id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=4e823d67-2bc8-436d-bee9-92fd8f2d1912"/>
			</Head>
			<Header/>
			<main>
				<HelpSearch/>
				<HelpBreadCrumbs>{data?.name}</HelpBreadCrumbs>
				<HelpCategoryList>
					<Title><h2>{data?.name}</h2></Title>
					<div className="list">
						{
							array.map((item, index) => {
								return (
									<div className="item" key={index}>
										<Link href={`/help/${category}/${item.id}`}>
											<span>{item.name}</span>
											<img src="/pic/help/help-category-arrow.svg" alt={item.name}/>
										</Link>
									</div>
								);
							})
						}
					</div>
				</HelpCategoryList>
				<HelpKnowMore/>
			</main>
			<Footer/>
		</>
	)
}

export async function getServerSideProps(ctx) {
	// const data = await getCatalogPostsTitle(ctx.query.category)
	return { props: {category: ctx.query.category} }
}