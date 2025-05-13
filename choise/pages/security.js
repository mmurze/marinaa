import Seo from "helpers/Seo";
import SecurityMain from "layouts/Security/SecurityMain";
import SecurityLogoList from "layouts/Security/SecurityLogoList";
import SecurityAssetsSafe from "layouts/Security/SecurityAssetsSafe";
import SecurityBenefits from "layouts/Security/SecurityBenefits";
import SecurityFeatures from "layouts/Security/SecurityFeatures";
import SecurityRiskManagement from "layouts/Security/SecurityRiskManagement";
import SecurityMarketVideo from "layouts/Security/SecurityMarketVideo";
import SecurityListCertificates from "layouts/Security/SecurityListCertificates";
import ChoiseProducts from "layouts/ChoiseProducts";
import SecurityBanner from "layouts/Security/SecurityBanner";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Security(){
	const {locale} = useRouter()
	const t = require(`locale/page-security/${locale}.json`)

	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/security.jpg"
			/>
			<Header/>
			<main>
				<SecurityMain t={t.main}/>
				<SecurityLogoList/>
				<SecurityAssetsSafe t={t.assets_safe}/>
				<SecurityBenefits t={t.benefits}/>
				<SecurityFeatures t={t.features}/>
				<SecurityRiskManagement t={t.risk_managment}/>
				<SecurityMarketVideo t={t.market_video}/>
				<SecurityListCertificates t={t.list_certificates}/>
				<SecurityBanner t={t.banner}/>
				<ChoiseProducts/>
			</main>
			<Footer/>
		</>
	)
}
