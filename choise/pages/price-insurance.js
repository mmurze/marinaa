import Seo from "helpers/Seo";
import PriceInsuranceMain from "layouts/PriceInsurance/PriceInsuranceMain";
import PriceInsuranceWhatIs from "layouts/PriceInsurance/PriceInsuranceWhatIs";
import PriceInsuranceWork from "layouts/PriceInsurance/PriceInsuranceWork";
import PriceInsuranceVideoBanner from "layouts/PriceInsurance/PriceInsuranceVideoBanner";
import PriceInsuranceFaq from "layouts/PriceInsurance/PriceInsuranceFaq";
import ChoiseProducts from "layouts/ChoiseProducts";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function PriceInsurance(){
	const {locale} = useRouter()
	const t = require(`locale/page-price_insurance/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/price-insurance.jpg"
			/>
			<Header/>
			<main>
				<PriceInsuranceMain t={t.main}/>
				<PriceInsuranceWhatIs t={t.what_is}/>
				<PriceInsuranceWork t={t.work}/>
				<PriceInsuranceVideoBanner t={t.video_banner}/>
				<PriceInsuranceFaq t={t.faq}/>
				<ChoiseProducts/>
			</main>
			<Footer/>
		</>
	)
}