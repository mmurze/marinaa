import WalletMainHeading from "components/Wallet/WalletMainHeading";
import WalletCoinSupported from "layouts/Wallet/WalletCoinSupported";
import WalletLinks from "components/Wallet/WalletLinks";
import WalletGrid from "components/Wallet/WalletGrid";
import Seo from "helpers/Seo";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Cashout(){
	const {locale} = useRouter()
	const t = require(`locale/page-wallet-cashout/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/cashout.jpg"
			/>
			<Header/>
			<main>
				<WalletMainHeading
					title={t.wallet_main_heading.title}
					description={t.wallet_main_heading.description}
					linkTitle={t.wallet_main_heading.linkTitle}
					image="/pic/wallet/main-cashout.png"
					imageWidth={385}
					imageHeight={377}
					glow={false}
					appLink="https://crypterium.onelink.me/jtmZ/payouttocard2?app_screen=payout-to-card"
				/>
				<WalletCoinSupported/>
				<WalletGrid array={t.array}/>
				<WalletLinks center={true}/>
			</main>
			<Footer/>
		</>
	)
}