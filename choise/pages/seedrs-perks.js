import Seo from "helpers/Seo";
import SeedrsPerksTables from "layouts/SeedrsPerks/SeedrsPerksTables";
import SeedrsPerksDescription from "layouts/SeedrsPerks/SeedrsPerksDescription";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function SeedrsPerks(){
	const {locale} = useRouter()
	const t = require(`locale/page-seedrs-perks/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
			/>
			<Header/>
			<main>
				<SeedrsPerksTables t={t.tables}/>
				<SeedrsPerksDescription t={t.description}/>
			</main>
			<Footer/>
		</>
	)
}