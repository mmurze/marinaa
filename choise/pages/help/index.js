import Seo from "helpers/Seo";
import HelpSearch from "layouts/Help/HelpSearch";
import HelpGetStarted from "layouts/Help/HelpGetStarted";
import HelpReglaments from "layouts/Help/HelpReglaments";
import HelpKnowMore from "layouts/Help/HelpKnowMore";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Help(){
	const {locale} = useRouter()
	const t = require(`locale/page-help/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/help.jpg"
			/>
			<Head>
				<script defer id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=4e823d67-2bc8-436d-bee9-92fd8f2d1912"/>
			</Head>
			<Header/>
			<main>
				<HelpSearch main={true}/>
				<HelpGetStarted t={t.getStarted}/>
				<HelpReglaments t={t.reglaments}/>
				<HelpKnowMore/>
			</main>
			<Footer/>
		</>
	)
}