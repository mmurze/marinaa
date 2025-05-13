import Seo from "helpers/Seo";
import Header from "components/Header";
import Footer from "components/Footer";
import BuybtcMain from "layouts/Buybtc/BuybtcMain";
import BuybtcBanner from "layouts/Buybtc/BuybtcBanner";
import {useRouter} from "next/router";

export default function Buybtc(){
	const {locale} = useRouter()
	const t = require(`locale/page-buybtc/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/of/buybtc.jpg"
			/>
			<Header blackTheme={true}/>
			<main className="black_background">
				<BuybtcMain t={t.main}/>
				<BuybtcBanner t={t.banner}/>
			</main>
			<Footer blackTheme={true}/>
		</>
	)
}
