import WalletLinks from "components/Wallet/WalletLinks";
import WalletMain from "layouts/Wallet/Main/WalletMain";
import WalletCards from "layouts/Wallet/Main/WalletCards";
import WalletCoinSupported from "layouts/Wallet/WalletCoinSupported";
import WalletSimpleSteps from "layouts/Wallet/Main/WalletSimpleSteps";
import WalletDigitalAssets from "layouts/Wallet/Main/WalletDigitalAssets";
import WalletCardBenefits from "layouts/Wallet/Main/WalletCardBenefits";
import Seo from "helpers/Seo";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Wallet(){
	const {locale} = useRouter()
	const t = require(`locale/page-wallet/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/wallet.jpg"
			/>
			<Header/>
			<main>
				<WalletLinks top={true} center={true}/>
				<WalletMain t={t.main}/>
				<WalletCards t={t.cards}/>
				<WalletCoinSupported/>
				<WalletSimpleSteps t={t.simple_step}/>
				<WalletDigitalAssets/>
				<WalletCardBenefits  t={t.card_benefits}/>
				<WalletLinks center={true}/>
			</main>
			<Footer/>
		</>
	)
}