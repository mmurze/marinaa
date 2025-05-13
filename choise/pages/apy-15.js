import Apy15Main from "layouts/Apy15/Apy15Main";
import Apy15Rates from "layouts/Apy15/Apy15Rates";
import Apy15Exchanges from "layouts/Apy15/Apy15Exchanges";
import Apy15Terms from "layouts/Apy15/Apy15Terms";
import Apy15Content from "layouts/Apy15/Apy15Content";
import Apy15Faq from "layouts/Apy15/Apy15Faq";
import Seo from "helpers/Seo";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";
export default function Apy15(){
	const {locale} = useRouter()
	const t = require(`locale/page-apy-15/${locale}.json`)
	
	return (
		<>
			<Seo
				title="High Interest Savings Account (15% APY) In Cryptocurrency"
				description="Choise.com offers the unique opportunity to get up to 15% APY on USDT – one of the most attractive rates on both financial and cryptocurrency markets"
				image="/pic/og/apy-15.jpg"
			/>
			<Head>
				<script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5FDQQK3');`}}/>
			</Head>
			
			<noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FDQQK3" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}/>
			<Header/>
			<main>
				<Apy15Main t = {t.main}/>
				<Apy15Rates t={t.rates}/>
				<Apy15Exchanges t={t.exchanges}/>
				<Apy15Terms t={t.terms}/>
				<Apy15Content t={t.content}/>
				<Apy15Faq t={t.faq}/>
			</main>
			<Footer/>
		</>
	)
}