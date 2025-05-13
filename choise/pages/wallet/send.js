import WalletMainHeading from "components/Wallet/WalletMainHeading";
import WalletCoinSupported from "layouts/Wallet/WalletCoinSupported";
import WalletLinks from "components/Wallet/WalletLinks";
import WalletGrid from "components/Wallet/WalletGrid";
import WalletSendMap from "layouts/Wallet/Send/WalletSendMap";
import WalletSendPrices from "layouts/Wallet/Send/WalletSendPrices";
import Seo from "helpers/Seo";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Send(){
	const {locale} = useRouter()
	const t = require(`locale/page-wallet-send/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/send.jpg"
			/>
			<Header/>
			<main>
				<WalletMainHeading
					title={t.wallet_main_heading.title}
					description={t.wallet_main_heading.description}
					linkTitle={t.wallet_main_heading.linkTitle}
					image="/pic/wallet/main-send.png"
					imageWidth={346}
					imageHeight={506}
					appLink="https://crpt.onelink.me/WpQ0/5gcn73hp"
				/>
				<WalletCoinSupported/>
				<WalletSendMap t={t.map}/>
				<WalletGrid array={t.array}/>
				<WalletSendPrices t={t.prices}/>
				<WalletLinks center={true}/>
			</main>
			<Footer/>
		</>
	)
}