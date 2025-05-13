import Seo from "helpers/Seo";
import {useEffect, useState} from "react";
import {getSearch} from "utils/help-zendesk";
import HelpSearchArray from "layouts/Help/HelpSearchArray";
import HelpSearch from "layouts/Help/HelpSearch";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Search({search}){
	const [array, setArray] = useState([])
	useEffect(() => {
		getSearch(search).then(r => setArray(r))
	}, [search])
	return (
		<>
			<Seo
				title={search}
				description=""
				image="/pic/og/help.jpg"
			/>
			<Head>
				<script defer id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=4e823d67-2bc8-436d-bee9-92fd8f2d1912"/>
			</Head>
			<Header/>
			<main>
				<HelpSearch value={search} main={true}/>
				<HelpSearchArray array={array}/>
			</main>
			<Footer/>
		</>
	)
}

export async function getServerSideProps(ctx) {
	return { props: {search: ctx.query.s} }
}