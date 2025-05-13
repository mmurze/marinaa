import Seo from "helpers/Seo";
import ChoMain from "layouts/Cho/ChoMain";
import ChoFuture from "layouts/Cho/ChoFuture";
import ChoServices from "layouts/Cho/ChoServices";
import ChoCombined from "layouts/Cho/ChoCombined";
import ChoDistribution from "layouts/Cho/ChoDistribution";
import ChoDistributionContent from "layouts/Cho/ChoDistributionContent";
import ChoTeam from "layouts/Cho/ChoTeam";
import ChoTradedOn from "layouts/Cho/ChoTradedOn";
import ChoDao from "layouts/Cho/ChoDao";
import ChoBurn from "layouts/Cho/ChoBurn";
import ChoTeamedWithUs from "layouts/Cho/ChoTeamedWithUs";
import ChoSwap from "layouts/Cho/ChoSwap";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Cho(){
	const {locale} = useRouter()
	const t = require(`locale/page-cho/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/cho.jpg"
			/>
			<Header/>
			<main>
				<ChoMain t={t.main}/>
				<ChoFuture t={t.future}/>
				{/*<ChoSwap/>*/}
				<ChoTradedOn t={t.tradedOn}/>
				<ChoServices t={t.services}/>
				<ChoDao t={t.dao}/>
				<ChoCombined t={t.combined}/>
				<ChoBurn t={t.burn}/>
				{/*<ChoSales/>*/}
				<ChoDistribution t={t.distribution}/>
				<ChoDistributionContent t={t.distributionContent}/>
				<ChoTeamedWithUs t={t.teamedWithUs}/>
				{/*<ChoTradedDex/>*/}
				{/*<ChoTradedCex/>*/}
				<ChoTeam t={t.team}/>
				{/*<ChoExperience/>*/}
			</main>
			<Footer/>
		</>
	)
}
