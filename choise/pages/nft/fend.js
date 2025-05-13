import Seo from "helpers/Seo";
import NftFendMain from "layouts/NftFend/NftFendMain";
import NftFendList from "layouts/NftFend/NftFendList";
import NftFendWorks from "layouts/NftFend/NftFendWorks";
import NftFendFaq from "layouts/NftFend/NftFendFaq";
import NftFendBanner from "layouts/NftFend/NftFendBanner";
import NftFendSecurity from "layouts/NftFend/NftFendSecurity";
import NftFendCalculator from "layouts/NftFend/NftFendCalculator";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";
export default function Fend(){
	const {locale} = useRouter()
	const t = require(`locale/page-nft-fend/${locale}.json`)

	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/fend.jpg"
			/>
			<Header/>
			<main>
				<NftFendMain t={t.main}/>
				<NftFendList t={t.list}/>
				<NftFendWorks t={t.works}/>
				<NftFendBanner t={t.banner}/>
				<NftFendSecurity  t={t.security}/>
				<NftFendCalculator t={t.calculator}/>
				{/*<NftFendFaq t={t.faq}/>*/}
			</main>
			<Footer/>
		</>
	)
}
