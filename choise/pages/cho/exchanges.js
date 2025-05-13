import Seo from "helpers/Seo";
import ChoExchangesMain from "layouts/ChoExchanges/ChoExchangesMain";
import ChoExchangesDescription from "layouts/ChoExchanges/ChoExchangesDescription";
import ChoExchangesBanner from "layouts/ChoExchanges/ChoExchangesBanner";
import ChoiseProducts from "layouts/ChoiseProducts";
import ChoExchangesTokenomics from "layouts/ChoExchanges/ChoExchangesTokenomics";
import ChoExchangesToken from "layouts/ChoExchanges/ChoExchangesToken";
import ChoExchangesStoreList from "layouts/ChoExchanges/ChoExchangesStoreList";
import ChoExchangesHowBuy from "layouts/ChoExchanges/ChoExchangesHowBuy";
import MediaNewsList from "components/MediaNewsList";
import array from "/public/data/exchanges-media.json"
import ChoExchangesPriceTracking from "layouts/ChoExchanges/ChoExchangesPriceTracking";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Exchanges(){
	const {locale} = useRouter()
	const t = require(`locale/page-exchanges/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/cho-exchanges.jpg"
			/>
			<Header/>
			<main>
				<ChoExchangesMain t={t.main}/>
				<ChoExchangesDescription t={t.description}/>
				<ChoExchangesBanner t={t.banner}/>
				<ChoExchangesTokenomics t={t.tokenomics}/>
				<ChoExchangesToken t={t.token}/>
				<ChoExchangesStoreList t={t.storeList}/>
				<ChoExchangesPriceTracking t={t.priceTracking}/>
				<ChoExchangesHowBuy t={t.howBuy}/>
				<MediaNewsList array={array}/>
				<ChoiseProducts/>
			</main>
			<Footer/>
		</>
	)
}
