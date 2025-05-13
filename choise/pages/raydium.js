import Seo from "helpers/Seo";
import RaydiumMain from "layouts/Raydium/RaydiumMain";
import RaydiumPrize from "layouts/Raydium/RaydiumPrize";
import RaydiumBanner from "layouts/Raydium/RaydiumBanner";
import RaydiumForm from "layouts/Raydium/RaydiumForm";
import RaydiumTryLuck from "layouts/Raydium/RaydiumTryLuck";
import RaydiumManual from "layouts/Raydium/RaydiumManual";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Raydium(){
	const {locale} = useRouter()
	const t = require(`locale/page-raydium/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/raydium.jpg"
			/>
			<Header/>
			<main>
				<RaydiumMain t={t.main}/>
				<RaydiumManual t={t.manual}/>
				<RaydiumPrize t={t.prize}/>
				<RaydiumBanner t={t.banner}/>
				<RaydiumForm t={t.form}/>
				<RaydiumTryLuck t={t.tryLuck}/>
			</main>
			<Footer/>
		</>
	)
}