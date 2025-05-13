import WalletMainHeading from "components/Wallet/WalletMainHeading";
import WalletCoinSupported from "layouts/Wallet/WalletCoinSupported";
import WalletLinks from "components/Wallet/WalletLinks";
import WalletGrid from "components/Wallet/WalletGrid";
import Seo from "helpers/Seo";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Buy(){
	const {locale} = useRouter()
	const t = require(`locale/page-wallet-buy/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/buy.jpg"
			/>
			<Header/>
			<main>
				<WalletMainHeading
					contentWidth={600}
					title={t.wallet_main_heading.title}
					description={t.wallet_main_heading.description}
					linkTitle={t.wallet_main_heading.linkTitle}
					appLink="https://crpt.onelink.me/WpQ0/m81giloc"
					image="/pic/wallet/main-buy.png"
					imageWidth={357}
					imageHeight={523}
					glow={false}
				/>
				<WalletCoinSupported/>
				<WalletGrid array={t.array}/>
				<WalletLinks center={true}/>
			</main>
			<Footer/>
		</>
	)
}