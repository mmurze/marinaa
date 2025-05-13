import WalletMainHeading from "components/Wallet/WalletMainHeading";
import WalletLinks from "components/Wallet/WalletLinks";
import Seo from "helpers/Seo";
import FaqBlock from "components/FaqBlock";
import WalletRefferalBanner from "layouts/Wallet/Referral/WalletRefferalBanner";
import WalletReferralSteps from "layouts/Wallet/Referral/WalletReferralSteps";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Referral(){
	const {locale} = useRouter()
	const t = require(`locale/page-wallet-referral/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/referral.jpg"
			/>
			<Header/>
			<main>
				<WalletMainHeading
					title={t.wallet_main_heading.title}
					description={t.wallet_main_heading.description}
					linkTitle={t.wallet_main_heading.linkTitle}
					appLink="https://crypterium.onelink.me/jtmZ/referral2?app_screen=referral"
					image="/pic/wallet/main-referral.png"
					imageWidth={323}
					imageHeight={523}
					glow={false}
				/>
				<WalletReferralSteps t={t.steps}/>
				<WalletRefferalBanner t={t.banner}/>
				<FaqBlock array={t.faq_array}/>
				<WalletLinks center={true}/>
			</main>
			<Footer/>
		</>
	)
}