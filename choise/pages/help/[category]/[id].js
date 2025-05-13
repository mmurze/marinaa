import Seo from "helpers/Seo";
import {getHelpPage} from "utils/help-zendesk";
import HelpContent from "layouts/Help/HelpContent";
import htmlContent from "helpers/htmlContent";
import Title from "components/Title";
import HelpBreadCrumbs from "layouts/Help/HelpBreadCrumbs";
import Head from "next/head";
import {useEffect, useState} from "react";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Article({id}) {
	const [data, setData] = useState(null)
	useEffect(() => {
		getHelpPage(id).then(r => setData(r))
	}, [])
	return (
		<>
			<Seo
				title={data ? data.title : "Support page"}
				description=""
				image="/pic/og/help.jpg"
			/>
			<Head>
				<script defer id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=4e823d67-2bc8-436d-bee9-92fd8f2d1912"/>
			</Head>
			<Header/>
			<main>
				<HelpBreadCrumbs>{data?.title}</HelpBreadCrumbs>
				<HelpContent>
					<Title><h1>{data?.title}</h1></Title>
					<div className="content">
						{htmlContent(data?.body)}
					</div>
				</HelpContent>
			</main>
			<Footer/>
		</>
	)
}

export async function getServerSideProps(ctx) {
	// const data = await getHelpPage(ctx.query.id)
	return { props: {id: ctx.query.id} }
}