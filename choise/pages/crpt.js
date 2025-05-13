import Seo from "helpers/Seo";
import CrptMain from "layouts/Crpt/CrptMain";
import CrptData from "layouts/Crpt/CrptData";
import CrptMarkets from "layouts/Crpt/CrptMarkets";
import CrptBurnIt from "layouts/Crpt/CrptBurnIt";
import CrptToken from "layouts/Crpt/CrptToken";
import CrptPurchasesBanner from "layouts/Crpt/CrptPurchasesBanner";
import CrptHolding from "layouts/Crpt/CrptHolding";
import CrptSteps from "layouts/Crpt/CrptSteps";
import CrptLoyaltyProgram from "layouts/Crpt/CrptLoyaltyProgram";
import CrptBanner from "layouts/Crpt/CrptBanner";
import CrptSupportedServices from "layouts/Crpt/CrptSupportedServices";
import axios from "axios";
import {useEffect, useState} from "react";
import {getBurnCrpt} from "utils/functions";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Crpt({data}){
	const {locale} = useRouter()
	const t = require(`locale/page-crpt/${locale}.json`)
	
	const [max, setMax] = useState(0)
	const [array, setArray] = useState([])
	useEffect(() => {
		getBurnCrpt().then(r => {
			setArray(r.reverse())
			let max = 0
			r.map(item => {
				if (item.burn > max) max = item.burn
			})
			setMax(max)
		})
	}, [])
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/crpt.jpg"
			/>
			<Header/>
			<main>
				<CrptMain t={t.main}/>
				<CrptData data={data} t={t.data}/>
				<CrptMarkets t={t.markets} />
				<CrptBurnIt array={array} t={t.burn_it}/>
				<CrptToken array={array} max={max}  t={t.token}/>
				<CrptPurchasesBanner t={t.purchases_banner}/>
				<CrptHolding t={t.holding}/>
				<CrptSteps t={t.steps}/>
				<CrptLoyaltyProgram t={t.loyalty_program}/>
				<CrptBanner t={t.banner}/>
				<CrptSupportedServices t={t.supported_services}/>
			</main>
			<Footer/>
		</>
	)
}

export async function getServerSideProps(ctx) {
	const data = await axios.get('https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5000&start=1')
	return { props: {data: data ? data.data.data.find(item => item.name === 'Crypterium') : null} }
}