import Seo from "helpers/Seo";
import AboutCharismMain from "layouts/AboutCharism/AboutCharismMain";
import AboutCharismFingerprints from "layouts/AboutCharism/AboutCharismFingerprints";
import AboutCharismDex from "layouts/AboutCharism/AboutCharismDex";
import AboutCharismChain from "layouts/AboutCharism/AboutCharismChain";
import AboutCharismAnalyze from "layouts/AboutCharism/AboutCharismAnalyze";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function AboutCharism() {
	const {locale} = useRouter()
	const t = require(`locale/page-about/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/charism-about.jpg"
			/>
			<Header/>
				<main>
					<AboutCharismMain t={t.main} />
					<AboutCharismFingerprints t={t.fingerprints}/>
					<AboutCharismDex t={t.dex}/>
					<AboutCharismChain t={t.chain}/>
					<AboutCharismAnalyze t={t.analyze}/>
				</main>
			<Footer/>
		</>
	)
}