import ServicePageWrapper from "components/ServicePageWrapper";
import Seo from "helpers/Seo";
import {useRouter} from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Success(){
	const {locale} = useRouter()
	const {bonus_success} = require(`locale/system-pages/${locale}.json`)
	return (
		<>
			<Seo
				title={bonus_success.seo_title}
				description={bonus_success.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ServicePageWrapper
					title={bonus_success.title}
					description={bonus_success.description}
					image="/pic/service/bonus-success.png"
				/>
			</main>
			<Footer/>
		</>
	)
}