import MainBlock from "layouts/Main/MainBlock";
import Seo from "helpers/Seo";
import MainTabsInformation from "layouts/Main/MainTabsInformation";
import MainUsersEarned from "layouts/Main/MainUsersEarned";
import MainBenefits from "layouts/Main/MainBenefits";
import MainArtSecurity from "layouts/Main/MainArtSecurity";
import MainCrypteriumMarkets from "layouts/Main/MainCrypteriumMarkets";
import MainCommunity from "layouts/Main/MainCommunity";
import MainEcosystem from "layouts/Main/MainEcosystem";
import Footer from "components/Footer";
import MainPartners from "layouts/Main/MainPartners";
import Header from "components/Header";
import {useRouter} from "next/router";

export default function Home(){
	const {locale} = useRouter()
	const t = require(`locale/page-main/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<MainBlock t = {t.main_block}/>
				<MainPartners/>
				<MainTabsInformation t = {t.main_tabs_information}/>
				<MainUsersEarned t = {t.main_user_earned}/>
				<MainBenefits t = {t.main_benefits}/>
				<MainArtSecurity t = {t.main_security}/>
				<MainCrypteriumMarkets t = {t.main_markets}/>
				<MainCommunity t = {t.main_community}/>
				<MainEcosystem t = {t.main_ecosystem}/>
			</main>
			<Footer/>
		</>
	)
}
