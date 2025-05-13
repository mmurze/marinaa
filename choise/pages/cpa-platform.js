import Seo from "helpers/Seo";
import CpaPlatformMain from "layouts/CpaPlatform/CpaPlatformMain";
import CpaBenefits from "layouts/CpaPlatform/CpaBenefits";
import CpaSolution from "layouts/CpaPlatform/CpaSolution";
import CpaAdvantages from "layouts/CpaPlatform/CpaAdvantages";
import CpaHowItWork from "layouts/CpaPlatform/CpaHowItWork";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";
// import CpaRegister from "layouts/CpaPlatform/CpaRegister";

export default function CpaPlatform(){
	const {locale} = useRouter()
	const t = require(`locale/page-cpa-platform/${locale}.json`)

	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/cpa.jpg"
			/>
			<Header/>
			<main>
				<CpaPlatformMain t={t.main}/>
				<CpaBenefits t={t.benefits}/>
				<CpaSolution t={t.solution}/>
				<CpaAdvantages t={t.advantages}/>
				<CpaHowItWork t={t.how_works}/>
				{/*<CpaRegister t={t.register}/>*/}
			</main>
			<Footer/>
		</>
	)
}

export async function getStaticProps({locale}) {
	const t = {...require(`locale/page-cpa-platform/${locale}.json`)}
	return {props: {t}}
}
