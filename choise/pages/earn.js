import Seo from "helpers/Seo";
import EarnMain from "layouts/Earn/EarnMain";
import EarnChooseCoin from "layouts/Earn/EarnChooseCoin";
import ChoiseProducts from "layouts/ChoiseProducts";
import FaqBlock from "components/FaqBlock";
import WalletDigitalAssets from "layouts/Wallet/Main/WalletDigitalAssets";
import EarnSimpleSteps from "layouts/Earn/EarnSimpleSteps";
import EarnAccountsList from "layouts/Earn/EarnAccountsList";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Earn(){
	const {locale} = useRouter()
	const t = require(`locale/page-earn/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/earn.jpg"
			/>
			<Header/>
			<main>
				<EarnMain t={t.main}/>
				<EarnAccountsList t={t.account_list}/>
				<EarnChooseCoin t={t.choose_coin}/>
				<EarnSimpleSteps t={t.simple_steps}/>
				<WalletDigitalAssets featuredMedia={false}/>
				<FaqBlock center={true} array={t.array}/>
				<ChoiseProducts/>
			</main>
			<Footer/>
		</>
	)
}