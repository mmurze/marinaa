import Seo from "helpers/Seo";
import CharismBetaMain from "layouts/CharismBeta/CharismBetaMain";
import CharismBetaWhatIsIt from "layouts/CharismBeta/CharismBetaWhatIsIt";
import CharismBetaParticipate from "layouts/CharismBeta/CharismBetaParticipate";
import CharismBetaNft from "layouts/CharismBeta/CharismBetaNft";
import CharismBetaFaq from "layouts/CharismBeta/CharismBetaFaq";
import CharismBetaMetaFi from "layouts/CharismBeta/CharismBetaMetaFi";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function CharismBeta() {
	const {locale} = useRouter()
	const t = require(`locale/page-charism-beta/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/charism-beta.jpg"
			/>
			<Header/>
			<main>
				<CharismBetaMain t={t.main}/>
				<CharismBetaWhatIsIt t={t.whatIsIt}/>
				<CharismBetaParticipate t={t.participate}/>
				<CharismBetaNft t={t.nft}/>
				<CharismBetaFaq t={t.faq}/>
				<CharismBetaMetaFi t={t.metaFi}/>
			</main>
			<Footer/>
		</>
	)
}