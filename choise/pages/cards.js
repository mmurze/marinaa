import Seo from "helpers/Seo";
import CardsMain from "layouts/Cards/CardsMain";
import CardsLists from "layouts/Cards/CardsLists";
import CardsBenefits from "layouts/Cards/CardsBenefits";
import CardsPlasticCard from "layouts/Cards/CardsPlasticCard";
import CardsBanner from "layouts/Cards/CardsBanner";
import CardsSafe from "layouts/Cards/CardsSafe";
import CardsDiego from "layouts/Cards/CardsDiego";
import CardsSteps from "layouts/Cards/CardsSteps";
import ChoiseProducts from "layouts/ChoiseProducts";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Cards(){
	const {locale} = useRouter()
	const t = require(`locale/page-cards/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/cards.jpg"
			/>
			<Header/>
			<main>
				<CardsMain t={t.main}/>
				<CardsLists t={t.lists}/>
				<CardsBenefits t={t.benefits}/>
				<CardsPlasticCard t={t.plasticCard}/>
				<CardsBanner t={t.banner}/>
				<CardsSafe t={t.safe}/>
				<CardsDiego t={t.diego}/>
				<CardsSteps t={t.steps}/>
				<ChoiseProducts/>
			</main>
			<Footer/>
		</>
	)
}