import Seo from "helpers/Seo";
import DualCurrencyMain from "layouts/DualCurrencyAccount/DualCurrencyMain";
import DualCurrencyBenefits from "layouts/DualCurrencyAccount/DualCurrencyBenefits";
import DualCurrencyAdvantages from "layouts/DualCurrencyAccount/DualCurrencyAdvantages";
import DualCurrencyExamples from "layouts/DualCurrencyAccount/DualCurrencyExamples";
import DualCurrencySteps from "layouts/DualCurrencyAccount/DualCurrencySteps";
import DualCurrencyFaq from "layouts/DualCurrencyAccount/DualCurrencyFaq";
import DualCurrencyRisks from "layouts/DualCurrencyAccount/DualCurrencyRisks";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function DualCurrencyInterestAccount(){
	const {locale} = useRouter()
	const t = require(`locale/page-dual-currency-interest-account/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/dual-currency-interest-account.jpg"
			/>
			<Header/>
			<main>
				<DualCurrencyMain t={t.main}/>
				<DualCurrencyBenefits t={t.benefits}/>
				<DualCurrencyAdvantages t={t.advantages}/>
				<DualCurrencyRisks t={t.risks}/>
				<DualCurrencySteps t={t.steps}/>
				<DualCurrencyExamples t={t.examples}/>
				<DualCurrencyFaq t={t.faq}/>
			</main>
			<Footer/>
		</>
	)
}