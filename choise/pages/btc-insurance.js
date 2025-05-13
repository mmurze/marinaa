import Seo from "helpers/Seo";
import Header from "components/Header";
import Footer from "components/Footer";
import BtcInsuranceMain from "layouts/BtcInsurance/BtcInsuranceMain";
import BtcInsuranceBanner from "layouts/BtcInsurance/BtcInsuranceBanner";
import {useRouter} from "next/router";

export default function BtcInsurance(){
	const {locale} = useRouter()
	const t = require(`locale/page-btc-insurance/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/btc-insurance.jpg"
			/>
			<Header blackTheme={true}/>
			<main className="black_background">
				<BtcInsuranceMain t={t.main}/>
				<BtcInsuranceBanner t={t.banner}/>
			</main>
			<Footer blackTheme={true}/>
		</>
	)
}
