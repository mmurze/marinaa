import Seo from "helpers/Seo";
import ChostakingMain from "layouts/Chostaking/ChostakingMain";
import ChostakingStakeIt from "layouts/Chostaking/ChostakingStakeIt";
import ChostakingWhy from "layouts/Chostaking/ChostakingWhy";
import ChostakingToken from "layouts/Chostaking/ChostakingToken";
import ChostakingFaq from "layouts/Chostaking/ChostakingFaq";
import ChoiseProducts from "layouts/ChoiseProducts";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Chostaking(){
	const {locale} = useRouter()
	const t = require(`locale/page-chos-taking/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/chostaking.jpg"
			/>
			<Head>
				<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"/>
			</Head>
			<Header/>
			<main>
				<ChostakingMain t={t.main}/>
				<ChostakingStakeIt t={t.stakeIt}/>
				<ChostakingWhy t={t.why}/>
				<ChostakingToken t={t.token}/>
				<ChostakingFaq t={t.faq}/>
				<ChoiseProducts/>
			</main>
			<Footer/>
		</>
	)
}