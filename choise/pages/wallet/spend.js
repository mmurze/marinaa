import WalletMainHeading from "components/Wallet/WalletMainHeading";
import WalletCoinSupported from "layouts/Wallet/WalletCoinSupported";
import WalletLinks from "components/Wallet/WalletLinks";
import WalletSpendGrid from "layouts/Wallet/WalletSpendGrid";
import Seo from "helpers/Seo";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Spend(){
	const {locale} = useRouter()
	const t = require(`locale/page-wallet-spend/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/spend.jpg"
			/>
			<Header/>
			<main>
				<WalletMainHeading
					title={t.wallet_main_heading.title}
					description={t.wallet_main_heading.description}
					linkTitle={t.wallet_main_heading.linkTitle}
					image="/pic/wallet/main-spend.png"
					imageWidth={438.3}
					imageHeight={515}
					appLink="https://crypterium.onelink.me/jtmZ/cardsorderorderws?app_screen=cards/order_order_ws"
				/>
				<WalletCoinSupported/>
				<WalletSpendGrid t={t.grid}/>
				<WalletLinks center={true}/>
			</main>
			<Footer/>
		</>
	)
}