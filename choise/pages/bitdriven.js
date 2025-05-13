import Header from "components/Header";
import Footer from "components/Footer";
import BitdrivenMain from "layouts/Bitdriven/BitdrivenMain";
import BitdrivenFund from "layouts/Bitdriven/BitdrivenFund";
import BitdrivenHowWorks from "layouts/Bitdriven/BitdrivenHowWorks";
import BitdrivenGettingStarted from "layouts/Bitdriven/BitdrivenGettingStarted";
import BitdrivenInformation from "layouts/Bitdriven/BitdrivenInformation";
import BitdrivenEarn from "layouts/Bitdriven/BitdrivenEarn";
import BitdrivenFaq from "layouts/Bitdriven/BitdrivenFaq";
import BitdrivenTerms from "layouts/Bitdriven/BitdrivenTerms";
import Seo from "helpers/Seo";
import {useRouter} from "next/router";

export default function Bitdriven(){
	const {locale} = useRouter()
	const t = require(`locale/page-bitdriven/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/bitdriven.jpg"
			/>
			<Header blackTheme={true}/>
			<main className="black_background">
				<BitdrivenMain t={t.main}/>
				<BitdrivenFund t={t.fund}/>
				<BitdrivenHowWorks t={t.how_works}/>
				<BitdrivenGettingStarted t={t.getting_started}/>
				<BitdrivenInformation t={t.information}/>
				<BitdrivenEarn t={t.earn}/>
				<BitdrivenFaq t={t.faq}/>
				<BitdrivenTerms t={t.terms}/>
			</main>
			<Footer blackTheme={true}/>
		</>
	)
}