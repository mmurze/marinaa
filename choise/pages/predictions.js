import Seo from "helpers/Seo";
import PredictionsMain from "layouts/Predictions/PredictionsMain";
import PredictionsList from "layouts/Predictions/PredictionsList";
import PredictionsHowItWorks from "layouts/Predictions/PredictionsHowItWorks";
import PredictionsProfit from "layouts/Predictions/PredictionsProfit";
import PredictionsHowToUse from "layouts/Predictions/PredictionsHowToUse";
import PredictionsPlan from "layouts/Predictions/PredictionsPlan";
import LearnAboutCrypto from "layouts/LearnAboutCrypto";
import ChoiseProducts from "layouts/ChoiseProducts";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Predictions(){
	const {locale} = useRouter()
	const t = require(`locale/page-predictions/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/predictions.jpg"
			/>
			<Header/>
			<main>
				<PredictionsMain t={t.main}/>
				<PredictionsList t={t.list}/>
				<PredictionsHowItWorks t={t.how_works}/>
				<PredictionsProfit t={t.profit}/>
				<PredictionsHowToUse t={t.how_to_use}/>
				<PredictionsPlan t={t.plan}/>
				<LearnAboutCrypto t={t.learn_about_crypto}/>
				<ChoiseProducts/>
			</main>
			<Footer/>
		</>
	)
}