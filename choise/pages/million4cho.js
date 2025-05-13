import Seo from "helpers/Seo";
import Million4choMain from "layouts/Million4cho/Million4choMain";
import Million4choHeader from "layouts/Million4cho/Million4choHeader";
import Million4choDescription from "layouts/Million4cho/Million4choDescription";
import Million4choBenefits from "layouts/Million4cho/Million4choBenefits";
import Million4choGleam from "layouts/Million4cho/Million4choGleam";
import Million4choInformation from "layouts/Million4cho/Million4choInformation";
import Million4choFaq from "layouts/Million4cho/Million4choFaq";
import Million4choFooter from "layouts/Million4cho/Million4choFooter";
import Million4choPriceExchanges from "layouts/Million4cho/Million4choPriceExchanges";
import Million4choMobile from "layouts/Million4cho/Million4choMobile";
import {useRouter} from "next/router";

export default function Million4cho(){
	const {locale} = useRouter()
	const t = require(`locale/page-million4cho/${locale}.json`)

	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/million4cho.jpg"
			/>
			<main>
				<Million4choMobile t={t.mobile}/>
				{/*<Million4choForm/>*/}
				{/*<Million4choTweets/>*/}
				<Million4choHeader t={t.header}/>
				<Million4choMain t={t.main}/>
				<Million4choDescription t={t.description}/>
				<Million4choBenefits t={t.benefits}/>
				<Million4choGleam t={t.gleam}/>
				{/*<Million4choChoise t={t.choise}/>*/}
				<Million4choInformation t={t.information}/>
				<Million4choPriceExchanges t={t.price_exchanges}/>
				<Million4choFaq t={t.faq}/>
				<Million4choFooter t={t.footer}/>
			</main>
		</>
	)
}
