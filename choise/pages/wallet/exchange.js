import WalletMainHeading from "components/Wallet/WalletMainHeading";
import WalletCoinSupported from "layouts/Wallet/WalletCoinSupported";
import WalletLinks from "components/Wallet/WalletLinks";
import WalletGrid from "components/Wallet/WalletGrid";
import Seo from "helpers/Seo";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Exchange(){
	const {locale} = useRouter()
	const t = require(`locale/page-wallet-exchange/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/exchange.jpg"
			/>
			<Header/>
			<main>
				<WalletMainHeading
					title={t.wallet_main_heading.title}
					description={t.wallet_main_heading.description}
					linkTitle={t.wallet_main_heading.linkTitle}
					image="/pic/wallet/main-exchange.png"
					imageWidth={285}
					imageHeight={461}
					appLink="https://crpt.onelink.me/WpQ0/3p0ob5q7"
				/>
				<WalletCoinSupported/>
				<WalletGrid array={t.array}/>
				<WalletLinks center={true}/>
			</main>
			<Footer/>
		</>
	)
}