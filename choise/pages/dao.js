import Seo from "helpers/Seo";
import DaoMain from "layouts/Dao/DaoMain";
import DaoInformation from "layouts/Dao/DaoInformation";
import DaoBanner from "layouts/Dao/DaoBanner";
import ChoiseProducts from "layouts/ChoiseProducts";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Dao(){
	const {locale} = useRouter()
	const t = require(`locale/page-dao/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/dao.jpg"
			/>
			<Header/>
			<main>
				<DaoMain t={t.main}/>
				<DaoInformation t={t.information}/>
				<DaoBanner t={t.banner}/>
				<ChoiseProducts/>
			</main>
			<Footer/>
		</>
	)
}